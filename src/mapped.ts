type User = {
    height: number;
    width: number;
};

type Stringify<T> = {
    [K in keyof T]: string;
}

type UserString = Stringify<User>;


type MyOptional<T> = {
    [K in keyof T]?: T[K]; 
};

interface Area {
    height: number;
    width: number;
}

const area: MyOptional<Area> = {
    height: 100
};