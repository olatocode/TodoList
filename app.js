/** @format */

import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use cors
app.use(cors());
import userRouter from './src/routes/user.route';
import noteRouter from './src/routes/note.route';

import connect_mongoDB from './src/database/mongodb';
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send({
    Home: 'Welcome To Todo List!',
  });
});

app.use('/api/v1', userRouter);
app.use('/api/v1', noteRouter);

connect_mongoDB;

app.listen(port, () => {
  console.log(`TodoList is running on port ${port}`);
});
