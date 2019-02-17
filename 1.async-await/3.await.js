async function execute() {
    const result =  promiseFunction(1)    
        .then((result) => promiseFunction(result))
        .then(finalresult => { 
            console.log('inside promise',finalresult);
            return finalresult;
        });

    console.log("result variable = ",result);

    return result;

}

function promiseFunction(input) {
    const result = input + 1;
    return Promise.resolve(result);
}


execute();