// array , object

// tuple

let bazarList = ["eggs", "milk", "sugar"];

bazarList.push(true)


let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2];

mixedArr.push(60)


let coordinates: [number, number] = [20, 30, 50];

let couple: [string, string] = ["Husband", "wife"];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];


// reference type : object

const user: {
    organization: "Hello World";  // value => type : literal types
    firstName: string;
    middleName?: string;  // optional type
    lastName: string;
    isMarried: boolean;
} = {
    organization: "Hello World",
    firstName: "Siam",
    lastName: "Ahmed",
    isMarried: false,
}

user.organization = "Amar world";
console.log(user);