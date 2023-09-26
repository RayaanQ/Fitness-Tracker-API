let User = require('../models/user');

const getAllUsers = async (req,res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
}

const createUser = async (req,res) =>{
    try {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save();
    res.status(201).json('User added!');
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
}


module.exports = {getAllUsers,createUser};