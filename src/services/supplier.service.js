import supplierRepository from "../repositories/supplier.repository.js"

const createSupplier = async (supplier) => {
  return await supplierRepository.insertSupplier(supplier)
}

const getSuppliers = async () => {
  return await supplierRepository.getSuppliers()
}
const getSupplier = async (id) => {
  return await supplierRepository.getSupplier(id)
}
const deleteSupplier = async (id) => {
  return await supplierRepository.deleteSupplier(id)
}
const updateSupplier = async (supplier) => {
  return await supplierRepository.updateSupplier(supplier)
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier
}