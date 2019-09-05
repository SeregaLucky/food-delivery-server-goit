const ordersFunctions = require("./ordersFunctions");

/*
 * CONTROLLERS
 */
const creatNewOrder = async (req, res) => {
  const newOrder = await ordersFunctions.creatNewOrder(req.body);

  res.status(201).json(newOrder);
};

/*
 * EXPORTS
 */
module.exports = {
  creatNewOrder
};
