const { Router } = require("express");
const router = Router();
const { creatNewOrder } = require("./ordersControllers");

/*
 * ROUTER
 */
router.post("/", creatNewOrder);

/*
 * EXPORTS
 */
module.exports = router;
