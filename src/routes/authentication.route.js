const AuthenticationController = require("../controllers/authentication.controller");
module.exports = app => {
    const AuthenticationController = require('../controllers/authentication.controller');

    app.post('/signup', AuthenticationController.signup);

    app.post('/signin', AuthenticationController.signin);
}