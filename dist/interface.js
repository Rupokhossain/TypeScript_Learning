"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 1,
    name: "Siam",
    email: "siam000@gmail.com"
};
const myAdmin = {
    name: "Siam",
    email: "siam000@gmail.com",
    adminLevel: 5,
    deleteUser: () => {
        console.log("User deleted");
    }
};
const dev = {
    name: "Siam",
    language: "TypeScript"
};
console.log(dev);
const userA = {
    name: "Siam",
    age: 25,
};
const userB = {
    name: "Rupok",
    age: 30,
    bio: "I love coding and coffee!"
};
console.log(userA);
console.log(userB);
const myWatch = {
    brand: "Apple",
    showTime() {
        console.log("Current time is 10:00 AM");
    },
    calculateSteps: (km) => {
        return km * 1300;
    }
};
myWatch.showTime();
console.log(myWatch.calculateSteps(5));
const ironMan = {
    name: "Siam Ahmed",
    health: 100,
    powerLevel: 9000,
    useSuperPower() {
        console.log("Using super power!");
    }
};
ironMan.useSuperPower();
//# sourceMappingURL=interface.js.map