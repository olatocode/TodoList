/** @format */

import { mongoose, Schema } from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    require: [true, 'Fill in the required field'],
  },
  description: {
    type: String,
    require: [true, 'Fill in the required field'],
  },

  status: {
    type: String,
    enum: ['pending'],
  },
  User: { type: Schema.Types.ObjectId, ref: 'User' },
});

const noteModel = mongoose.model('Note', noteSchema);
export default noteModel;
