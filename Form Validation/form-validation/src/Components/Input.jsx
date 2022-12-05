import React from "react";

function Input(props){

    return(
        <div className="inputBlock">
             <label htmlFor= {props.for} >{props.label}</label>
             <input type= {props.type} name= {props.name} placeholder= {props.placeholder}/> 
             
        </div>
       
    )
}

export default Input;