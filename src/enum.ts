enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled
}

let currentStatus: OrderStatus = OrderStatus.Pending;
console.log(currentStatus);


enum Direction {
    North,
    South,
    East,
    West
}

let move = Direction.West;
console.log(move)


enum MessageStatus {
    Sending = "SENDING",
    Sent = "SENT",
    Failed = "FAILED",
    Read = "READ"
}

function updateUI(status: MessageStatus) {
    if(status === MessageStatus.Read) {
        console.log("Green light on")
    } else if (status === MessageStatus.Sent) {
        console.log("Red light in on");
    }
}
updateUI(MessageStatus.Read);



enum PaymentMethod {
    Bkash = "Bkash",
    Rocket = "Rocket",
    Nagad = "Nagad",
    Card = "Card",
    CashOnDelivery = "COD"
}

interface Order {
    orderId: number;
    amount: number;
    paymentType: PaymentMethod;
}

const myOrder: Order = {
    orderId: 12345,
    amount: 1200,
    paymentType: PaymentMethod.Bkash
}

console.log(myOrder)


enum MovieRating {
    Great = 5,
    Good = 4,
    Bad = 1
}

function movieRating(rating: MovieRating) {
    if(rating === MovieRating.Great) {
        console.log("Must Watch!");
    } else if (rating === MovieRating.Good) {
        console.log("Worth Watching!");
    } else {
        console.log("Not Recommended.");
    }
}

movieRating(MovieRating.Great);
movieRating(MovieRating.Bad);
movieRating(MovieRating.Good);