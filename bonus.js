let availableBooks = [
    "Clean Code",       // index 0
    "JS for Beginners", // index 1
    "C# in Depth",      // index 2
    "Web Design"        // index 3
];

let bookprice = [
    20, // index 0
    15, // index 1
    30, // index 2
    10  // index 3
];



function getValidMembership() {

    let membership = prompt("Enter membership type:");

    while (membership !== "student" && membership !== "regular") {
        membership = prompt("Invalid membership. Enter student or regular:");
    }

    return membership;
}



function startShopping() {

    let cartBooks = [];
    let cartPrices = [];

    while (true) {

        let bookName = prompt(
            "Enter a book name or type 'checkout' to finish:"
        );

        if (bookName === "checkout") {
            break;
        }

        let bookIndex = availableBooks.indexOf(bookName);

        if (bookIndex === -1) {

            alert("Book is out of stock.");

        } else {

            cartBooks.push(bookName);
            cartPrices.push(bookprice[bookIndex]);

        }
    }

    return [cartBooks, cartPrices];
}



function calculateTotal(pricesArray, membershipType) {

    let total = 0;

    for (let i = 0; i < pricesArray.length; i++) {

        total = total + pricesArray[i];

    }

    if (membershipType === "student") {

        total = total * 0.8;
    }
    return total;
}



let username = prompt(" Enter your name : ");
let membershipType = getValidMembership();
let cartData = startShopping();
let cartBooks = cartData[0];
let cartPrices = cartData[1];
let finaltotal = calculateTotal(cartPrices, membershipType);

console.log("----- RECEIPT -----");

console.log("Name: " + username);

console.log("Membership: " + membershipType);

console.log("Books:");
for (let i = 0; i < cartBooks.length; i++){
    console.log(" - " + cartBooks[i]);
}
console.log("Final Total : " + finaltotal);