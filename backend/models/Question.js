const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
  {
    userHandle: {
      type: String,
      // required: true,
    },
    userName: {
      type: String,
      // required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
    },
    answersCount: {
      type: Number,
    },
    likes: {
      type: [
        {
          userHandle: String,
        },
      ],
    },
    createdAt: {
      type: Date,
      required: true,
    },

    answers: {
      type: [
        {
          userHandle: String,
          userName: String,
          text: String,
          createdAt: Date,
        },
      ],
    },
  }
  // {
  //   timestamps: true,
  //
);

const Questions = mongoose.model("Questions", QuestionSchema);
module.exports = Questions;
