let num1=5;
let num2=11;
let num3=7;

if (num1 > num2) { console.log( "The first number is big");}
else if(num1 < num2){
    console.log("The second number is greater than the first");}
else{console.log("The first and second numbers have the same value"); }

if(num1 % 2 == 0){
    console.log("The first number is an even number");}
else{
    console.log("The first number is odd");}

if (num1 > num2 && num1 > num3) {if (num2 > num3) 
    {console.log(`${num1} > ${num2} > ${num3}`);}
     else {console.log(`${num1} > ${num3} > ${num2}`);}
} 
else if (num2 > num1 && num2 > num3) {if (num1 > num3) {
    console.log(`${num2} > ${num1} > ${num3}`); } 
    else {
    console.log(`${num2} > ${num3} > ${num1}`);}} else {
  if (num1 > num2) {console.log(`${num3} > ${num1} > ${num2}`);}

else {
    console.log(`${num3} > ${num2} > ${num}`);}}


for (let i = 0; i < 21; i++) {
    console.log(i);}
  



