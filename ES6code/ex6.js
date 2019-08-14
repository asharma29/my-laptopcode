var fs = require("fs");

console.log("start ot reading a file");

fs.readFile('abc.text', (err , content) => {

    if (err){

        console.log('error happended during reading the file');

        return console.log(err);
    }

    console.log(content);


});


console.log("end of the file");