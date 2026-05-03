

function returnValue<T>(value: T): T {
    return value;
}

const result1 = returnValue<string>("Hello World");

const result2 = returnValue<number>(42);

const result3 = returnValue(true);

console.log(result1)
console.log(result2)
console.log(result3)


function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const num = getFirstElement<number>([10, 20, 40]);
const str = getFirstElement<string>(["Apple", "Banana"]);

console.log(num);
console.log(str)


type GenericArray<value> = Array<value>;

const frineds: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

const rollNumbers: GenericArray<number> = [4, 7, 11];

const isEligible: GenericArray<boolean> = [true, false, true];

console.log(frineds);
console.log(rollNumbers);
console.log(isEligible)



// array generic type

function addItemToArray<T>(arr: T[], newItem: T): T[] {
    return [...arr, newItem];
}

const numberArray = addItemToArray<number>([1, 2, 3], 4);

const stringArray = addItemToArray<string>(["a", "b"], "c");

console.log(numberArray);
console.log(stringArray);


// obejct generic type

function addIdAndDate<T extends object>(obj: T) {
    const id = Math.floor(Math.random() * 1000);
    const date = new Date().toLocaleDateString();

    return {
        ...obj,
        id,
        date
    };
}

const user = addIdAndDate({name: "Siam", age: 30});
const product = addIdAndDate({title: "Laptop", price: 50000});

console.log(user.name);
console.log(product.title);
console.log(user.id);
console.log(product.id);