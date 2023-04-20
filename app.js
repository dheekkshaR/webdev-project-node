

import express from 'express';

import mongoose from "mongoose";

import UserController
    from "./controllers/users/users-controller.js";
import HelloController from "./controllers/hello-controller.js"
mongoose.connect("mongodb+srv://dheekksha20:dheekksha20@cluster0.dkacg8o.mongodb.net/?retryWrites=true&w=majority");

const app = express();

app.use(express.json());
HelloController(app);
UserController(app);
app.listen(4000);