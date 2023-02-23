import saleRepository from "../repositories/sale.repository.js"
import clientRepository from "../repositories/client.repository.js"
import productRepository from "../repositories/product.repository.js"

const createSale = async (sale) => {
  await clientRepository.checkId(sale.client_id);
  const product = await productRepository.getProduct(sale.product_id)
  if(!product) throw new Error("product_id inexistente")
  if(product.stock>0){
    console.log(product.product_id + "-" + product.stock)
    product.stock--;
    console.log(product.product_id + "-" + product.stock)
    await productRepository.updateProduct(product)
    return await saleRepository.insertSale(sale)
  }else{
    throw new Error("O produto informado não possui estoque.")
  }
  
}

const getSales = async () => {
  return await saleRepository.getSales()
}
const getSale = async (id) => {
  await saleRepository.checkId(id);
  return await saleRepository.getSale(id);
  
}
const deleteSale = async (id) => {

  const sale = await saleRepository.getSale(id)
  if(!sale) throw new Error("sale_id não existente")
  const product = await productRepository.getProduct(sale.product_id);
  product.stock++;
  await productRepository.updateProduct(product)
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