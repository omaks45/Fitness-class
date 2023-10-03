const nodemailer = require('nodemailer');

   // Create a transporter object
   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: 'your-email@gmail.com',
       pass: 'your-password',
     },
   });

   // Function to send email notifications
   function sendNotification(recipient, subject, text) {
     const mailOptions = {
       from: 'your-email@gmail.com',
       to: recipient,
       subject: subject,
       text: text,
     };

     transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
         console.error('Error sending email:', error);
       } else {
         console.log('Email sent:', info.response);
       }
     });
   }

   module.exports = sendNotification;
