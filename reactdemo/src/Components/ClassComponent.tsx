import React, { ReactNode } from "react";

export class ClassComponent extends React.Component{
  
    constructor(props:any){
        super(props);
        this.state={
            greet:"good afternoon"
        };
    }
      
   render() {
       return(
        <>
        <h2>Hello, {this.state.greet}</h2>
        </>
       );
   }
}

export class Person extends React.Component{

    constructor(props:any){
        super(props);
        this.state={
            name:"marry",
            desg:"manager",
            salary:150000
        }
    }
    render(){
        return(
            <>
                <hr />
                <h1>{this.state.name}</h1>
                <h1>{this.state.desg}</h1>
                <h1>{this.state.salary}</h1>
            </>
        );
    }
}

