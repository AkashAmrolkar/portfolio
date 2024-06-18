// Example React component making a POST request to the server
import { useState } from 'react';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //https://portfolio-s3jz.vercel.app
      const response = await fetch('https://portfolio-s3jz.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        console.error('Failed to send email:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <div className='block md:flex gap-5 mb-3'>
        <div className='field flex-1 flex flex-col gap-2'>
          <label className=' text-white text-lg font-medium' htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Eg. John Doe' onChange={handleChange} className=' border shadow-lg rounded-md text-white h-12 px-3  bg-[#161922]' required />
        </div>

        <div className='flex-1 field flex flex-col gap-2'>
          <label className=' text-white text-lg font-medium' htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='Eg. text@gmail.com' onChange={handleChange} className=' border shadow-lg rounded-md text-white h-12 px-3 bg-[#161922]' required />
        </div>
      </div>

      <div className='field flex flex-col gap-2 mb-3'>
        <label className=' text-white text-lg font-medium' htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="8" placeholder='Message' onChange={handleChange} className=' border shadow-lg rounded-md text-white p-3 w-full  bg-[#161922]' required></textarea>
      </div>

      <button type="submit" className='rounded-md bg-primary px-5 py-3 text-secondary font-semibold hover:text-secondary w-fit'>Submit</button>
    </form>

  );
};

export default EmailForm;
