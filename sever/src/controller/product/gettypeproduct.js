import { Express } from "express";
import {connection_db} from '../../config/connect_db.js'


export const type_product = async(req,res) => {


//tao ket noi databace
    const promisePool = connection_db.promise();
    const [type_product] = await promisePool.query("SELECT * FROM `loaimathang` WHERE 1");
   // console.log(type_product.length);
    res.send({ 
        success: "true",
        data: type_product,
        message_login: "ok"
      })
    

}
