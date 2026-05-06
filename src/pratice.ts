// example - 1

type IdType = string | number; // type alias & Union

function processId(id: IdType) {
  if (typeof id === "number") {
    // type guard
    console.log("Numeric ID multipled: ", id * 10);
  } else {
    // Type Assertion
    console.log("String ID Uppercased: ", (id as string).toUpperCase());
  }
}

processId(101);
processId("siam22");

// example -02

interface DataWrapper<T> {
  status: string;
  value: T | undefined;
}

function wrapFirstElement<T>(arr: T[]): DataWrapper<T> {
  return {
    status: "success",
    value: arr[0],
  };
}

const numRes = wrapFirstElement<number>([10, 20, 30]);
const strRes = wrapFirstElement<string>(["Apple", "Banana"]);

console.log(numRes.value);
console.log(strRes.value);



//
abstract class Device {
    public brand: string;
    protected model: string;

  constructor(
        brand: string, model: string
  ) {
    this.brand = brand;
    this.model = model;
  }

  abstract turnOn(): void; // abstract method
}

class Laptop extends Device {
    private _serialNumber: string = "SN-12345";

    constructor(brand: string, model: string) {
        super(brand, model);
    }

    // getter for data
    get serial() {
        return this._serialNumber;
    }

    turnOn(): void {
        console.log(`${this.brand} ${this.model} is booting up...`);
    }
}

const myLaptop = new Laptop("Dell", "XPS")
myLaptop.turnOn();

console.log("Serial:", myLaptop.serial);



// example - 04 (Encapsulation & Private Data)

class Product {
    name: string;
    private _price: number; // shorashori bahir theke change kora jabe nah
    

    constructor( name: string, price: number) {
        this.name = name;
        this._price = price;
    }

    // getter: shudu price dekhanor jonno
    get price(): number {
        return this._price;
    }

    //setter: price set korar age check korar jonno.
    set price(newPrice: number) {
        if(newPrice > 0) {
            this._price = newPrice;
        } else {
            console.log("Error: price kokhono 0 hote pare nah!")
        }
    }

}

const laptop = new Product("MacBook", 1200000); // setter call holo
console.log(`${laptop.name} er dam: ${laptop.price}`); 

laptop.price = 1300000;
laptop.price = -500;


// example - 05 (Generics & Reusability)

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    removeItem(item: T): void {
        this.data = this.data.filter(i => i !== item);
    }

    getItem(): T[] {
        return [...this.data];
    }
}


// number storage
const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(30);
console.log("Numbers:", numberStorage.getItem());


// string storage
const textStorage = new DataStorage<string>();
textStorage.addItem("siam");
textStorage.addItem("Rupok");
console.log("Names:", textStorage.getItem());



// example - 06 (Inheritance & Polymorphism)
class GameCharacter {
    name: string;
    health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }

    attack(): void {
        console.log(`${this.name} normal attack complete`);
    }
   
}

class Warrior extends GameCharacter {
    attack(): void {
        console.log(`${this.name} tolowar diye tos nos kore dicche!`);
    }
}

class Mage extends GameCharacter {
    attack(): void {
        console.log(`${this.name} jadur montro chure marse!`);
    }
}

// polymarphism test korar function
function performAttack(Character: GameCharacter) {
    Character.attack();
}

const s1 = new Warrior("Siam the Warrior", 100);
const s2 = new Warrior("Rupok the Maga", 80);

performAttack(s1);
performAttack(s2);