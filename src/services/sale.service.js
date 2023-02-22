import saleRepository from "../repositories/sale.repository.js"
import clientRepository from "../repositories/client.repository.js"
import productRepository from "../repositories/product.repository.js"

const createSale = async (sale) => {
  await productRepository.checkId(sale.product_id)
  await clientRepository.checkId(sale.client_id);
  return await saleRepository.insertSale(sale)
}

const getSales = async () => {
  return await saleRepository.getSales()
}
const getSale = async (id) => {
  await saleRepository.checkId(id);
  return await saleRepository.getSale(id);
  
}
const deleteSale = async (id) => {
  await saleRepository.checkId(id);
  return await saleRepository.deleteSale(id)
}
const updateSale = async (sale) => {
  
  await saleRepository.checkId(sale.id);
  await clientRepository.checkId(sale.client_id)
  await productRepository.checkId(sale.product_id)
  return await saleRepository.updateSale(sale);
  
}

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale
}