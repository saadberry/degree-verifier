const mongoose = require('mongoose');

const users_schema1 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase:true
  },
  LastName: {
    type: String,
    required: false,
    lowercase:true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    default: 'male',
    required: false
  },
  cnic: {
    type: String,
    required: false,
    minlength: 13, 
    maxlength: 15,
    match: /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/  
  },
  email: {
    type: String,
    required: false,
    unique:true
  },
  PhoneNumber: {
    type: Number,
    required: false,
    unique:true
    
  },
  nationality: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 20
  },
  address: {
    type: String,
    required: false
  },
  rollnumber: {
    type: String,
    required: true,
     match: /^\d{2}[Kk]-\d{4}$/
  },
  campus: {
    type: String,
    required: false
  },
  Credentials: {
    type: Number,
    min: 0,
    max: 130
  },
  cgpa: {
    type: Number,
    min: 2.00,
    max: 4.00
  },
  degree: {
    type: String,
    required: true
  },
  batch: {
    type: Number,
    required: false,
    // validate: {
    //   validator: function(v) {
    //     const currentYear = new Date().getFullYear();
    //     const startYear = currentYear - 30;
    //     return (v >= startYear && v <= currentYear);
    //   },
    //   message: props => `Batch year must be between ${new Date().getFullYear() - 30} and ${new Date().getFullYear()}`
    // }
  },
  year: {
    type: Number
  },
  //url where the degree is uploaded to:
  url: {
    type: String,
    required: false
  },
  isVerified: {
    type: Boolean,
    default: false
  }
});

const users_collection1 = new mongoose.model('users_collection1', users_schema1);

module.exports = users_collection1;

