import supplierService from "../services/supplier.service.js";

const createSupplier = async (req, res, next) => {
  try {
    const supplier = req.body;

    // validações

    let validateString = "";
    if (!supplier.name) validateString += "name, ";
    if (!supplier.cnpj) validateString += "cnpj, ";
    if (!supplier.phone) validateString += "phone, ";
    if (!supplier.email) validateString += "email, ";
    if (!supplier.address) validateString += "address, ";
    if (validateString)
      throw new Error(
        `Campo(s) ${validateString}tem preechimento obrigatório.`
      );

    global.logger.info(`Created supplier ${supplier.id}`);

    res.status(201).send(await supplierService.createSupplier(supplier));
  } catch (error) {
    next(error);
  }
};
const getSuppliers = async (req, res, next) => {
  try {
    
    global.logger.info(`get Suppliers`);
    res.send(await supplierService.getSuppliers());
  } catch (error) {
    next(error);
  }
};
const getSupplier = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Informe o Id do suppliere na rota.");
    
    global.logger.info(`GET Supplier ${id}` );
    res.send(await supplierService.getSupplier(id));
  } catch (error) {
    next(error);
  }
};
const deleteSupplier = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Informe o Id do suppliere na rota.");
    global.logger.info(`DELETE Supplier ${id}` );
    res.send(await supplierService.deleteSupplier(id));
  } catch (error) {
    next(error);
  }
};

const updateSupplier = async (req, res, next) => {
  try {
    const supplier = req.body;

    // validações

    let validateString = "";
    if (!supplier.supplier_id) validateString += "supplier_id, "
    if (!supplier.name) validateString += "name, ";
    if (!supplier.cnpj) validateString += "cnpj, ";
    if (!supplier.phone) validateString += "phone, ";
    if (!supplier.email) validateString += "email, ";
    if (!supplier.address) validateString += "address, ";
    if (validateString)
      throw new Error(
        `Campo(s) ${validateString}tem preechimento obrigatório.`
      );

    global.logger.info(`Updated supplier ${supplier.id}`);

    res.status(200).send(await supplierService.updateSupplier(supplier));
  } catch (error) {
    next(error);
  }
};

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier
};
