import { useSearchParams } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
import ProductCard from '../../components/ui/ProductCard';
import { allProducts } from '../../data/products';
import './CatalogPage.css';

function CatalogPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const filteredProducts = allProducts.filter(product => {
        const textToSearch = query.toLowerCase();
        const matchTitle = product.title.toLowerCase().includes(textToSearch);
        const matchCategory = product.category.toLowerCase().includes(textToSearch);
        const matchTags = product.tags?.some(tag => tag.toLowerCase().includes(textToSearch));

        return matchTitle || matchCategory || matchTags;
    });
    const displayTitle = query 
        ? `Resultados para "${query}"`
        : "Catálogo Completo";

    return (
        <MainLayout>
            <div className="catalog-page-container">
                <aside className="catalog-sidebar">
                    <div className="sidebar-header">
                        <h2>Explorar Equipos</h2>
                        <span>Selección experta</span>
                    </div>

                    <ul className="sidebar-menus">
                        <li className="active">Filters</li>
                        <li>Categories</li>
                        <li>Price Range</li>
                        <li>Brand</li>
                        <li>Condition</li>
                    </ul>
                </aside>

                <main className="catalog-main-content">
                    <div className="catalog-top-bar">
                        <div className="catalog-titles">
                            <h1>{displayTitle}</h1>
                            <p>Mostrando {filteredProducts.length} instrumentos de alta gama</p>
                        </div>
                        <div className="catalog-badges">
                            <span className="badge">Cuerpo Sólido</span>
                            <span className="badge">6-Cuerdas</span>
                        </div>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="catalog-products-grid">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className="catalog-no-results">
                            <h3>No pudimos encontrar instrumentos que coincidan con "{query}".</h3>
                            <p>Prueba con otros términos o descubre nuestras categorías destacadas.</p>
                        </div>
                    )}

                    <div className="load-more-container">
                        <button className="btn-load-more">Cargar Más Instrumentos</button>
                    </div>
                </main>
            </div>
        </MainLayout>
    );
}

export default CatalogPage;