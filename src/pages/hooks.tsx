import React from "react";
import HooksUseEffect from "@/src/components/HooksUseEffect";
import { useEffect, useState } from "react";

const MyPage = () => {

    // 1. useEffect(callback)
    // 2. useEffect(callback, [])
    // 3. useEffect(callback, [deps])
    //--------------------------------
    ///1. callback luôn được gọi sau khi component mounted
    const [show, setShow] = useState(false);

 
    return (
         
        <div className="flex flex-col items-center justify-center h-screen bg-slate-400" >
           <button className="bg-green-600 rounded-lg p-2" 
           onClick={()=> setShow(!show)}>Toggle</button>
            {show && <HooksUseEffect/>}
            
        </div>
    )
}

export default MyPage;