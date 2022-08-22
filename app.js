/** @format */

import express from 'express';
// const mysql = require('mysql2');
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// use cors
app.use(cors());
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send({
    Home: 'Welcome To Todo List!',
  });
});



app.listen(port, () => {
  console.log(`TodoList is running on port ${port}`);
});
