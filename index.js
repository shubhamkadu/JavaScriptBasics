// varibles naming
// varibles case sensitive in js

// var  name ="shubham";
// var _name = "shubham";
// var _1name__name = "shubham";
// var $name = "shubham";

//datypes

// string
// number
// boolean
// undefined
// Bigint
// symbol

// console.log(10 + "20"); //30
// console.log(10 - "20"); // -10 bug
// console.log("shubham" + "kadu"); //shubhamkadu
// console.log(" " + " "); //    // blank space
// console.log("" + 0); // 0 it is a string
// console.log(typeof ("" + 0)); // string
// console.log("subham" - "shubham"); // NaN
// console.log(true + true); // 2   // true = 1 and false = 0
// console.log(false + false); //0
// console.log(true + false); // 1
// console.log(false - true); // -1

//difference between null and undefined

// var name1 = null; // null
// console.log(typeof name1); //object
// var lastNmae; // undefined
// console.log(typeof lastNmae); //undefined

// what is NaN
// is a property of global object

// var num = 329864;
// var name1 = "shubham";
// console.log(isNaN(num)); // false
// console.log(isNaN(name1)); // true
// console.log(NaN === NaN); // false
// console.log(Number.NaN === NaN); // false
// console.log(isNaN(NaN)); //true
// console.log(isNaN(Number.NaN)); //true

//postfix increament

// var num=10
// var newnum= num++
// console.log(num)  //11
// console.log(newnum) //10

//prefix increament

// var num=10
// var newnum= ++num
// console.log(num)  //11
// console.log(newnum) //11

// var a=10
// var b =20
// b,a = a,b
// console.log(a) //
// console.log(b) //

// var a=10
// var b='10'
// console.log(a==b) // true
// console.log(a===b) //false

// let myname='shubham'
// if(myname=='shubham') console.log(myname)

// var Myname = "shubham"
// switch(Myname) {
//     case "shubham":
//         console.log(Myname)
//     break
//     case "toshnat":
//         console.log('ravi')
//     break
//     case 'rugwed':
//         console.log('himanshu')
//     break
//     default:
//         console.log('buddy')
// }

// do while  loop

// var num = 20

// while(num<=10){
//     console.log(num)
//     num++   // if we didn't' put num++ it will run infinite loop
// }

// do while loop statement

// var num = 10

// do{
//     console.log(num)
//     num++
// }while(num<=10)

//function

// function sum(a,b){  //a,b is called parameter
//     return a+b
// }

// sum(2,3) // 2,3 is called argument

//Anonymious function

// var sum=function(a,b){
//   console.log(a,b)
// }

// sum(1,2)

//ES6

// let vs var vs const

// var name1 = 'shubham'
// console.log(name1) //shubham
// name1='toshant'
// console.log(name1)//toshant

// let  name1 = 'shubham'
// console.log(name1) //shubham
// name1='toshant'
// console.log(name1)//toshant

// const  name1 = 'shubham'
// console.log(name1) //shubham
// name1='toshant'
// console.log(name1)// errors

//var =>accessible out of the block scope
//let =>inaccessible out of the block scope

// function biodata() {
//   var myname = "shubham";
//   console.log(myname);
//   if (true) {
//     var mylastname = "kadu";
//     console.log(mylastname);
//     console.log(myname);
//   }
//   console.log(mylastname);
// }

// biodata()

// function biodata(){
//     let myname = 'shubham'
//     console.log(myname)
//     if(true){
//         let mylastname = 'kadu'
//         console.log(mylastname)
//         console.log(myname)
//     }
//     console.log(mylastname) // mylastname inaccessible
// }

// biodata()

//   function biodata() {
//   const myname = "shubham";
//   console.log(myname);
//   if (true) {
//     const mylastname = "kadu";
//     console.log(mylastname);
//     console.log(myname);
//   }
//   console.log(mylastname); //ReferenceError: mylastname is not defined
// }

// biodata()

//template literal

// const myname = 'shubham'
// console.log(`this is myname${myname}`)

//default parameters
// allow named parameter to be initialized with default values if no value or undefined is passed

// function sum(a,b=5){
//     return a+b
// }
// console.log(sum(3))

//arrow function

//ReferenceError: Cannot access 'sum' before initialization
// console.log(sum(3));
// const sum =(a, b = 5)=>{
//   return a + b;
// }

// const sum = (a, b = 5) => {
//     return a + b;
// };
// console.log(sum(3));

//array

// collection of hiterogeneous data
//in js we have an array class and arrays are the prototype of this class

// var names = ['shubham','toshant','rugwed']

// console.log(names[2]) //rugwed
// console.log(names.length)//3
// console.log(names[names.length - 1])  //rugwed

// var names = ["shubham", "toshant", "rugwed"];

// for(var i=0;i<names.length;i++){
//     console.log(names[i])
// }

// // for in loop give us index of elements
// for(let ele in names){
//     console.log(ele)
// }
// for of loop give us elements

