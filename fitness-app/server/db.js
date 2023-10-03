const mongoose = require('mongoose');

   // Connect to MongoDB
   mongoose
     .connect('mongodb://localhost/test', { //To be replaced with the right url
       useNewUrlParser: true,
       useUnifiedTopology: true,
     })
     .then(() => {
       console.log('Connected to MongoDB');
     })
     .catch((err) => {
       console.error('Failed to connect to MongoDB', err);
     });

   module.exports = mongoose.connection;
