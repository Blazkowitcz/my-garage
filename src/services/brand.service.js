const BrandModel = require('../models/brand.model');

exports.getBrands = async () => {
    return await BrandModel.find();
}

exports.addBrand = async (brand) => {
    return await BrandModel.create(brand);
}