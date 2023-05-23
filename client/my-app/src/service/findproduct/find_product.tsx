

import React ,{Fragment, useState,useRef,  useMemo} from 'react'; 
import {List_product,List_type} from  '../../share/type'

const find_product = (items:List_product[] ,name_find:string,code_find:String,type_find:String) =>{
     
    

    if(items != undefined && code_find == "" && name_find =="" && type_find == ""){
        
        return items;   
    }

    if(items != undefined && code_find == "" && name_find !="" && type_find == ""){
        
        const result_find = items?.filter( item => {

            if( item.TENMH.includes(name_find)){
                return item;
            }
        })
        return result_find;
    }

    
    if(items != undefined && code_find == "" && name_find =="" && type_find != ""){
        
        const result_find = items?.filter( item => {

            if(item.MaLOAIMH == type_find){
                return item;
            }
        })
        return result_find
    }

   if(items != undefined && code_find != ""){
    const result_find = items?.filter( item => {

        if(item.MaMH == code_find){
            return item;
        }
        
    })
    return result_find
}

         return [];
}

export default find_product;