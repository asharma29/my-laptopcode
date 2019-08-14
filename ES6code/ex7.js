function A (name) {

    this.name = name;
}

var a = new A("xxx");

A.prototype.name = 'yyy';

console.log(a.name);