// for (let ele of names) {
//   console.log(ele);
// }

// forEach loop
//call a function for each element of array

// var names = ["shubham", "toshant", "rugwed"];

// names.forEach((ele, index, array) => {
//   console.log(ele);
//   console.log(index);
//   console.log(array);
// });

// var names = ["shubham", "toshant", "rugwed"];

// names.push("vedant");
// console.log(names); //[ 'shubham', 'toshant', 'rugwed', 'vedant' ]

// names.unshift("himanshu");
// console.log(names); //[ 'himanshu', 'shubham', 'toshant', 'rugwed', 'vedant' ]

// names.unshift("yy", "zzz");
// console.log(names); //['yy','zzz','himanshu', 'shubham','toshant',  'rugwed','vedant']

// names.pop();
// console.log(names); //[ 'yy', 'zzz', 'himanshu', 'shubham', 'toshant', 'rugwed' ]

// names.shift();
// console.log(names); //[ 'zzz', 'himanshu', 'shubham', 'toshant', 'rugwed' ]

// names.splice(2, 0, "yash");
// //zero delete,add yash at 2nd position
// console.log(names); //[ 'zzz', 'himanshu', 'yash', 'shubham', 'toshant', 'rugwed' ]

// names.splice(2, 4, "yash");
// console.log(names); //[ 'zzz', 'himanshu', 'yash' ]

// names.splice(names.length, 0, "kunal");
// console.log(names); //[ 'zzz', 'himanshu', 'yash', 'kunal' ]

// var names = ["shubham", "toshant", "rugwed"];

// const aa = names.splice(0, 2);
// //it return the deleted array

// console.log(aa); //[ 'shubham', 'toshant' ]

// var names = ["shubham", "toshant", "rugwed"];

// const indexofnames = names.indexOf('toshant')
// // if indexOf doesn't fount anything it return -1

// if(indexofnames !== -1){
//   const updated = names.splice(indexofnames, 1, "TOSHANT");
//   console.log(names); //[ 'shubham', 'TOSHANT', 'rugwed' ]
//   console.log(updated); //[ 'toshant' ]
// }else{
//     console.log('no match found')
// }

// const array1=[1,2,3,4,5,6,7]
// let newarray = array1.map((curr,index,arr)=>{
//    return curr>4
// })
// console.log(newarray) //[false, false,false, false,true,true,true]

// const array1 = [1, 2, 3, 4, 5, 6, 7];
// let newarray = array1.map((curr, index, arr) => {
//   return `element ${curr} index ${index} array ${arr[index]}`;
// });
// console.log(newarray);

// [
//   "ele 1 index 0 array 1",
//   "ele 2 index 1 array 2",
//   "ele 3 index 2 array 3",
//   "ele 4 index 3 array 4",
//   "ele 5 index 4 array 5",
//   "ele 6 index 5 array 6",
//   "ele 7 index 6 array 7",
// ];

// const arr = [25, 36, 49, 64, 81];

// let newarr = arr.map((curr) => Math.sqrt(curr));
// console.log(newarr); //[ 5, 6, 7, 8, 9 ]

// String in js

// // creating string using string constructor
// const myname = new String('shubham')
// console.log(myname) //[String: 'shubham']

//escape characters

// const names = "typescript is the \"superset\" of javascript"
// console.log(names) //typescript is the "superset" of javascript

// const names = 'typescript is the "superset" of javascript'
// console.log(names) //typescript is the "superset" of javascript

// const names = 'typescript is the superset of javascript'
// console.log(names.indexOf('is')) //11

// const names = "typescript is the superset of javascript";
// console.log(names.search('superset'))//18

// const names = "typescript is the superset of javascript";
// // doesn't' change the original array
// console.log(names.slice(0, 4)); //type

// console.log(names.substr(-4)); //ript

// const names = "typescript is the superset of the javascript";

// let newnames = names.replace('the','THE')
// console.log(newnames); //typescript is THE superset of the javascript
// console.log(names.charAt(9))//t
// console.log(names.charCodeAt(9))//116

// let datacurr = new Date()
// console.log(datacurr) //2022-04-30T16:25:44.372Z
// console.log(datacurr.toDateString()) //Sat Apr 30 2022
// console.log(datacurr.toString());   //Sat Apr 30 2022 10:25:44 GMT-0600 (Central Standard Time)
// console.log(datacurr.toLocaleString()); //4/30/2022, 10:25:44 AM

// (function(){
//   setInterval(()=>{
//       console.log(new Date().toLocaleString()); //Sat Apr 30 2022 10:25:44
//   },1000)
// })()

// let num=19.4484
// console.log(Math.round(num)) //19
// console.log(Math.pow(2,3)) //8
// console.log(Math.sqrt(81)) //9
// console.log(Math.abs(-81));//81
// console.log(Math.ceil(4.1));//5
// console.log(Math.floor(81.999));//81
// console.log(Math.min(81,4,67,5,3,-10));//-10
// console.log(Math.max(81,4,67,5,3,-10));//81
// console.log(Math.floor(Math.random()*10)) //random number 0-9
// console.log(Math.trunc(-4.1));//-4

