module.exports = app => {
    const UserBikeController = require('../controllers/user_bike.controller');
    const AuthMiddleware = require('../middlewares/authentication.middleware');

    app.get('/userBikes', AuthMiddleware.checkToken, UserBikeController.getUserBikes);
    app.post('/userBikes', AuthMiddleware.checkToken ,UserBikeController.addUserBike);

}