import React from "react";
import Solution from "./Solution";

function Calc(props){
    return(
        <div>
            <select onChange={e=>props.changeHandler(e)}>
                <option value="">---Select an option---</option>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
            </select>
            <div>
                <input type="number" value={props.num1} placeholder="Number 1" name="num1" onChange={e=>props.changeHandler(e)}/>
                <input type="number" value={props.num2} placeholder="Number 2" name="num2" onChange={e=>props.changeHandler(e)}/>
            </div>
            <Solution num1={props.num1}
                num2={props.num2}
                method={props.method}
            />
        </div>
    )
}

export default Calc;