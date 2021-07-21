const Chat = require("./../models/chatModel");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");

exports.saveChat = catchAsync(async (req, res, next) => {
  const { chatRoomId, userId, username, type, data } = req.body;

  const newChat = await Chat.create({
    chatRoomId,
    userId,
    username,
    type,
    data,
  });

  res.status(200).json({
    status: "success",
    data: newChat,
  });
});

exports.getAllChatsByRoomId = catchAsync(async (req, res, next) => {
  // db.test.find({"_id" : ObjectId("4ecc05e55dd98a436ddcc47c")})
  let query = Chat.find({ chatRoomId: req.params.id });
  // if (popOptions) query = query.populate(popOptions);
  const doc = await query;

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.getAllChats = factory.getAll(Chat);
