const OrderStatus = {
    Pending: "Pending",
    Shipped: "Shipped",
    Delivered: "Delivered",
    
} as const;

type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];

function updateOrder(status: OrderStatus) {
    console.log(`Order status updated to: ${status}`);
}

updateOrder(OrderStatus.Pending); // Valid
updateOrder("Shipped"); // Valid
// updateOrder("Cancelled"); // Error: Argument of type '"Cancelled"' is not assignable to parameter of type 'OrderStatus'.


const UserRole = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Guest: "GUEST",
} as const;

type UserRole = typeof UserRole[keyof typeof UserRole];

let myRole: UserRole;

myRole = "ADMIN";
myRole = "EDITOR";
myRole = UserRole.Guest;
console.log(myRole)