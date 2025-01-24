const UserBikeService = require('../services/user_bike.service');

exports.addUserBike = async (req, res) => {
    try{
        const userBike = await UserBikeService.addUserBike({
            user_id: req.user.id,
            bike_id: req.body.bikeId
        });
        res.status(200).json(userBike);
    }catch(err){

        res.status(500).send(err.message);
    }
}

exports.getUserBikes = async (req, res) => {
    try{
        console.log(req.user);
        res.status(200).json(true);
    }catch(err){
        res.status(500).send(err.message);
    }
}