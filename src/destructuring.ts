// object destructuring
// array destructuring


const user = {
    id: 123,
    name: {
        firstName: "Siam",
        middleName: "Ahmed",
        lastName: "Rupok"
    },
    gender: "male",
    favouriteColor: "black"
}


// const myFavouriteColor = user.favouriteColor
// const myMiddleName = user.name.middleName

// console.log(myFavouriteColor)



// const {favouriteColor: myFavouriteColor} = user;
// console.log(myFavouriteColor)


const {favouriteColor, name: {middleName}} = user;
console.log(middleName);
console.log(favouriteColor)


const friends = ["karim", "Rahim", "Mahim"];
const [, myBestFriend, ] = friends;
console.log(myBestFriend);



const user1 = {
    id: 101,
    userName: "Siam Ahmed",
    email: "rh.siam999@gmail.com",
    address: "Dhaka"
};

const {userName, email} = user1;
console.log(email);

const {userName: nameOfUser, address: city} = user1;
console.log(nameOfUser);
console.log(city)


