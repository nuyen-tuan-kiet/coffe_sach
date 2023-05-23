import React, { useState } from 'react';
import { notify } from '../share/type';
import BiErrorCircle from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";
interface valid{
    valids: notify
}

const Notify:React.FC <notify> = (prop) =>{

    return(<>
    <div className={`animate-roll absolute bg-white border-b-4 border-red-500 min-w-[300px] right-0 flex items-center mb-[15px]`}>
                     <p className=' p-[15px] md:p-[20px] font-semibold uppercase'>{prop.status}</p>
                     <BsFillQuestionCircleFill size ={23} className={`text-${`red-500`}`}/>
          </div>
    </>)
}

export default Notify