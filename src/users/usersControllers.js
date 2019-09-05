const usersFunctions = require("./usersFunctions");

/*
 * CONTROLLERS
 */
const getAllUsers = async (req, res) => {
  const allUsers = await usersFunctions.getAllUsers();

  res.status(200).json(allUsers);
};

const getUserById = async (req, res) => {
  const userById = await usersFunctions.getUserById(req.params.id);

  res.status(200).json(userById);
};

const postNewUser = async (req, res) => {
  const newPostUser = await usersFunctions.postNewUser(req.body);

  res.status(201).json(newPostUser);
};
/*
 * EXPORTS
 */
module.exports = {
  getAllUsers,
  getUserById,
  postNewUser
};
