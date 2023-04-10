import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import { getAllProduct, getProductId } from "../api/product";
import { getAllCategori } from "../api/categori";
import { Iproduct } from "../types/product";
const ProductTT = () => {
  const {id} = useParams()
  console.log(id);
  const[product, setProduct] = useState({});
  useEffect(()=>{
   getProductId(Number(id)).then((product)=>{
    setProduct(product.data);
   })
  },[])
  // console.log(product
  //   );
  
  // console.log(product.categoryId?._id);
  const[products, setProducts] = useState([]);
  useEffect(() => {
    getAllProduct().then(({data}) => setProducts(data))
  }, [])
  // console.log(products);
  // const[categories, setCategories] = useState([]);
  // useEffect(()=>{
  //  getAllCategori().then((categori)=>{
  //   setCategories(categori.data);
  //  })
  // },[])
  const productSimilars = products.filter((product : Iproduct) => product.id !== id  )
    //  pro.categoryId == product.categoryId
    const productSimilar = productSimilars.filter((cate) => cate.categoryId == product.categoryId)
  // console.log(productSimilars);
  // console.log(productSimilar);
  
  let maxProductSimilar = productSimilar.slice(0, 4)
  console.log(maxProductSimilar);
  const click = () => {
    // location.reload()
  }
  // document.getElementById("trang")?.addEventListener('click',click)
    return(
        <div>
          
           <div className="grid grid-cols-4 gap-32">
                    {maxProductSimilar.map((product: Iproduct) => {
                      console.log(product.id);
                      
                      return (
                        <div key={product.id}>
                            <div className="mb-3">
                            <Link to={`/products/${product.id}`} ><img id="trang" className="w-[250px] rounded-lg mb-2" src={product.image} alt="" /></Link>
                            <p className="no-underline text-black pt-2 text-[20px]" >{product.name}</p>
                            <h2 className="text-[20px] my-3">Giá: {product.price}đ</h2>
                            
                            <div className="space-x-4">
                            <button className="bg-black text-white px-5 py-2 rounded-lg">Buy</button>
                            <Link to={`/products/addtocart/${product.id}`}><button className="bg-black text-white px-3 py-2 rounded-lg">Add to cart</button></Link>
                            </div>
                            </div>
                            
                        </div>
                      )
                    })}
                        
                   
            </div>
            {/* <marquee
        className="mt-3 py-2 font-bold bg-black rounded-lg text-white"
        direction="right"
        behavior="Alternate"
      >
        gut bai si diu ơ gên
      </marquee> */}
        </div>
    )
}
export default ProductTT