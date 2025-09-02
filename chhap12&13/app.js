// // // // Task no:01
// // // //let input = prompt("Enter a single character");
// // // //if (input.length !== 1) {
// // // //    console.log("Enter exctly one character ");
// // // //}
// // // //else {
// // //   //  let charcode = input.charCodeAt(0)

// // // //if (charcode >=48 && charcode <=57){
// // //   //  console.log("You enter a number");
// // // //}
// // // //else if (charcode >=65 && charcode <=90){
// // //   //console.log("You enter an upper case letter ");
// // // //}
// // // //else if (charcode >=96 && charcode>= 122){
// // //   //  console.log("you enter an lower case letter ");
// // // //}
// // // //else{ 
// // //   //  console.log("Input is neither a number nor a letter");
// // // //}
// // // //}

// // // // task no:02
// // // //let num1 = prompt("Enter a first  number ");
// // // ///let num2 = prompt("Enter a  second number ");

// // // //if (num1 > num2 ) {
// // //   //  console.log( num1 + " is greater than " + num2);
// // // //}
// // // //else if (num2 > num1) {
// // //   //  console.log( num1+" is less than " +num2);
// // // //}
// // // //else if (num1 = num2) {
// // //   //  console.log(num1 +" Both integer are equal  " + num2);
// // // //}
// // // //else {
// // //   //  console.log("write a correct integer ");
// // // //}

// // // //  Task no:03

// // // //let input = +prompt("Enter a Integer");

// // // //if (input > 0  ) {
// // // //console.log("integer is positive");
// // // //}
// // // //else if (input < 0) {
// // //   //  console.log("integer is negative");
// // // //}
// // // //else {
// // //   //  console.log("integer is zero");
// // // //}

// // // //Task no:04
// // // let char = prompt("Enter a alphabet");
// // // let lowercase = char.toLowerCase();

// // // let isVowel = 

// // // lowercase === "a" ||
// // // lowercase === "e" ||
// // // lowercase === "i" ||
// // // lowercase === "o" ||
// // // lowercase === "u";
// // // console.log(isVowel);

// // // if (!char || char.length !== 1) {
// // //     console.group("!  Please enter exactly one character.")
// // // }
// // // else {
// // //     let isVowel = "aeiouAEIOU".includes(char);
// // //     console.log(isVowel);
// // // }

// // // Task no:05


// // let password ="sarib";
// // let userpassword = prompt("enter your password ");

// // if (!userpassword) {
// //     console.log("please enter your password");
// // }

// // else if ( userpassword = password ) {
// // console.log(" Correct Password");
// // }
// // else {
// //     console.log("Incorrect Password");
// // }

// // Task no:06

// let hour = 13;
 
// if (hour < 18) {
//     console.log("Good day");
// }
// else {
//     console.log("Good Evening");
// }

// Task no:07

let time = parseInt(prompt("Enter your time in 24-hour format:")); 

if ( time >=0  && time <1200) {
    console.log("Good Morning");
}
else if (time >=1200 && time <1700) {
    console.log("Good Afternoon");
}
else if (time >=1700 &&  time <2100) {
    console.log("Good Evening");
}
else if (time >= 2100 && time <2359)  {
  console.log("Good Night");
}
else {
    console.log("please enter valid time");
}



