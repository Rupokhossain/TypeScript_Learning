"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myValue = "Hello TypeScript";
let StrLength = myValue.length;
console.log(StrLength);
//  vabe type assertion likha jay
// 1. as syntax
// 2. angle bracket syntax
// as syntax
let somthing = "Bangladesh";
let length = somthing.length;
console.log(length);
// angle bracket syntax
// let something: any = "Bangladesh";
// let length = (<string>something).length;
// console.log(length);
let anything;
anything = "Siam";
const kgToGMConverter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted output is: ${Number(value)}`;
    }
};
const result1 = kgToGMConverter(2);
console.log({ result1 });
const result2 = kgToGMConverter("2 kg");
console.log({ result2 });
// error handling with type assertion
try {
    throw new Error("An error occurred");
}
catch (error) {
    const message = error.message;
    console.log(message);
}
const apiResponse = {
    id: 1,
    name: "Siam",
    email: "siam000@gmail.com"
};
const userData = apiResponse;
console.log(userData.id);
console.log(userData.name);
console.log(userData.email);
// function return type assertion
function getSecretCode(id) {
    if (id > 10) {
        return "secret-code-123";
    }
    else {
        return 404;
    }
}
const myCode = getSecretCode(15);
const codeLength = myCode.length;
console.log(codeLength);
function checkInput(input) {
    if (input > 10) {
        return "secret-code-123";
    }
    else {
        return 999;
    }
}
const input1 = checkInput(20);
const output = input1.length;
console.log(output);
//# sourceMappingURL=typeAssertion.js.map