import type { Product } from "./product";

export interface CartItem {
    product: Product;
    quantity: number; // Indispensable para sumar totales y agrupar productos
}

// Opcional: Para cuando manejes el estado global
export interface CartState {
    items: CartItem[];
    totalPrice: number; // Con esto garantizas que la UI siempre pueda leer el total
}
