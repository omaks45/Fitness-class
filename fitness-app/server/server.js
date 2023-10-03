const express = require('express');
   const db = require('./db');
   const authRouter = require('./auth');
   const sendNotification = require('./mailer');

   const app = express();
   const PORT = 3000;

   // Connect to MongoDB
   db.on('error', console.error.bind(console, 'MongoDB connection error:'));
   
   // Use the authentication router
   app.use('/api/auth', authRouter);

   // Example of sending email notification on user registration
   app.post('/api/users', (req, res) => {
     // Save user details to MongoDB using Mongoose
     // ...
     // Send email notification to user
     sendNotification(user.email, 'You are Welcome to our Fitness Training', 'Thank you for joining our fitness training class!');
     res.json({ message: 'User registered and email notification sent.' });
   });

   // Start the server
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
