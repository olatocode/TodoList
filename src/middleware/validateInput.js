/** @format */

import Joi from 'joi';

const validateNewUser = Joi.object({
  firstName: Joi.string().min(3).max(15).required(),
  lastName: Joi.string().min(3).max(15).required(),
  gender: Joi.string().min(4).max(6).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  password: Joi.string()
    .min(8)
    .max(10)
    .pattern(new RegExp('^[a-zA-Z0-9]{8,10}$'))
    .required(),
});

export default validateNewUser;
