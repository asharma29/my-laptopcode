const rv = [0,1,2,3,4].reduce(function(accumlator,currentValue,currentIndex,array){


return accumlator + (accumlator * currentValue ) / currentIndex;
});

console.log (rv);