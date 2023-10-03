//type 1
//we have define a function
function hello(){
    console.log("Welcome to function");
}
// function calling
hello();


//type 1.1
// we have to allways return it we should not print.
function hello(){
    return "Welcome to function";
}
// function calling
console.log(hello());


//type 2
const app=function hello(){return "Hello Js";};
console.log(app); //this will print whole statement.


const app1=function (){return "Hello Js";};  //unnamed function
console.log(app());


//type 3 (arrow function)
const app2=()=>"Hello Developer";
console.log(app2());

