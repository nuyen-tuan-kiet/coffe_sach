import {  useQuery } from '@tanstack/react-query';
import React ,{Fragment, useState,useRef, useMemo } from 'react';  
import get_all_product from '../service/findproduct/get_all_product';
import get_type_product from '../service/findproduct/get_type_product'
import {List_product,List_type,thamso_timkiem} from '../share/type'
import Memoizedproduct_items from '../component/product_item'
import find_product from '../service/findproduct/find_product'
import get_thamso_timkiem from '../service/findproduct/get_thamso';


const Product_page:React.FC = () =>{

  const [change, setchang] = useState(1);
  const [ find_list, setfind] = useState<List_product[]>([]);

  const txttype_product = useRef<any>(null);


  let txtcode_product:any =useRef<string>("");
  let txtname_product:any =useRef<string>("");

  
  let txtcode_product_war = useRef<string>("");
  let txtname_product_war =  useRef<string>("");


  //---------------lấy danh sách loại mặt hàng-------------------
   const {
    data: product_type,
    isLoading: isLoading_type,
    isError: isError_type,
     }= useQuery<List_type[],Error>(['Product_type'], () => {return  get_type_product()},{ refetchOnWindowFocus: false,
      } ,);

 
  //-----------------lấy danh sách sản phẩm---------------------
    const {
       data: all_product,
       isLoading: isLoading,
       isError: isError,
        }= useQuery<List_product[],Error>(['Product_list',change], () => {return get_all_product()},{ refetchOnMount:true, refetchOnWindowFocus: false,} ,);
  //console.log(all_product);

    


   //----------------lấy tham số----------------------------
   const {
    data: thamso,
    isLoading: isLoading_thamso,
    isError: isError_thamso,
     }= useQuery<thamso_timkiem[],Error>(['Product_list'], () => {return get_thamso_timkiem()},{ refetchOnWindowFocus: false,} ,);
if(thamso){
  console.log(thamso[0].MaMH)
}
 


  //----------------xử lý tìm kiếm----------------------------
  const Handle_find = (e:any)=>{
    e.preventDefault(); 
                                  
    if(all_product != undefined && thamso != undefined){
        if(  txtcode_product.current.value.startsWith(thamso[0].MaMH) || txtname_product.current.value.length > thamso[0].TenMH )
        {

          if (  txtcode_product.current!.value.startsWith(thamso[0].MaMH) )
          {
           txtcode_product_war.current = "" ;
          };

          if(  txtname_product.current!.value.length >= thamso[0].TenMH  ) 
          {
           txtname_product_war.current = ""
          };

          const data = find_product(all_product,txtname_product.current.value, txtcode_product.current.value,txttype_product.current.value);
          if(data != undefined)
          {
            setfind( (prev: List_product[]) => data);
           }
        }
        else{

          if (  !txtcode_product.current!.value.startsWith(thamso[0].MaMH) )
          {
           txtcode_product_war.current = "Nhập sai quy định mã mặt" ;
          }
         
          if(  txtname_product.current!.value.length == thamso[0].TenMH ) 
          {
           txtname_product_war.current = "nhập lại tên đồ uống"
          }
          setchang(prev => prev+1);
        };
    }

  }

    return(<Fragment>
        
        <div className='mt-[50px] flex flex-col'>

         <h3 className='font-medium text-[30px] p-[5px] bg-[#65a30d] rounded-full max-w-[200px] text-center'>Mặt hàng</h3>

         <div className='border-solid border-2 rounded-md border-[#e2e8f0] shadow-2xl mt-[20px] flex flex-wrap p-[10px]'> 

          <form className='md:flex flex-wrap justify-around w-full'>

               <div className='flex flex-col md:w-[18%]'>
                   <label className='font-semibold text-[#5f666d] text-[17px] '>Mã mặt hàng: </label>
                   <input ref={txtcode_product} placeholder='enter code product' type="text" name="name" id="code_product" className='rounded-full  pl-[10px] pt-[3px] pb-[3px] min-w-[200px] bg-[#fafafa] border-[1px] border-[#65a30d]'/>
                   <p className='text-red-600'>{txtcode_product_war.current}</p>
                </div>
                
                <div className='flex flex-col md:w-[18%]'>
                   <label className='font-semibold text-[#5f666d] text-[17px] '>Tên mặt hàng: </label>
                   <input ref={txtname_product} placeholder='enter name product' type="text" name="name" id="code_product" className='rounded-full  pl-[10px] pt-[3px] pb-[3px] min-w-[200px] bg-[#fafafa] border-[1px] border-[#65a30d]'/>
                   <p className='text-red-600'>{txtname_product_war.current}</p>
                </div>

               <div className='flex flex-col md:w-[18%]'>
                 <label className='font-semibold text-[#5f666d] text-[17px] '>Loại mặt hàng: </label>
                      <select ref={txttype_product} 
                              className='rounded-full  pl-[10px] pt-[3px] pb-[3px] min-w-[200px] bg-[#fafafa] border-[1px] border-[#65a30d]'>
                             <option  selected value={""}></option>
                        {( isLoading_type == true? 
                            <div>LOading type....</div>
                          :(<>
                            {product_type?.map( item =>(
                              <option  value={item.MaLOAIMH}>{item.TenLoai}</option>
                             ))}
                            </>)
                         )}
                      </select>
               </div>

               <button
                   id="btn_add"
                   onClick={(e)=>{ Handle_find(e) }} 
                   className='font-medium text-[17px] p-[5px] bg-[#65a30d] rounded-lg text-center md:w-[18%] hover:bg-black hover:text-white'>
                    Find Product
               </button>

          </form>  

        </div>

         <div className='flex flex-wrap mt-[35px] p-[15px] md:flex-row md:justify-evenly bg-white drop-shadow-2xl rounded-l'>
                   {(isLoading ==true? <p className='font-medium text-[25px] p-[5px] text-white bg-black rounded-full max-w-[200px] text-center'>Loading...</p>
                      :
                      <Memoizedproduct_items
                      items= {find_list}
                      itemsshow = {all_product}
                    />
                     )}
            </div>
    
        </div>
    </Fragment>)
}

export default Product_page;