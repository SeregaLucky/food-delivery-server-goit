const produtsFunctions = require("./productsFunctions");

const getAllProduts = async (req, res) => {
  const keyFromQuery = Object.keys(req.query);

  // Если без дополнительного запроса
  if (!keyFromQuery.length) {
    const allProducts = await produtsFunctions.getAllProduts();

    res.status(200).json(allProducts);
  }

  // Если идет с дополнительным запросом, например: ?ids='<id>, <id>,<id>'
  if (req.query.ids) {
    console.log(req.query);
    const productsByIds = await produtsFunctions.productsByIds(req.query.ids);

    res.status(200).json(productsByIds);
  }

  // Если идет с дополнительным запросом, например: /?category=drinks
  if (req.query.category) {
    const productsByCategory = await produtsFunctions.productsByCategory(
      req.query.category
    );

    res.status(200).json(productsByCategory);
  }
};

const getProdutById = async (req, res) => {
  const needProduct = await produtsFunctions.getProdutById(req.params.id);

  res.status(200).json(needProduct);
};

module.exports = {
  getAllProduts,
  getProdutById
};
