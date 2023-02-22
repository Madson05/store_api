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
  const product = await productRepository.getProduct(id)
  if(product) {
    return product;
  }
  throw new Error("Produto inexistente no banco de dados.")
}
const deleteProduct = async (id) => {
  return await productRepository.deleteProduct(id)
}
const updateProduct = async (product) => {
  await getProduct(product.id)
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