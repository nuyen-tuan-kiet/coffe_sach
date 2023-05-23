import {generate_token} from "../../module/token"

const dotenv = require('dotenv')


export const sign_token = async(data )=> {


    const access_token = await generate_token(data , process.env.secret_key, { expiresIn:process.env.exprire_secret_key})
       
    const refresh_token = await generate_token(data ,process.env.refresh_key, { expiresIn:process.env.exprire_refresh_key});

     const data_token =[access_token,refresh_token] ;
   return data_token;
} 

