            'use strict';
			function First() { 
				var a = 123; 
				// var b = ''; 
				var c = a ; 
				try { 
					console.log("Value of a: " + a ); 
					console.log("Value of b: " + b ); 
					console.log("Sum of a and b: " + c); 
				} 
				catch ( e ) { 
					console.log("Error: " + e.description ); 
				} 
				finally { 
					console.log("Finally block will always execute!" ); 
				} 
			} 

            First();