//events in js
// 4 ways of writing the events
// HTML event are things that happen to HTML elements
// when javascript is used in HTML pages,javascript can react on these events

// OOPS IN JS
// what is object literals?
// object literal is simply key value pair data structure
// storing variable and function together in one container,
// we can refer this as an object

// creating an object

// let myData ={
//     myName:'shubham',
//     age:24,
//     getData:()=> console.log(`my name is ${myData.myName} and age is ${myData.age}`)
// }

// console.log(myData.myName)
// console.log(myData.age)
// myData.getData()

// let myData = {
//   myName: {
//       realName:'shubham',
//       collegeName:'toshant'
//   },
//   age: 24,
//   getData() {
//     console.log(`my name is ${myData.myName.realName} and age is ${myData.age}`);
//   },
// };

// console.log(myData.myName.realName);
// console.log(myData.age);
// myData.getData();

// what is this object

// the defination of this object is that it contains the current context
// the this object have diefferent values depending on where it is placed

// console.log(this); //if we execute this line of code in browser then this object will pointing to window object

//if we execute this code in browser then this object will pointing to window object
// let mydata = ()=>{
//     console.log(this)
// }
// mydata()

//execute in browser console

// var myname = "shubham";
// let mydata = function() {
//   console.log(this.myname);
// };

// mydata(); //shubham

// const obj = {
//     myname:'shubham',
//     age:25,
//     myfunc(){
//         console.log(this)
//     }
// }

// obj.myfunc()//{ myname: 'shubham', age: 25, myfunc: [Function: myfunc] }

// if we use arrow function it will pointing to the window object

// const obj = {
//   myname: "shubham",
//   age: 25,
//   myfunc:()=>{
//     console.log(this);
//   },
// };

// obj.myfunc();

// Array destructuring

// const myBioData = ['shubham','kadu',26]

// let myFname = myBioData[0];
// let mylastname = myBioData[1];
// let myage = myBioData[2];

// console.log(myFname)

// const myBioData = ["shubham", "kadu", 26];

// let [myFname, mylastname, myage] = myBioData
// console.log(mylastname)

// const myBioData = ["shubham", "kadu", 26];

// let [myFname, mylastname, myage,mynewname='toshant'] = myBioData;
// console.log(mynewname);

//object properties

//dynamic properties

// let myname = "shubham";
// let age=24
// const obj = {
//   [myname]: "shubham",
//   [age]: '25',
// };

// console.log(obj);//{ '24': '25', shubham: 'shubham' }

// let myname = "shubham";
// const obj = {
//   [myname]: "shubham",
//   [20+2]: '25',
// };

// console.log(obj);//{ '22': '25', shubham: 'shubham' }

// let myname = "shubham";
// let age =23
// const obj = {
//   myname: myname,
//   age: age,
// };
// console.log(obj) //{ myname: 'shubham', age: 23 }

// or;

// let myname = "shubham";
// let age = 23;
// const obj = { myname, age };
// console.log(obj); //{ myname: 'shubham', age: 23 }

// ES7 =>2016

// 1:array include

// const color=['red','yellow','blue']

// console.log(color.includes('red'))//true

//2:**
// console.log(2**3)//8

//ES8

// let myname = 'shubham'.padStart(8)
// console.log(myname)

// let myname1 = "shubham".padEnd(8);
// console.log(myname1);

// const ob1 = { myname: 'shubham', age: 23 }
// console.log(Object.values(ob1)) //[ 'shubham', 23 ]
// console.log(Object.entries(ob1)); //[ [ 'myname', 'shubham' ], [ 'age', 23 ] ]

//ES9

// const person = { myname: "shubham", age: 23 };
// const person1 = {...person}
// console.log(person)//{ myname: 'shubham', age: 23 }
// console.log(person1)//{ myname: 'shubham', age: 23 }

//flat()

// const aarr = ["shubham", "kadu", 26,['to','ti',['dd','ff']]];
// console.log(aarr.flat()) //[ 'shubham', 'kadu', 26, 'to', 'ti', [ 'dd', 'ff' ] ]
// console.log(aarr.flat(2)); //[ 'shubham', 'kadu', 26, 'to', 'ti', 'dd', 'ff' ]
// console.log(aarr.flat(Infinity));//[ 'shubham', 'kadu', 26, 'to', 'ti', 'dd', 'ff' ]

//flatmap()

// let arr1 = [1, 2, 3, 4];

// arr1.map(x => [x * 2]);
// // [[2], [4], [6], [8]]

// arr1.flatMap(x => [x * 2]);
// // [2, 4, 6, 8]

// // only one level is flattened
// arr1.flatMap(x => [[x * 2]]);
// // [[2], [4], [6], [8]]
