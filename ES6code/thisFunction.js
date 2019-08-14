function thisFunction (a,b,c){

   this.a = 20;

   this.b = 40;

   this.c = 30 ;

                    return (a+b+c);

}



thisFunction();

console.log(a+b+c);