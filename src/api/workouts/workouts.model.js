const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        name: {type: String, required: true},
        requirements: [{type: String, required: true}],
        day1: [{ type: mongoose.Types.ObjectId, ref: "exercises" }],
        day2: [{ type: mongoose.Types.ObjectId, ref: "exercises" }],
        day3: [{ type: mongoose.Types.ObjectId, ref: "exercises" }]
    },
    {
        timestamps: true,   
    }
);

const Workout = mongoose.model('workouts', workoutSchema);

module.exports = Workout;