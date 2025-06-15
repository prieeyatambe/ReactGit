import { useEffect, useMemo, useRef, useState } from "react"
export function EffectHook(){

    const [count,setCount]=useState(0);
    
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=>count+1);
        },2000)
    },[count])

    return(
        <>
        <div style={{color:'olive',marginLeft:500}}>
        <h1>I've rendered {count} times</h1>
        </div>
        </>
    )
}

export function ReferenceHook(){

    const [value,setValue]=useState(0);
    
    const count=useRef(0);
    useEffect(()=>{
        count.current=count.current+1;
    });

    return(
        <>
          <div style={{color:'green',marginLeft:500}}>
            <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button><br />
            <h1>{value}</h1>
            <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
            <h1>Render count:{count.current}</h1>
          </div>
        </>
    );
}

export function ReferenceHookDOM(){

    const inputElem=useRef(null);

    const btnClick=()=>{
        console.log(inputElem.current);
        
    }
    return(
        <>
        <input type="text" ref={inputElem}/> <br />
        <button onClick={btnClick}>click</button>
        </>
    )
}

export function MemoHook(){
    const [number,setNumber]=useState(0);
    const [counter,setCounter]=useState(0);

    function cube(num:number){
        return Math.pow(num,3);
    }

    const result=useMemo(()=>cube(number),[number]);

    return(
    <>
    <hr />
    <input type="number" value={number} onChange={(e)=>{setNumber(Number(e.target.value))}} />
    <h2>Cube of the number is: {result}</h2>
    <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
    <h2>Counter:{counter}</h2>
    </>)
}