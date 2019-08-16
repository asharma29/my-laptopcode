let a = 0;
let b = 1;
for (let i = 0;i<=9;i++){
    let c = a+b;
    a=b;
    b=c;
    console.log(c);
}