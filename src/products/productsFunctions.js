const fs = require("fs");
const utils = require("util");
const path = require("path");

const readFile = utils.promisify(fs.readFile);

const pathDb = path.resolve(__dirname, "../", "db/", "all-products.json");

/*
 * METODS
 */
const getAllProduts = async () => {
  const readAllProduts = await readFile(pathDb);
  const parseAllProduts = JSON.parse(readAllProduts);

  return parseAllProduts;
};

const getProdutById = async id => {
  const readAllProduts = await readFile(pathDb);
  const parseAllProduts = JSON.parse(readAllProduts);

  const needProduct = parseAllProduts.find(
    product => product.id === Number(id)
  );

  const successFindProduct = {
    status: "success",
    user: needProduct
  };

  return successFindProduct;
};

const productsByIds = async idsArray => {
  console.log(idsArray);
  const firstId = Number(idsArray[0]);
  const secondId = Number(idsArray[1]);
  const thirdId = Number(idsArray[2]);

  const readAllProduts = await readFile(pathDb);
  const parseAllProduts = JSON.parse(readAllProduts);

  const needProducts = parseAllProduts.filter(
    product =>
      product.id === firstId ||
      product.id === secondId ||
      product.id === thirdId
  );

  const successFindProducts = {
    status: "success",
    user: needProducts
  };

  return successFindProducts;
};

const productsByCategory = async category => {
  // console.log(category);

  const readAllProduts = await readFile(pathDb);
  const parseAllProduts = JSON.parse(readAllProduts);

  const needProducts = parseAllProduts.filter(
    // product => console.log(product.categories[0], category)
    product => category.includes(product.categories[0])
  );
  // console.log(needProducts);

  if (needProducts.length) {
    return (successFindProducts = {
      status: "success",
      user: needProducts
    });
  } else {
    return (notFindProducts = {
      status: "no products",
      user: []
    });
  }
};

/*
 * EXPORTS
 */
module.exports = {
  getAllProduts,
  getProdutById,
  productsByIds,
  productsByCategory
};
