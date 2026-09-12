// Conditional Statements

// Ques 1 : Valid Voter

// let voterAge = Number(prompt("Enter your Age"));

// if(isNaN(voterAge)){
//     console.log("Incorrect Input Detected !! ");
// }

// else if(voterAge >= 18){
//     console.log("You can Vote.");
// }

// else {
//     console.log("You cannot Vote");
// }

// Ques 2 : Shop Discount

// Discount Formula : Discount * Amount / 100 ;

// let payAmount = Number(prompt("Enter Your Bill Amount"));
// let discount = 0 ;


// if(isNaN(payAmount)){
//     console.log("Ouch !! Don't do this .");
// }
// else if(payAmount > 0 && payAmount <= 5000){
//     discount = 0 ;
// }
// else if(payAmount <= 7000 ){
//     discount = 5 ;
// }
// else if(payAmount <= 9000 ){
//     discount = 10 ;
// }
// else{
//     discount = 20 ;
// }
// let pay = payAmount - Math.floor((discount*payAmount)/100) ;
// console.log(pay); efficient way to calculate the final amount after discount.


// Ques 3 : Bill Calculator

// let unit = Number(prompt("Enter your Bill here"));
// let amt ;

// if(unit <= 100){
//     amt = unit * 4 ;
// }
// else if(unit <= 200){
//     amt = (100*4) + ((unit - 100) * 6);
// }
// else if(unit <= 400){
//     amt = (100*4) + (100*6) + ((unit - 200) * 8);
// }
// else{
//     amt = (100*4)+(100*6)+(200*8)+((unit - 400) * 13);
    
// }

// console.log(amt);


// Second Way of Doing this 

// let unit = Number(prompt("Enter Unit Pls"));
// let amt = 0 ;

// if(unit > 400){
//     amt = (unit - 400) * 13;
//     unit = 400 ;
// }
// if(unit > 200 && unit <= 400){
//     amt += (unit-200) * 8;
//     unit = 200 ;
// }
// if(unit > 100 && unit <= 200){
//     amt += (unit - 100) * 6 ;
//     unit = 100 ;
// }
// amt += 100 * 4 ;

// console.log(amt);


// Ques 4 : INR Denomination

// let amt = Number(prompt("Enter your Amount"));

// if(amt >= 500){
//     console.log("Count of 500 Cash",Math.trunc(amt/500));
//     amt = amt % 500 ;
// }
// if(amt >= 200){
//     console.log("Count of 200 Cash",Math.trunc(amt/200));
//     amt = amt % 200 ;
// }
// if(amt >= 100){
//     console.log("Count of 100 Cash",Math.trunc(amt/100));
//     amt = amt % 100 ;
// }
// if(amt >= 50){
//     console.log("Count of 50 Cash",Math.trunc(amt/50));
//     amt = amt % 50 ;
// }
// if(amt >= 20){
//     console.log("Count of 20 Cash",Math.trunc(amt/20));
//     amt = amt % 20 ;
// }
// if(amt >= 10){
//     console.log("Count of 10 Cash",Math.trunc(amt/10));
//     amt = amt % 10 ;
// }
// if(amt >= 5){
//     console.log("Count of 5 Cash",Math.trunc(amt/5));
//     amt = amt % 5 ;
// }
// if(amt >= 1){
//     console.log("Count of 1 Cash",Math.trunc(amt/1));
// }


// Switch Case 

let numm = 1 ;

switch(num){

    case 1 :
        console.log("Monday");
        break ;
    
    case 2 : 
        console.log("Tuesday");
        break ;

    default : console.log("Invalid Input");

}

















// Notes

// Ternary Operator

// Ex : 12 > 3 ? console.log("Yes") : console.log("No");




// Nested Ternary 

// let num = 0 ;

// num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero" ;


// You can check multiple conditions in Switch . Ex

// let count = true ;

// switch(count){
//     case 1 :
//     case 2 :
//     case 3 :

//     console.log("Hello");
//     break ;

//     case 4 :
//     case 5 :
//     case 6 :
//     console.log("Hi");
//     break ;

// }

// and we can use expressions also in Switch , yes it's true .



// switch(count){
//     case 19 > 5 :
//     console.log("Hello");
//     break ;

//     case 50 < 100  :
//     console.log("Hi");
//     break ;

// }


// If we don't use break so switch will print all cases as it will go in " Fall Through " condition .
