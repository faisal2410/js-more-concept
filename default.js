/* function add(first, second){
    console.log(first, second);
    // second = second || 0;
    // if(second === undefined){
    //     second = 0;
    // }
    const total = first + second;
    return total;
} */


// function add(first=10, second = 5){
//     const total = first + second;
//     return total;
// }
// console.log(add())


// const result = add(10);
// console.log(result);

function fullName (first, last = 'Ostad'){
    const name = first + ' ' + last;
    return name;
}
console.log(fullName("Karim","Phero"))

// const name = fullName('Gelam');
// console.log(name);