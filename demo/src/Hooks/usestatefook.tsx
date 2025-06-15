import { useState } from "react";

export function StateHook(){

    const [color,setColor]=useState('Blue');

    const changeColor=()=>{
        setColor('Purple');
    }
    return(
        <>
        <h1>My favorite colour is {color}</h1>
        <button onClick={changeColor}>Click</button>
        </>
    );
}

export  function CarState(){

    const [car,setCar]=useState({
        brand:'Mercedese',
        model:'Benz',
        year:2019,
        color:'Black'

    })
    const changeColor=()=>{
        setCar((prev)=>{
            return{...prev,color:"gray"}
        })
    }
    return(
        <>
            <h1>My {car.brand}</h1>
            <h2>It is {car.color} {car.model} from {car.year}</h2>
            <button onClick={changeColor}>click</button>
        </>
        )
}

export function Counter(){

    const [count,setCount]=useState(0)

    const increase=()=>{
        setCount(count=>count+1)
    }

    const decrease=()=>{
        setCount(count=>count-1)
    }

    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick={increase}>+</button> &ensp;
        <button onClick={decrease}>-</button>
        </>
    )
}
