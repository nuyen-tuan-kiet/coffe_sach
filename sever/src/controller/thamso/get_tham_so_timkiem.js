import { Express } from "express";
import {connection_db} from '../../config/connect_db.js'


export const get_thamso_timkiem = async(req,res) => {


//tao ket noi databace
    const promisePool = connection_db.promise();
    const [thamso] = await promisePool.query("SELECT * FROM `thamsotimkiem` WHERE 1");
    

    if(thamso){
console.log( thamso)
        res.send({ 
            success: "true",
            thamso: thamso,
            message_login: "ok"
          })
    }

    
    
}
