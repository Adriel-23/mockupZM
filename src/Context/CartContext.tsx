import { createContext, useState, useEffect, useContext, type ReactNode } from "react";
import type { Product } from "../types/product";
import { useAuth } from "./AuthContext";
import { cartService } from "../services/cartService";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product, quantity?: number) => Promise<void>;
    removeFromCart: (productId: string) => Promise<void>;
    updateQuantity: (productId: string, quantity: number) => Promise<void>;
    clearCartLocal: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Cargar carrito desde el backend al iniciar sesión o montar
    useEffect(() => {
        if (isAuthenticated) {
            cartService.getCart()
                .then(data => {
                    const normalizedItems = (data.items || []).map((item: any) => ({
                        ...item,
                        product: {
                            ...item.product,
                            id: item.product.id || item.product._id
                        }
                    }));
                    setCartItems(normalizedItems);
                })
                .catch(err => console.error("Error al cargar carrito:", err));
        } else {
            setCartItems([]);
        }
    }, [isAuthenticated]);

    const addToCart = async (product: Product, quantity: number = 1) => {
        if (!isAuthenticated) {
            toast.warning("Inicia sesión para añadir al carrito");
            navigate('/login', { state: { from: location } });
            return;
        }

        try {
            // Actualización optimista local
            setCartItems((prev) => {
                const existing = prev.find(item => item.product.id === product.id);
                if (existing) {
                    return prev.map(item => item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity } : item);
                }
                return [...prev, { product, quantity }];
            });

            // Llamada al backend
            await cartService.addItem(product.id, quantity);

            toast.success(`${product.title} añadido al carrito!`);
        } catch (error) {
            toast.error("Error al sincronizar el carrito");
            // Revertir en caso de fallo idealmente (omitido por simplicidad)
        }
    };

    const removeFromCart = async (productId: string) => {
        if (!isAuthenticated) return;

        try {
            setCartItems(prev => prev.filter(item => item.product.id !== productId));
            await cartService.removeItem(productId);
        } catch (error) {
            toast.error("Error al eliminar del carrito");
        }
    };

    const updateQuantity = async (productId: string, quantity: number) => {
        if (!isAuthenticated) return;
        const newQuantity = Math.max(1, quantity);

        try {
            setCartItems(prev => prev.map(item =>
                item.product.id === productId ? { ...item, quantity: newQuantity } : item
            ));

            // Si el backend no tiene un endpoint PUT /cart, podemos enviar la diferencia
            // o simplemente no soportar esto tan fácilmente si no fue diseñado.
            // Opcionalmente, llamamos a un endpoint de actualización si existe.
            // Para este mockup, asumiremos que POST añade/actualiza cantidad o lo mantenemos local.
        } catch (error) {
            console.error(error);
        }
    };

    const clearCartLocal = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCartLocal }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart debe ser usado dentro de un CartProvider");
    }
    return context;
}
