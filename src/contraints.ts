
interface lengthy {
    length: number;
}

function printLength <T extends lengthy>(arg: T){
    console.log(arg.length);
} 

printLength("Hello, World!"); // Output: 13
printLength([1, 2, 3, 4, 5]); // Output: 5
printLength({ length: 10 }); // Output: 10


type UserInfo = {
    id: number;
    name: string;
};

function showWelcomeMessage<T extends UserInfo>(user: T) {
    console.log(`Welcome ${user.name}, your ID is ${user.id}`);
}
showWelcomeMessage({ id: 1, name: "Alice" }); // Output: Welcome Alice, your ID is 1
showWelcomeMessage({ id: 2, name: "Siam" }); // Output: Welcome Siam, your ID is 2


function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const laptop = {brand: "Dell", price: 50000};
getProperty(laptop, "brand"); // Output: "Dell"