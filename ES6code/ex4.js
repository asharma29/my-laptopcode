class Test {

    constructor(){


        this.value = "hello here"
    }

        read (callback){

            setTimeout(callback , 100);
        }
}


this.value = 'hello there';

const test = new Test();

test.read(function(){

        console.log(this.value);


})

test.read(() => {


    console.log(this.value);
})