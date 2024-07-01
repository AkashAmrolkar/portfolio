const nodemailer = require('nodemailer')
const sendEmail = async(req, res)=>{
    const {name, email, message} = req.body;
    console.log(name, email, message)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
      },
    });

    const userMailOptions = {
      from: process.env.FROM,
      to: email,
      subject: 'Thank you for contacting us',
      text: `Hello ${name},\n\nThank you for reaching out. We will get back to you as soon as possible.\n\nBest regards,\nAkash Amrolkar`,
    };

    const ownerMailOptions = {
      from: process.env.FROM,
      to: process.env.AUTH_EMAIL,
      subject: 'New contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(userMailOptions);
      await transporter.sendMail(ownerMailOptions);
      res.status(200).send('Form submitted successfully!');
    } catch (error) {
      console.error('Error sending emails:', error);
      res.status(500).send('Internal Server Error');
    }
}

module.exports = {sendEmail}