import { NavLink, useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
import { useCart } from '../../Context/CartContext';
import { useAuth } from '../../Context/AuthContext';
import { orderService } from '../../services/orderService';
import { toast } from 'react-toastify';
import { useState } from 'react';
import './CartPage.css';

function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, clearCartLocal } = useCart();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    // 2. Calculamos los totales usando reduce (pura matemática de JavaScript)
    const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    // Para el diseño del mockup las taxes (impuestos) asumen un ~8% del subtotal como ejemplo.
    const taxes = subtotal * 0.08; 
    const total = subtotal + taxes;

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleCheckout = async () => {
        if (!isAuthenticated) {
            toast.warning('Inicia sesión para finalizar tu compra');
            navigate('/login');
            return;
        }

        setIsCheckingOut(true);
        try {
            await orderService.createOrder();
            clearCartLocal();
            toast.success('¡Pedido realizado con éxito!');
            navigate('/orders');
        } catch (error: any) {
            toast.error(error.message || 'Error al procesar el pedido');
        } finally {
            setIsCheckingOut(false);
        }
    };

    return (
        <MainLayout>
            <div className="cart-page-container">
                
                {/* --- TÍTULO DE LA PÁGINA --- */}
                <div className="cart-header">
                    <h1>Carrito de Compras</h1>
                    <p>Revisa tus instrumentos y equipo seleccionados.</p>
                </div>

                <div className="cart-layout">
                    {/* --- COLUMNA 1: LISTA DE PRODUCTOS --- */}
                    <div className="cart-items-section">
                        {cartItems.length === 0 ? (
                            <div className="empty-cart-message">
                                <h3>Tu carrito está vacío.</h3>
                                <NavLink to="/catalog">Volver al catálogo</NavLink>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.product.id} className="cart-item-card">
                                
                                    {/* Botón X (Eliminar) en la esquina */}
                                    <button 
                                        className="btn-remove-item" 
                                        onClick={() => removeFromCart(item.product.id)}
                                    >
                                        &#10005; {/* Símbolo HTML para una 'X' elegante */}
                                    </button>

                                    {/* Imagen Izquierda */}
                                    <div className="cart-item-image">
                                        <img src={item.product.image} alt={item.product.title} />
                                    </div>
                                
                                    {/* Info Central/Derecha */}
                                    <div className="cart-item-details">
                                        <span className="cart-item-category">{item.product.category}</span>
                                        <h3 className="cart-item-title">{item.product.title}</h3>
                                        <p className="cart-item-desc">{item.product.description}</p>
                                        
                                        {/* Fila final: Contador y Precio */}
                                        <div className="cart-item-footer">
                                            <div className="quantity-controls">
                                                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>-</button>
                                                <span className="quantity-display">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                                            </div>
                                            
                                            <div className="cart-item-price">
                                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.product.price)}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))
                        )}
                    </div>

                    {/* --- COLUMNA 2: RESUMEN DE COMPRA --- */}
                    {cartItems.length > 0 && (
                        <div className="cart-summary-section">
                            <h2>Resumen de Compra</h2>
                            
                            <div className="summary-row">
                                <span>Subtotal ({totalItems} artículos)</span>
                                <strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(subtotal)}</strong>
                            </div>
                            
                            <div className="summary-row">
                                <span>Envío</span>
                                <span className="summary-shipping-info">Calculado al finalizar la compra</span>
                            </div>
                            
                            <div className="summary-row">
                                <span>Impuestos</span>
                                <strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(taxes)}</strong>
                            </div>

                            <div className="summary-divider"></div>

                            <div className="summary-total-row">
                                <span>Total</span>
                                <span className="summary-total-price">
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}
                                </span>
                            </div>

                            <button className="btn-checkout" onClick={handleCheckout} disabled={isCheckingOut || cartItems.length === 0}>
                                {isCheckingOut ? 'Procesando...' : 'Finalizar Compra \u2192'}
                            </button>
                            
                            <div className="checkout-security">
                                Proceso de Pago Seguro
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}

export default CartPage;