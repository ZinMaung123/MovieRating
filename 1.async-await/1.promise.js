function execute() {
    const result = divide(4,1)
        .catch((error)=>console.log("catched = ",error));
    console.log(result);
}

function divide(firstNumber, secondNumber) {
    return new Promise((resolve,reject) =>{
        if(secondNumber !== 0){
            const result = firstNumber / secondNumber;
            resolve(result);
        }
        else{
            reject("Divided by zero");
        }
        
    });
}

//Create a sum function with promise
//Reject the promise if any input is zero


execute();
