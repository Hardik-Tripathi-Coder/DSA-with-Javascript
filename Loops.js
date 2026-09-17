// Ques 1 : Print " Hello" n Times .


// let count = Number(prompt('Enter Number'));

// for(let i=1; i<=count; i++){
//     console.log(" Hello ");
// } 

// Ques 2 : One to n Numbers and Vice - versa .

// let count = Number(prompt("Enter Count"));

// for(let i = 1 ; i <= count ; i++){
//     console.log(i);
// }

// Reverse of Number

// for(let i = count ; i >= 1 ; i--){
//     console.log(i);
// }

// Ques 3 : Sum of n Natural Numbers and Factorial 


// let pr = prompt("Enter your Number") ;


// if(pr === null){
//     console.log("You cancelled the Program");
// }
// if(pr===""){
//     console.log("You didn't enter anything");
    
// }

// else {

// let userInp = Number(pr);

// if(isNaN(userInp)){
//     console.log("Unsupported Data Type");
// }
// else{
    
//     if(userInp < 0){
//         console.log("It's not a Natural Number");
//     }
//     else{
//     let sum = 0; // for factorial we will take sum as 1 otherwise in 0 case sum will always become 0 in this case.
//     for(let i = 1 ; i <= userInp ; i++){
//         sum += i ;
//     }
//     console.log(sum); 
// }
    
// }
// }

// Ques 4 : Factors of a Number

// let num = Number(prompt(" Enter Number Pls "));

// let factor ;

// if(num>0){

// console.log(1);


// for(let i=2; i<=Math.trunc((num/2)); i++){
    
    
//     if(num%i==0){
//         console.log(i);
//     }
// }

// console.log(num);
// }


// Ques 5 : Prime Numbers

// let num = Number(prompt(" Enter Number Pls "));

// let flag = false ;

// if(num>0){

// console.log(1);


// for(let i=2; i<=Math.trunc((num/2)); i++){
    
    
//     if(num%i==0){
//         flag = true ;
//         console.log("Not a Prime");
//         break
//     }
// }

// if(flag==false){
//     console.log("It's a Prime");
// }

// }

// Ques 6 : Sum of Digit using while

// let userInp = Number(prompt("Enter Your Number"));
// let sum = 0 ;

// while(userInp > 0){
//     sum += userInp % 10 ;
//     // console.log(sum);
    
//     userInp = Math.trunc(userInp/10) ;
// }

// console.log(sum);

// Ques 7 : Reverse the Number

// let num = Number(prompt("Enter the Number"));
// let reverse = 0   ;


// while(num > 0){
//     let cal = num % 10
// reverse = reverse * 10  + cal ;
// // console.log(reverse);

// num = Math.trunc(num/10);
// }

// console.log(reverse);



// Ques 8 : Strong Number 

// let userInp = Number(prompt("Enter the Number"));
// let temp = userInp ;
// let sum = 0 ;

// let again = 0 ;

// while(userInp > 0){
//     sum = userInp%10 ;
//     let factSum = 1;
//     for(let i=1; i<=sum; i++){
//         factSum *= i ;
//     }
//     again += factSum ;

    
//     factSum = 1 ;
//     userInp = Math.trunc(userInp/10);
// }
//     userInp = temp ;

// if(again===userInp){
//     console.log("It's a Strong Number",again);
// }
// else{
//     console.log(" Faaaaaaaaaaaahhhh...!! ");
// }

// Ques 9 : Do - While Loop ( Repeat Hello )

// let myInp = 0
// let userInp ;

// do{
//     userInp = Number(prompt("Enter the Number"))
// }while(userInp !== 0) ;

// Ques 10 : Guess the Number 

// let comPic = Math.floor(Math.random()*10 + 1) ;

// let guess = -1 ;

// while(comPic !== guess){
//     guess = Number(prompt("Enter the Number"));

//     if(isNaN(guess) || guess < 1 || guess > 100){
//         console.log("Try again b/w 0 - 100 ");
//         continue
//     }

//     if(comPic > guess){
//         console.log("To big , try again");
//     }
//     else if(comPic < guess){
//         console.log("To small , try again");
//     }
//     else{
//         console.log(" You are winner ");
        
//     }
// }

// 




