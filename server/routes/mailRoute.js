const express = require('express');
const { sendEmail } = require('../controller/mailController.js');
const mailRoute = express.Router();

mailRoute.post('/send-email', sendEmail)

module.exports = mailRoute