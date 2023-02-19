import clientService from "../services/client.service.js";


const createClient = async (req, res, next) => {
  try{
    const client = req.body;

    // validações

    let validateString = "";

    if(!client.name) validateString += "name, "
    if(!client.cpf) validateString += "cpf, "
    if(!client.phone) validateString += "phone, "
    if(!client.email) validateString += "email, "
    if(!client.address) validateString += "address, "
    if(validateString) throw new Error(`Campo(s) ${validateString}tem preechimento obrigatório.`)

    global.logger.info(`Created client ${client.name}`)

    res.status(201).send(await clientService.createClient(client))
  }catch(error){
    next(error)
  }

}


export default {
  createClient,

}