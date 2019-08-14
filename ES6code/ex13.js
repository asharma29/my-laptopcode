function test(a){


    a.name = 'YYY';

}

var a = {'name': 'xxx'};

test(a);

console.log(a.name);