

import axiosClient from '../../confing/API';
import {List_type} from '../../share/type'

const get_type_product = async():Promise<List_type[]> =>{

    const list_type = await axiosClient("/api/v1/product/gettypeproduct");
    const {data} = list_type.data;
    return data;
     
}

export default get_type_product;