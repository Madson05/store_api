import productRepository from "../repositories/product.repository.js"
import supplierRepository from "../repositories/supplier.repository.js"

const createProduct = async (product) => {
  await productRepository.checkId(product.id);
  return await productRepository.insertProduct(product)
  
  
}

const getProducts = async () => {
  return await productRepository.getProducts()
}
const getProduct = async (id) => {
  await productRepository.checkId(id);
  return await productRepository.getProduct(id);
  
}
const deleteProduct = async (id) => {
  await productRepository.checkId(id);
  return await productRepository.deleteProduct(id)
}
const updateProduct = async (product) => {
  await productRepository.checkId(product.id);
  await supplierRepository.checkId(product.supplier_id)
  return await productRepository.updateProduct(product);
  
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct
}