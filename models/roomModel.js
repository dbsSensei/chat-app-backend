const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "Chat must have a name!"],
  },
  userIds: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  topic: {
    type: String,
    required: [true, "Chat must have a topic!"],
  },
  img: {
    type: String,
    default: "default.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Room = mongoose.model("Room", chatSchema);

module.exports = Room;
