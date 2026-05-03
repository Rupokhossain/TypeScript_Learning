

type RichPeoplesVehicle = {
    cng: string;
    bike: string;
    car: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

let myVehicle1: MyVehicle1 = "bike";
let myVehicle2: MyVehicle2 = "car";

console.log(myVehicle1);
console.log(myVehicle2);


function getPropertyValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const person = {
    name: "Siam",
    age: 22,
    city: "Dhaka"
};

const name = getPropertyValue(person, "name");
const age = getPropertyValue(person, "age");
const city = getPropertyValue(person, "city");

