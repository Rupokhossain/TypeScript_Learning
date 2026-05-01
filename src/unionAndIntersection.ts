// union | 

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
    if(role === "admin") {
        return "Admin Dashboard";
    } else if (role === "user") {
        return "User dashboard";
    } else {
        return "guest dashboard";
    }
}

getDashboard("admin")



// intersection &

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamsize: number;

};

type EmployeeManager = Employee & Manager

const SiamAhmed: EmployeeManager = {
    id: "111",
    name: "Siam Ahmed",
    phoneNo: "0178888",
    designation: "Manager",
    teamsize: 20

}


type Person = {
    name: string;
};

type Employee1 = {
    employeeId: number;
    salary: number;
};

type FullTimeEmployee = Person & Employee1;

const newWorker: FullTimeEmployee = {
    name: "Siam",
    employeeId: 5001,
    salary: 45000,
}