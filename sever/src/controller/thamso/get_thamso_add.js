import { Express } from "express";
import {connection_db} from '../../config/connect_db.js'


export const get_thamso_add = async(req,res) => {


//tao ket noi databace
    const promisePool = connection_db.promise();
    const [thamso] = await promisePool.query("SELECT * FROM `thamsothemmathang` WHERE 1");
    const [type]  = await promisePool.query("SELECT * FROM `loaimathang` WHERE 1");
    const [name_product] = await promisePool.query("SELECT `mathang`.`TENMH` FROM `mathang` WHERE 1");
    
    var list_name = [];
    var list_type =[];
    var list_code_type = []
if(name_product){
   
    name_product.map( item =>{
        list_name.push(item.TENMH)
    })

    type.map( item =>{
        list_type.push(item.TenLoai)
    })
    
    type.map( item =>{
        list_code_type.push(item.MaLOAIMH)
    })
    
  
}

    if(name_product){

        res.send({ 
            success: "true",
            name_product: list_name,
            amount_product: name_product.length,
            list_type : list_type,
            list_code_type: list_code_type, 
            thamso: thamso,
            message_login: "ok"
          })
    }

    
    
}
