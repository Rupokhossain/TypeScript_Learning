let myValue: unknown = "Hello TypeScript";

let StrLength = (myValue as string).length;
console.log(StrLength);

//  2 vabe type assertion likha jay
// 1. as syntax
// 2. angle bracket syntax

// as syntax

let somthing: any = "Bangladesh";
let length = (somthing as string).length;
console.log(length);

// angle bracket syntax

// let something: any = "Bangladesh";
// let length = (<string>something).length;
// console.log(length);

let anything: any;

anything = "Siam";

const kgToGMConverter = (
  input: string | number,
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value)}`;
  }
};

const result1 = kgToGMConverter(2) as number;
console.log({ result1 });
const result2 = kgToGMConverter("2 kg") as string;
console.log({ result2 });



// error handling with type assertion
try {
    throw new Error("An error occurred");
} catch (error) {
    const message = (error as Error).message;
    console.log(message);
}


// API theke data ana

type User = {
    id: number;
    name: string;
    email: string;
};

const apiResponse: any = {
    id: 1,
    name: "Siam", 
    email: "siam000@gmail.com"
};

const userData = apiResponse as User;
console.log(userData.id);
console.log(userData.name);
console.log(userData.email);


// function return type assertion

function getSecretCode(id: number): string | number {
    if(id > 10) {
        return "secret-code-123";
    } else {
        return 404;
    }
}

const myCode = getSecretCode(15);

const codeLength = (myCode as string).length;
console.log(codeLength);


function checkInput(input: number): string | number {
    if(input > 10) {
        return "secret-code-123";
    } else {
        return 999;
    }
}

const input1 = checkInput(20);

const output = (input1 as string).length;
console.log(output)