
// idea
interface SmartPhone {
    startCall(): void;
    endCall(): void;
}

class Samsung implements SmartPhone {
    startCall(): void {
        console.log("Samsung call starting...");
    } endCall(): void {
        console.log("Samsung call ended");
    }
}



abstract class Vehicle {
    move(): void {
        console.log("Vehicle is moving...");
    }

    abstract startEngine(): void;
    abstract stopEngine(): void;
}


class Car extends Vehicle {
    startEngine(): void {
        console.log("Car engine starting with key...");
    }

    stopEngine(): void {
        console.log("Car engine stopped")
    }
}


abstract class ElectronicDevice {
    checkBattery(): void {
        console.log("Battery is ok!")
    }

    abstract turnOn(): void;
}

class Laptop extends ElectronicDevice {
    turnOn(): void {
        console.log("Laptop is running")
    }
}

const myLaptop = new Laptop();

myLaptop.checkBattery();
myLaptop.turnOn();