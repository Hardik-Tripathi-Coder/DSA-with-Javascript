// Sum of Two Integers

// let num1 = 10 ;
// let num2 = 20 ;
// let totalsum = num1 + num2 ;

// console.log(totalsum);







// Sum and Message

// let num3 = 20 ;
// let num4 = 20 ;

// console.log("Sum of num3 and num4 is " + num3 + num4 ); 
// console.log(num3 + num4 + " is sum of num3 and num4 ."); 


// Accept and Print 

// let userInput = prompt("What is your Age ?") ;

// userInput = Number(userInput);

// console.log(typeof userInput);







// Swap two Variables


// a . With Extra Variable


// let num1 = 10 ;
// let num2 = 20 ;
// let c = 0 ;

// console.log(num1 , num2); 

// c = num1 ;
// num1 = num2 ;
// num2 = c ;

// console.log(num1 , num2); 


// b . Without Extra Variable

// let num1 = 80 ;
// let num2 = 50 ;

// console.log(num1 , num2);

// num1 = num1 + num2 ;
// num2 = num1 - num2 ;
// num1 = num1 - num2 ;

// console.log(num1 , num2);


// c. Destructuring Assignment

// let num1 = 30 ;
// let num2 = 50 ; 

// console.log(num1 , num2);


// [num1,num2] = [num2,num1] ;

// console.log(num1 , num2);





// Remove last Digit 

// let num1 = 4568 ; 
// let lastDig = num1%10 ;

// console.log(lastDig);


// Get Digits except Last one.

// let leftDig = Math.floor(num1/10) ;
// console.log(leftDig);


// Unary Operator 

// let a = 11 ;
// let b = 22 ;

// let c = a + b + a++ + b++ + ++a + ++b ;

// console.log(c);


// Math Functions 

// let oTP = Math.trunc((Math.random()*9000)+1000) ;

// console.log(oTP);


// Ques 1 : Area and Parameter of Rectangle

// Formula for Area = L x B ; Formula for Perimeter = 2 X ( L + B ) ;

// let length = 20 ;
// let bredth = 20 ;

// console.log('Area and Perimeter of Rectangle are ' , length*bredth , 2*(length+bredth) );

// Ques 2 : Area of Triangle from Heron's Formula 

// Formula : (S * (S-A) * (S-B) * (S-C)) * 2

// let side1 = 5;
// let side2 = 4;
// let side3 = 3;

// let semiPeri = (side1+side2+side3)/2 ;

// let final = Math.sqrt((semiPeri*(semiPeri-side1)*(semiPeri-side2)*(semiPeri-side3))) ;

// console.log(final);


// Ques 3 : Circumference of Circle 

// Formula : 2*33/7*R

// let radius = 12 ;

// let final = 2*Math.PI*radius ;

// console.log(Number(final.toFixed(2)));





























// Notes : 

// Concatination : Adding String and Number . Ex : ( "1" + 1 )

// Type Coersion : When Javascript Engine converts Numbers within Quotes ( "1" ) to Number in possible situations like ("1" - 1 ) same for ( * , / , % ) but not with ( + ) ex : ( "1" + 1 ) in this case it will perform Concatination .

// Type Casting / Conversion : When me intentionally wants to change type of Data of any input or value if possible otherwise we will get NAN . Ex. (1) : let a = '1' ;  Number(a) now ( a ) data type is Number . Ex. (2) : let b = '12hello' ; Number(b) in this case it will throw error ( NAN ) on print as (b) cannot be change  .