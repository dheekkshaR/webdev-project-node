
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";


import UserController
    from "./controllers/users/users-controller.js";
import HelloController from "./controllers/hello-controller.js"
//mongoose.connect("mongodb+srv://dheekksha20:dheekksha20@cluster0.dkacg8o.mongodb.net/?retryWrites=true&w=majority");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", routes);

HelloController(app);
UserController(app);

const port = process.env.PORT || 5004;

const server = http.createServer(app);

mongoose.connect("mongodb://localhost:27017/bingeit2").then(() => {
  console.log("Mongodb connected");
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});



