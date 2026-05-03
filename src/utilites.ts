

type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type PruductWithoutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
    id: 222,
    name: "Siam",
    price: "20",
    stock: 100,
    color: "black",
}

type OptionProduct = Partial<Product>;