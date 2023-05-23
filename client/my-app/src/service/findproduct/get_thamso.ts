import React ,{Fragment, useState,useRef,  useMemo} from 'react'; 
import {thamso_timkiem} from  '../../share/type'
import axiosClient from '../../confing/API';

const get_thamso_timkiem = async():Promise<thamso_timkiem[]> =>{
    const list_product = await axiosClient("/api/v1/getthamso/get_thamso_timkiem");
    const { thamso } = list_product.data;
    return  thamso;
}

export default get_thamso_timkiem;