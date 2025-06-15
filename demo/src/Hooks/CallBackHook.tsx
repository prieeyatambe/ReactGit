import { useState } from "react"
import Header from "./header";

export function CallbackHiok(){

    const [count,setCount]=useState(0);

    const newFn=()=>{}

    return(
    <>
        <div style={{textAlign:"center"}}>
           <Header newFn={newFn} ></Header>
            <h1>{count}</h1>
            <button onClick={()=>setCount(prev=>prev+1)}>click</button>
        </div>
    </>
        )
}