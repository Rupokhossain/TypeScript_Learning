interface User {
    id: number;
    name: string;
    email: string;
    role?: string;
}

const user1: User = {
    id: 1,
    name: "Siam",
    email: "siam000@gmail.com"
};



//
interface User1 {
    name: string;
    email: string;
}

interface Admin extends User1 {
    adminLevel: number;
    deleteUser: () => void;
}

const myAdmin: Admin = {
    name: "Siam",
    email: "siam000@gmail.com",
    adminLevel: 5,
    deleteUser: () => {
        console.log("User deleted");
    }
};


interface Developer {
    name: string;
}

interface Developer {
    language: string;
}

const dev: Developer = {
    name: "Siam",
    language: "TypeScript"
}
console.log(dev)



// profile card

interface Profile {
    name: string;
    age: number;
    bio?: string; 
}

const userA: Profile = {
    name: "Siam",
    age: 25,

};

const userB: Profile = {
    name: "Rupok",
    age: 30,
    bio: "I love coding and coffee!"
};
console.log(userA);
console.log(userB);



//calculator
interface SmartWatch {
    brand: string;
    showTime: () => void;
    calculateSteps: (km: number) => number;
}

const myWatch: SmartWatch = {
    brand: "Apple",
    showTime() {
        console.log("Current time is 10:00 AM");
    },
    calculateSteps: (km) => {
        return km * 1300;
    }
}

myWatch.showTime();
console.log(myWatch.calculateSteps(5));


// gaming character
interface Character {
    name: string;
    health: number;
}

interface Hero extends Character {
    powerLevel: number;
    useSuperPower: () => void;
}

const ironMan: Hero = {
    name: "Siam Ahmed",
    health: 100,
    powerLevel: 9000,
    useSuperPower() {
        console.log("Using super power!");
    }
}
ironMan.useSuperPower();