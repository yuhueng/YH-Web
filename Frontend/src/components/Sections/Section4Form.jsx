import "./Section4Form.css";
import React from 'react';
import { useForm, Controller } from "react-hook-form";


const Section4Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  });

  const onSubmit = data => console.log(data);
  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="text-tan2">Full Name</label>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input className="forminput" type="text" {...field} placeholder="Full Name" />}
        />
      </div>

      <div className="form-group">
        <label className="text-tan2">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input type="email" className="forminput" {...field} placeholder="Email" />}
        />
      </div>

      <div className="form-group">
        <label className="text-tan2">Subject</label>
        <Controller
          name="subject"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input type="text" className="forminput" {...field} placeholder="Subject" />}
        />
      </div>

      <div className="form-group">
        <label className="text-tan2">Message</label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => <textarea className="forminput" rows="3" {...field} placeholder="Message" />}
        />
      </div>

      <div className="form-group col">
        <button className="form-button" type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default Section4Form;
