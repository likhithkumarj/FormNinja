import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("connected", () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());

import userRoute from './routes/UserRoute.js'; 
import userDataRoute from './routes/UserDataRoute.js';
app.use("/api/users", userRoute);
app.use("/api/users/dashborad", userDataRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
