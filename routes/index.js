const express = require("express");
const router = express.Router();
const resController = require("../controllers/resController");
router.get("/:number", resController.index);
router.get("/data/:number", resController.data);
module.exports = router;
