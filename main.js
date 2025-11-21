let operation=prompt("Enter operation(+,-,*,/)");
let num1=Number(prompt("Enter first Number:"));
let num2=Number(prompt("Enter Secound Number:"));

let Result;
if(operation==="+")
{
    Result=num1+num2;
}
else if(operation==="-")
{
     Result=num1-num2;
}
else if(operation==="*")
{
     Result=num1*num2;
}
else if(operation==="/")
{
     Result=num1/num2;
}
console.log("Result = "+Result);

document.getElementById("showDate").innerHTML = `Operation: ${operation} <br> Number1: ${num1} <br> Number2: ${num2} <br> Result: ${Result}<br>`;

//mark
let mark=88;
let grade;

if(mark<50)
{
     grade="FAIL";
}
else if (mark >= 50 && mark <= 59) {
   grade="D";
}
else if (mark >= 60 && mark <= 69) {
    grade="C";
}
else if (mark >= 70 && mark <= 79) {
    grade="B";
}
else if (mark >= 80 && mark <= 89) {
 grade="A";
}
else if (mark >= 90 && mark <= 100) {
 grade="A+";    
}
else {
    document.write("Invalid mark!");
}

document.getElementById("showDate").innerHTML += `Grade: ${grade}<br><br>`;

const pi=3.14;
let redius=5;
let area=pi*redius;
document.getElementById("showDate").innerHTML += `Area: ${area}`;


let x=Number(prompt("Enter number X"));
let y=Number(prompt("Enter number Y"));
let msg;
if(x>y)
{
    msg="Hello World";
}
else
{
    msg="Goodbye";
}
alert(msg);
console.log(msg);