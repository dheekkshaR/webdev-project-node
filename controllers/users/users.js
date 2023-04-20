/*
export default[
    {"_id":{"$oid":"643a1378dd1b7f17ddb0b2c6"},
        "username": "alice",
        "password":"aaa",
        "type": "USER" ,
        "email":"alice@gmail.com",
        "phone": "1234567890",
        "address":"54",
        "age":"21",
        "gender":"F",
        "tagline":"I am alice!!",
        "profilePic": "",
        "DOB":"",
        "bio":"A paragraph about yourself",
        "favouriteGenre":"",
        "playlist":{}
    }
]*/

import mongoose from "mongoose";

const schema = mongoose.Schema(
    {

        username: {type: String, unique: true, required: true},
        password: {type: String, required: true},
        firstName:String,
        lastName:String,
        type: {type:String, enum: ['USER', 'ADMIN', 'PROVIDER'] },
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