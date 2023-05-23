import React from 'react';
import axios, { AxiosResponse } from 'axios';
import axiosClient from '../confing/API';
import {adind_login} from '../share/type';


 const login_request = async(data:adind_login):Promise<{ islogin:any,url_direct:any,name:any, img:any, id:any,phone:any,adress:any ,token:any,  refresh_token:any, message_login:string}> =>{

    const  result_login = await axiosClient.post("/api/v1/kiet/login_admin",data);
      //console.log("ok");  
    const {url_result, success,name, img, phone, adress, id, token, refresh_token, message} = result_login.data;
  
       // trả về thông tin admin nếu đang nhập thành công va2 định tuyến sang trang
          if(success == "true"){
            console.log(result_login);
           return { islogin:success,
                    url_direct:url_result,
                    name:name,phone:phone,
                    adress:adress, img:img,
                    id:id, token:token,
                    refresh_token:refresh_token,
                    message_login: message}
             
          }
          // trả về thông tin admin nếu đang nhập không thành công 
          return { islogin:success,
                   url_direct:"/",
                   name:undefined, 
                   img:undefined, 
                   id:"",
                   phone:"",
                   adress:"",
                   token:undefined,
                   refresh_token:undefined,
                   message_login: message}
} 

export default login_request