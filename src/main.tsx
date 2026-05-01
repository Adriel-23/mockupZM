import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Context/CartContext.tsx'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CartProvider>
      <App />
      <ToastContainer position="bottom-right" autoClose={1000} />
    </CartProvider>
  </BrowserRouter>,
)
