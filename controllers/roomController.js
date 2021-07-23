const Room = require("../models/roomModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.createRoom = catchAsync(async (req, res, next) => {
  const { name, userIds, topic } = req.body;

  const newRoom = await Room.create({
    name,
    userIds,
    topic,
  });

  res.status(200).json({
    status: "success",
    data: newRoom,
  });
});

exports.getAllRooms = factory.getAll(Room);
