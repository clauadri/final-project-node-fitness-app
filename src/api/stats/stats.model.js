const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const statsSchema = new Schema(
    {
        height: {type: String, required: true},
        weight: {type: String, required: true},
    },
    {
        timestamps: true,   
    }
);

const Stat = mongoose.model('stats', statsSchema);

module.exports = Stat;