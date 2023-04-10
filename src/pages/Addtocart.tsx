import { getAllProduct, getProductId } from "../api/product";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductTT from "./ProductTT";
import { Iproduct } from "../types/product";
const AddtoCart = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
   
    getProductId(id).then((pro) => {
      setData(pro.data);

      // console.log(pro.data);
    });
  }, []);
//   const dataCart = data.map(cart => return{cart})
  
  const storedData = localStorage.getItem("cart");
  const existingData = storedData ? JSON.parse(storedData) : [];
  existingData.push(data);
  localStorage.setItem("cart", JSON.stringify(existingData))
 
  
  console.log(data);
  
  return (
    <div>
    <div className='grid grid-cols-4 gap-8'>
        <div className='col-span-3 bg-slate-100 py-5 px-3'>
            <div>
            <h4 className='text-center'>GIỎ HÀNG CỦA BẠN</h4>
            <p className='font-bold'>Bạn đang có 3 sản phẩm trong giỏ hàng</p>
            <div className='flex space-x-[70px] bg-white pt-3 px-1'>
                <img className='w-[70px] ml-4 mb-4' src={data.image} alt="" />
                <p>
                <p className='font-bold mt-[25px]'>{data.name}</p>
                <p className='text-slate-400'>NÂU/S</p>
                </p>
                
                <div className='flex space-x-2 mb-10'>
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                </div>
                <p className='mt-[25px]'>{data.price}</p>
                <p className='flex'>
                    
                   <div className='mt-4'> 
                   <p>Thành tiền:</p>
                    <p className='text-red-500'>{data.price}</p>
                   </div>
                    <img className='w-10 h-10 ml-10 mt-4' src="https://theme.hstatic.net/1000306633/1000891824/14/ic_close.png?v=490" alt="" />
                </p>
            </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-2 gap-8'>
                    <div>
                    <label className='my-2 font-bold' htmlFor="">Ghi chú đơn hàng</label><br />
                    <textarea className='w-[400px] h-[150px] mt-2' type="text"  name="" id="" />
                    </div>
                    <div className='my-2'>
                    <p className='font-bold'>Chính sách Đổi/Trả</p>
                    <p>Sản phẩm được đổi 1 lần duy nhất, không hỗ trợ trả.</p>
                    <p>Sản phẩm còn đủ tem mác, chưa qua sử dụng.</p>
                    <p>Sản phẩm nguyên giá được đổi trong 30 ngày</p>
                    <p>Sản phẩm sale chỉ hỗ trợ đổi size</p>
                    <p></p>
                    </div>
                </div>
            </div>
        </div>
        
        <div>
            <p className='text-right'>Tiếp Tục Mua Hàng ---{'>'}</p>
        <div className='border px-4 py-4'>
            <p className='font-bold text-[20px] border-b-2 pb-3'>Thông tin đơn hàng</p>
            <div className='flex justify-between font-bold my-4 border-b-2 pb-3'>
                <p>Tổng tiền:</p>
                <p>1,260,000₫</p>
            </div>
            <button className='bg-black px-[70px] py-2 text-white'>Thanh Toán</button>
        </div>
        </div>
    </div>
    <div>
    <p className="font-bold text-[20px]">Bạn cũng có thể thích</p>
    <div>
    {ProductTT()}
    </div> 
    </div>
    </div>
  )
}

export default AddtoCart
