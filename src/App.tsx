import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header.tsx';
import Footer from './components/layout/Footer/Footer.tsx';

// Importamos todas tus páginas
import HomePage from './pages/HomePage/HomePage.tsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.tsx';
import CartPage from './pages/CartPage/CartPage.tsx';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage.tsx';
import { LoginPage } from './pages/authPage/loginPage.tsx';

function App() {
  return (
    <>
      {/* El Header siempre visible arriba */}
      <Header />

      {/* Aquí es donde React decide qué página mostrar dependiendo de la URL */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>

      {/* El Footer siempre visible abajo */}
      <Footer />
    </>
  );
}

export default App;
