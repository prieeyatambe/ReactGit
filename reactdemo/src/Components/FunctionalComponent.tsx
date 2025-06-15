import React from "react";

interface greetingProps{
    name?:string;
    age?:number;
}

export const Greetings = ({ name = "Guest", age = 12 }: greetingProps)=>{
    const ss={
        color:"Red",
        fontSize:"30px",
        border:"5px inset blue"
    };
    return(
        <>
            <h1 style={ss}>{name},{age}</h1>
        </>
    )
}

export function Student(){
    let s1={
        fname:"john",
        lname:"doe",
        age:25
    }
    const studentcss={
        color:"blue",
        fontSize:"30px"
    }
    return(
        <>
        <p style={studentcss}>Name:{s1.fname} <br />
           Surname:{s1.lname} <br />
           Age:{s1.age}
        </p>
        </>
    )
}
 