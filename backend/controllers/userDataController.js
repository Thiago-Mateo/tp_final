import UserData from "../models/Usuario";

const postUserData = (req, res) => {
    userdata = UserData(req.body)
    .save((err, userdata) => {
        res.status(201).json(userdata);
    });
};

