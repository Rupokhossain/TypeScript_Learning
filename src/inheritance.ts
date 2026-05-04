
class Parent {
    name: string;
    age: number;
    address: string;


    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numOfHours: number) {
        console.log(`${this.name} ${numOfHours} ghonta ghumay`);
    }
}

class Student extends Parent {}

const student1 = new Student(`MR.Fakibazzz`, 18, "Bangladesh");

student1.getSleep(15);


class Teacher extends Parent {
    
    designation: string;


    constructor(name: string, age: number, address: string, designation: string) {

        super(name, age, address);

        this.designation = designation;
    }

    getSleep(numOfHours: number) {
        console.log(`${this.name} ${numOfHours} ghonta ghumay`);
    }

    takeClasee(numOfClass: number) {
        console.log(`${numOfClass} Ghonta class ney`);
    }
}

const teacher1 = new Teacher("Mr.Smart teacher", 25, "Bangladeshi", "Senior Teacher");
teacher1.takeClasee(4);



//
class Animal {
    name: string;
    species: string;

    constructor(
         name: string,
         species: string
    ) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log(`${this.name} is making a sound`);
    }
} 

class Dog extends Animal {}


class Bird extends Animal {
    canFly: boolean;

    constructor(name: string, species: string, canFly: boolean) {
        
        super(name, species);

        this.canFly = canFly;
    }

    flyInfo () {
        console.log(`${this.name} can fly: ${this.canFly}`);
    }
}

const myBird = new Bird ("Parrot", "Bird", true)
myBird.flyInfo();

const myDog = new Dog("Buddy", "German Shepherd");
myDog.makeSound();

