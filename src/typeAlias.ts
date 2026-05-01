type user = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: user = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "X",
  },
  gender: "male",
  contactNo: "0199999",
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};

const user2: user = {
  id: 567,
  name: {
    firstName: "Mr.",
    lastName: "X",
  },
  gender: "male",
  contactNo: "0199999",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};


type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string;
const myName: Name = "Me. X";


// function

type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (num1, num2) => num1 + num2


type UserName = string;
type UserId = number | string;

const id: UserId = 101;
const name: UserName = "Siam";