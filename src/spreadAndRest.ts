// spread operator

const friends = ["Rahim", "Karim"];

const schoolFriends = ["Pintu", "Mintu", "Abir"];

const collegeFriends = ["Mr.smart", "Mr very very smart"];

friends.push(...collegeFriends, ...schoolFriends);
console.log(friends);

const user = { name: "Siam", phoneNo: "01600000000" };

const otherInfo = { hobby: "outing", favouriteColor: "Black" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

const friends1: string[] = ["Abir", "Rahat"];
const frineds2: string[] = ["Siam", "Rahman"];

const allFriends: string[] = [...friends1, ...frineds2];

console.log(allFriends)

// rest operator
const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`send invitation to ${friend}`),
  );
};

sendInvite("Siam", "wahida", "Rupok");
