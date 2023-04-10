import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProduct, getProductId } from "../api/product";
import ProductTT from "./ProductTT";
import { Link } from "react-router-dom";
import { Iproduct, Iprops } from "../types/product";


const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
   
    getProductId(id).then((pro) => {
      setData(pro.data);

      // console.log(pro.data);
    });
  }, []);
  
  // console.log(data);
  return (
    <div>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1 mt-[120px]">
          <p className="font-bold text-[20px]">THÔNG TIN</p>
          <p className="my-3">{data.description}</p>
          <p>
            Vận chuyển từ 2-3 ngày <br />
            Thiết kế và sản xuất bởi HADES.
          </p>
          <div className="space-x-4 mt-10">
            <button className="hover:bg-black hover:text-white border-black border-2 px-5 py-2 rounded-lg">
              Buy
            </button>
           <Link to={`/products/addtocart/${data.id}`}> <button className="hover:bg-black text-gray-900 hover:text-white border-black border-2 px-3 py-2 rounded-lg">
              Add to cart
            </button></Link>
          </div>
        </div>
        <div className="col-span-2 -mt-7">
          <img className="w-[500px]" src={data.image} alt="" />
          
        </div>
        <div className="">
          <p className="font-bold text-xl">{data.name}</p>
          <p className="text-slate-500 -mt-2">SKU: T40223SM</p>
          <p className="font-bold my-6">{data.price}</p>
          <p className="font-medium">Màu sắc</p>
          <div className="space-x-3">
            <button className="text-black bg-black px-[10px]">.</button>
            <button className="text-red-500 bg-red-500 px-[10px]">.</button>
            <button className="text-orange-900 bg-orange-900 px-[10px]">
              .
            </button>
          </div>
          <p className="mt-10 font-medium">Kích thước</p>
          <div className="flex">
            <p className="border-black hover:bg-black hover:text-white border-2 px-[28px] py-2">
              S
            </p>
            <p className="border-black hover:bg-black hover:text-white border-2 px-[28px] py-2">
              M
            </p>
            <p className="border-black hover:bg-black hover:text-white border-2 px-[27px] py-2">
              L
            </p>
            <p className="border-black hover:bg-black hover:text-white border-2 px-[25px] py-2">
              XL
            </p>
          </div>
          <div>
            <img
              className="w-[1100px]"
              src="https://file.hstatic.net/1000306633/file/basic_new_tee_8e958fc45123407e8f74b0891e3d5872.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-[20px]">Sản Phẩm Tương Tự</h2>
      {ProductTT()}
    </div>
  );
};
export default ProductDetail;
