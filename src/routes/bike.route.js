module.exports = app => {
    const BikeController = require('../controllers/bike.controller');

    app.get('/bikes', BikeController.getBikes);

    app.post('/bikes', BikeController.addBike);
}