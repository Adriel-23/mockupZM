import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './Header.css'
import profileIcon from '../../../assets/svg/profile.svg'
import cartIcon from '../../../assets/svg/cart.svg'
import { useAuth } from '../../../Context/AuthContext';
function Header() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        setSearchTerm(searchParams.get('q') || '');
    }, [searchParams]);

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (searchTerm.trim() === '') {
                navigate('/catalog');
            } else {
                navigate(`/catalog?q=${searchTerm.trim()}`);
            }
        }
    };

    return (
        <header className="header-container">
            <div className="logo">
                <NavLink to="/">Zona Música</NavLink>
            </div>
            
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Buscar..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSearch}
                />
            </div>
            
            <div className="user-actions">
                <NavLink to='/cart' className="action-icon">
                    <img src={cartIcon} alt="Cart" />
                </NavLink>
                <NavLink to={isAuthenticated ? '/profile' : '/login'} className="action-icon" title={isAuthenticated ? "Mi Perfil" : "Iniciar Sesión"}>
                    <img src={profileIcon} alt="Profile" />
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
