import React ,{Fragment, useState,useRef,  useMemo} from 'react';  
import {Product_item} from  '../share/type'


const Product_items:React.FC<Product_item>= (prop) =>{


    const {items , itemsshow} = prop;
  
    const Detelet_product= (e:any) =>{
       
        console.log(e.currentTarget.id);
     }
console.log(items);
    return(
        <Fragment>
             {
                items?.length ==0? 
                itemsshow?.map( item => 
                    (
                      <div className='flex flex-col mb-[10px] md:w-[17%] p-[10px] border-solid border-2 rounded-md border-[#e2e8f0] shadow-2xl  '>
                      <img src={item.LINKMH} className='object-cover h-45 '/>
                      <p className='overflow-hidden text-ellipsis whitespace-nowrap mt-[10px] text-[#5f666d] text-[22px]'>{item.TENMH}</p>
                        <div className='flex justify-between mt-[7px]'>
                             <p className='font-semibold'>Mã: {item.MaMH}</p>
                             <p className='text-[#6c757d]'>Số lượng: {item.SOLUONG}</p>
                        </div>
                        <button id={item.MaMH}  onClick={(e)=>{Detelet_product(e)}} className='p-[10px] bg-[#f1f5f9] rounded-l mt-2 font-semibold hover:bg-[#dc3545]'>Delete</button>
                        </div>
                    ))
                : 
                items?.map( item => 
                    (
                      <div className='flex flex-col mb-[10px] md:w-[17%] p-[10px] border-solid border-2 rounded-md border-[#e2e8f0] shadow-2xl  '>
                      <img src={item.LINKMH} className='object-cover h-45 '/>
                      <p className='overflow-hidden text-ellipsis whitespace-nowrap mt-[10px] text-[#5f666d] text-[22px]'>{item.TENMH}</p>
                        <div className='flex justify-between mt-[7px]'>
                             <p className='font-semibold'>Mã: {item.MaMH}</p>
                             <p className='text-[#6c757d]'>Số lượng: {item.SOLUONG}</p>
                        </div>
                        <button id={item.MaMH}  onClick={(e)=>{Detelet_product(e)}} className='p-[10px] bg-[#f1f5f9] rounded-l mt-2 font-semibold hover:bg-[#dc3545]'>Delete</button>
                        </div>
                    ))
                        }
        </Fragment>
    )
}


const Memoizedproduct_items = React.memo(Product_items);
export default Memoizedproduct_items;