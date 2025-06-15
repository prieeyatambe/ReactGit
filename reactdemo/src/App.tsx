import React, { useEffect } from "react";
import { Person,ClassComponent } from "./Components/ClassComponent";
import { Greetings, Student } from "./Components/FunctionalComponent";


const App:React.FC=()=>{
    const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
    }
    return(
       <>
        <ClassComponent></ClassComponent>
        <Greetings></Greetings>
        <Student></Student>
        <Person></Person>

        <form onSubmit={handlesubmit}> 
               <label htmlFor="fname">First Name</label> 
                <input type="text" id="fname" name="firstname" placeholder="Your name.." /> 
                <label htmlFor="lname">Last Name</label> 
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." /> 
                <input type="submit" value="Submit"/> 
          </form> 

       </>
    )
}
export default App;