import { Express } from "express";
import {connection_db} from '../../config/connect_db.js'


export const addproduct = async(req, res)=>{
    
// giúp lấy  tham số năm truyền từ client lên
const url = require('url');
const querystring = require('querystring');  
// lấy tham số request
let parsedUrl = url.parse(req.url);
let {  code_pd, type , name_pd, amount_pd, img_pd, descript_pd, sizeL, sizeM, sizeX} = req.body;
console.log("ok");
const promisePool = connection_db.promise();
 const resut =await promisePool.query("INSERT INTO `mathang` (`MaMH`, `MaLOAIMH`, `TENMH`, `SOLUONG`, `LINKMH`, `MOTAMH`) VALUES ( ? , ?, ?, ?, ?, ? )",[code_pd, type , name_pd, amount_pd, img_pd, descript_pd]);
 if( resut ){
    await promisePool.query("INSERT INTO `sizemathang` (`IDloai`, `MaMH`, `MaSize`, `Gia`) VALUES (NULL, ?, ?, ?)",[code_pd,"SIZEL",sizeL ]);
    await promisePool.query("INSERT INTO `sizemathang` (`IDloai`, `MaMH`, `MaSize`, `Gia`) VALUES (NULL, ?, ?, ?)",[code_pd,"SIZEM",sizeM ]);
    await promisePool.query("INSERT INTO `sizemathang` (`IDloai`, `MaMH`, `MaSize`, `Gia`) VALUES (NULL, ?, ?, ?)",[code_pd,"SIZEX",sizeX ]);
   
    res.send({
        success: "true",
        message_login: "add product success"
       })
    
}
  
}

