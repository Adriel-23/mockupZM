import type { Product } from '../../types/product'
import { useCart } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import './ProductCard.css'
import { toast } from 'react-toastify'

function ProductCard(product: Product) {
    const { title, price, image, description } = product;
    const { addToCart } = useCart(); 

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart(product);
        toast.success(`${title} añadido al carrito!`);
    }

    return (
        <article className="product-card">
            <Link to={`/product/${product.id}`} className="product-card-link">
                <div className="product-card-image">
                    <img src={image} alt={title} />
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