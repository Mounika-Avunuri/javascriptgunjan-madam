/*console.log("welcome");
console.error("error");
console.warn("warn");
console.table({"a":10,"b":20});
console.clear(clear);
//string*/
//Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code: 
var text="hello gunjan madam"+
  "my name is mounika";
//console.log("text");
 //text[1]="j";
 console.log(text);

 //number
 var num=123;
 console.log(num);

 console.log(text.length);

 //not a number
 var num2 = "ab"/1;
 console.log(num2);

 //boolean
  var a =5;
  var b=6;
  console.log(a==b);

  //bigint
  var val=3n;
  console.log(val+1n);

  //undefined
  var n;
  console.log(n);
  console.log(typeof(n));
  console.log(typeof(num));
  console.log(typeof(text));

  //object

  var obj={
      firstName:"mounika",
      lastName:"aileni",
      city:"Delhi"
  }
  console.log(obj.firstName);
  console.log(obj["lastName"]);

  //Array

  var fruits = ["Apple","mango","banana"];
  console.log(fruits[0]);
  console.log(fruits);
  console.log(fruits.length);

  var fruits = new Array("Apple","banana","orange",12,56,98);
  console.log(fruits);
  
  var cars=[];
  cars[0] = "BMW";
  cars[1] = "baleno";
  console.log(cars);

  var firstName="gunjan";
  var lastName="madan";
  var result=`my name is ${firstName} ${lastName}`;
  console.log(result);

  var num1=12;
  var num2=4;
  var result=num1+num2;
  console.log("Addition = "+result);
  
  var result=num1-num2;
  console.log("substraction =" +result);

  var result = num1*num2;
  console.log("multiplication = " + result);

  var result = num1%num2;
  console.log("modulus=" + result);

  var result = num1 ** num2;
  console.log("exponentiation = "+result);

  var result = ++num1;
  console.log("pre increment = "+result);

  var result=num1/num2;
  console.log("division="+result);
   
  var result = --num1;
  console.log("pre decrement="+result);
   
  ++num1;
  console.log(num1);
  --num1;
  console.log(num1);

  //comparision operators
   var num3=4;
   var num4='4';
   var num5=5;
   //console.log(num3=num4);
   console.log(typeof(num3));
   console.log(num3===num4);
   console.log(num3==num4);
   console.log(num3>=num5);//false
   console.log(num3<=num5);//true

   //logical operators
    var num6=2;
    var num7=10;
    var num8=1;
    console.log("result="+((num7>num6)&&(num7>num8)));

    var age=12;
    console.log(age<18||age>62);

    var num6=5;
    var num7=4;
    console.log(!num6>num7);

    var age=30;
    age+=2;
    console.log(age);//32

var age1=30;
    age1-=2;
    console.log(age1);//28

    var age2=30;
    age2*=2;
    console.log(age2);//60
    
    var age3=30;
    age3/=2;
    console.log(age3);//15

    var age4=30;
    age4%=2;
    console.log(age4);//0

    var age5=30;
    age5/=2;
    console.log(age5);//15
//ternery operator
var a=10;
var b=15;
c=(a>b) ? a:1

console.log(c);


//conditional statements

var marks=55;
if(marks>90){
    console.log("A");
}
else if(marks>75)
{
    console.log("B");
}
else
{
    console.log("c");
}
console.log("hello");

//switch
var x=0;
switch(x){
    case 0:
        console.log("numeric 0");
        break;
    case "0":
        console.log("string 0");
    case 1:
        console.log(1);
        break;
    case 2:
        console.log( "the value is 2");
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log(x);
        break
}

for(var i=0;i<=10;i++){
    console.log("hello",i);
}

for(var x=0;x<=20;x++){
    if(x%2==0)
    {
        console.log("even numbers are",x);
    }
}

//for in(loops through the properties of an object)
var obj = {
    firstName:"mounika",
    lastName:"Aileni",
    city:"hyderabad"
}
for(var x in obj){
    console.log(obj[x]);
}
//arrays

const numbers=[12,44,89,09,8];
var total=0;
for(var x in numbers){
    total=total+numbers[x];
}
console.log(total);

//while loop
var i=0;
while(i<=20){
    console.log(i);
i++;
}
//do while
var j=11;
do{
    console.log(j);
    j++;
}
while(j<=9)
//use of break and continue
//program for printing the first multiple of 6 between 20 and 40
var k=20;
while(k<=40){
    if(k%6==0){
        console.log(k);
        break;
    }
    k++;
}

//write a program to print except divisibles of  3
var m=0;
while(m<=10){
    m++;
    if(m%3==0){
        continue
    }
    console.log(m);

}

