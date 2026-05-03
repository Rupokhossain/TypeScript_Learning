"use strict";
// spread operator
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["Rahim", "Karim"];
const schoolFriends = ["Pintu", "Mintu", "Abir"];
const collegeFriends = ["Mr.smart", "Mr very very smart"];
friends.push(...collegeFriends, ...schoolFriends);
console.log(friends);
const user = { name: "Siam", phoneNo: "01600000000" };
const otherInfo = { hobby: "outing", favouriteColor: "Black" };
const userInfo = { ...user, ...otherInfo };
console.log(userInfo);
const friends1 = ["Abir", "Rahat"];
const frineds2 = ["Siam", "Rahman"];
const allFriends = [...friends1, ...frineds2];
console.log(allFriends);
// rest operator
const sendInvite = (...friends) => {
    friends.forEach((friend) => console.log(`send invitation to ${friend}`));
};
sendInvite("Siam", "wahida", "Rupok");
//# sourceMappingURL=spreadAndRest.js.map