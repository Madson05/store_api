import supplierRepository from "../repositories/supplier.repository.js"

const createSupplier = async (supplier) => {
  return await supplierRepository.insertSupplier(supplier)
}

const getSuppliers = async () => {
  return await supplierRepository.getSuppliers()
}
const getSupplier = async (id) => {
  await supplierRepository.checkId(id)
  return await supplierRepository.getSupplier(id)
}
const deleteSupplier = async (id) => {
  await supplierRepository.checkId(id)
  return await supplierRepository.deleteSupplier(id)
}
const updateSupplier = async (supplier) => {
  await supplierRepository.checkId(supplier.id)
  return await supplierRepository.updateSupplier(supplier)
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier
}