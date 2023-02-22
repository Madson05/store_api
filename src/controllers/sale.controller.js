import saleService from "../services/sale.service.js";

const createSale = async (req, res, next) => {
  try {
    const sale = req.body;

    // validações

    let validateString = "";
    if (!sale.value) validateString += "value, ";
    if (!sale.date) validateString += "date, ";
    if (!sale.client_id) validateString += "client_id, ";
    if (!sale.product_id) validateString += "product_id, ";
    if (validateString)
      throw new Error(
        `Campo(s) ${validateString}tem preechimento obrigatório.`
      );

    global.logger.info(`Created sale ${sale.id}`);

    res.status(201).send(await saleService.createSale(sale));
  } catch (error) {
    next(error);
  }
};
const getSales = async (req, res, next) => {
  try {
    
    global.logger.info(`get Sales`);
    res.send(await saleService.getSales());
  } catch (error) {
    next(error);
  }
};
const getSale = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Informe o Id do sale na rota.");
    
    global.logger.info(`GET Sale ${id}` );
    res.send(await saleService.getSale(id));
  } catch (error) {
    next(error);
  }
};
const deleteSale = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Informe o Id do salee na rota.");
    global.logger.info(`DELETE Sale ${id}` );
    res.send(await saleService.deleteSale(id));
  } catch (error) {
    next(error);
  }
};

const updateSale = async (req, res, next) => {
  try {
    const sale = req.body;

    // validações

    let validateString = "";
    if (!sale.id) validateString += "id, "
    if (!sale.value) validateString += "value, ";
    if (!sale.date) validateString += "date, ";
    if (!sale.client_id) validateString += "client_id, ";
    if (!sale.product_id) validateString += "product_id, ";
    if (validateString)
      throw new Error(
        `Campo(s) ${validateString}tem preechimento obrigatório.`
      );

    global.logger.info(`Updated sale ${sale.id}`);

    res.status(200).send(await saleService.updateSale(sale));
  } catch (error) {
    next(error);
  }
};

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale
};
