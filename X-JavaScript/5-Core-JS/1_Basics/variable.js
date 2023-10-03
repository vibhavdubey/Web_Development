// variable : container : tag
//syntax : variableName(user define)="Value"
//name conersion

//global variable (we can declear global variable like this.)
data="welcome Ducat India"
console.log(data);
document.write(data);

// example 2
myemail="vibhavdubey19@gmail.com";
myemail="vibhavdubey123@gmail.com";
MYEMAIL="hello@gmail.com"
console.log(myemail); //(data of line 12 will be printed)
console.log(MYEMAIL);//(data of line 13 will be printed)

//not allowed to declear variable like this.
//my email="Hello@google.com";
//my-email="Hello@google.com";
//1myEmail="User@ducat.com";
//@myEmail="hello@ducat.com";

//we can declear variable like this .
my_email="Hello@google.com";
myEmail="hello123@gmail.com"; //we should follow camel cases.
myEmail1="User@ducat.com";

// var : override
var myData="hello";
var myData="hello Ducat";
console.log(myData);
// Prefer not to use var because of issue in block scope and functional scope.


// const : not dublicate
const myData1="Ducat";
// const myData1="Ducat 123";
//myData1="IndiA";
//var myData1="IndiA";
console.log(myData1);

//let : 
let a=100;
//let a=101;
//const a=101;
//var a=101;
a=101;
console.log(a);

/////////////////////////////////////////////////////////////
// {}
// global scope
// block scope
var data=10;

console.log(data);

{
    let data=20;
    console.log(data);
}

console.log(data);



//How should I name the variables in my JavaScript code?

// Variable names must start with a letter, an underscore (_) or a dollar sign ($).
// Variable names cannot contain spaces.
// Variables cannot be the same as reserved keywords such as if or const.
// By convention, JavaScript variable names are written in camelCase.
// Variables should be given descriptive names that indicate their content and usage (e.g. sellingPrice and costPrice rather than x and y).
// As JavaScript variables do not have set types, it can be useful to include an indication of the type in the name
//  (e.g. orderNumber is obviously a numeric ID, whereas order could be an object, a string or anything else).



// If we have not initialize a variable it will print undefined.
