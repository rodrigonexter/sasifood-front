import axios from "axios";

const baseUrl = "https://api-sasifood.herokuapp.com/";

/* Products */
function createProduct(product) {
   return axios.post(`${baseUrl}/products/`, product);
}

function readProducts() {
   return axios.get(`${baseUrl}/products?limit=60&page=0&sort=price&direction=desc`);
}

function updateProduct() {

}

function deleteProduct(productId) {
   return axios.delete(`${baseUrl}/products/${productId}`);
   
}

function findProductsByName(keyWord) {
   return axios.get(`${baseUrl}/products?limit=30&page=0&search=${keyWord}&sort=price&direction=desc`);
}

function filterProductsByCategorie(categorieId) {
   return axios.get(`${baseUrl}/products/categories/${categorieId}?limit=10&page=0&sort=price&direction=desc`);
}

/* Categories */
function readCategories() {
   return axios.get(`${baseUrl}/categories/`);
}



export {
   /* Products */ 
   readProducts, 
   createProduct, 
   updateProduct, 
   deleteProduct,
   findProductsByName,
   filterProductsByCategorie,

   /* categories */
   readCategories
};