
function displayNumber(event){

    let val=event.target.value //curent clicked element *

    let operators=["+","-","*","/","."]

    let currentExpLastChar=result.value.slice(-1)

    if(operators.includes(currentExpLastChar) && operators.includes(val)){

       result.value=result.value.slice(0,-1)+val

    }
    else{
        result.value+=val
    }
 

}



function clearBox(){

    result.value=""
}


function evalExpr(){

    let currentExpression=result.value;

    let outPut=eval(currentExpression);

    result.value=outPut
}


function bakSpace(){

    let val=result.value.slice(0,-1)

    result.value=val

}