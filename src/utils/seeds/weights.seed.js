const mongoose = require("mongoose");
const connectDb = require("../db");
const Weight = require('../../api/weights/weights.model')

const weights = [
    {
        weight: 70
    },
    {
        weight: 56
    },
    {
        weight: 45
    },
    {
        weight: 89
    },
    {
        weight: 120
    },
    {
        weight: 105
    },
    {
        weight: 83
    },
    {
        weight: 72
    },
]

connectDb()
  .then(async () => {
    await Weight.collection.drop();
    console.log("Collection weights deleted correctly ");
  })
  .catch((error) => console.log("Could not delete weights" + error))
  .then(async () => {
    await Weight.create(weights);
    console.log("Weights added correctly ");
  })
  .catch((error) => console.log("Could not add data " + error))
  .finally(() => mongoose.disconnect());