function Add(){
    var num1=90;
    var num2=89;
    console.count("counting:");
    console.log("Addition of 2 numbers :", num1+num2)
}
Add()
Add()
Add()

function sum(a,b){
    console.log("addition:",a+b);
}
sum(12,20)

function Add(num1,num2){
    num1 = num1 + num2;
    console.log("addition",num1);
}
num1=5;
num2=10;
Add(num1,num2);
console.log(num1);

function changeArr(obj1){
    obj1[0]='c';
console.log(obj1);
}
var arr=['a','b'];
changeArr(arr)
console.log(arr);

//Arguements object

function displayMessage(city,country){
    console.log(city + " "+ country);
}
displayMessage("pune","india");


function displayMessage(city,country){
    console.log(arguments[0] + " "+ arguments[1]);
}
displayMessage("hyderabad","india");

function displayMessage(){
    console.log(arguments.length);
    console.log(arguments[0] + " "+ arguments[1]);
}
displayMessage("mumbai","india");

function Add(num1,num2){
    num1 = num1 + num2;
    return num1;
}
result= Add(45,12);
console.log(result);

//function expression
 var sub = function(sub1,sub2){
     sub1=sub1-sub2;
     return sub1;
 }
 result =  sub(40,20);
 console.log(result);

 //nested functions
  function Addition(num1,num2){
      function showMessage(){
          console.log("Hello",num1);
      }
      showMessage();
      num1 = num1 + num2;
      return num1;

  }
  Addition(12,11);

  var newVar = 20;
  function changeVar(){
      var newVar = 30;
      console.log("Inside the function" + newVar);
  }
  changeVar();
  console.log("outside the function" + newVar);

  //string funcions

  var str ="Hello world ,are you there";
  var str1 = "world";
   //str = str.concat(str1);
   console.log(str);
   console.log(str.substring(1,3));//start,length
   console.log(str.toLowerCase());
   console.log(str.toUpperCase());
   console.log(str1.slice(1,3));
   str = str.replace("world","there");
   console.log(str);
   console.log(str.split(","));
   var a =22;
   var b =String(a);
   console.log(typeof(b));

   //array functions
   var arr=["a","b","c"];
   console.log(arr.toString());
   arr.pop();
   console.log(arr);
   arr.push("d");
   console.log(arr);
   arr.shift();
   console.log(arr);
   arr.unshift("ab");
   console.log(arr);

   //adding to array
   var fruits=["Apple","mango","banana ","kiwi"];
   fruits.splice(2,0,"orange");
   console.log(fruits);

   //Add as well as remove
   fruits.splice(2,1,"watermelon");
   console.log(fruits);

   fruits.splice(1,3);
   console.log(fruits);
   var vegs = ['onion','cabbage'];
   var spices = ['salt'];
   var comb = fruits.concat(vegs,spices);
   console.log(comb);
   console.log(comb.sort());
   console.log(comb.reverse());

   var x=12;
   console.log(isNaN(x));
   //Math class
   console.log(Math.ceil(45.52));
   console.log(Math.floor(45.12));
   console.log(Math.min(4,5,89,75));
   console.log(Math.max(45,89,99,100));
   console.log(Math.round(52.78));
   console.log(Math.floor(Math.random()*100));
console.log(Math.abs(14.5858));

//javascript Hoisting
//Hoisting is the concept of js moving all declarations to the top.
console.clear();//Hoisting is only possible with declaration but not the initialization. JavaScript will not move variables that are declared and initialized in a single line.Hoisting is only possible with declaration but not the initialization. JavaScript will not move variables that are declared and initialized in a single line.
x = 2;
console.log(x);//2
var x;

console.log(y);//undefined
var y=2;//Hoisting is only possible with declaration but not the initialization

//Hoisting of Function
//JavaScript compiler moves the function definition at the top in the same way as variable declaration.
console.log(mul(10,5));
console.log(mul());
function mul(val1,val2){
    return (val1 * val2);
}
//Please note that JavaScript compiler does not move function expression.

Add(10,5);
try{
var Add = function Sum(a1,a2)
{
    return a1+a2;

}
}
catch(ex){
    console.log(ex);
}

//functions are hoisted before variable declarations
alert(UseMe);

		var UseMe;

		function UseMe()
		{            
			alert("UseMe function called");
		}
//Local and global scope

var greet = "Hello";
function Greetings(){
    var msg= "world";
    console.log(greet+""+msg);
}
Greetings();
console.log(greet);
console.log(msg);
console.clear();

let fruits1 = ['Apple' , 'Banana'];
console.log(fruits1.length);
console.log(fruits1.push('sapota'));