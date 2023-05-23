import React, { useState } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Protect} from '../share/type'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import get_all_product from '../service/findproduct/get_all_product';
import {Top_sale} from '../share/type'
const Dashboar_sale:React.FC<Top_sale>= (prop) =>{
  
    const { data_sale_total, data_sale_count, data_num_product_saled} = prop;

    return(
        <>
            <div className='flex flex-col mt-[35px] md:flex-row md: justify-evenly '>
                
            <div className='flex md:w-[30%] items-center p-[15px] bg-white drop-shadow-2xl rounded-xl mt-[10px]'>
                <div className='p-[10px] bg-blue-300 rounded-full'><AttachMoneyIcon className='text-[65px] text-blue-700 ' /></div>
                 <div className='flex flex-col ml-[15px] '>
                    <p className='font-medium'> Số lượng toàn bộ mặt hàng bán được</p>
                    <p className='font-semibold' id="sale_num_amount">{data_num_product_saled} mặt hàng </p>
                 </div>
            </div>
            <div className='flex md:w-[30%] items-center p-[15px] bg-white drop-shadow-2xl rounded-xl mt-[10px]'>
                <div className='p-[10px] bg-[#d1e7dd] rounded-full'><ShoppingBasketIcon className='text-[65px] text-green-900 '/></div>
                 <div className='flex flex-col ml-[15px] '>
                    <p className='font-medium'>Số lượng đơn hàng</p>
                    <p className='font-semibold' id="sale_num_order">{ data_sale_count} đơn đặt hàng</p>
                 </div>
            </div>
            <div className='flex md:w-[30%] items-center p-[15px] bg-white drop-shadow-2xl rounded-xl mt-[10px]'>
                <div className='p-[10px] bg-[#fff3cd] rounded-full'><LocalOfferIcon className='text-[65px] text-[#ffc400] '/></div>
                 <div className='flex flex-col ml-[15px] '>
                    <p className='font-medium'>Doanh thu toàn bộ</p>
                    <p className='font-semibold' id="sale_total_price">{ data_sale_total.toLocaleString('en-US', {style : 'currency', currency : 'VND'})} đ</p>
                 </div>
            </div>
        </div>
        </>
    )
}


export default Dashboar_sale