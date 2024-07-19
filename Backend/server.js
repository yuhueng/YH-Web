require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const sendEmail = require("./email");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI is not defined in the .env file");
}
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Atlas connection established successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});
const User = mongoose.model("User", userSchema, "ContactUser");

async function validateEmail(email) {
  const apiKey = process.env.ABSTRACT_API_KEY;
  const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`;
  try {
    const response = await axios.get(url);
    return response.data.is_valid_format.value;
  } catch (error) {
    console.error("Error validating email:", error);
    return true;
  }
}

app.post("/submit", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const isValidEmail = await validateEmail(email);
    if (!isValidEmail) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const newUser = new User({ name, email, subject, message });
    const savedUser = await newUser.save();

    const emailContent = `
      Name: ${name}\n
      Email: ${email}\n
      Subject: ${subject}\n
      Message: ${message}
    `;

    sendEmail(process.env.USER, "New Contact Submission", emailContent);

    res.json(savedUser);
  } catch (err) {
    console.error("Error handling form submission:", err);
    res.status(400).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
