import { useParams, NavLink, useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
import ProductCard from '../../components/ui/ProductCard';
import { allProducts, featuredProducts } from '../../data/products';
import { useCart } from '../../Context/CartContext';
import './ProductDetailPage.css';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    useEffect(() =>{
        window.scrollTo(0, 0);
    },[id]);

    const selectedProduct = allProducts.find(p => p.id === id);

    if (!selectedProduct) {
        return (
            <MainLayout>
                <div className="product-not-found-container">
                    <h2>Producto no encontrado</h2>
                    <button onClick={() => navigate('/catalog')} className="btn-add-primary btn-back-catalog">
                        Volver al Catálogo
                    </button>
                </div>
            </MainLayout>
        );
    }

    const handleAddToCart = () => {
        addToCart(selectedProduct);
        toast.success(`${selectedProduct.title} añadido al carrito!`);
    }
    return (
        <MainLayout>
            <div className="product-detail-container">
                
                <nav className="breadcrumbs">
                    <NavLink to="/">Inicio</NavLink> &gt; 
                    <NavLink to="/catalog">Catálogo</NavLink> &gt; 
                    <NavLink to={`/catalog?q=${selectedProduct.category}`}>{selectedProduct.category}</NavLink> &gt; 
                    <span>{selectedProduct.title}</span>
                </nav>

                <div className="product-hero-layout">
                    
                    <div className="product-gallery">
                        <div className="main-image-container">
                            <img src={selectedProduct.image} alt={selectedProduct.title} />
                        </div>
                        <div className="thumbnails-container">
                            <div className="thumbnail active"><img src={selectedProduct.image} alt="Thumb 1" /></div>
                            <div className="thumbnail"><img src={selectedProduct.image} alt="Thumb 2" /></div>
                            <div className="thumbnail"><img src={selectedProduct.image} alt="Thumb 3" /></div>
                            <div className="thumbnail video-thumbnail"><span className="play-icon">▶</span></div>
                        </div>
                    </div>

                    <div className="product-info">
                        <div className="product-badges-row">
                            <span className="badge category-badge">{selectedProduct.category}</span>
                            <span className="badge bestseller-badge">Destacado</span>
                        </div>
                        
                        <h1 className="product-page-title">{selectedProduct.title}</h1>
                        <p className="product-page-desc">
                            {selectedProduct.description || "Un instrumento excepcional diseñado para los mejores músicos. Descubre su tono y calidad de construcción premium."}
                        </p>
                        
                        <div className="product-pricing">
                            <span className="current-price">
                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(selectedProduct.price)}
                            </span>
                            <span className="old-price">
                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(selectedProduct.price * 1.2)}
                            </span>
                        </div>

                        <div className="product-colors">
                            <span className="color-label">Color: <strong>Edición Estándar</strong></span>
                            <div className="color-options">
                                <div className="color-circle color-black"></div>
                                <div className="color-circle color-red"></div>
                            </div>
                        </div>

                        <div className="product-actions">
                            <button className="btn-add-primary" onClick={handleAddToCart}>
                                Agregar al Carrito
                            </button>
                            <div className="secondary-buttons">
                                <button className="btn-secondary">Comprar Ahora</button>
                                <button className="btn-secondary btn-wishlist">&#9825; Guardar</button>
                            </div>
                        </div>

                        <div className="shipping-info-box">
                            <div className="info-row">
                                <div>
                                    <strong>Envío Estándar Gratuito</strong>
                                    <p>Entrega en 3-5 días hábiles</p>
                                </div>
                            </div>
                            <div className="info-divider"></div>
                            <div className="info-row">
                                <div>
                                    <strong>2 Años de Garantía</strong>
                                    <p>Garantía de tienda oficial</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="details-header">
                    <h2>Detalles & Especificaciones</h2>
                    <div className="line-decoration"></div>
                </div>

                <div className="specs-layout">
                    <div className="specs-card text-card">
                        <h3>La Elección del Músico</h3>
                        <p>Fabricado con la mejor tecnología, este instrumento está diseñado para llevar tu música al siguiente nivel. Perfecto tanto para grabaciones de estudio como presentaciones en vivo. Los materiales cuidadosamente seleccionados aseguran que mantener el equipo afinado sea una tarea sencilla, ofreciendo versatilidad y rendimiento.</p>
                        <div className="tech-features">
                            <div className="feature-item">
                                <strong>&#127926; Sonido Premium</strong>
                                <p>Rango dinámico asombroso y claridad en todas las frecuencias.</p>
                            </div>
                            <div className="feature-item">
                                <strong>&#128268; Componentes de Alta Gama</strong>
                                <p>Durabilidad testeada bajo condiciones de gira estrictas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="specs-card table-card">
                        <h3>Especificaciones Técnicas</h3>
                        <ul className="spec-table">
                            <li><span>Categoría</span> <strong>{selectedProduct.category}</strong></li>
                            <li><span>Código de Producto</span> <strong>{selectedProduct.id}</strong></li>
                            <li><span>Condición</span> <strong>Nuevo en Caja</strong></li>
                            <li><span>Disponibilidad</span> <strong>En Stock</strong></li>
                        </ul>
                    </div>
                </div>

                <div className="related-products-section">
                    <div className="related-header">
                        <h2>Productos Relacionados</h2>
                        <NavLink to="/catalog" className="view-all-link">Ver Todos &rarr;</NavLink>
                    </div>
                    <div className="related-grid">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>

            </div>
        </MainLayout>
    );
}

export default ProductDetailPage;