import { useNavigate, NavLink } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
import { useAuth } from '../../Context/AuthContext';
import './ProfilePage.css';

export function ProfilePage() {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate('/login', { replace: true });
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <MainLayout>
            <div className="profile-page-container">
                <div className="profile-header-section">
                    <h1>Mi Perfil</h1>
                    <p>Gestiona tu información y revisa tus compras</p>
                </div>

                <div className="profile-grid">
                    <div className="profile-card">
                        <h2>Datos Personales</h2>
                        <div className="profile-info-group">
                            <label>Nombre:</label>
                            <p>{user?.name}</p>
                        </div>
                        <div className="profile-info-group">
                            <label>Correo Electrónico:</label>
                            <p>{user?.email}</p>
                        </div>
                        <div className="profile-info-group">
                            <label>Teléfono:</label>
                            <p>+54 11 1234-5678 <span className="fake-badge">(Dato de prueba)</span></p>
                        </div>
                        <div className="profile-info-group">
                            <label>Dirección de Envío:</label>
                            <p>Av. Siempre Viva 742, Springfield <span className="fake-badge">(Dato de prueba)</span></p>
                        </div>
                    </div>

                    <div className="profile-actions-card">
                        <h2>Acciones Rápidas</h2>
                        <div className="action-buttons-list">
                            <NavLink to="/orders" className="btn-profile btn-orders">
                                <span className="icon">📦</span> Ver Mis Pedidos
                            </NavLink>
                            <button className="btn-profile btn-logout" onClick={handleLogout}>
                                <span className="icon">🚪</span> Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
