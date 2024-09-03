function test() {
  alert("welcome to jacsript");
  document.write("hello");
}

//                     ARRAY CREATION WAYS

//First Way
function arrayUse() {
  const names = ["kp", "hp", "sp"];
  for (let i in names) {
    document.write("<br>" + names[i]);
  }
}

//Second Way
function arrayUse2() {
  const names2 = new Array();
  names2.id = 10;
  names2.fname = "Kapil";
  names2.lname = "pise";
  for (let i in names2) {
    document.write("<br>" + names2[i]);
  }
}

//Third Way

function arrayUse3() {
  const names3 = new Array(101, "kp", "SP", "MP");
  for (let i in names3) {
    document.write("<br>" + names3[i]);
  }
}

//    OBJECT CREATION WAYS

//Fisrt way
function ObjectDemo() {
  const person = {
    id: 101,
    name: "kapil",
    age: 22,
  };

  document.write(person.id + " " + person.name + " " + person.age);
}

//second way

function ObjectDemo2() {
  const person = new Object();
  (person.id = 101), (person.name = "SJ"), (person.age = 22);
  document.write(person.id + " " + person.name + " " + person.age);
}

//Third Way

function ObjectDemo3() {
  function person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  const obj = new person("kapil", "pise", 22);
  document.write(obj.firstName + " " + obj.lastName + " " + obj.age);
}


//push Element in Array.

function ArrayPush(){
  const fruits = ["banana","Apple"];
  for(let i in fruits){
    document.write(fruits[i]+" ");
  }
  document.write("<br>")

  fruits.push("Orange");
  for(let i in fruits){
    document.write(fruits[i]+" ");
  }

}


//Actual Name given to a function is called Synonymous Function.
//Factorial Of Number.

 const factorial = function fact(n){
  return n < 2 ? 1 : n * fact(n-1);
 }
// document.write(factorial(5));


//Actual Name Not given to a function is called Anonymous Function.
const square  = function(number){
  return number * number;
}
//console.log(square(4));


function test(){

  test1();
  function test1(){
    document.write("test1");
  }

}

//Calculate Electricity Bill
function ElectricityBill(units){
  let total = 0;
  if(units <=100){
    total = (units*5) + 150;
    document.write(total);
  }else{
    total = (units*8) + 150;
    document.write(total);
  } 
}
//ElectricityBill(50);  


//Calculate Volume Of Cylinder
function VolumeCylinder(r,h)
{
  const pi = 3.14;
  let volume = pi*(r*r)*h;
  document.write("Volume of Cylinder is :"+volume);
}

                    //OPERATORS IN JS.
// var a = 100;
// document.write(a++);  
// document.write(++a);


function marks(){
let marks = 76;

switch(true){
  case marks>50 && marks <=60 :
    document.write("You got between 50 & 60")
    break;
  case marks >60 && marks <=70:
    document.write("You got between 60 & 70")
    break;

    case marks >70 && marks <=80:
    document.write("You got between 70 & 80")
    break;

    case marks >80 && marks <=90:
    document.write("You got between 80 & 90")
    break;

    case marks >90:
    document.write("You got above 90")
    break;

    default:
      document.write("You Failed")
}
}


function prime(num){

var result = false;
while(num>2){
  for(let i = 2;i<=num/2;i++){
    if(num % i ==0){
      result = true;
    }
  }
  if(result == true){
    document.write("prime")
  }else{
    document.write("Not prime")
  }
}

}


