import instance from "./istance";
interface Iproduct {
    id: number,
    name: string,
    price: number,
    description: String,
    image: String,
}
const getAllProduct = () => {
    return instance.get('/products');
}
const getProductId = (id:number) => {
    return instance.get('/products/' + id);
}

const addProduct = (product: Iproduct) => {
    return instance.post('/products', product)
}
const updateProduct = (product: Iproduct) => {
    return instance.put('/products/' + product.id, product)
}
const deleteProduct = (id: number) => {
    return instance.delete('/products/' + id)
}
const signup = (user:any) => {
    return instance.post('/signup', user);
}
const signin = (user:any) => {
    return instance.post('/signin', user);
}
export {getAllProduct, getProductId, updateProduct, addProduct, deleteProduct, signup, signin}