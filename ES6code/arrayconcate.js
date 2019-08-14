// var a = [1,3,5,7,9];
// var b =[2,4,6,8,];
// var c = a.concat(b);
// c.sort();
// for (let i = 0;i<3;i++){
//     console.log(c[i]);
// }


class Test{
    constructor(){
        var a = [1,3,5,7,9];
            var b =[2,4,6,8,];
    var  i , j;
    
    for (i = 0,j=0; i<a.length && j<b.length;i++,j++){
        if (a[i] == 3 || b[i] ==3){

                console.log(" " +3);
                break;
        }

        console.log(a[i] + " " + b[j]);

    }
}
}

let a = new Test();
