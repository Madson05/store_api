import clientRepository from "../repositories/client.repository.js"

const createClient = async (client) => {
  return await clientRepository.insertClient(client)
}

const getClients = async () => {
  return await clientRepository.getClients()
}
const getClient = async (id) => {
  return await clientRepository.getClient(id)
}
const deleteClient = async (id) => {
  return await clientRepository.deleteClient(id)
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient
}