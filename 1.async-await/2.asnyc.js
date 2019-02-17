

    
    async function functionA(){
        return Promise.resolve(1);
    }


    async function functionB(){
        return 1;
    }

    function functionC(){
        return 1;
    }

    console.log(functionA());
    //functionA().then(data => {console.log(data)});

    console.log(functionB());
    //functionB().then(data => {console.log(data)});

    console.log(functionC());
