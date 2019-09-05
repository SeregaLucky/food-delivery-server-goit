const singupFunctions = require("./singupFunctions");

/*
 * CONTROLLERS
 */
const postNewUser = async (req, res) => {
  const newUser = await singupFunctions.postNewUser(req.body);

  res.status(201).json(newUser);
};

/*
 * EXPORTS
 */
module.exports = {
  postNewUser
};
