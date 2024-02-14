const Post = require("../../models/postModel");

const newPost = (data) => {
  return new Promise(async (resolve, reject) => {
    const new_Post = new Post({
      userId: data.userId,
      avatar: data.avatar,
      name: data.name,
      image: data.image,
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

module.exports = {
  getPosts,
  newPost,
  updateLike,
};
