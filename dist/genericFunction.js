"use strict";
// generic function
Object.defineProperty(exports, "__esModule", { value: true });
// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithUserObj = (value: {id: number; name: string}) => {
//     return [value];
// }
const createArrayWithGeneric = (value) => {
    return [value];
};
const arrString = createArrayWithGeneric('hello');
const arrNumber = createArrayWithGeneric(123);
const arrUserObj = createArrayWithGeneric({ id: 1, name: 'John' });
// tuple
const createArrayWithTuple = (param1, param2) => [
    param1,
    param2
];
const createArrayWithTupleGeneric = (param1, param2) => [param1, param2];
const res1 = createArrayWithTupleGeneric("Siam", false);
const reds2 = createArrayWithTupleGeneric(222, {
    name: "Siam"
});
// couse info 
const addStudentToCourse = (studentInfo) => {
    return {
        cousrse: "Next Level Web Development",
        ...studentInfo
    };
};
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
function createArray(item) {
    return [item];
}
const stringArray = createArray("Hello");
const numberArray = createArray(42);
const booleanArray = createArray(true);
function createPair(Param1, Param2) {
    return [Param1, Param2];
}
const pair1 = createPair("Siam", 123);
const pair2 = createPair(false, "Hello");
console.log(pair1);
console.log(pair2);
function printName(obj) {
    console.log(obj.name);
}
printName({ name: "Siam" });
// task - 01
function swap(param1, param2) {
    return [param2, param1];
}
const result1 = swap("siam", 123);
console.log(result1);
//# sourceMappingURL=genericFunction.js.map