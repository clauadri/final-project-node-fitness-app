const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseschema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        rest: {type: String, required: true},
        img: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

const Exercise = mongoose.model('exercises', exerciseschema);

module.exports = Exercise;