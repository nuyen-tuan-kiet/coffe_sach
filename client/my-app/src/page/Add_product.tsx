import React, { useState,useRef } from 'react';
import {  useQuery } from '@tanstack/react-query';
import get_thamso_add  from '../service/addproduct/getthamso'
import {List_product_had} from  '../share/type'
import add_product   from '../service/addproduct/addproduct'
import {notify} from '../share/type';
import Notify from '../component/notify'
import { BsFillCheckCircleFill, } from 'react-icons/bs';
import { RiDeleteBack2Fill } from 'react-icons/ri';

  const Product_add:React.FC = () =>{

    const [form, setform] = useState(1);
    const [txttype_product, settxttype_product  ]= useState("");
    const [valid, setvalid] = useState<notify>( {status:"#29a329",error: false });

    let txtcode_product:any =useRef<string>("");
    let txtname_product:any =useRef<string>("");
    let txtsizeL:any =useRef<number>(0);
    let txtsizeM:any =useRef<number>(0);
    let txtsizeX:any =useRef<number>(0);
    let txtamount:any =useRef<number>(0);
    let txtdescript:any =useRef<string>("");
    let txtimg_product:any =useRef<string>("");
 

    let txtcode_product_war = useRef<string>("");
    let txtname_product_war =  useRef<string>("");
    let txtsizeL_war =  useRef<string>("");
    let txtsizeM_war =  useRef<string>("");
    let txtsizeX_war =  useRef<string>("");
    let txtamount_war =  useRef<string>("");
    let txtdescript_war =  useRef<string>("");
    let txtimg_product_war =  useRef<string>("");

    const {
     data: data,
     isLoading: isLoading,
     isError: isError,
      }= useQuery<List_product_had,Error>(['Product'], () => {return get_thamso_add() },{ refetchOnWindowFocus: false,
       } ,);
    

    function validate(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
               e.preventDefault();
           if(data){
               var { thamso} = data;



               
               if (  !txtcode_product.current!.value.startsWith(thamso[0].MaMH) )
               {
                txtcode_product_war.current = "Nhập sai quy định mã mặt" ;
               }
               else if (  txtcode_product.current!.value.startsWith(thamso[0].MaMH) )
               {
                txtcode_product_war.current = "" ;
               };
               

               if(  txtname_product.current!.value.length < thamso[0].TENMH  ) 
               {
                txtname_product_war.current = "nhập lại tên đồ uống"
               }
               else if(  txtname_product.current!.value.length >= thamso[0].TENMH  ) 
               {
                txtname_product_war.current = ""
               };


               if(  txtdescript.current!.value.length < thamso[0].MOTAMH ) 
               {
                txtdescript_war.current = "nhập lại mô tả"
               }
               else if(  txtdescript.current!.value.length >= thamso[0].MOTAMH ) 
               {
                txtdescript_war.current = ""
               };


               if(   txtimg_product.current!.value.length < thamso[0].LINKMH  ) 
               {
                txtimg_product_war.current = "nhập lại link ảnh"
               }
               else if(   txtimg_product.current!.value.length >= thamso[0].LINKMH  ) 
               {
                txtimg_product_war.current = ""
               };

            
               
               if( Number(txtamount.current.value) > thamso[0].SOLUONG ||Number(txtamount.current.value) == 0)
               {
                txtamount_war.current = "số lượng quá giới hạn ( < 60)"
               }
               else if( Number(txtamount.current.value) <= thamso[0].SOLUONG ||Number(txtamount.current.value) != 0)
               {
                txtamount_war.current = ""
               };


               if( thamso[0].SIZEL_MIN > Number( txtsizeL.current.value) || Number(txtsizeL.current.value) > thamso[0].SIZEL_MAX)
               {
                txtsizeL_war.current = "20000< x < 50000"
               }
               else if( thamso[0].SIZEL_MIN <= Number( txtsizeL.current.value) && Number(txtsizeL.current.value) <= thamso[0].SIZEL_MAX)
               {
                txtsizeL_war.current = ""
               };

               if( thamso[0].SIZEM_MIN > Number(txtsizeM.current.value) || Number(txtsizeM.current.value) > thamso[0].SIZEM_MAX)
               {
                txtsizeM_war.current = "20000< x < 80000"
               }
               else if( thamso[0].SIZEM_MIN <= Number(txtsizeM.current.value) && Number(txtsizeM.current.value) <= thamso[0].SIZEM_MAX)
               {
                txtsizeM_war.current = ""
               }

               if( thamso[0].SIZEX_MIN > Number(txtsizeX.current.value) || Number( txtsizeX.current.value) > thamso[0].SIZEX_MAX)
               {
                txtsizeX_war.current = "20000< x < 100000"
               }
               else if( thamso[0].SIZEX_MIN <= Number(txtsizeX.current.value) && Number( txtsizeX.current.value) <= thamso[0].SIZEX_MAX)
               {
                txtsizeX_war.current = ""
               };

               //------ thuc hien them mat hang neu form nhap dung
         
                      if( txtcode_product_war.current == "" && 
                         txtname_product_war.current == "" &&
                         txtdescript_war.current == "" &&
                         txtimg_product_war.current == "" &&
                         txtamount_war.current == "" &&
                         txtsizeL_war.current == ""  &&
                         txtsizeM_war.current =="" &&
                         txtsizeX_war.current == ""  &&
                         txttype_product != ""
                      ){
                        
                        add_product(
                         {code: txtcode_product.current!.value,
                          name:txtname_product.current!.value,
                          descript:txtdescript.current!.value,
                          img:txtimg_product.current!.value,
                          amount:Number(txtamount.current.value),
                          sizeL:( txtsizeL.current.value),
                          sizeM:Number(txtsizeM.current.value),
                          sizeX:Number(txtsizeX.current.value),
                          type:txttype_product,}
                         ).then( (result) =>{
                             if(result == "true"){
                              console.log("ok")
                              setvalid( prev => ( {...prev,status:"Thêm mặt hàng thành công",error: true}));
                             }
                         })

                      }


                      setform(prev =>prev+1); 
                  }


           
    }
    
    return(<React.Fragment>
        
           <div className='mt-[50px] flex flex-col   '>
         <h3 className='font-medium text-[30px] p-[5px] bg-[#65a30d] rounded-full max-w-[230px] text-center'>Thêm Mặt Hàng</h3>
         <div className='p-[5px] mt-[20px]'>
            <form  className='flex  rounded-lg bg-white drop-shadow-2xl p-[20px]'>
              <div className='basis-1/2'>

              <div className='flex flex-col mb-[20px]'>
                      <label  className='mb-[5px]'  htmlFor="txtcode_product">Mã mặt hàng</label>
                      <input  ref={txtcode_product} type="text" placeholder='mã bắt đầu với MH00 và số lượng sản phẩm + 1'  id="txtcode_product" className='p-[5px] bg-[#f2f2f2] rounded-lg' onChange={(even)=>{}}/>
                     <p className='text-red-600'>{txtcode_product_war.current}</p>
                </div>

              <div className='flex flex-col mb-[20px]'>
                      <label  className='mb-[5px]'  htmlFor="inputname">Tên mặt hàng</label>
                      <input type="text" ref={txtname_product} id="inputname" className='p-[5px] bg-[#f2f2f2] rounded-lg' onChange={(even)=>{}}/>
                     <p className='text-red-600'>{txtname_product_war.current}</p>
                </div>

                <div className='flex flex-col mb-[20px]'>
                      <label  className='mb-[5px]'  >Giá Mặt hàng</label>
                     <div className='flex justify-between'>
                          <div className='flex flex-col mb-[20px] md:max-w-[30%]'>
                                    <label  className='mb-[5px]'  htmlFor="inputL">Giá Size L</label>
                                    <input ref={txtsizeL} type="text" placeholder='not > 50.000đ' id="inputL" className='p-[5px] bg-[#f2f2f2] rounded-lg'/>
                                    <p  className='text-red-600'> {txtsizeL_war.current}</p>
                            </div>
                            <div className='flex flex-col mb-[20px] md:max-w-[30%]'>
                                    <label  className='mb-[5px]'  htmlFor="inputM">Giá Size M</label>
                                    <input ref={txtsizeM} type="text"  id="inputM" placeholder='not > 80.000đ' className='p-[5px] bg-[#f2f2f2] rounded-lg' />
                                    <p  className='text-red-600'>{  txtsizeM_war.current }</p>
                            </div> 
                            <div className='flex flex-col mb-[20px] md:max-w-[30%]'>
                                    <label  className='mb-[5px]'  htmlFor="inputM">Giá Size X</label>
                                    <input ref={txtsizeX} type="text"  placeholder='not > 100.000đ' id="inputM" className='p-[5px] bg-[#f2f2f2] rounded-lg' />
                                    <p  className='text-red-600'>{  txtsizeX_war.current }</p>
                            </div>  
                     </div>
                </div>

                <div className='flex flex-col mb-[20px]'>
                      <label  className='mb-[5px]'  htmlFor="txtamount">Số Lượng mặt hàng</label>
                      <input type="text" ref={txtamount} placeholder='amount not to much than 60' id="txtamount"className='p-[5px] bg-[#f2f2f2] rounded-lg'  onChange={(even)=>{}}/>
                     <p  className='text-red-600'> { txtamount_war.current }</p>
                </div>
                <div className='flex flex-col mb-[20px]'>
                      <label  className='mb-[5px]'  htmlFor="inputtype">Loại mặt hàng</label>
                       <select name="" id="type"   onChange={ (e) =>{ settxttype_product( e.target.value) } } >
                       <option  selected value={""}></option>
                  {isLoading? <><p>loading....</p></>:
                     data!.list_type.map( (item,inex) =>(
                         <option value={data!.list_code_type[inex]}>{item}</option>
                     ))
                }
                 </select>
                         </div>
                <div className='flex flex-col mb-[20px]'>
                      <label  className='mb-[5px]'  htmlFor="inputdes">Mô tả mặt hàng</label>
                     <input placeholder="Type here" ref={txtdescript}  className='p-[5px] bg-[#f2f2f2] rounded-lg' id="inputdes" onChange={(even)=>{}}  />
                     <p  className='text-red-600'> {  txtdescript_war.current } </p>
                </div>

                <div className='flex flex-col mb-[20px]'>
                      <label  className='mb-[5px]'  htmlFor="inputimg">Link ảnh mặt hàng</label>
                      <input type="text"  id="inputimg" ref={txtimg_product} className='p-[5px] bg-[#f2f2f2] rounded-lg' onChange={(even)=>{}}/>
                     <p  className='text-red-600'>{ txtimg_product_war.current }</p>
                </div>
              </div>


              <div className='w-full flex  justify-between p-[20px] overflow-y-scroll'>

                  <div className='flex-1'>

                  <p className='font-medium text-[15px] p-[5px] bg-black rounded-full max-w-[230px] text-white text-center mb-[10px]'>Các mặt hàng đã có</p>
                  <div className='flex-col p-[5px]'>
                      <div className='flex'>
                           <p className='bg-[#e2e8f0] text-black p-[4px] mb-[5px]'>tên mặt hàng</p>
                      </div>
                      <div className='flex flex-wrap ' id="ten_douong">
                         {isLoading? <p>LOADING....</p>:

                             data!.name_product.map( item =>(
                              <>
                               <p className='bg-[#29a329] text-white p-[5px] m-[5px]' >{item}</p>
                              </>
                             ))
                         }
                      </div>
                  </div>

                  </div>
                  
                  <div className='flex-2'>
                 
                  <p className='font-medium text-[15px] p-[5px] bg-black rounded-full max-w-[230px] text-white text-center mb-[10px]'>Số lượng mặt hàng trong kho</p>
                  <div className='flex-col p-[5px]' id="soluong_du">
                      <div className='flex'>
                           <p className='bg-[#e2e8f0] text-black p-[4px] mb-[5px]'>số lượng sản phẩm hiện tại</p>
                      </div>
                      {
                        isLoading? <p>LOADING....</p>:
                        <div className='flex'>
                           <p className='bg-[#29a329] text-white p-[5px] mr-[5px]'>{data!.amount_product}</p>
                      </div>
                      }  
                    </div>
                  </div>
              </div>
             
            </form>
            <div className='p-[15px] bg-[#2eb82e] rounded-full hover:bg-[#84e184] text-center'>
                  <button type="submit" className='text-[20px] font-medium' id="btn_add" onClick={(e) =>validate(e)}>Thêm mặt hàng</button>
                  </div>
         </div>
         {
           valid.error == false?  null: 
           <>
              <div className={`animate-roll absolute bg-white border-b-4 border-green-500 min-w-[300px] right-[60px] flex items-center mb-[15px]`}>
                     <BsFillCheckCircleFill size ={23} className="text-green-500"/>
                     <p className=' p-[15px] md:p-[20px] font-semibold uppercase'>{valid.status}</p>
                     <RiDeleteBack2Fill size ={23} className="text-red-500" onClick={ e =>{    setvalid( prev => ( {...prev,status:"",error: false})); }} />
             </div>
           </>
         }
        </div>
    </React.Fragment>)
}
export default Product_add