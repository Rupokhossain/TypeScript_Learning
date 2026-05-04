
class Animal {
    // Properties
    name: String;
    species: string;


    // constructor (bissesh function ja object toirir somoy col kora hoy);
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    // Method
    makeSound() {
        console.log(`${this.name} is making a sound!`);
    }

}

const dog = new Animal ("Buddy", "Dog");
const cat = new Animal ("Kitty", "Cat");

console.log(dog.name);
dog.makeSound();



// 

class BankAccount {
    userName: string;
    balance: number;

    constructor(name: string, initialAmount: number) {
        this.userName = name;
        this.balance = initialAmount;
        console.log(`Account Created for ${this.userName}`);
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
        console.log(`Deposited ${amount}. New Balance: ${this.balance}`);
    }
    
    checkBalance() {
        console.log(`${this.userName}'s current balance is ${this.balance}`);
    }
}


const siamAccount = new BankAccount("Siam", 500);
const AbirAccount = new BankAccount("Abir", 1500);

siamAccount.deposit(200);
AbirAccount.checkBalance();


class Employee {
    constructor(
        public name: string,
        private salary: number
    ) {}

    getSalaryInfo() {
        console.log(`${this.name}'s salary is ${this.salary}`);
    }
}

const emp = new Employee("Siam", 10000);
console.log(emp.name);
// console.log(emp.salary);
