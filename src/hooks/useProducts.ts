import { useState, useEffect } from 'react';
import type { Product } from '../types/product';
import { productService } from '../services/productService';

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setIsLoading(true);
                // Asegúrate de que el backend tenga el endpoint GET /api/products
                const response = await productService.getAll();
                // Normalizamos los productos para asegurar que tengan la propiedad 'id' (viniendo de MongoDB _id)
                const normalized = (response.data || []).map((p: any) => ({
                    ...p,
                    id: p.id || p._id
                }));
                setProducts(normalized);
                setError(null);
            } catch (err: any) {
                setError(err.message || 'Error al cargar los productos');
                setProducts([]);
            } finally {
                setIsLoading(false);
            }
        };

        loadProducts();
    }, []);

    return { products, isLoading, error };
}
