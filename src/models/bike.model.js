const mongoose = require('mongoose');
const mongoose_autopopulate = require('mongoose-autopopulate');
const BrandModel = require('./brand.model');

const Bike = mongoose.Schema({
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: BrandModel,
        autopopulate: { select: '-__v' },
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    power: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});
Bike.plugin(mongoose_autopopulate);
module.exports = mongoose.model('bikes', Bike);