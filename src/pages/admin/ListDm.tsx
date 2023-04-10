import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Iproduct } from "../../types/product";
import { Input } from 'antd';
const { Search } = Input;
interface Iprops {
  categories: Iproduct[];
  onRemove: (id: number) => void;
}
const ListDm = (props: Iprops) => {
  const [data, setData] = useState<Iproduct[]>([]);
  useEffect(() => {
    setData(props.categories);
  }, [props]);
  const removeCategori = (id: number) => {
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
       Quản Lý Danh Muc
      </p>
      <div className="flex">
      <button>
        <Link
          to={"/admin/categories/add"}
          className="border-2 px-3 py-2 border-black hover:text-white  hover:bg-black rounded-lg no-underline"
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
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((categori) => categori.name.toLowerCase().includes(keyword)).map((categori, index) => {
              return (
                <tr key={categori.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{categori.name}</td>
                  <td className="space-x-2">
                    <button>
                      <Link
                        to={`/admin/categories/update/${categori.id}`}
                        className="no-underline border-black border-2 px-3 py-2 hover:bg-black hover:text-white  rounded-lg"
                      >
                        Edit
                      </Link>
                    </button>
                    <button
                      onClick={() => removeCategori(categori.id)}
                      className="border-2  px-2 py-2 border-black hover:bg-black hover:text-white rounded-lg"
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
export default ListDm;
