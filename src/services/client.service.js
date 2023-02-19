import clientRepository from "../repositories/client.repository.js"

const createClient = async (client) => {
  return await clientRepository.insertClient(client)
}

export default {
  createClient
}