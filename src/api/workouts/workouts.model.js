const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        name: {type: String, required: true},
        exercise: [{ type: mongoose.Types.ObjectId, ref: "exercises" }],
    },
    {
        timestamps: true,   
    }
);

const Workout = mongoose.model('workouts', workoutSchema);

module.exports = Workout;