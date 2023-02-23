import productService from "../services/product.service.js";

const createProduct = async (req, res, next) => {
  try {
    const product = req.body;

    // validações

    let validateString = "";
    if (!product.name) validateString += "name, ";
    if (!product.description) validateString += "description, ";
    if (!product.value) validateString += "value, ";
    if (!product.stock) validateString += "stock, ";
    if (!product.supplier_id) validateString += "supplier_id, ";
    if (validateString)
      throw new Error(
        `Campo(s) ${validateString}tem preechimento obrigatório.`
      );

    global.logger.info(`Created product ${product.id}`);

    res.status(201).send(await productService.createProduct(product));
  } catch (error) {
    next(error);
  }
};
const getProducts = async (req, res, next) => {
  try {
    
    global.logger.info(`get Products`);
    res.send(await productService.getProducts());
  } catch (error) {
    next(error);
  }
};
const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Informe o Id do producte na rota.");
    
    global.logger.info(`GET Product ${id}` );
    res.send(await productService.getProduct(id));
  } catch (error) {
    next(error);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Informe o Id do producte na rota.");
    global.logger.info(`DELETE Product ${id}` );
    res.send(await productService.deleteProduct(id));
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = req.body;

    // validações

    let validateString = "";
    if (!product.product_id) validateString += "product_id, "
    if (!product.name) validateString += "name, ";
    if (!product.description) validateString += "description, ";
    if (!product.value) validateString += "value, ";
    if (!product.stock) validateString += "stock, ";
    if (!product.supplier_id) validateString += "supplier_id, ";
    if (validateString)
      throw new Error(
        `Campo(s) ${validateString}tem preechimento obrigatório.`
      );

    global.logger.info(`Updated product ${product.id}`);

    res.status(200).send(await productService.updateProduct(product));
  } catch (error) {
    next(error);
  }
};

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct
};
