require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const connectDB = require('./db/conn');

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use(cors());
app.use(express.json());

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URI);
      console.log("Connected to DB");
      app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    } catch (error) {
      console.log(error);
    }
};
  
start();