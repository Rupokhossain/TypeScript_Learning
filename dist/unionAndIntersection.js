"use strict";
// union | 
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User dashboard";
    }
    else {
        return "guest dashboard";
    }
};
getDashboard("admin");
const SiamAhmed = {
    id: "111",
    name: "Siam Ahmed",
    phoneNo: "0178888",
    designation: "Manager",
    teamsize: 20
};
const newWorker = {
    name: "Siam",
    employeeId: 5001,
    salary: 45000,
};
//# sourceMappingURL=unionAndIntersection.js.map