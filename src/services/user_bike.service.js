const UserBikeModel = require('../models/user_bike.model');

exports.addUserBike = async (userBike) => {
    return await UserBikeModel.create(userBike);
}