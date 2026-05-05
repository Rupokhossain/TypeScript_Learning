

// public
class Student {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const s1 = new Student("siam");
console.log(s1.name);


// private
class BankAccount {
    public name: string;
    private _balance: number;

    constructor(name: string, balance: number) {
        this.name = name;
        this._balance = balance;
    }

    addDeposite(amount: number) {
        this._balance = this._balance + amount;
    }
}

const myAcc = new BankAccount("siam", 500);
console.log(myAcc);



//protected

class Father {
    protected money: number = 1000;

}

class Son extends Father {
    getMoney() {
        console.log(this.money);
    }
}

const s = new Son();
// console.log(s.money);


class SmartWatch {
    public brand: string;
    private _internalTemp: number;

    constructor(brand: string,  temp: number) {
        this.brand = brand;
        this._internalTemp = temp;
    }

    public CheckHealth() {
        if(this._internalTemp > 40) {
            console.log("Warning: Device Overheating!");
        } else {
            console.log("Device is healthy");
        }
    }

}

const myWatch = new SmartWatch("Apple", 40);
console.log(myWatch.brand);

myWatch.CheckHealth();