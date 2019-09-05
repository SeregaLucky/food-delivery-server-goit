const fs = require("fs");
const utils = require("util");
const path = require("path");
const uuid = require("uuid");

const readFile = utils.promisify(fs.readFile);
const writeFile = utils.promisify(fs.writeFile);

const pathAllProducts = path.resolve(
  __dirname,
  "../",
  "db/",
  "all-products.json"
);

/*
 * FUNCTIONS
 */
const creatNewOrder = async newOrder => {
  const productIdFirst = Number(newOrder.products[0]);
  const productIdSecond = Number(newOrder.products[1]);
  const productIdThird = Number(newOrder.products[2]);
  console.log(productIdFirst, productIdSecond, productIdThird);

  const allProducts = await readFile(pathAllProducts);
  const parseAllProducts = JSON.parse(allProducts);

  const findAllNeedProducts = parseAllProducts.filter(
    product =>
      product.id === productIdFirst ||
      product.id === productIdSecond ||
      product.id === productIdThird
  );
  // console.log(findAllNeedProducts);

  if (findAllNeedProducts.length === 3) {
    const idForNewOrder = uuid();

    const successOrders = {
      status: "success",
      order: {
        id: idForNewOrder,
        ...newOrder
      }
    };

    const pathForNewOrders = path.resolve(__dirname, "../", "user/", "orders");

    await writeFile(
      pathForNewOrders + `/${idForNewOrder}.json`,
      JSON.stringify(successOrders)
    );

    return successOrders;
  } else {
    const failedOrders = { status: "failed", order: null };

    return failedOrders;
  }
};

/*
 * EXPORTS
 */
module.exports = {
  creatNewOrder
};
