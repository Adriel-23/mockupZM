import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
import { useAuth } from '../../Context/AuthContext';
import { orderService } from '../../services/orderService';
import './OrdersPage.css';

interface OrderItem {
    product: {
        id: string;
        title: string;
        price: number;
    };
    quantity: number;
    priceAtTimeOfPurchase: number;
}

interface Order {
    _id: string;
    total: number;
    status: string;
    createdAt: string;
    items: OrderItem[];
}

export function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            orderService.getOrders()
                .then(response => {
                    // El backend devuelve { ok: true, data: orders }
                    setOrders(response.data || []);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message || 'Error al cargar los pedidos');
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return (
            <MainLayout>
                <div className="orders-page-container">
                    <h2>Mis Pedidos</h2>
                    <p>Debes iniciar sesión para ver tus pedidos.</p>
                    <NavLink to="/login" className="btn-primary">Iniciar Sesión</NavLink>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="orders-page-container">
                <div style={{ marginBottom: '30px' }}>
                    <h1 style={{ fontFamily: 'Noto Serif', fontSize: '32px', color: '#1a1c1b' }}>Mis Pedidos</h1>
                    <p style={{ color: '#5a413d' }}>Revisa el historial de tus compras</p>
                </div>

                {isLoading ? (
                    <p>Cargando pedidos...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : orders.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '50px', background: '#f4f3f1', borderRadius: '8px' }}>
                        <h3>Aún no has realizado ningún pedido.</h3>
                        <NavLink to="/catalog" style={{ display: 'inline-block', marginTop: '15px', color: '#900a0c', fontWeight: 'bold' }}>Explorar el catálogo</NavLink>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {orders.map(order => (
                            <div key={order._id} style={{ border: '1px solid #e3e2e0', borderRadius: '8px', padding: '20px', background: '#ffffff' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e3e2e0', paddingBottom: '15px', marginBottom: '15px' }}>
                                    <div>
                                        <strong>Pedido: </strong> #{order._id.substring(order._id.length - 8)}
                                        <br />
                                        <span style={{ color: '#5a413d', fontSize: '14px' }}>
                                            {new Date(order.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <strong>Total: </strong> {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(order.total)}
                                        <br />
                                        <span style={{ display: 'inline-block', padding: '4px 8px', background: '#e3d7c9', color: '#784c1a', borderRadius: '4px', fontSize: '12px', marginTop: '5px' }}>
                                            {order.status.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 style={{ marginBottom: '10px' }}>Artículos</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {order.items.map((item: any, idx) => (
                                            <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                                                <span>{item.quantity}x {item.product ? item.product.title : 'Producto Eliminado'}</span>
                                                <span>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format((item.price_at_purchase || 0) * item.quantity)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
