const UserModel = require('../models/user.model');

exports.getUser = async (userId) => {
    return await UserModel.findById(userId);
}

exports.getUserByEmail = async (email) => {
    return await UserModel.findOne({ email });
}

exports.addUser = async (user) => {
    return await UserModel.create(user);
}