function Apple (type){

    this.type = type;
    this.color = 'red';
    this.getInfo = getAppleinfo;

}

function getAppleinfo(){

    return this.color + "" + this.type + 'apple';
}

var apple = new Apple("windows");

apple.color = 'reddish';

console.log(apple.getInfo());