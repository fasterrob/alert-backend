const Post = require("../../models/postModel");

const newPost = (req) => {
  let data = "";
  let fileName = "";
  if (typeof req.body.data === "string") {
    data = JSON.parse(req.body.data);
    fileName = req.file.filename;
  } else {
    data = req.body;
    fileName = "";
  }
  return new Promise(async (resolve, reject) => {
    const new_Post = new Post({
      userId: data.userId,
      avatar: data.avatar,
      name: data.name,
      image: fileName,
      content: data.content,
      comment: data.comment,
      lat: data.lat,
      lng: data.lng,
      like: 0,
    });
    new_Post
      .save()
      .then(() => {
        resolve(new_Post);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const updateLike = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const postId = req.body.postId;
      const data = await Post.updateOne({ _id: postId });
      resolve(data);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

const getPostsById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Post.find({ userId: id });
      resolve(data);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

const getPosts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Post.find().sort({ createdAt: -1 });
      if (data === null) {
        resolve(404);
      }
      resolve(data);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

const removePost = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Post.deleteOne({ _id: id });
      resolve(data);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = {
  getPosts,
  newPost,
  updateLike,
  getPostsById,
  removePost,
};
