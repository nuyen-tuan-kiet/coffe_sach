import { Express } from "express";
import {connection_db} from '../../config/connect_db.js'


export const get_all_bill = async(req,res) => {


// giúp lấy  tham số năm truyền từ client lên
     const url = require('url');
     const querystring = require('querystring');  
   // lấy tham số request
     let parsedUrl = url.parse(req.url);
     let {year} = querystring.parse(parsedUrl.query);

     const month =12;
       console.log(year);
    //tao ket noi databace
    const promisePool = connection_db.promise();
    // lấy danh sách hóa đơn đã ở trạng thái thanh taon1 và có số năm trùng với tham số truyền vào
    const [bills] = await promisePool.query("SELECT `mh`.`MaLOAIMH`,`cthd`.MaMH,`cthd`.MaHD,`cthd`.ThanhTien,`cthd`.CongTH,`cthd`.SoLuongMH,`cthd`.MaSize, DATE_FORMAT( `hd`.NgayLapHD, '%Y-%m-%d') AS 'NgayLapHD',`hd`.HinhThucTT FROM `chitiethoadon` as `cthd` , `hoadon` as `hd`, `mathang` as `mh`, `loaimathang` as `lmh` WHERE `cthd`.`MaHD` = `hd`.MaHD and `cthd`.`MaMH` = `mh`.`MaMH` and `mh`.`MaLOAIMH` = `lmh`.`MaLOAIMH` and `hd`.`MaTT`= 'MHDTT' and YEAR(`hd`.NgayLapHD) = ? ",[ year]);
    var   [type]= await promisePool.query("SELECT `TenLoai` FROM `loaimathang` WHERE 1");

    
  // lấy danh sách loại các mặt hàng đồ uống
   var type_product_code = [];
   if(type){
    for (const t of type) {
        type_product_code.push(t["TenLoai"])
    }
   }

    if(bills){
     
        // lấy danh sách thời gian (năm) của các hóa đơn đã thanh toán 
        const years = bills.reduce( (acc,curr, index)  =>
        {
            if( [...acc].includes(curr.NgayLapHD.slice(0, 4)) )
            { 
                return [...acc]
            }
                return [... acc,curr.NgayLapHD.slice(0, 4)]  
        },[])
       
        //tổng doanh thu tất cả mặt hàng 
        const sale_total = bills.reduce( (acc,curr)=>{
             return acc+curr.CongTH;
        },0)


        // tổng số đơn hàng đã bán 
        const sale_count = bills.length;


        // tổng số lượng mặt hàng đã bán
        const num_product_saled = bills.reduce( (acc,curr)=>{
            return acc+curr.SoLuongMH;
       },0)


        var type_product_name = []
       // toàn bộ hóa đơn của từng loại mặt hàng 
       const sale_products = bills.reduce( (acc,curr,index) =>{
        let groupkey = curr["MaLOAIMH"];
                if(!acc[groupkey]){
                  type_product_name.push(groupkey)
                    acc[groupkey] = [];
                    acc[groupkey].push(curr);
                  }        
                  else acc[groupkey].push(curr)
                  return acc
       },{})
        // biến lưu danh sách tổng doanh thu từng tháng của từng loại mặt hàng
       var  sale_type = {};
       var  sale_product = {};

       if(sale_products)
       {
       // console.log(sale_products);

        for (let bills in sale_products)
        {
          sale_product[bills] = { "1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};
          for (let bills_type in sale_products[bills])
          {
              for(var i = 0 ;i < month; i++)
              {
                  let month = parseInt(sale_products[bills][bills_type].NgayLapHD.slice(5,7)) ;

                  if(month == i+1)
                 {
                  sale_product[bills] = {...sale_product[bills],[month]:sale_products[bills][bills_type].SoLuongMH};
                   break;
                 }


                  if(sale_product[bills] != undefined)
                 {
                    if( month.toString() in sale_product[bills] )
                   {
                    sale_product[bills] = {...sale_product[bills],[month]:sale_products[bills][bills_type].SoLuongMH + sale_product[bills][month] }
                      break 
                     }   
                 }
              }
           }
         }


           // tinh tổng doanh thu từng tháng của từng loại mặt hàng
          for (let bills in sale_products)
          {
            sale_type[bills] = { "1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};
            for (let bills_type in sale_products[bills])
            {
                for(var i = 0 ;i < month; i++)
                {
                    let month = parseInt(sale_products[bills][bills_type].NgayLapHD.slice(5,7)) ;

                    if(month == i+1)
                   {
                     sale_type[bills] = {...sale_type[bills],[month]:sale_products[bills][bills_type].CongTH};
                     break;
                   }


                    if(sale_type[bills] != undefined)
                   {
                      if( month.toString() in sale_type[bills] )
                     {
                       sale_type[bills] = {...sale_type[bills],[month]:sale_products[bills][bills_type].CongTH + sale_type[bills][month] }
                        break 
                       }   
                   }
                }
             }
           }
        }

    //    console.log( type_product);

if(sale_type){

    res.send({ 
        success: "true",
        data_years: years,
        data_type_code:type_product_code,
        data_type_name: type_product_name,
        data_sale_total:sale_total,
        data_sale_count: sale_count,
        data_num_product_saled :num_product_saled,
        data_sale_month: sale_type,
        data_sale_mount: sale_product,
        message_login: "ok"
      })
}

       
    }


}
