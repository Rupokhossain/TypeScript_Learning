// generic function

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: {id: number; name: string}) => {
//     return [value];
// }

const createArrayWithGeneric = <T>(value: T) => {
    return [value];
}

const arrString = createArrayWithGeneric('hello');
const arrNumber = createArrayWithGeneric(123);
const arrUserObj = createArrayWithGeneric({id: 1, name: 'John'});


// tuple

const createArrayWithTuple = (param1: string, param2: number) => [
    param1,
    param2
];

const createArrayWithTupleGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2];

const res1 = createArrayWithTupleGeneric("Siam", false);
const reds2 = createArrayWithTupleGeneric(222, {
    name: "Siam"
})


// couse info 

const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        cousrse: "Next Level Web Development",
        ...studentInfo
    }
}

const student1 = {
    id: 123,
    name: "Siam",
    hasPen: true,
};

const student2 = {
    id: 456,
    name: "rupok",
    isMarried: false,
};

const result = addStudentToCourse(student1);
console.log(result);


function createArray<T>(item: T): T[] {
    return [item];
}

const stringArray = createArray<string>("Hello");
const numberArray = createArray<number>(42);
const booleanArray = createArray<boolean>(true);


function createPair<T, U>(Param1: T, Param2: U): [T, U] {
    return [Param1, Param2];
}

const pair1 = createPair<string, number>("Siam", 123);
const pair2 = createPair<boolean, string>(false, "Hello");

console.log(pair1);
console.log(pair2);


interface HasName {
    name: string;
}

function printName<T extends HasName>(obj: T): void {
    console.log(obj.name);
}
printName({ name: "Siam" });



// task - 01

function swap<T, U>(param1: T, param2: U): [U, T] {
    return [param2, param1];
}

const result1 = swap<string, number> ("siam", 123);
console.log(result1);