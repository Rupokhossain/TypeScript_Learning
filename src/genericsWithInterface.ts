interface ApiResponse<T> {
  status: number;
  message: string;
  date: T;
}

const user: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  message: "Success",
  date: {
    name: "Siam",
    age: 22,
  },
};

const product: ApiResponse<{ title: string; price: number }> = {
  status: 400,
  message: "Success",
  date: {
    title: "Laptop",
    price: 999.99,
  },
};

interface Developer<T> {
  name: string;
  computer: {
    brand: string;
    releaseYear: number;
  };
  smartWatch: T;
}

//
interface AppleWatch {
  model: string;
  hasHeartRateMonitor: boolean;
}

const poorDeveloper: Developer<null> = {
  name: "siam",
  computer: {
    brand: "Dell",
    releaseYear: 2020,
  },
  smartWatch: null,
};

const richDeveloper: Developer<AppleWatch> = {
  name: "Rupok",
  computer: {
    brand: "MacBook Pro",
    releaseYear: 2022,
  },
  smartWatch: {
    model: "Apple Watch Series 7",
    hasHeartRateMonitor: true,
  },
};

interface Phone<T> {
  model: string;
  batteryDetails: T;
}

const phone1: Phone<{ mah: number; type: string }> = {
  model: "iPhone 13",
  batteryDetails: {
    mah: 3095,
    type: "Li-Ion",
  },
};

const phone2: Phone<string> = {
  model: "Samsung Galaxy S21",
  batteryDetails: "4000 mAh",
};


// task-1

interface Result<T> {
    isSuccess: boolean;
    data: T;
}

const result1: Result<number> = {
  isSuccess: true,
  data: 20-2-26
};

const result2: Result<{id: number; name: string}> = {
    isSuccess: false,
    data: {
        id: 1,
        name: "Error occurred"
    }

}

// task - 2

interface Laptop <T, U> {
    brand: string;
    processor: T;
    ram: U;
}

const laptop1: Laptop<string, number> ={
    brand: "Dell",
    processor: "Intel Core i7",
    ram: 16
}