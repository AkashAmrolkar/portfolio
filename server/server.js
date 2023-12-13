const express = require('express');
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true
}))

const PORT = process.env.PORT || 5001

app.get('/', (req, res)=>{
    res.send("Hello");
})
// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PASS,
    },
  });
  
  // Endpoint to send emails
  app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;
  
    const mailOptions = {
      from: process.env.GMAIL,
      to,
      subject,
      text,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  });
  
  


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})