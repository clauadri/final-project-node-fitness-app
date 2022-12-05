const express = require("express");
const router = express.Router();
const Stat = require('./stats.model')

router.get('/', async (req, res) => {
    try {
        const allStats = await Stat.find()
        return res.status(200).json(allStats)
    } catch (error) {
        return res.status(500).json('Error getting users stats', error)
    }
});

router.post("/create", async (req, res) => {
    try {
      const stat = req.body;
      const newStat = new Stat(stat);
      console.log(newStat);
      const createdStat = await newStat.save();
      console.log(createdStat)
      return res.status(201).json(createdStat);
    } catch (error) {
      return "Error creating the stats", error;
    }
});

module.exports = router;