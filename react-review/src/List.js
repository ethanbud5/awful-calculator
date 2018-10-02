import React from "react";
import Name from "./Name"

function List(props){
     let displayList = props.listArray.map((person,i)=>(
         <Name name={person.name} key={i} handleClick = {props.handleClick}/>

     ))
    return(
        <div className="list">
            {displayList}
         <div>
             <button onClick={()=>props.paginate("-")}>Previous</button>
             <button onClick={()=>props.paginate("+")}>Next</button>
         </div>
        </div>
    )
}

export default List;