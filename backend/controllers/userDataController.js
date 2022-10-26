import UserData from "../models/Usuario.js";

const postUserData = (req, res) => {
    userdata = UserData(req.body)
    .save((err, userdata) => {
        res.status(201).json(userdata);
    });
};

const userController = {
    postUserData
};

export default userController;