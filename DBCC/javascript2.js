// // single line comments

// /*
//     multi
//     line
//     comments
// */

// //console printing

// console.log("Hello");

// // data type
// console.log('IBAB');
// console.log(25);
// console.log(20.5);

// //concatention
// console.log('Hello' + ' ' + 'World')

// //Arithmetic Operation
// console.log(1.5+10)
// console.log(2.5*10)
// console.log(5-1)
// console.log(5/2)

// //string-properties

// console.log("Hello".length);

// //string-method

// console.log("Hello".toUpperCase());


// //variable

// //using var

// var food="pizza";
// var num=9;
// console.log(food);

// //using let
// let temp='hello';
// console.log(temp);

// // difference between let and var
// {
//     var temp1='test';
//     //let temp1='test'
//     console.log(temp1);
// }
// console.log(temp1);
// //let us having block scope 
// //scope of var is also outside of block(global) - occupies whole memory, occupies entire context 

// const pi=3.14;
// console.log(pi);
// // pi=3
// // console.log(pi)

// let newvar='IBAB class'; // prefer using single quote
// console.log(typeof newvar);

// /* type safe languages-is it better?- less runtime error, memory efficient, 
// especially when limited resources henvce c is fastest */

// newvar=10;
// console.log(newvar);

// //Mathematical assigment of variable 
// let a=6;
// a=a+5;
// a+=5
// a-=10
// let v=10;
// v++;
// v--;

// //concatenation of variables
// let s1='ibab';
// let s2='class';
// console.log(s1+" "+s2);


// //comparison operator 
// let test_marks=7;
// if(test_marks>6)
// {
//     console.log("pass");
// }
// else
// {
//     console.log("fail");
// }

// //multiple conditions
// let mark1=80;
// let mark2=70;
// if (mark1>=80 && mark2>=80){
//     console.log("excellent");
// }
// else{
//     console.log("average");
// }

// //loop
// // 3 processes run 10^9 times so,  - 3 GHz - will take 1 sec - our ysetm - 4.60 GHz
// for(let i=0;i<1000000000;i++){

// }

//typescript-type safe 
//calling a function 
console.log("Hello");
function getReminder(){
console.log("Show reminder")
}
getReminder()
getReminder()

//pass a value to the function
function sayThanks(Name){
    console.log('Thank you'+Name)

}
sayThanks("Sharmi")

//return value from a function 
function data(rows,columns){
    return rows*columns
}
let temp=data(5,6)
console.log(temp)


//Arrays
arr=["man","is","on","the","moon"];
console.log(arr);

//Access the values of the array
let a =arr[0];
console.log(a)

//update elements of array
arr[0]="woman"
console.log(arr[0])

//iteration 
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

//concatenation without backtick
function greet(name){
    console.log("Hello"+name);
}
greet('IBAB')

//backtick
function saygoodbye(name){
    console.log(`Goodbye ${name}`);
}
saygoodbye("IBAB")

//DEFAULT PARAMETER
function greet(name="Guest"){
    console.log(`hello ${name}`);
}
greet();