const Comment = require("../../models/commentModel");

const createComment = (req) => {
  return new Promise(async (resolve, reject) => {
    const create_Comment = new Comment({
      postId: req.postId,
      userId: req.userId,
      name: req.name,
      commentContent: req.commentContent,
    });
    create_Comment
      .save()
      .then(() => {
        resolve(create_Comment);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

const getComments = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await Comment.find({ postId: id });
      console.log(res);
      resolve(res);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

const deleteComment = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const commentId = req.id;
      const res = await Comment.deleteOne({ _id: commentId });
      resolve(res);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = {
  createComment,
  getComments,
  deleteComment,
};
