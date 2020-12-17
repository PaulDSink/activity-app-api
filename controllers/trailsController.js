const express = require("express");
const router = express.Router();

const TrailModel = require("../models").Trail;




  
// DELETE A TRAIL
router.delete("/:id", async (req, res) => {
await TrailModel.destroy({
    where: {
        id: req.params.id
    }
})
res.json({
    message: `Trail with id ${req.params.id} was deleted.`
})
})



module.exports = router;