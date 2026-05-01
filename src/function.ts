// function

// normal, arrow


function addNormal(num1: number, num2: number) : number {
    return num1 + num2;
}

addNormal(5, 5);


const addArrow = (num1: number, num2: number) : number => num1 + num2;

addArrow(2, 2)


// obejct => function => method

const poorUser = {
    name: "Siam",
    balance: 0,
    addBalance (value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}
poorUser.addBalance(20000)


//callback
const arr: number[] = [1, 3, 6];
const squareArr = arr.map((elem: number): number => elem * elem);