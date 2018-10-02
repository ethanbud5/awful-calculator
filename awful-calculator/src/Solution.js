import React from "react";

function Solution(props){
    let solution = ()=>{
        let {method,num1,num2} = props;
        if(method ==="add"){
            return +num1+(+num2);
        }
        else if(method ==="subtract"){
            return num1-num2;
        }
        else if(method ==="multiply"){
            return num1*num2;
        }
        else if(method ==="divide"){
            return num1/num2;
        }
        else{
            return 0;
        }
    }
    let returnSolution = solution()
    return <p>Solution: {returnSolution}</p>
}

export default Solution;