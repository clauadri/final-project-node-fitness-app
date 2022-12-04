const express = require("express");
const router = express.Router();
const Weight = require('./weights.model')

router.get('/', async (req, res) => {
    try {
        const allWeights = await Weight.find()
        return res.status(200).json(allWeights)
    } catch (error) {
        return res.status(500).json('Error getting weights', error)
    }
});

router.post("/create", async (req, res) => {
    try {
      const weight = req.body;
      const newWeight = new Weight(weight);
      console.log(newWeight);
      const createdWeight = await newWeight.save();
      console.log(createdWeight)
      return res.status(201).json(createdWeight);
    } catch (error) {
      return "Error creating the weight data", error;
    }
});

module.exports = router;