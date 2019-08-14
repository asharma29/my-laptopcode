let people = function(name, age) { 
    this.name = name; 
    this.age = age; 

this.displayInfo = function() { 
  console.log(this.name + " is " + this.age + " years old"); 
 } 
} 

let person1 
= new people('John', 21); 

// logs John is 21 years old 
person1.displayInfo(); 