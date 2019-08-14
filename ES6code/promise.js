



var p1 = new Promise ((resolve , reject)  =>{

        setTimeout(() =>{
                resolve('done');


        },3000);
});

p1.then ((value) =>{

        console.log(value);

});

p1.catch((value) =>{

        console.log(value);


})


console.log(p1);
