const { Router } = require("express");
const router = Router();

const { getAllUsers, getUserById, postNewUser } = require("./usersControllers");

/*
 * ROUTER
 */
router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.post("/", postNewUser);

/*
 * EXPORTS
 */
module.exports = router;
