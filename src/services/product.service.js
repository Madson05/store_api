import productRepository from "../repositories/product.repository.js"

const createProduct = async (product) => {
  return await productRepository.insertProduct(product)
}

const getProducts = async () => {
  return await productRepository.getProducts()
}
const getProduct = async (id) => {
  return await productRepository.getProduct(id)
}
const deleteProduct = async (id) => {
  return await productRepository.deleteProduct(id)
}
const updateProduct = async (product) => {
  return await productRepository.updateProduct(product)
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct
}