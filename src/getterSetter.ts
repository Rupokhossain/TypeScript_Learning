

class BankAccount {
    public name: string;
    private _balance: number;

    constructor(name: string, balance: number) {
        this.name = name;
        this._balance = balance;
    }

    // getter: balance dekhar jonno
    get balance(): number {
        return this._balance;
    }

    // setter: balance change korar jonno

    set balance(amount: number) {
        if(amount < 0) {
            console.log("Error: tk to minus hoy nah");
        } else {
            this._balance = amount;
        }
    }
}

const myAcc = new BankAccount("Siam", 500);

//getter use
console.log(myAcc.balance);

// setter use
myAcc.balance = 700;
myAcc.balance = -100;

console.log(myAcc.balance)


//
class User {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    // getter: ja age firot dibe

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        if(age < 0) {
            console.log("Error: 0 theke age hoy naki?");
        } else {
            this._age = age;
        }
    }
}

const newAge = new User(22);

// getter 
console.log(newAge.age);

// setter
newAge.age = 40;
newAge.age = -1;