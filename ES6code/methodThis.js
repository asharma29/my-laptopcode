let person = { 
    name : "John", 
    age : 31, 
    logInfo : function() { 
        console.log(this.name + " is " + this.age + " years old "); 
    } 
} 
   // logs John is 31 years old 
   person.logInfo()  



