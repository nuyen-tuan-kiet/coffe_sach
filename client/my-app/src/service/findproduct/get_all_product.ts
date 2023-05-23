

import axiosClient from '../../confing/API';
import {List_product} from '../../share/type'

const get_all_product = async():Promise<List_product[]> =>{

    const list_product = await axiosClient("/api/v1/product/getallproduct");
    const {data} = list_product.data;
    return data;
     
}

export default get_all_product;