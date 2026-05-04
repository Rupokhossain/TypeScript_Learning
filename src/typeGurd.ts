// in typeOf

type Alphaneumeric = number | string;

const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

// console.log(add(2, 2))

console.log(add("2", "2"));



//
type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`This ${user.name} and his role is: ${user.role}`);
  } else {
    console.log(`${user.name}`)
  }
};

getUserInfo({ name: "Normal" });



//
type DomesticAnimal = {
    name: string, 
    owner: string
};

type WildAnimal = {
    name: string,
    forest: string
};

function animalInfo (animal: DomesticAnimal | WildAnimal) {
    if("owner" in animal) {
        console.log(`${animal.name} is a domestic animal and owner is ${animal.owner}`);
    } else {
        console.log(`${animal.name} lives in the ${animal.forest} forest.`);
    }
}
animalInfo({name: "Cat", owner: "Siam"});
animalInfo({name: "Tiger", forest: "Sundarban"});