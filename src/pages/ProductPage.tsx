import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Iproduct, Iprops } from "../types/product";
// interface Iproduct {
//     id: number;
//     name: string;
//     price: number;
//     description: String,
//     image: String
//   }
//   interface Iprops {
//     products: Iproduct[];
//     onRemove: (id: number) => void;
//   }
const ProductPage = (props:Iprops) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData(props.products)
    },[props])

    let maxData = data.slice(0, 16)
 
    
  
    
    return (
        <div>
            <img className="w-[2000px]"  src="./src/assets/TTL.jpg" alt="" />
            <div className="bg-black h-[70px] mt-4">
                <ul className="flex space-x-10 -ml-6 pt-4">
                    <li><a className="text-white no-underline font-bold" href="">SHOPALL</a></li>
                    <li><a className="text-white no-underline font-bold" href="">OUTERWEAR</a></li>
                    <li><a className="text-white no-underline font-bold" href="">FOOTWEAR</a></li>
                    <li><a className="text-white no-underline font-bold" href="">SALE</a></li>
                    <li><a className="text-white no-underline font-bold" href="">RECRUITMENT</a></li>
                </ul>
            </div>
            
            {/* <marquee
        className="my-4 py-2 font-bold bg-black rounded-lg text-white"
        direction="right"
        behavior="Alternate"
      >
       Welcome to Tran Tien Luong shop 
      </marquee> */}
      <div className="my-10 text-[30px] text-center font-bold" >Sản phẩm Hot</div>
            <div className="grid grid-cols-4 gap-32">
            {
                maxData.map((product: Iproduct) => {
                    
                    
                    return (
                        <div key={product.id}>
                            <div className="mb-3">
                            <Link to={`/products/${product.id}`}><img className="w-[250px] rounded-lg mb-2" src={product.image} alt="" /></Link>
                            <Link className="no-underline text-black pt-2 text-[20px]" to={`/products/${product.id}`}><p>{product.name}</p></Link>
                            <h2 className="text-[20px] my-3">Giá: {product.price}đ</h2>
                            
                            <div className="space-x-4">
                            <button className="bg-black text-white px-5 py-2 rounded-lg">Buy</button>
                            <Link to={`/products/addtocart/${product.id}`} ><button className="bg-black text-white px-3 py-2 rounded-lg">Add to cart</button></Link>
                            </div>
                            </div>
                            
                        </div>
                    )
                   
                })
            }
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
export default ProductPage