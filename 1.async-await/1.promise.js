function execute() {

    const finalRes = divide(4,1)
        .then(data=>sum(data,0).catch(error => console.log("my error",error)))
        .then(result => console.log(result))
        .catch((error)=>console.log("catched = ",error));
    console.log("final result var = ", finalRes);

    const result = divide(4,1)
        .then(data=>console.log("inside promise", data))
        .catch((error)=>console.log("catched = ",error));
    console.log("result var = ", result);

    const sumRes = sum(1,2)
        .then(data => console.log("Inside promis", data))
        .catch((error) => console.log(error));
    console.log("Result:", sumRes);
}

function divide(firstNumber, secondNumber) {
    return new Promise((resolve,reject) =>{
        if(secondNumber !== 0){
            const result = firstNumber / secondNumber;
            resolve(result);
        }
        else{
            reject("Zero Error.");
        }
        
    });
}

//Create a sum function with promise
//Reject the promise if any input is zero
function sum(firstNumber, secondNumber){
    return new Promise((resolve, reject) => {
        if(secondNumber !== 0){
            const result = firstNumber + secondNumber;
            resolve(result);
        }
        else{
            reject("Divided By zero");
        }
    });
}

execute();
