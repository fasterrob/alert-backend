const Auth = require("../../models/authModel");

const createNewUser = (user) => {
  console.log(user);
  return new Promise(async (resolve, reject) => {
    const create_User = new Auth({
      email: user.email,
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname,
    });
    create_User
      .save()
      .then(() => {
        resolve(create_User);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getUser = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = { email: req.email, password: req.password };
      const user = await Auth.findOne(data);
      if (user === "null") {
        resolve(404);
      }
      resolve(user);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await Auth.find();
      if (users === null) {
        reject(404);
      }
      resolve(users);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
const removeUser = (id) => {
  return new Promise(async (reslove, reject) => {
    try {
      const user = await Auth.deleteOne({ _id: id });
      reslove(user);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = {
  createNewUser,
  getUser,
  getUsers,
  removeUser,
};
