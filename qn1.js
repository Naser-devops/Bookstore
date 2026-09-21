
// EX1 - Bookstore & Reading Club


let name = prompt("Enter your name:");

let membership = prompt("Enter your membership (student or regular):");

let title;

if (membership === "student") {
    title = "Scholar";
} 
else if (membership === "regular") {
    title = "Member";
} 
else {
    title = "";
}

alert("Welcome " + name + " " + title);

let book_genre = prompt("Do you prefer fiction or non-fiction?");

let specific_title = prompt("Enter the title of the book you want to borrow:");

alert("Your requested book is being reserved.");

console.log(name + " ordered " + specific_title);



// Q1 - Evaluate JavaScript Expressions


let x = 4.7;

console.log(-9 * 3);

console.log("value is" + 50);

console.log(17 % 5);

console.log(5 % 17);

console.log(5 / 10);

console.log(4 == 4);

console.log(4 != 5);

console.log(7 <= 8);

console.log(Math.ceil(x) - Math.floor(x));

console.log(typeof(100));

console.log(typeof(73.9));

console.log(typeof(NaN));

console.log(typeof("Water"));

console.log(typeof(false));

console.log(typeof(9 != 11));

console.log("Orang" + "e");

console.log("Orange" - "s");

console.log("4" + "8");

console.log("4" - "8");

console.log("name" + 3);

console.log("name" - 3);

console.log(82 * "word");

console.log(1 + "hello");

console.log("hello" + 1);

console.log(1 + true);

console.log("hello" + true);

console.log(typeof(Infinity));

console.log(1 == "1");

console.log(1 === "1");


// Q2 - Read a Number and Display It


let number = Number(prompt("Enter a number:"));

alert(number);



// Q3 - Read Two Numbers and Display Them
// in Ascending Order


let num1 = Number(prompt("Enter number 1:"));
let num2 = Number(prompt("Enter number 2:"));

if (num1 > num2) {
    console.log(num2 + "," + num1);
}
else if (num2 > num1) {
    console.log(num1 + "," + num2);
}
else {
    console.log(num1 + "=" + num2);
}



// Q4 - Read Two Numbers and Display the Larger


let num11 = Number(prompt("Enter number #1:"));
let num22 = Number(prompt("Enter number #2:"));

if (num11 > num22) {
    console.log(num11);
}
else if (num22 > num11) {
    console.log(num22);
}
else {
    console.log(num11 + "=" + num22);
}



// Q5 - Read Two Numbers and Display Their Sum


let num14 = Number(prompt("Enter number #1:"));
let num21 = Number(prompt("Enter number #2:"));

c

let num = Number(prompt("Enter a number:"));

if (num == 1) {
    console.log("ONE");
}
else if (num == 2) {
    console.log("TWO");
}
else if (num == 3) {
    console.log("THREE");
}
else if (num == 4) {
    console.log("FOUR");
}
else if (num == 5) {
    console.log("FIVE");
}
else if (num == 6) {
    console.log("SIX");
}
else if (num == 7) {
    console.log("SEVEN");
}
else if (num == 8) {
    console.log("EIGHT");
}
else if (num == 9) {
    console.log("NINE");
}
else {
    console.log("PLEASE TRY AGAIN");
}



// Q7 - Applicant Eligibility


let birthYear = Number(prompt("Enter your birth year:"));

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

if (age > 60) {
    console.log("You may join the seniors' program.");
}
else if (age > 30) {
    console.log("You are not eligible. You may join other programs.");
}
else if (age >= 18) {
    console.log("You are eligible. Start your application.");
}
else {
    console.log("You may join the kids' program.");
}



// Q8 - Change Lowercase to Uppercase
// and Uppercase to Lowercase


function changeCase(text) {

    let result = "";

    for (let i = 0; i < text.length; i++) {

        if (text[i] === text[i].toUpperCase()) {
            result += text[i].toLowerCase();
        }
        else {
            result += text[i].toUpperCase();
        }
    }

    return result;
}

console.log(changeCase("OrAnGe"));


// Q9 - Remove Spaces

function toCamelCase(text) {
    return text.replaceAll(" ", "");
}

let text = prompt("Enter your text:");

alert(toCamelCase(text));