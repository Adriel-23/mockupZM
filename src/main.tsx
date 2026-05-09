import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Context/CartContext.tsx'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/loadPage/scrollToTop.tsx'

import { AuthProvider } from './Context/AuthContext.tsx'
import { FavoritesProvider } from './Context/FavoritesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
    <AuthProvider>
      <FavoritesProvider>
        <CartProvider>
          <App />
          <ToastContainer position="bottom-right" autoClose={1000} />
        </CartProvider>
      </FavoritesProvider>
    </AuthProvider>
  </BrowserRouter>,
)
