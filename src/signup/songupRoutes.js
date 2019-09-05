const { Router } = require("express");
const router = Router();

const { postNewUser } = require("./singupControllers");

/*
 * ROUTER
 */
router.post("/", postNewUser);

/*
 * EXPORTS
 */
module.exports = router;
