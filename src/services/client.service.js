import clientRepository from "../repositories/client.repository.js"

const createClient = async (client) => {
  return await clientRepository.insertClient(client)
}

const getClients = async () => {
  return await clientRepository.getClients()
}

export default {
  createClient,
  getClients
}