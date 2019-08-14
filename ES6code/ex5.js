var emp = {

    com : 'xcv'
}


var e1 = Object.create(emp);


delete e1.com;

console.log(
    e1.com
);