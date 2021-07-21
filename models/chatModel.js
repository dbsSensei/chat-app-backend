const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  chatRoomId: {
    type: String,
    unique:true,
    required: [true, "Please tell us your name!"],
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Chat must belong to a User!"],
  },
  username: {
    type: String,
    required: [true, "Please tell us your username!"],
  },
  type: {
    type: String,
    required: [true, "Chat must have type!"],
  },
  data: {
    type: Object,
    required: [true, "Please add chat data!"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
