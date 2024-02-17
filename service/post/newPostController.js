const service = require("./newPostService");

const newPost = async (req, res) => {
  try {
    const data = await service.newPost(req);
    console.log(data);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await service.getPosts();
    if (posts === null) {
      res.sendStatus(404);
      return;
    }
    res.status(200).send(posts);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const getPostsById = async (req, res) => {
  try {
    const id = req.query.id;
    const response = await service.getPostsById(id);
    res.status(200).send(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const removePost = async (req, res) => {
  try {
    const id = req.query.id;
    const response = await service.removePost(id);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  newPost,
  getPosts,
  getPostsById,
  removePost,
};
