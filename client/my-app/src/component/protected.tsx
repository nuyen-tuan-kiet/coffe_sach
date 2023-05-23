import React, { Fragment } from "react";
import { Protect_element } from "../share/type";
import { Navigate } from "react-router-dom";
import {useAppDispatch, useAppSelector} from '../store/reduxhoock'


const Protected:React.FC<Protect_element> = (Prop) =>{
    
   const {isLogin, children }=  Prop;

    if(!isLogin){ return <Navigate to="/" replace />}

    return(
        <>
        {children}
        </>
    )
}

export default Protected