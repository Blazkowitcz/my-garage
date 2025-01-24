const mongoose = require('mongoose');
const mongoose_autopopulate = require('mongoose-autopopulate');
const UserModel = require('./user.model');
const BikeModel = require('./bike.model');

const UserBike = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UserModel,
        autopopulate: { select: '-__v' },
        required: true,
    },
    bike_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: BikeModel,
        autopopulate: { select: '-__v' },
        required: true,
    },
    licence: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false
    }
});
UserBike.plugin(mongoose_autopopulate);
module.exports = mongoose.model('user_bikes', UserBike);