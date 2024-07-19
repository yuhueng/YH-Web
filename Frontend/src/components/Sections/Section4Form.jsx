import "./Section4Form.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const Section4Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND,
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/submit", data);
      console.log("Form data submitted successfully:", response.data);
      alert("Message sent successfully!");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Invalid email address");
      } else {
        alert(
          "There was an error submitting the form. Please try again later."
        );
      }
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="form-label">Full Name</label>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              className="forminput"
              type="text"
              {...field}
              placeholder="Full Name"
            />
          )}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              type="email"
              className="forminput"
              {...field}
              placeholder="Email"
            />
          )}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Subject</label>
        <Controller
          name="subject"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              type="text"
              className="forminput"
              {...field}
              placeholder="Subject"
            />
          )}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Message</label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <textarea
              className="forminput"
              rows="3"
              {...field}
              placeholder="Message"
            />
          )}
        />
      </div>

      <div className="form-group col">
        <button className="form-button" type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Section4Form;
