const BikeModel = require('../models/bike.model');

exports.getAllBikes = async () => {
    return await BikeModel.find();
}

exports.addBike = async (bike) => {
    return await BikeModel.create(bike);
}