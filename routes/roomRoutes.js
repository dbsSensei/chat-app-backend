const express = require("express");

const authController = require("../controllers/authController");
const roomController = require("../controllers/roomController");

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.post("/createRoom", roomController.createRoom);

router.route("/").get(roomController.getAllRooms);
// router.route("/:id").get(roomController.getAllRooms);

module.exports = router;
