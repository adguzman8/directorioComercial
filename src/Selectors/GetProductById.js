import {ProductData} from '../data/productData'

export const GetProductById = (id) =>{
    return ProductData.filter(producto => producto.id === id );
}