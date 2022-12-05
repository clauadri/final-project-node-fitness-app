const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weightsSchema = new Schema(
    {
        weight: {type: Number, required: true},
    },
    {
        timestamps: true,   
    }
);

const Weight = mongoose.model('weights', weightsSchema);

module.exports = Weight;