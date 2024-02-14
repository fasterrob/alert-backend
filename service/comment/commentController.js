const service = require("./commentService");

const createComment = async (req, res) => {
  try {
    const comment = req.body;
    const data = await service.createComment(comment);
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(e);
  }
};

const getComments = async (req, res) => {
  try {
    const postId = req.query.id;
    const responseComment = await service.getComments(postId);
    res.status(200).send(responseComment);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteComment = async (req, res) => {
  try {
    const commentId = req.query.id;
    const responseComment = await service.deleteComment(commentId);
    res.status(202).send(responseComment);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createComment,
  getComments,
  deleteComment,
};
