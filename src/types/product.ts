export interface Product {
    id: string;
    _id?: string;
    title: string;
    price: number;
    image: string;
    category: string;
    description?: string;
    tags?: string[];
}