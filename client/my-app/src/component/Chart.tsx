import React, { useState } from 'react';
import {CChart} from '@coreui/react-chartjs';
import {Month_sale} from '../share/type'

export const Chart_board:React.FC<Month_sale> = (prop)=>{

                   const {data_sale_month, data_sale_mount, data_type_code, data_type_name} = prop;
                   console.log(data_sale_month[data_type_name[1]][1]);

                   const backgroundColor=["rgba(220, 220, 220, 0.2)","rgba(151, 187, 205, 0.2)","rgba(220, 200, 215, 0.2)"] ;
                   const borderColor = ["rgba(220, 220, 220, 1)","rgba(151, 187, 205, 1)","rgba(221, 210, 105, 1)"]
                   const pointBackgroundColor = ["rgba(220, 220, 220, 1)","rgba(151, 187, 205, 1)","rgba(221, 210, 105, 1)"];
                  

                    // danh sách doanh thu từng mặt hàng trong các tháng
                   var list_amount:any[] = [];
                   const result_1 =  data_type_code.map( (cur:string,index:number) =>{
                              list_amount.push(
                               {
                                 label: cur,
                                 backgroundColor: backgroundColor[index],
                                 borderColor:  borderColor[index],
                                 pointBackgroundColor: pointBackgroundColor[index],
                                 pointBorderColor: "#fff",
                                 data: [ data_sale_mount[data_type_name[index]][1],
                                         data_sale_mount[data_type_name[index]][2], 
                                         data_sale_mount[data_type_name[index]][3],
                                         data_sale_mount[data_type_name[index]][4],
                                         data_sale_mount[data_type_name[index]][5],
                                         data_sale_mount[data_type_name[index]][6],
                                         data_sale_mount[data_type_name[index]][7], 
                                         data_sale_mount[data_type_name[index]][8],
                                         data_sale_mount[data_type_name[index]][9],
                                         data_sale_mount[data_type_name[index]][10],
                                         data_sale_mount[data_type_name[index]][11],
                                         data_sale_mount[data_type_name[index]][12],
                                       ]}
                              )
                           return    null;
                             });

                   // danh sách doanh thu từng mặt hàng trong các tháng
                   var list_sale:any[] = [];
                  const result_2 =  data_type_code.map( (cur:string,index:number) =>{
                             list_sale.push(
                              {
                                label: cur,
                                backgroundColor: backgroundColor[index],
                                borderColor:  borderColor[index],
                                pointBackgroundColor: pointBackgroundColor[index],
                                pointBorderColor: "#fff",
                                data: [ data_sale_month[data_type_name[index]][1],
                                        data_sale_month[data_type_name[index]][2], 
                                        data_sale_month[data_type_name[index]][3],
                                        data_sale_month[data_type_name[index]][4],
                                        data_sale_month[data_type_name[index]][5],
                                        data_sale_month[data_type_name[index]][6],
                                        data_sale_month[data_type_name[index]][7], 
                                        data_sale_month[data_type_name[index]][8],
                                        data_sale_month[data_type_name[index]][9],
                                        data_sale_month[data_type_name[index]][10],
                                        data_sale_month[data_type_name[index]][11],
                                        data_sale_month[data_type_name[index]][12],
                                      ]}
                             )
                          return    null;
                            })

                  if(list_sale){
                    console.log(list_amount)
                  }

    return (
    
        <div className='mt-[2%] flex flex-col w-full md:flex-row '>
           <div className='min-w-[780px] flex-col' id="chart_sale">
            <div className='m-[10px]  text-[#83d411] text-[20px]  font-semibold '>Bảng doanh thu các loại đồ uống</div>
          
          {
            !list_sale?  <p>LOADING...</p>:
            <CChart
            type="line" 
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","Novembe","December"],
              datasets: list_sale
            }}
          />
          }
           </div>
         
          
           <div className='min-w-[780px] flex-col' id="chart_amount">
           <div className='m-[10px] p-[5px] text-[#83d411] text-[20px]  font-semibold '>Tần suất các loại đồ uống</div>
          
          {
            !list_sale?  <p>LOADING...</p>:
            <CChart
            type="line" 
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","Novembe","December"],
              datasets:  list_amount
            }}
          />
          }
           </div>
        </div>
        )

}