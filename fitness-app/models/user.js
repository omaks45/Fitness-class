// Import required modules
const mongoose = require("mongoose")
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true
  },
  lastname: {
    type: String,
    maxlength: 32,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  encry_password: {
    type: String,
    required: true
  },
  salt: String,
}, {timestamps: true})

// Define a virtual property for password
userSchema.virtual("password")
  .set(function(password) {
    this._password = password
    this.salt = uuidv1()
    this.encry_password = this.securePassword(password)
  })
  .get(function() {
    return this._password
  })

// Define methods for the user schema
userSchema.methods = {
  authenticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password
  },
  
  // Method to secure a password
  securePassword: function(plainpassword) {
    if(!plainpassword) return "";

    try {
      return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex")
    } catch (err) {
      return ""
    }
  }
}

// Export the user model
module.exports = mongoose.model("User", userSchema)
