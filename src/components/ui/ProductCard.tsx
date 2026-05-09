import type { Product } from '../../types/product'
import { useCart } from '../../Context/CartContext'
import { useFavorites } from '../../Context/FavoritesContext'
import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard(product: Product) {
    const { title, price, image, description } = product;
    const { addToCart } = useCart();
    const { isFavorite, toggleFavorite } = useFavorites();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart(product);
    }

    const handleToggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault();
        toggleFavorite(product);
    }

    const isFav = isFavorite(product.id);

    return (
        <article className="product-card">
            <Link to={`/product/${product.id}`} className="product-card-link">
                <div className="product-card-image" style={{ position: 'relative' }}>
                    <img src={image} alt={title} />
                    <button 
                        onClick={handleToggleFavorite}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '36px',
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            color: isFav ? 'red' : 'gray'
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={isFav ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
                <div className="product-card-content">
                    <div className="product-card-header">
                        <h3>{title}</h3>
                        {description && <p className="product-card-desc">{description}</p>}
                    </div>
                    
                    <div className="product-card-footer">
                        <span className="product-price">
                            {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)}
                        </span>
                        
                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default ProductCard