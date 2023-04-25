import * as usersDao from "../users/userDao.js";


const UserController = (app) => {
    app.post("/api/users", createUser);
    app.get("/api/users/login/:username/:password", loginUser);
    app.get("/api/users", findAllUsers);
    app.get("/api/users/:id", findUserById);

    //tocheck not working idk why
    app.delete("/api/users/delete/:id", deleteUser);

    //error
    app.put("/api/users/update/:id", updateUser);
    //app.put("/api/update/users/addToPlaylist", addMovie);
    //app.put("/api/update/users/profile", profile);
};

const createUser = (req, res) => {
    usersDao.creatUser(req.body).then((createdUser) => res.json(createdUser));
};

const loginUser = async (req, res) => {
    try {
        const user = await usersDao.findUserByUsernamePassword(req.params.username, req.params.password);
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while trying to log in the user." });
    }
};


const findAllUsers = async(req, res) => {
    const users = await usersDao.findAllUsers()
    res.json(users)
    return
   // usersDao.findAllUsers().then((users) => res.json(users));
}

const deleteUser = async(req, res) => {
   const status= await usersDao.deleteUser(req.params.id);
    console.log(status);
   // res.sendStatus(200);
   res.json(status)
   // usersDao.deleteUser(req.params.id).then((status) => res.json(status));
}

// export const deleteUser = async (req,res) => {
//     const response = await axios.delete(`${USERS_API}/${req.params.id}`)
//     return response.data
// }

const findUserById = (req, res) =>
    usersDao
        .findUserById(req.params.id)
        .then((user) => res.json(user));

const updateUser = async (req, res) => {
    // const status= await usersDao
    //     .updateUser(req.params.id, req.body);
    // console.log(status);
    //     res.sendStatus(200);

    const existingUser = await usersDao.findUserById(req.params.id);
    if(existingUser)
    {
        const status= await usersDao.updateUser(req.params.id, req.body)
       res.sendStatus(200) ;
        console.log(status);
        //res.status(201).send({message:"Updated User",updatedUser:updatedUser});
    }
    else
        res.sendStatus(404);
};











const addMovie = (req,res) => {
    const idd= req.body.id;
    const movie= req.body.movie;

    const existingUser =  usersDao.findUserById(idd);
    if(existingUser)
    {
         usersDao.addMovie(idd,movie)
        res.status(201).send({message:"Added Movie"});
    }
    else
        res.send({message:"No User"});
};
const register = async (req, res) => {
    console.log("in register");
    const user = req.body;
    const existingUser = await usersDao.findUserById(user._id);
    if (existingUser) {
        res.send({ message: "Duplicate Email" });
        return;
    }
    const currentUser =  usersDao.creatUser(user);
    // req.session['currentUser'] = currentUser

    res.status(200).send({ message: "Success", userDetail: currentUser });
};

const login =  (req, res) => {
    const credentials = req.body;
    const existingUser =  usersDao.findUserByUsernamePassword(
        credentials.username,
        credentials.password
    );
    if (existingUser) {
        console.log("Inside Login : Existing user is :", existingUser)
        req.session['profile'] = existingUser;
        res.status(200).send({ message: "Logged In", userDetail: existingUser });
        return;
    } else
        res.send({
            message: "Username and Password combination is not valid!",
            userDetail: existingUser,
        });
};

const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
};



const profile = (req, res) => {
    console.log("The current user session is :", req.session)
    if (req.session["profile"]) {
        console.log("req.session[\"profile\"]")
        res.send(req.session["profile"]);
    } else {
        console.log("Inside the else. Request is :", req)
        res.sendStatus(403);
    }
};

export default UserController