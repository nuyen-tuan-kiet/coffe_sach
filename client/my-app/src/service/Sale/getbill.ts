
import axiosClient from '../../confing/API';
import {Bills_sale} from '../../share/type'

const get_bill = async( year_chose:number):Promise<Bills_sale> =>{

     const result = await axiosClient("/api/v1/sale/getbillproduct",{ params: { year: year_chose } });
    
        const { data_years, data_type_code, data_type_name,data_sale_total, data_sale_count, data_num_product_saled , data_sale_month,data_sale_mount} = result.data;
if(data_sale_month){
        console.log(data_sale_month);
}
        return   {data_years, data_type_code, data_type_name,data_sale_total, data_sale_count, data_num_product_saled , data_sale_month,data_sale_mount}
}

export default get_bill;