const User = require('../models/user')
const Contact = require('../models/contacts')
const Class = require('../models/class')
const PasswordReset = require('../models/reset_password')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const cron = require('node-cron')
const nodemailer = require('nodemailer')


//signup function
const signup = async (req, res) => {
  try {
    console.log('signup started')
    // Validate the data inputted by the user
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors.array()[0].msg });
    }

    // Destructure the user data from the request body
    const { name, email, password } = req.body;

    // Create a new user instance
    const user = new User({ name, email, password });

    // Save the user data to the database
    const data = await user.save();

    // Respond with a success message and the saved data
    res.json({ message: 'User registration successful', data });
  } catch (err) {
    // Handle any errors that occur during the registration process
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ err: 'An error occurred during user registration' });
  }
};

//authenticate a user
function authenticateUser(req, res, next) {
  const token = req.header('Authorization'); // Assuming the token is passed in the 'Authorization' header

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // Verify the token using your secret key
    req.user = { _id: decoded._id }; // Set the user on the request
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token is not valid' });
  }
}


//signin function

const signin = (req, res) => {

  const {email, password} = req.body;
  console.log('signin started', email, password)

  User.findOne({email})
    .then(user => {
      if (!user) {
        return res.status(400).json({
          error: "Email was not found"
        });
      }

      if (!user.authenticate(password)) {
        return res.status(400).json({
          error: "Email and password do not match"
        });
      }

      const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY);

      res.cookie('token', token, {expire: new Date() + 1 });

      const {_id, name, email} = user;

      return res.json({
        token,
        user: {
          _id,
          name,
          email
        }
      });
    })
    .catch(err => {
      console.error("error:", err)
      return res.status(500).json({
        error: "Internal server error"
      });
    });
};

//reset password function

const resetPassword = async function (email, token, newPassword) {
  try {
    const resetRecord = await this.findOne({
      email,
      token,
      expiration: { $gt: new Date() }, // Check if the token is not expired
    });

    if (!resetRecord) {
      throw new Error('Invalid or expired reset token');
    }

    // Update the user's password
    const user = await PasswordReset.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    // Update the user's password
    user.password = newPassword;
    await user.save();

    // Remove the reset record from the PasswordReset collection
    await this.deleteOne({ email, token });

    return res.json({ message: 'Password reset successfully' });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal server error'
    })
  }
};


//signout page function

const signout = async (req, res) => {
  try {
    // Clear the token cookie
    res.clearCookie('token');

    // Send a JSON response indicating successful sign-out
    return res.json({
      message: "User signed out successfully"
    });
  } catch (error) {
    // Handle any errors that may occur during sign-out
    return res.status(500).json({
      error: "Internal server error"
    });
  }
};


//contact page functions
const contacts = async (req, res) => {
  try {
    const user = new Contact(req.body);
    console.log('contacts started')
    const data = await user.save();

    res.json({
      message: 'successful',
      data
    });
  } catch(err) {
    console.error("error:", err)
    return res.status(500).json({
      error: 'Internal server error'
    })
  }
};


// Define the "Book Class" function
/*
const bookClass = async (req, res) => {
  try {
    // Extract user ID from the request object
    const userId = req.user._id; 

    // Validate the data inputted by the user
    const { classType, status, phone, level } = req.body;
    console.log('bookClass started')

    // Create a new class instance
    const newClass = new Class({
      classType,
      status,
      phone,
      level,
      user: userId, // Associate the class with the logged-in user
    });

    // Save the class data to the database
    const savedClass = await newClass.save();

    // Send a success response
    res.status(201).json({ message: 'Class registration successful', data: savedClass });

    // After saving the class, schedule an email reminder
    sendClassReminders();
  } catch (err) {
    // Handle any errors that occur during class registration
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ err: 'An error occurred during class registration' });
  }
};
*/

const bookClass = async (req, res) => {
  try {
    // Extract user ID from the request object
    const userId = req.user._id; 

    // Validate the data inputted by the user
    const { classType, status, phone, level } = req.body;

    // Perform manual validation checks
    if (!isValidClassType(classType)) {
      return res.status(400).json({ message: 'Invalid class type' });
    }

    if (!isValidStatus(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({ message: 'Invalid phone number format' });
    }

    if (!isValidLevel(level)) {
      return res.status(400).json({ message: 'Invalid level' });
    }

    // Create a new class instance
    const newClass = new Class({
      classType,
      status,
      phone,
      level,
      user: userId, // Associate the class with the logged-in user
    });

    // Save the class data to the database
    const savedClass = await newClass.save();

    // Send a success response
    res.status(201).json({ message: 'Class registration successful', data: savedClass });

    // After saving the class, schedule an email reminder
    sendClassReminders();
  } catch (err) {
    // Handle any errors that occur during class registration
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ err: 'An error occurred during class registration' });
  }
};

// Custom validation functions
function isValidClassType(classType) {
  const validClassTypes = ['YOGA', 'CHISEL_IT', 'ACTION_SPORTS', 'THE_RIDE', 'CARDIO_DANCE', 'ADVANCED_HIIT'];
  return validClassTypes.includes(classType);
}

function isValidStatus(status) {
  const validStatuses = ['scheduled', 'completed', 'canceled'];
  return validStatuses.includes(status);
}

function isValidPhone(phone) {
  // Implement your phone number validation logic here (e.g., regex)
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}

function isValidLevel(level) {
  const validLevels = ['Beginner', 'Intermediate', 'Advanced'];
  return validLevels.includes(level);
}


//scheduled function
// Function to send email reminders
async function sendClassReminders() {
  try {
    // Configure nodemailer for sending emails
    const transporter = nodemailer.createTransport({
      // Configure email service
      service: 'Gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.PASSWORD
      }
    });

    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const today = new Date().getDay();

    // Map class types to their respective schedule times
    const classSchedule = {
      YOGA: '09:00',
      CHISEL_IT: '17:00',
      THE_RIDE: '08:00',
      ACTION_SPORTS: '18:00',
      ADVANCED_HIIT: '07:00',
      CARDIO_DANCE: '07:00',
    };

    // Check if it's a weekday (Monday to Saturday)
    if (today >= 1 && today <= 6) {
      const classTime = classSchedule[Class.classType]; // Get the class time based on class type

      if (classTime) {
        // Find classes scheduled for the current day with the specified class type and status 'scheduled'
        const classes = await Class.find({
          classType: Class.classType,
          status: 'scheduled',
        }).populate('user');

        // Send email reminders for each class
        for (const cls of classes) {
          const user = cls.user;
          const userEmail = user.email;
          const subject = 'Class Reminder';
          const text = `Hello ${user.name}, your ${cls.classType} class is scheduled for today at ${classTime}.`;

          // Send the email
          await transporter.sendMail({
            from: process.env.MY_EMAIL,
            to: userEmail,
            subject: subject,
            text: text,
          });

          console.log(`Email sent to ${userEmail}`);
        }
      }
    }
  } catch (error) {
    console.error('Error sending email reminders:', error);
  }
}

// Schedule the reminder function to run daily at a specific time (e.g., 9:00 AM)
cron.schedule('0 9 * * 1-6', () => {
  sendClassReminders();
  console.log('Scheduled task executed.');
});


module.exports = { signup, signin, resetPassword, signout, contacts, bookClass, authenticateUser}