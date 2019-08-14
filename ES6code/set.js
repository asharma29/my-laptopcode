// // // // using Set.prototype.add(value) 
// // // // creating an empty set 
// // // var set1 = new Set(); 

// // // // set contains 10, 20 
// // // set1.add(10); 
// // // set1.add(20); 

// // // // As this method returns 
// // // // the set object hence chanining 
// // // // of add method can be done. 
// // // set1.add(30).add(40).add(50); 

// // // // prints 10, 20, 30, 40, 50 
// // // console.log(set1); 


// // // new code 

// // // Using Set.prototype.entries() 
// // // creating set 
// // var set1 = new Set(); 

// // // adding element to the set 
// // set1.add(50); 
// // set1.add(30); 
// // set1.add(40); 
// // set1.add(20); 
// // set1.add(10); 

// // // using entries to get iterator 
// // var getEntriesArry = set1.entries(); 

// // // each iterator is array of [value, value] 
// // // prints [50, 50] 
// // console.log(getEntriesArry.next().value); 

// // // prints [30, 30] 
// // console.log(getEntriesArry.next().value); 

// // // prints [40, 40] 
// // console.log(getEntriesArry.next().value); 



// // new code 

// // Using Set.prototype.clear() 
// // creating a set 
// var set2 = new Set([10, 20, 30, 40, 50]); 

// // prints {10, 20, 30, 40, 50} 
// console.log(set2); 

// // clearing set2 
// set2.clear() 

// // prints {} 
// console.log(set2); 




// new code 



// Using Set.prototype.values() 
// Using Set.prototype.keys() 
// creating set 
// var set1 = new Set(); 

// // adding element to the set 
// set1.add(50); 
// set1.add(30); 
// set1.add(40); 
// set1.add(60); 
// set1.add("Geeks"); 
// set1.add("GFG"); 

// // getting all the values 
// var getValues = set1.values(); 

// // prints a SetIterator 
// // that contains {50, 30, 40, "Geeks", "GFG"} 
// console.log(getValues); 

// // getting all the values 
// var getKeys = set1.keys(); 

// // prints a SetIterator 
// // that contains {50, 30, 40, "Geeks", "GFG"} 
// console.log(getKeys); 



// sub set 


// check whether the set on which the 
// method is invoked is the subset of 
// otherset or not 
// Set.prototype.subSet = function(otherSet) 
// { 
// 	// if size of this set is greater 
// 	// than otherSet then it can'nt be 
// 	// a subset 
// 	if(this.size > otherSet.size) 
// 		return false; 
// 	else
// 	{ 
// 		for(var elem of this) 
// 		{ 
// 			// if any of the element of 
// 			// this is not present in the 
// 			// otherset then return false 
// 			if(!otherSet.has(elem)) 
// 				return false; 
// 		} 
// 		return true; 
// 	} 
// } 

// // using the subSet function 

// // Declaring different sets 
// var setA = new Set([10, 20, 30]); 
// var setB = new Set([50, 60, 10, 20, 30, 40]); 
// var setC = new Set([10, 30, 40, 50]); 

// // prints true 
// console.log(setA.subSet(setB)); 

// // prints false 
// console.log(setA.subSet(setC)); 

// // prints true 
// console.log(setC.subSet(setB)); 


// union

// Perform union operation between 
// called set and otherSet 
Set.prototype.union = function(otherSet) 
{ 
	// creating new set to store union 
	var unionSet = new Set(); 

	// iterate over the values and add 
	// it to unionSet 
	for (var elem of this) 
	{ 
		unionSet.add(elem); 
	} 

	// iterate over the values and add it to 
	// the unionSet 
	for(var elem of otherSet) 
		unionSet.add(elem); 

	// return the values of unionSet 
	return unionSet; 
} 

// using the union function 
// Declaring values for set1 and set2 
var set1 = new Set([10, 20, 30, 40, 50]); 
var set2 = new Set([40, 50, 60, 70, 80]); 

// performing union operation 
// and storing the resultant set in 
// unionSet 
var unionSet = set1.union(set2); 

// prints [10, 20, 30, 40, 50, 60, 70, 80] 
console.log(unionSet.values()); 


