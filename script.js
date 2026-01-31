//----------------chapter 1, alert----------------//

// alert("chal raha hai")

//----------------chapter 2, Variables for Strings----------------//

// var thanks = "Thanks your for input"

// var thanks = "Thanks your for input thanks you soo much"

// alert(thanks)

//----------------chapter 2, Variables for number----------------//

// var num = 150;

// num + 50;

// var num2 = 150;

// var newNum = num2 + 200;

// console.log(newNum)

// var originalNum = 23;
// var numToBeAdded = 10;
// var newNum = originalNum + numToBeAdded;

// console.log(newNum)


// ----------------chapter 2, Variable Names Legal and Illegal----------------//




//----------------chapter 2, Math expressions Familiar operators----------------//

// var num = 1 - 2;

// console.log(num)

// alert(2 + 2);

// var num1 = 1;

// var newNum = ++num1;


// console.log(newNum);

// var number = ((2 * 4) * 4) + 2;

// console.log(number)

// var newNum = 8 * 4;

// console.log(newNum)


//----------------chapter 2, Concatenating text strings----------------//

// alert("Hi my name is abdul rafay")

// var intro = "Hi my name is abdul rafay"

// prompt(intro)

// var test = prompt("hi kya hall hai","rafay")

// console.log(test)


// var smg = "chal raha hai";

// alert("hi " + smg + " sahi hai ")

// var fname = "Thanks ";

// var m = "abdul rafay"

// var lname = "! "

// console.warn(fname + m + lname)


//----------------chapter 2, Concatenating text strings----------------//

// let num = prompt("enter your age","20")

// console.log(num)

// var smg = "enter your age";

// var ageNumber = 20;

// prompt(smg,ageNumber)


//----------------chapter 2, if statements----------------//

// var p = prompt("enter your age")

// if (p === "20"){
//     alert("sahi chal raha hai")
// } else {
//     alert("ya naaam sahi nahi hai")
// }

// var name = "rafay";

// if (p === name){
//     alert("sahi hai")
// }

// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
//     alert("Correct!");
// }
// if (x !== "Vatican") {
//     alert("Wrong answer");
// }

// var weight = prompt('enter your weight');
// var time = prompt('enter your time');
// var gender = prompt('whats your gender')

// if (weight >= 300 && time <= 6 && gender === "male") {
//     console.log("Chal raha hai")
// } else {
//     console.log("nahi chal raha")
// }

//----------------chapter 2, Array----------------//


// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];


// console.log(cities[2]);
// console.log(cities.length);

// alert("Welcome to " + cities[3]);

// var pets = [];

// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "rafay";

// console.log(pets)
// console.log(pets[4])

// var names = ["rafay","osama"];

// names.push("ali","bilal","we7890sdfghjkl")

// var array = ["rafay","ali"];

// array.unshift("ali")

// console.log(array)

//----------------chapter 1, For loop----------------//

// var array = ["rafay","ali","56f"];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])

// }

// var pets = ['dog', 'cat', 'bird'];

// pets.unshift('fish'); 

// console.log(pets)

// var image = "rafay"

// 

// console.log('hello world')


// function main(fname, test) {
//     console.log(fname);
//     test();
// }

// main("ali", innerFunction);

// function myFirst() {
//     console.log('hello')
// }

// function mySecond() {
//     console.log('goodBye')
// }

// mySecond()
// myFirst()


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let result = myCalculator(5, 5);
// console.log(result);

// function innerFunction() {
//     console.log('rafay')
//     console.log("khan");
// }

// function main(fname, test) {
//     console.log(fname);
//     test();
// }
// main("ali", innerFunction);

// function calculate(a, b, callback) {
//     return callback(a, b);
// }

// function multi(p, q) {
//     return p * q;
// }

// console.log(calculate(5, 10, multi));


// var arr = [1, 2, 3, 4, 5];

// var mapArr = arr.map(function (num) {
//     return num + 3;
// });
// console.log(mapArr);

// ------for lopp------------------

// var arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] === 3) {
//         alert('chal raha hai==>')
//         console.log(arr[i])
//     }
// }

// var arr2 = [1, 2, 3, 4, 5];

// let i = 5;

// for (let i = 2; i < arr2.length; i++) {
//     console.log(arr2[i])

// }

// ----------------wow--------------------//


// var changeCase = prompt('ENTER NAME');
// var changeCase2;

// changeCase = changeCase.toUpperCase();
// changeCase2 = changeCase.toLowerCase();

// console.log(changeCase);
// console.log(changeCase2);

// var changeCase = ['rafay', 'ali', 'osama', 'bilal'];
// var prompT = prompt('enter name')

// for (let i = 0; i < changeCase.length; i++) {

//     if (prompT == changeCase[i]) {
//         console.log('ya naam hai')
//         break;
//     } else {
//         console.log('ya naam nahi hai')
//         break;
//     }

// }


// var changeCase = ['rafay', 'ali', 'osama', 'bilal'];
// var prompT = prompt('enter name');
// prompT = prompT.toLowerCase();


// var found = false;

// for (let i = 0; i < changeCase.length; i++) {
//     if (prompT === changeCase[i]) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     console.log('ye naam hai');
// } else {
//     console.log('ye naam nahi hai');
// }

// ------------javascript function---------//


function call () {console.log('hello')}

