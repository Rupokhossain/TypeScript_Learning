"use strict";
// function
Object.defineProperty(exports, "__esModule", { value: true });
// normal, arrow
function addNormal(num1, num2) {
    return num1 + num2;
}
addNormal(5, 5);
const addArrow = (num1, num2) => num1 + num2;
addArrow(2, 2);
// obejct => function => method
const poorUser = {
    name: "Siam",
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
};
poorUser.addBalance(20000);
//callback
const arr = [1, 3, 6];
const squareArr = arr.map((elem) => elem * elem);
//# sourceMappingURL=function.js.map