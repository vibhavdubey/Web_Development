// number : integer[10,20,31,45] + float[56.66,876.98756]
let num=10;
console.log(num);
console.log(typeof num);            //we shoud not write like this
console.log(typeof(num));           //we shoud use like this 

let numOne=10.568;
console.log(numOne);
console.log(typeof(numOne));

// basic [+,-,*,/]

console.log(10+20);

let a=101;
let b=102;
let c=a+b;
console.log(c);

//

let x=20;
let y=30;
console.log(x+y);

//advance
console.log(100+(200/x)*y);


//string ['' , "" , ``];

let msg1='hello';
let msg2="Ducat";
let msg3=`india`;


console.log(msg1);
console.log(msg2);
console.log(msg3);


console.log(typeof(msg1));
console.log(typeof(msg2));
console.log(typeof(msg3));


document.write("<h1>msg1</h1>");
document.write('<h1>msg2</h1>');
document.write(`<h1>msg3</h1>`);

// console.log(msg1 msg2 msg3);  this will give error
console.log(msg1,msg2,  msg3);  //this will give only one space in between
console.log(msg1 + msg2 + msg3);  //their will be no space between them

console.log(msg1+"  "+msg2+"  "+msg3); // we can give as many space according to our need
// document.write(msg1+"  "+msg2+"        "+msg3); //the ans well be printed on body but have onluy single space


document.write("<h1>Hello msg2</h1>");
document.write('<h1>Hello msg2</h1>');
document.write(`<h1>Hello ${msg2}</h1>`);  // the value of msg2 will be printed on body


console.log(`${msg1} msg2 ${msg3}`);

//boolen: [true, false] [1,0]  (if and else , switch)
let bool1=true; // let bool1="true"; we cannot write like this it will act as String.
let bool2=false;

console.log(bool1);
console.log(bool2);

console.log(typeof bool1);
console.log(typeof bool2);

let user="student";

if(user=='student'){
    console.log("hello student");
}else{
    console.log("byee");
}


//NULL
let boss=null;
console.log(boss);

//empty   their is no empty thing in js

let admin="";
console.log(admin);

//undefine

console.log(abc); //it is not define -it will give error
console.log(typeof(abc)); //it will show undefined