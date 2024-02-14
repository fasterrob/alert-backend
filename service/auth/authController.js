const service = require("./authService");

const createUser = async (req, res) => {
  const newUser = req.body;
  try {
    const data = await service.createNewUser(newUser);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getUser = async (req, res) => {
  const user = req.body;

  try {
    const authenticated = await service.getUser(user);
    if (authenticated === null) {
      res.sendStatus(404);
      return;
    }
    res.status(200).send(authenticated);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await service.getUsers();
    if (users === null) {
      res.sendStatus(404);
      return;
    }
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
};
