/** @format */

import mongoose from 'mongoose';

// connect to mongodb
const connect_mongoDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error.message);
    console.log(`Database Not Connected`);
  }
};

export default connect_mongoDB();
