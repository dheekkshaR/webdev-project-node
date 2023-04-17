import mongoose from "mongoose";
import usersSchema from "./users.js";

const usersModel = mongoose.model('UserModel', usersSchema)

export default usersModel