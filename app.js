

import express from 'express';

import mongoose from "mongoose";
import cors from 'cors'
import UserController
    from "./controllers/users/users-controller.js";
import HelloController from "./controllers/hello-controller.js"
mongoose.connect("mongodb+srv://dheekksha20:dheekksha20@cluster0.dkacg8o.mongodb.net/?retryWrites=true&w=majority");

const app = express();

app.use(express.json());
app.use(cors())
// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
// })
HelloController(app);
UserController(app);
app.listen(4000);