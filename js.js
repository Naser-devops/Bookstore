// function getValidMembership() {

//     let membershipType = prompt("Enter membership type:");

//     while (membershipType !== "student" && membershipType !== "regular") {

//         membershipType = prompt("Invalid membership. Enter student or regular:");

//     }

//     return membershipType;
// }


// function collectUserData() {

//     let username = prompt("Enter your name:");

//     let membership = getValidMembership();

//     let bookgenre = prompt("Enter book genre:");

//     let booktitle = prompt("Enter book title:");

//     let userdata = [username, membership, bookgenre, booktitle];
//     return userdata;
// }


// let userdata = collectUserData();

// console.log(userdata);

// for (let i = 0; i < userdata.length; i++) {
//     console.log(userdata[i]);
// }
// ///////////////////////////////////////////

// // //q7
// for (let i = 0; i <= 5; i++) {
//     alert(i)
// }

// //////
// //q8
// let numbers = "";

// for (let i = 0; i <= 5; i++) {
//     numbers = numbers + i + "\n";
// }

// alert(numbers);

// //q9
// for (let i = 0; i <= 20; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// //q10


// let number = prompt("Enter a number:");

// while (number < 0 || number > 100) {
//     alert("Invalid number");
//     number = prompt("Enter a number:");
// }

// //q11
// let num = prompt("Enter a number : ")
// while (num < 0 || num > 100 || isNaN(num)) {
//     alert(" invalid number  just number !");
//     num = prompt("Enter a number : ")
// }

// //q12
// let number = Number(prompt("Enter an integer:"));
// let sum=0 ;
// for (let i = 0;i<=number;i++){
//     sum = sum + i;
// }
// alert(sum);


// //q13
// let number = Number(prompt("Enter an integer:"));

// let sum = 0;

// for (let i = 0; i <= number; i++) {
//     sum = sum + i;
// }

// let average = sum / (number + 1);

// alert(average);

// // =========================
// // EX3 - Arrays
// // =========================

// //1. Available book genres
// let availableGenres = [
//     "Programming",
//     "Science",
//     "History",
//     "Fantasy"
// ];

// // 2. Apply discount based on membership

// function applyDiscount(userData) {

//     if (userData[1] === "student") {
//         userData.push("20% Discount");

//     } else if (userData[1] === "regular") {
//         userData.push("No Discount");
//     }

//     return userData;
// }


// // 3. Add a new genre
// function addNewGenre(genre) {
//     availableGenres.push(genre);
// }


// // 4. Display all genres
// function displayGenres() {

//     for (let i = 0; i < availableGenres.length; i++) {
//         console.log("- We offer: " + availableGenres[i]);
//     }
// }
// ////////////////////////////////////////////////////////////
