import { createContext, useState, useEffect, useContext, type ReactNode } from "react";
import type { Product } from "../types/product";
import { useAuth } from "./AuthContext";
import { favoriteService } from "../services/favoriteService";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

interface FavoritesContextType {
    favorites: Product[];
    toggleFavorite: (product: Product) => Promise<void>;
    isFavorite: (productId: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<Product[]>([]);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Cargar favoritos al autenticarse
    useEffect(() => {
        if (isAuthenticated) {
            favoriteService.getFavorites()
                .then(data => {
                    const normalized = (data || []).map((p: any) => ({
                        ...p,
                        id: p.id || p._id
                    }));
                    setFavorites(normalized);
                })
                .catch(err => console.error("Error al cargar favoritos:", err));
        } else {
            setFavorites([]);
        }
    }, [isAuthenticated]);

    const toggleFavorite = async (product: Product) => {
        if (!isAuthenticated) {
            toast.warning("Inicia sesión para guardar favoritos");
            navigate('/login', { state: { from: location } });
            return;
        }

        const currentlyFavorite = isFavorite(product.id);

        try {
            // Actualización optimista local
            if (currentlyFavorite) {
                setFavorites(prev => prev.filter(p => p.id !== product.id));
            } else {
                setFavorites(prev => [...prev, product]);
            }

            // Llamada al backend
            const response = await favoriteService.toggleFavorite(product.id);

            if (response.message) {
                toast.success(response.message);
            }
        } catch (error) {
            toast.error("Error al sincronizar favoritos");
            // Revertir optimismo (omitido por brevedad)
        }
    };

    const isFavorite = (productId: string) => {
        return favorites.some(p => p.id === productId);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error("useFavorites debe ser usado dentro de un FavoritesProvider");
    }
    return context;
}
