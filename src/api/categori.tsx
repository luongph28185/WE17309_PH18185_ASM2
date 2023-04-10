import instance from "./istance";
interface Iproduct {
    id: number,
    name: string,
    price: number,
    description: String,
    image: String,
}
const getAllCategori = () => {
    return instance.get('/categories')
}
const getCategoriId = (id:number) => {
    return instance.get('/categories/' + id);
}
const deleteCategori = (id: number) => {
    return instance.delete('/categories/' +id)
}
const addCategori = (categori: Iproduct) => {
    return instance.post('/categories', categori);
}
const updateCategori = (categori: Iproduct) => {
    return instance.patch('/categories/' + categori.id, categori)
}
export {getAllCategori, deleteCategori, addCategori, updateCategori, getCategoriId}