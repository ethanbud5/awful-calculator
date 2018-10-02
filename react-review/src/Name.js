import React from "react";

function Name(props){
    return(
        <div 
        className="name" 
        onClick={()=>props.handleClick(props.name)}>
            {props.name}
        </div>
    )
}

export default Name