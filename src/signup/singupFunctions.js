const fs = require("fs");
const path = require("path");
const utils = require("util");

const writeFile = utils.promisify(fs.writeFile);

const pathNewUser = path.resolve(__dirname, "../", "db/", "users/");

/*
 * FUNCTIONS
 */
const postNewUser = async user => {
  await writeFile(pathNewUser + `/${user.username}.json`, JSON.stringify(user));

  const successNewUser = {
    status: "success",
    user: user
  };

  return successNewUser;
};

/*
 * EXPORTS
 */
module.exports = {
  postNewUser
};
