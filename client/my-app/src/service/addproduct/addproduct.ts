import React ,{Fragment, useState,useRef,  useMemo} from 'react'; 
import  { data_productadd } from '../../share/type' 
import axiosClient from '../../confing/API';
import { promises } from 'dns';

const add_product  = async( prop: data_productadd ):Promise<string> =>{

    const { code, name, descript, img, amount, sizeL, sizeM, sizeX, type}= prop;


     const result  = await axiosClient.post("/api/v1/product/add_product", { code_pd:code, name_pd:name, descript_pd:descript, img_pd:img, amount_pd:amount, sizeL:sizeL, sizeM:sizeM, sizeX:sizeX, type:type } );
     const { success, message_login } = result.data;
    return success;

}

export default add_product