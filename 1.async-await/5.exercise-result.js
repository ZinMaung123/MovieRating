//Convert the execute function to an async function
//Split up the divide and sum result and log

async function execute() {
    const divideResult = await divide(4,1).catch(logError);
    console.log("Divide result = ",divideResult);
    const sumResult = await sum(divideResult,1).catch(logError);
    console.log("sum result = ",sumResult);
}

function logError(error){
    console.log(error);
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

function sum(firstNumber, secondNumber) {
    return new Promise((resolve,reject) =>{
        if(secondNumber !== 0 && firstNumber !==0){
            const result = firstNumber + secondNumber;
            resolve(result);
        }
        else{
            reject("Does not need to sum with zero");
        }
        
    });
}

execute();
