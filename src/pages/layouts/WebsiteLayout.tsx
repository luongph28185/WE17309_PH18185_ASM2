import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const WebsiteLayout = () => {
    return(
        <div>
            <header className="bg-black h-[100px] justify-between items-center flex">
                <Link to={'/products'}><img className="w-16 ml-[40px] rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOvQXv3WIiFoXZ_lZ9CdDUs_Ly0Qcrt5-AQ&usqp=CAU" alt="" /></Link>
            <div className="space-x-2 text-right mr-5 ">
               <input className="px-3 py-1 w-[350px] rounded-lg" type="text" />
                <button className="text-white border border-white px-3 py-1 rounded-lg">tim kiem</button>
            </div>
            <div className="space-x-5 mr-5">
            <button ><Link to={'/signup'} className="font-bold border  px-3 py-2 rounded-lg bg-black no-underline text-white mt-4">Signup</Link></button>
            <button ><Link to={'/signin'} className="font-bold border px-3 py-2 rounded-lg bg-black no-underline text-white mt-4">Signin</Link></button>
            </div>
            </header>
            <main className="my-[30px]"><Outlet/></main>
            <footer className="bg-black text-white py-4 px-3">
                <div className="grid grid-cols-4 gap-24">
                    <div>
                        <p>HỆ THỐNG CỬA HÀNG HADES</p>
                        <p className="text-[10px]">HADES TRAN TIEN LUONG STORE: PHU MINH STREET, MINH KHAI DISTRICT, HA NOI.</p>
                        <p className="text-[10px]">Store 1:TRIEU KHUC, THANH XUAN, HA NOI</p>
                        <p className="text-[10px]">Store 2:ME TRI, NAM TU LIEM, HA NOI</p>
                        <p className="text-[10px]">Store 3:MO LAO, HA DONG, HA NOI</p>
                    </div>
                    <div>
                        <p>CHÍNH SÁCH</p>
                        <p className="text-[10px]">Chính sách sử dụng website</p>
                        <p className="text-[10px]">Phương thức thanh toán</p>
                        <p className="text-[10px]">Chính sách giao nhận - vận chuyển</p>
                        <p className="text-[10px]">Chính sách đổi trả</p>

                    </div>
                    <div>
                        <p>THÔNG TIN LIÊN HỆ</p>
                        <p className="text-[10px]">CÔNG TY HADES TTL Địa chỉ: 147 Bùi Đình Tuý</p>
                        <p className="text-[10px]">SỐ CSKH: 02873011021 (10h -18h)</p>
                        <p className="text-[10px]">Tuyển dụng: hr@hades.vn</p>
                        <p className="text-[10px]">For business: contact@hades.vn</p>
                    </div>
                    <div>
                        <p>FOLLOW ON SOCIAL MEDIA</p>
                        <div className="flex space-x-4 my-3">
                        <img className="bg-white w-[50px]" src="https://cdn-icons-png.flaticon.com/128/739/739237.png" alt="" />
                        <img className="bg-white w-[50px]" src="https://cdn-icons-png.flaticon.com/512/717/717392.png" alt="" />
                        </div>
                        <img className="w-[150px]" src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png" alt="" />
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default WebsiteLayout