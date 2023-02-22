import productRepository from "../repositories/product.repository.js"
import supplierRepository from "../repositories/supplier.repository.js"

const createProduct = async (product) => {
  if(await supplierRepository.getSupplier(product.supplier_id)){
    return await productRepository.insertProduct(product)
  }throw new Error("O supplier_id informado não é válido. Faça uma consulta na table suppliers e verifique os suppliers_id's existentes.")
  
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
  if(await supplierRepository.getSupplier(product.supplier_id)){
    return await productRepository.updateProduct(product);
  }else throw new Error("O supplier_id informado não é válido. Faça uma consulta na table suppliers e verifique os suppliers_id's existentes.")
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct
}