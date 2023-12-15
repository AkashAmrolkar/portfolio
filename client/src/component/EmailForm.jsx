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
      <div className='grid grid-cols-2 gap-4 mb-3'>
        <div className='field flex flex-col gap-2'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Eg. John Doe' onChange={handleChange} className=' border shadow-lg rounded-2xl h-12 px-3' required />
        </div>

        <div className='field flex flex-col gap-2'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='Eg. text@gmail.com' onChange={handleChange} className=' border shadow-lg rounded-2xl h-12 px-3' required />
        </div>
      </div>

      <div className='field flex flex-col gap-2 mb-3'>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="8" onChange={handleChange} className=' border shadow-lg rounded-2xl px-3 w-full' required></textarea>
      </div>

      <button type="submit" className='bg-black w-fit text-white px-8 py-3 font-medium border border-transparent rounded-2xl hover:bg-white hover:border hover:text-black hover:border-white hover:font-medium transition duration-200 ease-in-out]'>Submit</button>
    </form>

  );
};

export default EmailForm;
