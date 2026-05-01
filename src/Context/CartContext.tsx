import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/product";
import { useContext } from "react";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}:{ children: ReactNode }){
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.findIndex((item) => item.product.id === product.id);
            if (existingItem >= 0) {
                const updatedItems = [...prevItems];
                updatedItems[existingItem].quantity += 1;
                return updatedItems;
            }
            else {
                return [...prevItems, { product, quantity: 1 }];
            }
        });
    };




    const removeFromCart = (productId: string) => {
        setCartItems((prevItems) => {
            return prevItems.filter((item) => item.product.id !== productId);
        });
    };


    const updateQuantity = (productId: string, quantity: number) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.product.id === productId) {
                    const newQuantity = quantity < 1 ? 1 : quantity;
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext);
    if (!context || context === undefined) {
        throw new Error("Tu debes usar useCart dentro de un CartProvider");
    }
    return context;
}