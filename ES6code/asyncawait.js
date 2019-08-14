const a = function (){

          return new Promise(resolve => {

            setTimeout(() =>{
                  resolve("done");


            }, 3000);



          });

}



const  b = async function  (){

    console.log("calling ");

    const c = await a();
    
    console.log(c);

}

b();




























































// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     var result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: 'resolved'
//   }
  
//   asyncCall();







































// function a (){

//   return new Promise (resolve =>{
// setTimeout(() =>{

//   resolve('resolved')
//       }, 2000);
//       });
//     }
//       async function b (){

//         console.log("calling");

//         var c = await a();

//         console.log(c);
//       }


// b();
