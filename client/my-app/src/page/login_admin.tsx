import React, { useState } from 'react';
import { AiOutlineMail, } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRef } from 'react'; ///dung de lay data nhap vao thay vi dung onchange se render lai nhieu lan
import Notify from '../component/notify';
import { notify ,  login_result} from '../share/type';
import login_request from '../service/login_admin';
import { useNavigate } from "react-router-dom";
import {useAppDispatch, } from '../store/reduxhoock'
import { admin_info } from '../store/auth_sign_reducer';
import { Phone } from '@mui/icons-material';

const Login_admin:React.FC = () =>{

     const usename= useRef<HTMLInputElement>(null);
     const password =useRef<HTMLInputElement>(null);

     const dipatch_login = useAppDispatch();
     const navigate = useNavigate();
     const [valid, setvalid] = useState<notify>( {status:"",error: true });
     
     
     const submit = async () =>{

      if(usename.current?.value ==""  || usename.current?.value ==""){
         setvalid({ status:"dang nhap khong dung",error: false });
      } 
      
      else {
         
        const{ islogin,
               url_direct,
               name,
               img,
               id,
               adress,
               phone,
               token,
               refresh_token,
               message_login} = await  login_request(
                                       {User: usename.current?.value,
                                     Pass: password.current?.value })
            
          
            if(islogin){
                dipatch_login( admin_info.actions.set_admin_infor({
                  admin_name: name,
                  admin_img: img,
                  admin_phone: phone,
                  admin_adress: adress,
                  isLogin: islogin,
                  token: token,
                  refesh_tk: refresh_token,
                }))
                navigate(`${url_direct}`)
            }
         
               
                  console.log(message_login); 
               setvalid({status:message_login, error: false }); 
      }
  }


    return (<>
         <div className='h-screen w-screen bg-[#e2e8f0] relative '>
          <div className=' flex flex-col absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] p-6  bg-black rounded-md  '>
               <div className='text-center font-bold  text-[#0284c7] text-3xl md:text-4xl'> Sign In To admin </div>
                  <p className='text-center text-[20px] text-[#d4d4d8] pt-[10px]'>sign for admin</p>
               <form action="" className='pt-[25px] ' >
                 <div className='flex flex-row items-center p-[5px] bg-[#64748b] rounded-lg mb-[25px]'>
                    <input ref={usename} className='min-w-[230px]  w-full  bg-transparent text-white  outline-none' type="text" name="username" placeholder='user name'/>
                    <AiOutlineMail size={29} className="text-white "/>
                 </div>
                 <div  className='flex flex-row items-center p-[5px] bg-[#64748b] rounded-lg mb-[25px]'>
                    <input ref={password} className='w-full  bg-transparent text-white  outline-none' type="password" name="password" placeholder='pass word'/>
                    <RiLockPasswordLine size={29} className="text-white "/>
                 </div>
               </form>
               <button className='p-[10px] rounded-full  min-w-[200px] transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white uppercase  text-lg ' onClick={()=>{submit()}}>SIGN IN</button>
          </div>
         {
           valid.error == false?  <Notify error={valid.error} status={valid.status} />:null 
         }
         
         </div>
    </>)
}


export default Login_admin