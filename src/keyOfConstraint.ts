

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