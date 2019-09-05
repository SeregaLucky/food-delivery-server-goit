const fs = require("fs");
const path = require("path");
const utils = require("util");
const uuid = require("uuid");

const readFile = utils.promisify(fs.readFile);
const writeFile = utils.promisify(fs.writeFile);

const pathAllUsers = path.resolve(__dirname, "../", "db/", "all-users.json");

/*
 * FUNCTIONS
 */
const getAllUsers = async () => {
  const allUsers = await readFile(pathAllUsers);
  const parseAllUsers = JSON.parse(allUsers);

  return parseAllUsers;
};

const getUserById = async id => {
  const allUsers = await readFile(pathAllUsers);
  const parseAllUsers = JSON.parse(allUsers);

  const needUserById = parseAllUsers.list[id];

  return needUserById;
};

const postNewUser = async user => {
  try {
    const allUsers = await readFile(pathAllUsers);
    const parseAllUsers = JSON.parse(allUsers);

    const id = uuid();
    user.id = id;
    parseAllUsers.list[id] = user;

    await writeFile(pathAllUsers, JSON.stringify(parseAllUsers));

    const successNewUser = {
      status: "success",
      user: user
    };

    return successNewUser;
  } catch (err) {
    const successNewUser = {
      status: "break"
    };

    return successNewUser;
  }
};

/*
 * EXPORTS
 */
module.exports = {
  getAllUsers,
  getUserById,
  postNewUser
};
