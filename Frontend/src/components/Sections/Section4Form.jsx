import React from 'react';
import { useForm, Controller } from "react-hook-form";
import './Section4Form.css'; // Import the CSS file

const Section4Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      agree: false,
      occupation: ''
    }
  });

  const onSubmit = data => console.log(data);

  return (
    <form className="form-container bg-cornsilk" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Full Name</label>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input type="text" className="form-input" {...field} placeholder="Full Name" />}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input type="email" className="form-input" {...field} placeholder="Email" />}
        />
      </div>

      <div className="form-group">
        <label>Subject</label>
        <Controller
          name="subject"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input type="text" className="form-input" {...field} placeholder="Subject" />}
        />
      </div>

      <div className="form-group">
        <label>Message</label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => <textarea className="form-input" rows="3" {...field} placeholder="Message" />}
        />
      </div>

      <div className="form-group col">
        <button className="btn btn-lg btn-primary" type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default Section4Form;
