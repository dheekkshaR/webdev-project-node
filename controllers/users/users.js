import mongoose from "mongoose";

const schema = mongoose.Schema(
    {

        username:  String,
        password: String,
        firstName:String,
        lastName:String,
        type: String,
        email: String,
        phone: String,
        address: Number,
        age: String,
        gender: String,
        tagline: String,
        profilePic: String,
        DOB: String,
        bio:String,
        favouriteGenre:String,
            playlist:Array,
    },
    { collection: "users" }
);



export default schema;
