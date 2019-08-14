var a ={};

var b ={};
a.name = 'john';

a = b;

b.name = 'alex';

console.log(a.name);