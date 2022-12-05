const mongoose = require("mongoose");
const connectDb = require("../db");
const Stat = require('../../api/stats/stats.model')

const stats = [
    {
        height: 170,
        weight: 70
    },
    {
        height: 190,
        weight: 56
    },
    {
        height: 170,
        weight: 45
    },
    {
        height: 130,
        weight: 89
    },
    {
        height: 156,
        weight: 120
    },
    {
        height: 170,
        weight: 105
    },
    {
        height: 173,
        weight: 83
    },
    {
        height: 170,
        weight: 72
    },
]

connectDb()
  .then(async () => {
    await Stat.collection.drop();
    console.log("Collection stats deleted correctly ");
  })
  .catch((error) => console.log("Could not delete stats " + error))
  .then(async () => {
    await Stat.create(stats);
    console.log("Stats added correctly ");
  })
  .catch((error) => console.log("Could not add stats data " + error))
  .finally(() => mongoose.disconnect());