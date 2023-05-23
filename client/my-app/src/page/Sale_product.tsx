import { Dashboard } from '@mui/icons-material';
import React ,{useState} from 'react';  
import { Chart_board } from '../component/Chart';
import Dashboar_sale from '../component/dashboard_sale'
import {Bills_sale} from '../share/type'
import {  useQuery } from '@tanstack/react-query';
import get_bill from '../service/Sale/getbill'
import {Top_sale} from '../share/type'
import { combineReducers } from '@reduxjs/toolkit';

const Dashboar:React.FC = (prop)=>{

    const [year_chose, setyear] =useState<any>(2023);
    const {
        data: all_product,
        isLoading: isLoading,
        isError: isError,
         }= useQuery<Bills_sale,Error>(["bill_sale", year_chose], () => {return get_bill(year_chose)},{ refetchOnMount:true, refetchOnWindowFocus: false,} ,);


    return(<>
        <div className='mt-[50px] flex flex-col   '>
         <h3 className='font-medium text-[30px] p-[5px] bg-[#65a30d] rounded-full max-w-[200px] text-center'>Sale</h3>
         { isLoading? <p>LOADING...</p>:
         
         <Dashboar_sale
         data_sale_total ={all_product!.data_sale_total}
         data_sale_count= {all_product!.data_sale_count}
         data_num_product_saled ={all_product!.data_num_product_saled}
         /> 
         }
          { isLoading? <p>LOADING...</p>:
          <>
           <div className='m-[10px] p-[5px] text-[#83d411] text-[20px]  font-semibold  mt-[20px] '>Chọn năm muốn tính doanh thu theo tháng</div>
          <select className='md:w-[10%] p-[10px] bg-black rounded-full text-white ' onChange={e => setyear(e.target.value) } id="option_year">
             {all_product!.data_years.map( item =>(
                <option value={item} >{item}</option>
             ))}
            </select>
            </>}
         <div className='self-center'>
         {isLoading? <p></p> :
         <Chart_board
         data_sale_month= {all_product!.data_sale_month}
         data_sale_mount= {all_product!.data_sale_mount}
         data_type_name = { all_product!.data_type_name}
         data_type_code = { all_product!.data_type_code}
        /> 
         }
         </div>
        </div>
    </>)
}


export default Dashboar