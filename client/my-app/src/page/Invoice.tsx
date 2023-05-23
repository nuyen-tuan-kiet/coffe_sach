

import React, { useState,useRef } from 'react';
import {PDFViewer} from '@react-pdf/renderer';
import Invoie_body from '../component/Invoice_body'
const  Invoice = () =>{

    return (<>
    
    <PDFViewer width="1000" height="600px"  className="app mt-[50px]" >
            <Invoie_body/>
      </PDFViewer>
    </>)
}


export default Invoice