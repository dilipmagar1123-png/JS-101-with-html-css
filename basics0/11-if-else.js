let num = "10";
if (num === 10) {
  console.log(num);
} else if (num == 10) {
  console.log("num is 10 with type coercion");
} else {
  console.log("num is not 10");
}
// else{

// }
// ==,

//closer
let num1 = 10;
if (true) {
  console.log(num1);
  function outerFunction() {
    let num2 = 20;
    console.log("outer function called");
    console.log(num2);
  }
  outerFunction();
}
function factorial(n)
{
let fact=1;
for(let i=1; i<=n; i++)
{
fact= fact * i;
}
return fact;
}
console.log(factorial(5));



let age = 99;
if(age<18){
  console.log("YOu are not eligible to vote");
}
else if (age>=18){
  console.log("You are eligible to vote");}

function identify(age)
{

if(age>=18)
{ console.log("you are eligible for vote")
}else
{ console.log("you are not eligible for vote")}
}
identify(25)
identify(age)
identify(25)


