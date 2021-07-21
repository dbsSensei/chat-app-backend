const express = require("express");

const authController = require("../controllers/authController");
const chatController = require("../controllers/chatController");

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.post("/saveChat", chatController.saveChat);

router.route("/").get(chatController.getAllChats);
router.route("/:id").get(chatController.getAllChatsByRoomId);

module.exports = router;
