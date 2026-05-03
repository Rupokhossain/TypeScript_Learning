"use strict";
//nullable types
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = (input) => {
    if (input) {
        console.log(`From DB: ${input}`);
    }
    else {
        console.log("From DB: ALL USER");
    }
};
getUser(null);
//unknown
const discountCalculator = (input) => {
    if (typeof input === "number") {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    }
    else if (typeof input === "string") {
        const [discountedPrice] = input.split(" ");
        console.log(Number(discountedPrice) * 0.1);
    }
    else {
        console.log("Wrong Input");
    }
};
discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);
let myValue = "Hello";
if (typeof myValue === "string") {
    console.log(myValue.toUpperCase());
}
// void 
let totalBalance = 100;
function addBalance(amount) {
    totalBalance += amount;
    console.log("Balance Updated!");
}
addBalance(50);
function checkAdmin(isAdmin) {
    if (!isAdmin) {
        console.log("You are not admin!");
        return;
    }
    console.log("Welcome Admin!");
}
checkAdmin(true);
//# sourceMappingURL=nullableUnknownNever.js.map