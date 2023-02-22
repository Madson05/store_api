import saleRepository from "../repositories/sale.repository.js"
import supplierRepository from "../repositories/supplier.repository.js"

const createSale = async (sale) => {
  await supplierRepository.checkId(sale.supplier_id);
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
  await supplierRepository.checkId(sale.supplier_id)
  return await saleRepository.updateSale(sale);
  
}

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale
}