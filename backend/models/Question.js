const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
  {
    userHandle: {
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
      type: Number
    },

    commentCount: {
      type: Number
    },
    likes: {
      type: [{
        userHandle: String,
      }]
    },
    // ownerId: {
    //   type: String,
    //   required: true,
    // },

  },
  // {
  //   comments: [
  //     {
  //       userHandle: 'user',
  //       questionId: 'kdjsfgdksuufhgkdsufky',
  //       body: 'nice one mate!',
  //       createdAt: '2019-03-15T10:59:52.798Z',
  //       userImage: 'image/dsfsdkfghskdfgs/dgfdhfgdh'
  //     }
  //   ],
  // },
  // {
  //   timestamps: true,
  // },
  {
    createdAt: {
      type: Date,
      required: true,
    },
  }
);

const Questions = mongoose.model("Questions", QuestionSchema);
module.exports = Questions;
