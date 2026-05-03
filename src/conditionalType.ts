
interface Sheikh {
    hasBusiness: boolean;
}

interface Khan {
    hasHouse: boolean;
}

type Family<T> = T extends "Sheikh" ? Sheikh : Khan;

const myFamily: Family<"Sheikh"> = {
    hasBusiness: true
};

const friendFamily: Family<"Khan"> = {
    hasHouse: true
};


type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;


type RichPeoplesVehicle = {
    bike: string;
    car: string;
    ship: string;
};

type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false

type HasBike = CheckVehicle<"bike">