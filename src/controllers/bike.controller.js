const BikeService = require('../services/bike.service');

exports.getBikes = async (req, res) => {
    try{
        const bikes = await BikeService.getAllBikes();
        res.status(200).json(bikes);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.addBike = async (req, res) => {
    try{
        const bike = await BikeService.addBike(req.body);
        res.status(200).json(bike);
    }catch(err){
        res.status(500).send(err.message);
    }
}