import userModel from "./usersModel.js";

export const creatUser = (user) => userModel.create(user);

export const findUserByUsernamePassword = (username, password) =>
    userModel.find().findOne({ username: username, password: password });

//export const findUserByUsername = (username) =>
  //  userModel.find().findOne({ username: username });

export const findAllUsers = () => userModel.find();

export const deleteUser = (id) => userModel.deleteOne({ _id: id });

export const findUserById = (id) => userModel.find().findOne({ _id: id });

export const updateUser = (id, user) =>
    userModel.find().findOneAndUpdate({ _id: id }, { $set: user });

export const addMovie =  (id,playlistMovie) =>
{
    console.log("inside playlist service");
     userModel.findOneAndUpdate({_id:id},
        {$push: { playlist: playlistMovie}});
}

//create any type of user
//update for profile
//delete user if admin
//can see all users if admin
//login, just add to state- return true or false (invalid or valid)
//add playlist

//networks watch list- just for all uids in movies with tat provider - display


//2 schemas
//one for movies
//one for users

