// //this is the multiplication function 
// function multiplyfunction(p1, p2){
//     return p1*p2;

// }
// let result1 = multiplyfunction(5,5);
// document.getElementById("demo1").innerHTML="This is the answer of multiplication: "+result1;

// //this is the division function
// function dividefunction(p1, p2){
//     return p1/p2;

// }
// let result2 = dividefunction(5,5);
// document.getElementById("demo2").innerHTML="This is the answer of division: "+result2;

// //this is the additon function
// function plusfunction(p1, p2){
//     return p1+p2;

// }
// let result3 = plusfunction(5,5);
// document.getElementById("demo3").innerHTML="This is the answer of addition: "+result3;

// //this is the subtraction function 
// function minusfunction(p1, p2){
//     return p1-p2;

// }
// let result4 = minusfunction(5,5);
// document.getElementById("demo4").innerHTML="This is the answer of subtraction: "+result4;

//create an object named person 


// const factory = {
//     factoryname:"MSscrubs tax ",
//     taxstatus:"paid",
//     owner:function(){
//         return this.factoryname+"for the year 2024 is "+this.taxstatus;

//     }
// };

// the map function is use to map the values of cuyrrent array into the new arrayz like if wwe want to multiply the value of 2 from the whole array so we will use the concept ofmapiung function s

//////MAP FUNCTION IN ARRAY////
// const numbers1 =[2,4,6,8,10];
// const numbers2= numbers1.map(myFunction)
// document.getElementById("demo").innerHTML=numbers2;
// function myFunction(value){
//     return value * 5;
// }


////FLATMAP METHOD FOR USING THE ARRAYS
// const num1=[2,4,6,8,10]
// const newarr= num1.flatMap(x=>[x,x*0]);
// document.getElementById("demo").innerHTML=newarr;


//REDUCE FUNCTION IN ARRAY 
// const numbers=[45,5,10,20,10,5,5];
// let first = numbers.reduce(myfunction);

// document.getElementById("demo").innerHTML="the sum of all the values is " + first;

// function myfunction(total,value){
//     return total + value;

// }
// //FOREACH FUNCTION IN JAVASCRIPT

// const fe=[" zaki"," tahir"," john"," doe"];
// let txt="";
// fe.forEach(myfunction);
// document.getElementById("demo").innerHTML=txt;

// function myfunction(value, index){
//     txt += value;
// }

// function myFunction(z1,z2){
//     return z1 * z2;
// }

// let result = myFunction(2,3);
// document.getElementById("demo1").innerHTML=result;

// function plusfunction(p1,p2){
//     return p1 + p2;
// }

// let result1 = plusfunction(3,5);
// document.getElementById("demo2").innerHTML=result1;

// let x = myfunction(4, 3);

// function myfunction(a, b){
//     return a*b;
// }

// document.getElementById("demo1").innerHTML=myfunction;

//FUNCTION TO CONVERT TEMPERATURE FROM FAHRENHEIT TO CELSIUS

// // Function to convert Fahrenheit to Celsius
// function toCelsius(f) {
//     return (5/9) * (f - 32);
// }

// // Function to convert Celsius to Fahrenheit
// function toFahrenheit(c) {
//     return (c * 9/5) + 32;
// }

// // Prompt user for conversion choice
// let method = prompt("Which conversion do you want to perform? (Enter 'f to c' for Fahrenheit to Celsius or 'c to f' for Celsius to Fahrenheit):");

// // Prompt user for temperature value and convert accordingly
// let value;
// if (method == "F to C") {
//     let fahrenheit = prompt("Enter the temperature in Fahrenheit:");
//     value = toCelsius(fahrenheit); // Convert to Celsius
//     document.getElementById("demo1").innerHTML = "The converted temperature in Celsius: " + value;
// } else if (method == "C to F") {
//     let celsius = prompt("Enter the temperature in Celsius:");
//     value = toFahrenheit(celsius); // Convert to Fahrenheit
//     document.getElementById("demo1").innerHTML = "The converted temperature in Fahrenheit: " + value;
// } else {
//     document.getElementById("demo1").innerHTML = "Invalid method chosen. Please enter either 'F to C' or 'C to F'.";
// }

// JSON PARSING IN JAVASCRIPT

// const txt = '{"name":"zaki","age":"20","eyecolor":"blue"}';
// const obj = JSON.parse(txt);
// document.getElementById("demo").innerHTML=obj.name + " is "  + obj.age + " years old and his eyecolor is " + obj.eyecolor;


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);  // Corrected this line
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value=""; 
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    
}, false);

// //PROGRAM FOR SIMPLE CALCULATOR
// const operator = prompt('enter operator(either +, -, * or /): ');

// //TAKING THE OPERAND INPUT
// const number1= parseFloat(prompt('Enter first number: '));
// const number2= parseFloat(prompt('enter second number: '));

// let result;

// //using if else

// if(operator == '+'){
//     result= number1 + number2;
// }
// else if(operator == '-'){
//     result= number1 - number2;
// }
// else if(operator == '*'){
//     result= number1 * number2;
// }
// else{
//     result= number1 / number2;
// }

// document.getElementById("demo").innerHTML=result;





  


















