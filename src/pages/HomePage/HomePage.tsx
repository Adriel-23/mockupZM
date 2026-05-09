import { NavLink } from "react-router-dom"
import MainLayout from "../../components/layout/MainLayout/MainLayout"
import ProductCard from "../../components/ui/ProductCard"
import { useProducts } from "../../hooks/useProducts"
import './HomePage.css'

function HomePage() {
    const { products, isLoading, error } = useProducts();
    const featuredProducts = products.slice(0, 4);

    return (
        <MainLayout>
            <div className="hero-section">
                <div className="hero-slogan">
                    <h2>El Arte del Sonido Perfecto</h2>
                    <p>Descubre nuestra colección curada de instrumentos premium. Para estudiantes apasionados y profesionales exigentes que buscan calidad, textura y tono inigualable.</p>
                    <NavLink to="/catalog" className="btn-primary">EXPLORAR COLECCIÓN</NavLink>
                </div>
            </div>

            <div className="categories">
                <div className="categories-header">
                    <h2>Categorías Populares</h2>
                    <div className="divider"></div>
                </div>

                <div className="categories-grid">
                    {/* Tarjeta 1 - Ancha */}
                    <div className="category-card card-wide" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/3c/70/48/3c7048c29ea8047f5080237fd8c36b8d.jpg')" }}>
                        <div className="category-content">
                            <h3>Pianos de Cola</h3>
                            <p>Elegancia acústica y resonancia profunda.</p>
                        </div>
                    </div>

                    {/* Tarjeta 2 - Angosta */}
                    <div className="category-card card-narrow" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/80/59/ab/8059ab309942ec33e8bed203d662deb2.jpg')" }}>
                        <div className="category-content">
                            <h3>Guitarras Eléctricas</h3>
                        </div>
                    </div>

                    {/* Tarjeta 3 - Angosta */}
                    <div className="category-card card-narrow" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/38/89/0c/38890c129c9d7b03a663c59f7316de65.jpg')" }}>
                        <div className="category-content">
                            <h3>Vientos de Metal</h3>
                        </div>
                    </div>

                    {/* Tarjeta 4 - Ancha */}
                    <div className="category-card card-wide" style={{ backgroundImage: "url('https://i.pinimg.com/736x/bf/ab/17/bfab17530d28821905ab811b65fc584f.jpg')" }}>
                        <div className="category-content">
                            <h3>Cuerdas Clásicas</h3>
                            <p>Violines, violonchelos y contrabajos de luthier.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featured-section">
                <div className="featured-header">
                    <div className="featured-title">
                        <h2>Instrumentos Destacados</h2>
                        <p>Seleccionados por nuestros expertos en tienda.</p>
                    </div>
                    <NavLink to="/catalog" className="featured-link">Ver todo el catálogo &rarr;</NavLink>
                </div>
                <div className="featured-grid">
                    {isLoading ? (
                        <p>Cargando productos...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        featuredProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))
                    )}
                </div>
            </div>

            <div className="info-section">
                <div className="info-content">
                    <h2>Tranquilidad, Expertise y Pasión por la Música</h2>
                    <p>Más que una tienda, Zona Música es un refugio para creadores. Durante más de dos décadas, hemos cultivado un espacio donde los músicos pueden sentir, probar y enamorarse de su próximo instrumento en un ambiente cálido y sin presiones.</p>
                    <p>Nuestros especialistas no son vendedores; son luthiers, concertistas y técnicos de audio listos para guiarte hacia el equipo que elevará tu arte.</p>
                    <NavLink to="/experts" className="btn-outline">CONOCE A LOS EXPERTOS</NavLink>
                </div>
                <div className="info-image">
                    <img src="https://i.pinimg.com/1200x/71/31/26/713126faa0d27cf76acbbb1d4719dec9.jpg" alt="Interior tienda" />
                </div>
            </div>
        </MainLayout>
    )
}

export default HomePage