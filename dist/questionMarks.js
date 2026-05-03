"use strict";
// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null / undefined
// ?. optional chaining
Object.defineProperty(exports, "__esModule", { value: true });
const biyerJonnoEligible = (age) => {
    // if(age >= 21) {
    //     console.log("You are eligible");
    // } else {
    //     console.log("You are not eligible!");
    // }
    const result = age >= 21 ? "you are eligible" : "you are not eligible !";
    console.log(result);
};
biyerJonnoEligible(20);
// ?? :
const userTheme = "green theme";
const selectedTheme = userTheme ?? "Light theme";
console.log(selectedTheme);
const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest!";
const resultWithNulish = isAuthenticated ?? "You are guest!";
console.log({ resultWithTernary }, { resultWithNulish });
// optional chaining
const user = {
    address: {
        city: "Dhaka",
        town: "Badda",
    }
};
const postalCode = user.address.postalCode;
console.log(postalCode);
//# sourceMappingURL=questionMarks.js.map