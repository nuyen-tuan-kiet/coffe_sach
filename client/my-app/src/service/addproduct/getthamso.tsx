
import React ,{Fragment, useState,useRef,  useMemo} from 'react'; 
import {List_product_had} from  '../../share/type'
import axiosClient from '../../confing/API';

const get_thamso_add = async():Promise<List_product_had> =>{
    const list_product = await axiosClient("/api/v1/getthamso/get_thamso_add");
    const { name_product, amount_product, list_type ,list_code_type,  thamso} = list_product.data;
    return  { name_product, amount_product,list_type ,list_code_type, thamso}
}

export default get_thamso_add;