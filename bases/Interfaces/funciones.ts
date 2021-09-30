(()=>{
    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumberFuntion: addTwoNumbers;

    addNumberFuntion = (a: number, b: number) => {
        return a+b;
    }
})()