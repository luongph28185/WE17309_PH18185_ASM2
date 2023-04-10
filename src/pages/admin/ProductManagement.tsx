import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Iproduct } from "../../types/product";
import { Input } from 'antd';

const { Search } = Input;

interface Iprops {
  products: Iproduct[];
  onRemove: (id: number) => void;
}
const ProductManagement = (props: Iprops) => {
  const [data, setData] = useState<Iproduct[]>([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);
  const removeProduct = (id: number) => {
    const isRemove = window.confirm("Ban chac chan muon xoa?");
    isRemove && props.onRemove(id);
  };

  const [keyword, setKeyword] = useState<string>("")
  
  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }


  return (
    <div >
      <p className="text-center font-bold text-[25px] py-4">
        Trang Quản Lý Sản Phẩm
      </p>
      <div className="flex">
      <button>
        <Link
          to={"/admin/products/add"}
          className="border px-3 py-2 bg-green-400 text-white hover:bg-green-600 rounded-lg no-underline"
        >
          Add
        </Link>
      </button>
    <Search onChange={handleChangeKeyword} placeholder="input search text" className="bg-black w-[500px] rounded-lg ml-10" enterButton="Search" size="large"  />
      </div>
      <div className="pt-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Stt</th>
              <th scope="col-1">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col-3">Ảnh</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((product) => product.name.toLowerCase().includes(keyword)).map((product, index) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td className="w-[150px] -mt-10 mr-[50px]" ><img src={product.image} alt="" /></td>
                  <td className="space-x-2">
                    <button>
                      <Link
                        to={`/admin/products/update/${product.id}`}
                        className="no-underline border px-3 py-2 bg-orange-400 text-white hover:bg-orange-600 rounded-lg"
                      >
                        Edit
                      </Link>
                    </button>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="border px-2 py-2 bg-red-400 text-white hover:bg-red-700 rounded-lg"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductManagement;
