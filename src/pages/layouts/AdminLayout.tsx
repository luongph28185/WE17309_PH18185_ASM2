import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import DashBoard from "../admin/DashBoard";
const AdminLayout = () => {
    return(
        <div>
            <header style={{
          overflow: 'auto',
        width: '205vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 50,
        }} className="bg-black h-[100px] justify-between items-center flex">
                <Link to={'/'}><img className="w-16 ml-[40px] rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOvQXv3WIiFoXZ_lZ9CdDUs_Ly0Qcrt5-AQ&usqp=CAU" alt="" /></Link>
            <div className="space-x-2 text-right mr-5 ">
               <input className="px-3 py-1 w-[350px] rounded-lg" type="text" />
                <button className="text-white border border-white px-3 py-1 rounded-lg">tim kiem</button>
            </div>
            <div className="space-x-2 mr-6">
            <button ><Link to={'/admin/products'} className="font-bold border px-3 py-2 rounded-lg bg-black no-underline text-white my-5">Products</Link></button>
            <button ><Link to={'/admin/categories'} className="font-bold border px-2 py-2 rounded-lg bg-black no-underline text-white mt-4">Categories</Link></button>
            </div>
            </header>
            <div className="grid grid-cols-4 gap-2">
                <div className="">{DashBoard()}</div>
                <main className="my-[30px] col-span-3 mt-24 "><Outlet/></main>
            </div>
            
            <footer className="bg-black h-[70px] w-[1500px] text-white text-center py-4">Trần Tiến Lương Đẹp Roai</footer>
        </div>
    )
}
export default AdminLayout