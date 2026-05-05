class Counter {
    static count: number = 0;

    constructor() {
        Counter.count++;
    }

    static getCount() {
        return Counter.count;
    }
}

const obj1 = new Counter();       
const obj2 = new Counter();       
const obj3 = new Counter();       

console.log(Counter.count);



class MyMath {
    static add(a: number, b: number) {
        return a + b;
    }
}

console.log(MyMath.add(20, 30));



class Book {
    static totalBooks: number = 0;
    title: string;

    constructor(title: string) {
        this.title = title;
        Book.totalBooks++;
    }
    static showLibraryStatus() {
        console.log(`Total ${Book.totalBooks} ti boi ase`);
    }
}

const b1 = new Book("Himu");
const b2 = new Book("Misir Ali");
const b3 = new Book("Pather Panchali");

console.log(b1.title);
Book.showLibraryStatus();
