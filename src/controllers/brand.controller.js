const BrandService = require('../services/brand.service');

exports.getAllBrands = async (req, res) => {
    try{
        const brands = await BrandService.getBrands();
        res.status(200).json(brands);
    }catch(err){
        res.status(500).send(err.message);
    }
}

exports.addBrand = async (req, res) => {
    try{
        const brand = await BrandService.addBrand(req.body);
        res.status(200).json(brand);
    }catch(err){
        res.status(500).send(err.message);
    }
}