function outer (){

    let a = 80;

            function inner (){

                var b = 30; 
                var  c = 40 

               return  d = a +b +c ;
            } 
            return inner ;
}
             var e = outer();

        console.log(e());


// Explaination of closure 
// /* 1 */	 function foo() 
// /* 2 */		 { 
// /* 3 */			 var b = 1; 
// /* 4 */			 function inner(){ 

//                     c = 30 
// /* 5 */				 return b +c ; 
// /* 6 */			 } 
// /* 7 */			 return inner; 
// /* 8 */		 } 
// /* 9 */		 var get_func_inner = foo();		 

// /* 10 */		 console.log(get_func_inner()); 
// /* 11 */		 console.log(get_func_inner()); 
// /* 12 */		 console.log(get_func_inner()); 
