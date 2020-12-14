const express = require("express");
const router = express.Router();

const LocationModel = require("../models").Location;
const ActivityModel = require("../models").Activity;
const TrailModel = require("../models").Trail;
const ActivityLocation = require("../models").ActivityLocation;

// GET LOCATION
router.get("/:id", async (req, res) => {
    let location = await LocationModel.findByPk(req.params.id, {
      include: [
          {
              model: ActivityModel,
          },
          {
              model: TrailModel,
          }
      ]
    });
    res.json({ location });
  })
  
// GET ALL LOCATIONS
router.get("/", async (req, res) => {
    let locations = await LocationModel.findAll({
        include: [
            {
                model: ActivityModel,
            },
            {
                model: TrailModel,
            }
        ],
    });
    res.json({ locations })
});
  

// CREATE A NEW LOCATION
router.post("/", async (req, res) => {
    LocationModel.create(req.body).then((newLocation) => {
        res.json({ newLocation })
    })
});


// UPDATE A LOCATION
router.put("/:id", async (req, res) => {
    let location = await LocationModel.update(
        req.body, {
        where: {
            id: req.params.id
        },
        returning: true
        }
    );
    res.json({
        location
    });
});

  
// DELETE A LOCATION
router.delete("/:id", async (req, res) => {
await LocationModel.destroy({
    where: {
        id: req.params.id
    }
})
res.json({
    message: `Location with id ${req.params.id} was deleted.`
})
})


// CREATE NEW TRAIL FOR LOCATION
router.post("/:id/newtrail", async (req, res) => {
    req.body.locationId = req.params.id
    TrailModel.create(req.body).then((newTrail) => {
        res.json({ newTrail })
    })
})


// ADD LOCATION TO ACTIVITY
router.post("/:id/addactivity", async (req, res) => {
    let location = await LocationModel.findByPk(req.params.id);
    let activity = await ActivityModel.findByPk(req.body.id);
    if (location && activity) {
        await ActivityLocation.create({
            activityId: req.body.id,
            locationId: req.params.id
        }).then((newRecord) => {
            res.json({
                message: `Record added successfully.`
            });
        });
    } else {
        res.json({
            message: `Location with id ${req.params.id} or Activity with id ${req.body.id} not found`,
        });
    }
});


module.exports = router;