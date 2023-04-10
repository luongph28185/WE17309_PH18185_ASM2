import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { getAllProduct, getProductId, addProduct, updateProduct, deleteProduct, signin, signup } from './api/product'
import { getAllCategori, deleteCategori, addCategori, updateCategori } from './api/categori';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import ProductManagement from './pages/admin/ProductManagement';
import DashBoard from './pages/admin/DashBoard';
import AddProduct from './pages/admin/AddProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';
import Signin from './pages/admin/Signin';
import Signup from './pages/admin/Signup';
import ListDm from './pages/admin/ListDm';
import AddCategori from './pages/admin/AddCategori';
import UpdateCategori from './pages/admin/UpdateCategori';
import { Navigate } from 'react-router-dom';
import AddtoCart from './pages/Addtocart';



import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { message } from 'antd';
interface Iproduct {
  id: number,
  name: string,
  price: number,

}

function App() {
  const navigate = useNavigate()
  //products
  const [products, setProduct] = useState<Iproduct[]>([])
  useEffect(()=>{
    getAllProduct().then(({data})=>setProduct(data))
  },[])
  const onHandleRemove  = (id:number) => {
    deleteProduct(id).then(()=>setProduct(products.filter(product => product.id !== id)))
  }
  const onHandleAdd = (product:Iproduct) => {
    addProduct(product)
    window.confirm("thêm san phẩm thành công !!");
    navigate('/admin/products')
    location.reload()
  }
  const onHandelUpdate = (product: Iproduct) => {
    updateProduct(product).then(() => setProduct(products.map(item => item.id === product.id ? product : item)))
  }
  //categories
  const [categories, setCategori] = useState([])
  useEffect(()=>{
    getAllCategori().then(({data})=>setCategori(data))
  },[])

  const onRemoveCategori = (id) => {
    deleteCategori(id).then(()=>setCategori(categories.filter(categori => categori.id !== id)))
  }

  const onAddCategori = (categori:Iproduct) => {
    addCategori(categori).then(()=>setCategori([...categories, categori]))
    window.confirm("thêm Danh mục thành công !!");
    navigate("/admin/categories")
    location.reload()
  }

  const onupdateCategori = (categori: Iproduct) => {
    updateCategori(categori).then(() => setCategori(categories.map(item => item.id === categori.id ? categori : item)))
  }
  //users
  const onHandleSignup = async (data_user: any) => {
    try {
      await signup(data_user);
      message.info("dang ky thanh cong");
      navigate('/signin')
    } catch (error) {
      console.log(error);
    }
  }

  const onHandleSignin = async (data_user: any) => {
   try {
    const {data} = await signin(data_user)
  localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
    alert('Login successfully!')
    navigate('/admin/products')
   } catch (error) {
    alert('Your account or password is incorrect ?')
   }
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove}/>}/>
          <Route path='/products/:id' element={<ProductDetail products={products}/>}/>
          <Route path='/products/addtocart/:id' element={<AddtoCart products={products}/>} />
          <Route path='/signup' element={<Signup  onAddSignup={onHandleSignup}/>} />
          <Route path='/signin' element={<Signin onSignin={onHandleSignin}/>} />
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<DashBoard/>}/>
        <Route path='products' element={<ProductManagement products={products} onRemove={onHandleRemove}/>}/>
        <Route path='/admin/products/add' element={<AddProduct onAdd={onHandleAdd} categories={categories} />}/>
        <Route path='/admin/products/update/:id' element={<UpdateProduct products={products} categories={categories} onUpdate={onHandelUpdate}/>}/>
        <Route path='categories' element={<ListDm categories={categories} onRemove={onRemoveCategori}/>}/>
        <Route path='/admin/categories/add' element={<AddCategori onAddCt={onAddCategori}/>}/>
        <Route path='/admin/categories/update/:id' element={<UpdateCategori categories={categories} onUpdateCt={onupdateCategori}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
