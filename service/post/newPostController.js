const service = require("./newPostService");

const newPost = async (req, res) => {
  try {
    const body = req.body;
    const data = await service.newPost(body);
    console.log(data)
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

module.exports = {
  newPost,
  getPosts,
};
