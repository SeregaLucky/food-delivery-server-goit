const { Router } = require("express");
const router = Router();

const { getAllProduts, getProdutById } = require("./productsControllers");

/*
 * ROUTES
 */
router.get("/", getAllProduts);
router.get("/:id", getProdutById);

/*
 * EXPORTS
 */
module.exports = router;
