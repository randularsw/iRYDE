const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    // ownerId: {
    //   type: String,
    //   required: true,
    // },

  },
  {
    timestamps: true,
  }
);

const Questions = mongoose.model("Questions", QuestionSchema);
module.exports = Questions;
