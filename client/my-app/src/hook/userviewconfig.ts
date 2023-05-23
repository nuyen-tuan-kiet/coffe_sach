import React, { useEffect, useState } from 'react';



const userviewpoint = () =>{

    const [view , setview ] = useState( window.innerWidth);

    useEffect ( ()=>{

        window.addEventListener("resize",() =>{
            setview(window.innerWidth)
        })

        return () =>{
            window.removeEventListener("resize",() =>{
                setview(window.innerWidth)
            })
        }
    },[])


    return { view, ismobile: view < 768 }
}



