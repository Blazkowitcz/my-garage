module.exports = app => {
    const BrandController = require('../controllers/brand.controller');

    app.get('/brands', BrandController.getAllBrands);

    app.post('/brands', BrandController.addBrand);
}