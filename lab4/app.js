// // // // let rightnow = new Date ();
// // // // let today = rightnow.getDay();
// // // // let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // // // let currentDay = day[today];
// // // // console.log(currentDay);

// // // let rightnow = new Date();
// // // let thismonth = rightnow.getMonth();
// // // let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// // // let currentmonth = month[thismonth];
// // // console.log(currentmonth);


// // let rightnow = new Date();
// // let todyDate = rightnow.getDate();
// // let thisyear = rightnow.getFullYear();
// // let currenthour = rightnow.getHours();
// // let currentminutes = rightnow.getMinutes();
// // let currentseconds = rightnow.getSeconds();
// // let millisecond = rightnow.getMilliseconds();
// // console.log(currentseconds, millisecond);

// let rightnow = new Date();
// let currenthour = rightnow.getHours();

// if ( currenthour > 12 ) {
//     currenthour = currenthour - 12;
//     console.log(currenthour + " pm");
// }

let nextbirthday = new Date("2026-07-18");
let rightnow = new Date();
let currentdatemilisecond = rightnow.getTime();

console.log(currentdatemilisecond / (1000 * 60 * 60 * 24)); // convert milliseconds to days









