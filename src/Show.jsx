import React from "react";

function Show({setResult, input}){

    let result;


 if(input){
    if(input>setResult){
        result="Higher"
     }
     else if(input<setResult){
        result="Lower"
     }
     else if(input  == setResult){
         result="Kudos!, it's correct"
     }
     else{
        result="Please enter the number 1 to 10"
    }
 }

    
    return(
        <div>
          <h3>Your Gussing: {result}</h3>
        </div>
    )
}

export default Show