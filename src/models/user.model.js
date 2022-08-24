/** @format */

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: true,
    require: [true, 'Fill in the required field'],
  },
  lastName: {
    type: String,
    require: [true, 'Fill in the required field'],
  },

  gender: {
    type: String,
    require: [true, 'Fill in the required field'],
  },

  email: {
    type: String,
    require: [true, 'Fill in the required field'],
  },
  password: {
    type: String,
    require: [true, 'Fill in the required field'],
  },
  role: {
    type: String,
    enum: ['User'],
    default: 'User',
  },
});

const userModel = mongoose.model('User', userSchema);
export default userModel;
