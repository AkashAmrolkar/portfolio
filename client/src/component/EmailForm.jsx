// Example React component making a POST request to the server
import { useState } from 'react';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const handleInputChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/send-email', {
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
    <form onSubmit={handleSubmit}>
      <label>
        To:
        <input
          type="email"
          name="to"
          value={emailData.to}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Subject:
        <input
          type="text"
          name="subject"
          value={emailData.subject}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="text"
          value={emailData.text}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
