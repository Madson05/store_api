import clientService from "../services/client.service.js";

const createClient = async (req, res, next) => {
  try {
    const client = req.body;

    // validações

    let validateString = "";
    if (!client.name) validateString += "name, ";
    if (!client.cpf) validateString += "cpf, ";
    if (!client.phone) validateString += "phone, ";
    if (!client.email) validateString += "email, ";
    if (!client.address) validateString += "address, ";
    if (validateString)
      throw new Error(
        `Campo(s) ${validateString}tem preechimento obrigatório.`
      );

    global.logger.info(`Created client ${client.id}`);

    res.status(201).send(await clientService.createClient(client));
  } catch (error) {
    next(error);
  }
};
const getClients = async (req, res, next) => {
  try {
    
    global.logger.info(`get Clients`);
    res.send(await clientService.getClients());
  } catch (error) {
    next(error);
  }
};
const getClient = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Informe o Id do cliente na rota.");
    
    global.logger.info(`GET Client ${id}` );
    res.send(await clientService.getClient(id));
  } catch (error) {
    next(error);
  }
};
const deleteClient = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Informe o Id do cliente na rota.");
    lobal.logger.info(`DELETE Client ${id}` );
    res.send(await clientService.deleteClient(id));
  } catch (error) {
    next(error);
  }
};

const updateClient = async (req, res, next) => {
  try {
    const client = req.body;

    // validações

    let validateString = "";
    if (!client.client_id) validateString += "client_id, "
    if (!client.name) validateString += "name, ";
    if (!client.cpf) validateString += "cpf, ";
    if (!client.phone) validateString += "phone, ";
    if (!client.email) validateString += "email, ";
    if (!client.address) validateString += "address, ";
    if (validateString)
      throw new Error(
        `Campo(s) ${validateString}tem preechimento obrigatório.`
      );

    global.logger.info(`Updated client ${client.id}`);

    res.status(200).send(await clientService.updateClient(client));
  } catch (error) {
    next(error);
  }
};

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient
};
