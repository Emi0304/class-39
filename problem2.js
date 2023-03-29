function intro(value1 , value2 , value3 , name) {
    const obj = {
        name: name,
        age: value1 + value2 + value3,
        podobi:"student",
        location:"Rajshahi",
    }
    return obj;
}
const output= intro(3,10,6,"Emi");
console.log(output);