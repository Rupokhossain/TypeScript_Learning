"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function returnValue(value) {
    return value;
}
const result1 = returnValue("Hello World");
const result2 = returnValue(42);
const result3 = returnValue(true);
console.log(result1);
console.log(result2);
console.log(result3);
function getFirstElement(arr) {
    return arr[0];
}
const num = getFirstElement([10, 20, 40]);
const str = getFirstElement(["Apple", "Banana"]);
console.log(num);
console.log(str);
const frineds = ["Mr. X", "Mr. Y", "Mr. Z"];
const rollNumbers = [4, 7, 11];
const isEligible = [true, false, true];
console.log(frineds);
console.log(rollNumbers);
console.log(isEligible);
// array generic type
function addItemToArray(arr, newItem) {
    return [...arr, newItem];
}
const numberArray = addItemToArray([1, 2, 3], 4);
const stringArray = addItemToArray(["a", "b"], "c");
console.log(numberArray);
console.log(stringArray);
// obejct generic type
function addIdAndDate(obj) {
    const id = Math.floor(Math.random() * 1000);
    const date = new Date().toLocaleDateString();
    return {
        ...obj,
        id,
        date
    };
}
const user = addIdAndDate({ name: "Siam", age: 30 });
const product = addIdAndDate({ title: "Laptop", price: 50000 });
console.log(user.name);
console.log(product.title);
console.log(user.id);
console.log(product.id);
//# sourceMappingURL=generics.js.map