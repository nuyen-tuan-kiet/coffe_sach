import React, { useState } from 'react';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { Icon } from '@mui/material';


const Order:React.FC  = ()=>{


    return(
        <>
         <div className='mt-[50px] flex flex-col'>
            <h3 className='font-medium text-[30px] p-[2px] bg-[#65a30d] rounded-full max-w-[200px] text-center'>Đơn hàng</h3>
           <div className='flex flex-col mt-[35px] p-[5px]  md:justify-evenly bg-white drop-shadow-2xl rounded-l'>
            <div className='flex  mb-[10px] md:w-full p-[10px]   border-black border-b-2 '>
                <p className='text-[#6c757d] w-[170px]' id="bill_ten">Tên</p>
                <p className='text-[#6c757d] w-[110px]' id="bill_sdt">Số diện thoại</p>
                <p className='text-[#6c757d] w-[270px]' id="bill_diachi">Địa chỉ</p>
                <p className='text-[#6c757d]  w-[130px]' id="bill_tennhanvien">Tên nhân viên</p>
                <p className='text-[#6c757d] w-[100px]' id="bill_ngay">Ngày đặt</p>
                <p className='text-[#6c757d] w-[140px]' id="bill_trangthai">Trạng Thái</p>
                <p className='text-[#6c757d] w-[200px]' id="bill_mathang">Mặt Hàng</p>
                <div className='text-[#6c757d] w-[100px] justify-self-end text-right'> In hóa đơn</div>
            </div>
            <div className='flex justify-center mb-[10px] md:w-full p-[10px] hover:bg-[#f5f5f5]'>
                <div className='text-black w-[170px] font-semibold overflow-x-auto m-[4px]'>Nguyen  Tuan Kiet</div>
                <p className='text-[#6c757d] w-[110px] m-[4px]'>0357094456</p>
                <p className='text-[#6c757d] w-[270px] overflow-x-auto m-[4px]'>23 đường nguyễn đường nguyễn đình chiểu</p>
                <p className='text-[#6c757d]  w-[130px] m-[4px]'>Lê thị Cúc</p>
                <p className='text-[#6c757d] w-[100px] m-[4px]'>2023-4-12</p>

                <div className=' w-[140px] p-[3px] text-[#d1e7dd] m-[4px]'>not Delivered</div>
                <p className='text-[#6c757d]  w-[200px] m-[4px]'>
                <select className='w-full' value="">
                  
                  <option value="">
                  <div>
                    <p>amount: 2, </p>
                    <p>name: caphe capu chin no</p>
                   </div>
                  </option>
                </select>
                </p>
                <p className='text-[#6c757d] w-[165px] m-[4px] text-center '>
                <LoyaltyIcon color="success" ></LoyaltyIcon>
                </p>

            </div>
            
          </div>
          
        </div>
</>
    )
}

export default Order