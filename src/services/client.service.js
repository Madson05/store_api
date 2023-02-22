import clientRepository from "../repositories/client.repository.js"

const createClient = async (client) => {
  return await clientRepository.insertClient(client)
}

const getClients = async () => {
  return await clientRepository.getClients()
}
const getClient = async (id) => {
  await clientRepository.checkId(id)
  return await clientRepository.getClient(id)
}
const deleteClient = async (id) => {
  await clientRepository.checkId(id)
  return await clientRepository.deleteClient(id)
}
const updateClient = async (client) => {
  await clientRepository.checkId(client.id)
  return await clientRepository.updateClient(client)
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient
}