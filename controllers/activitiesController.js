const express = require("express");
const router = express.Router();

const ActivityModel = require("../models").Activity;
const LocationModel = require("../models").Location;

// GET ACTIVITY
router.get("/:id", async (req, res) => {
    let activity = await ActivityModel.findByPk(req.params.id, {
        include: LocationModel,
    });
    res.json({ activity })
})


// GET ALL ACTIVITIES
router.get("/", async (req, res) => {
    let activities = await ActivityModel.findAll({
        include: LocationModel,
    });
    res.json({ activities })
})


// CREATE AN ACTIVITY
router.post("/", async (req, res) => {
    ActivityModel.create(req.body).then((newActivity) => {
        res.json({ newActivity })
    })
});


// UPDATE AN ACTIVITY
router.put("/:id", async (req, res) => {
    let activity = await ActivityModel.update(
      req.body, {
        where: {
          id: req.params.id
        },
        returning: true
      }
    );
    res.json({ activity });
  });
  
  
  // DELETE AN ACTIVITY
  router.delete("/:id", async (req, res) => {
    await ActivityModel.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({
      message: `Activity with id ${req.params.id} was deleted.`
    })
  })
  
  
  module.exports = router;