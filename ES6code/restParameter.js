// ES5


// function rest (a,b){

//             return a+b;
// }

// console.log ( rest(7,6,5,4,3));


// ES6

function rest (...input){   // spread operator 

    let sum = 0;

    for (let i of input){  // rest operator

        sum+= i;

    }
    return sum; 
}

console.log(rest(1,2,3,4));
console.log(rest(2,3));