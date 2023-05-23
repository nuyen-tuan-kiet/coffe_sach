import express, { json } from 'express'
import {connection_db} from '../../config/connect_db'
import admin_valid from '../../module/auth/admin_acount'
import {sign_token} from '../../controller/auther/signtoken'
const dotenv = require('dotenv')
const bcrypt = require('bcrypt');



export const login_admin = async (req, res) =>{

    const {User,Pass }=  req.body; 
    

        const admin_account =  await admin_valid(User);
        
       // check user
       if(!admin_account)
         return res.send({status:"401",message:"khong co ten tai khoan nay", success: "false",});
       
       // check pass
       const pass_valid = await bcrypt.compare(Pass, admin_account.pass);
          if(!pass_valid)
          return res.send({status:"401",message:"mat khau khong dung khoan nay", success: "false",});

        // genrerate token
                 // sử dụng thật toán default: HS256 đẽ hóa
            const [access_token,refresh_token] = await  sign_token( {user:User} );
           console.log(access_token);


           res.cookie("token", access_token,);

           res.send({ 
             success: "true",
             url_result: '/login_admin/Dashboard',
             name: admin_account.name,
             img: admin_account.img,
             id: admin_account.id,
             token:access_token,
             refresh_token:admin_account.refresh_token,
             message_login: "ok"
           })
           
          
         //   res.cookie("jwt",access_token,{ expires : new Date(Date.now()+ 12),  });
   
       
}
