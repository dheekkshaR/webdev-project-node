import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

import UserController from "./controllers/users/users-controller.js";
import HelloController from "./controllers/hello-controller.js"
import { redisClient } from './src/axios/axios.client.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Middleware to check Redis client connection
app.use((req, res, next) => {
  if (redisClient.isOpen) {
    next();
  } else {
    res.status(503).send('Redis client not connected');
  }
});

UserController(app);
app.use("/", routes);

const port = process.env.PORT || 5004;
const server = http.createServer(app);

mongoose.connect("mongodb+srv://manjotmb20:manjot@cluster0.ksnnw0d.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("Mongodb connected");
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});
