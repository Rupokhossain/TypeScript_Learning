//nullable types

const getUser = (input: string | null) => {
    if(input) {
        console.log(`From DB: ${input}`);
    } else {
        console.log("From DB: ALL USER");
    }
};

getUser(null);


//unknown

const discountCalculator = (input: unknown) => {
    if(typeof input === "number") {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice)
    } else if (typeof input === "string") {
        const [discountedPrice] = input.split(" ");
        console.log(Number(discountedPrice) * 0.1)
    } else {
        console.log("Wrong Input");
    }
}; 

discountCalculator(100)
discountCalculator("100 tk")
discountCalculator(null)



let myValue: unknown = "Hello";

if(typeof myValue === "string") {
    console.log(myValue.toUpperCase());
}


// void 

let totalBalance = 100;

function addBalance (amount: number): void {
    totalBalance += amount;
    console.log("Balance Updated!");
}

addBalance(50);



function checkAdmin(isAdmin: boolean): void {
    if (!isAdmin) {
        console.log("You are not admin!");
        return;
    }
    console.log("Welcome Admin!");
}

checkAdmin(true)