/** @format */

import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import validateNewUser from '../middleware/validateInput';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const { SECRET_TOKEN } = process.env;

const addUser = async (req, res, next) => {
  try {
    const { firstName, lastName, gender, email, password } = req.body;
    await validateNewUser.validateAsync(req.body);

    let emailExist = await User.findOne({ email: email });
    if (emailExist) {
      return res.status(401).json({
        message:
          'Email already exist, Please login or create a new account with a new email',
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const data = await User.create({
      firstName,
      lastName,
      gender,
      email,
      password: hashPassword,
    });
    const newUser_Created = {
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      email: data.email,
    };
    return res.status(201).json({
      newUser_Created,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const emailExist = await User.findOne({ email });
    if (!emailExist) {
      return res.status(401).json({
        message: 'Email does not exist, please create an account',
      });
    }
    let isPasswordExist = await bcrypt.compare(password, emailExist.password);
    if (!isPasswordExist) {
      return res.status(401).json({
        message: 'Password Not Correct',
      });
    }
    const data = {
      id: emailExist._id,
      email: emailExist.email,
      role: emailExist.role,
    };

    const token = await jwt.sign(data, SECRET_TOKEN, { expiresIn: '1h' });
    return res.status(200).json({
      message: 'User login successfully',
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export { addUser, userLogin };
