import { Express } from "express";
import {connection_db} from '../../config/connect_db.js'


export const all_product = async(req,res) => {


//tao ket noi databace
    const promisePool = connection_db.promise();
    const [product] = await promisePool.query("SELECT * FROM `mathang` WHERE 1");
    const [thamsotimkiem] = await promisePool.query("SELECT * FROM `thamsotimkiem` WHERE 1");
   // console.log(product.length);
    res.send({ 
        success: "true",
        data: product,
      //  thamsotimkiem:thamsotimkiem,
        message_login: "ok"
      })
    

}

