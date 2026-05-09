import { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
/* import { useAuth } from '../../Context/AuthContext'; */
import { authService } from '../../services/authService';
import { toast } from 'react-toastify';
import './loginPage.css'; // Podemos reusar los estilos del login

export function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    /*     const { login } = useAuth(); */
    const navigate = useNavigate();
    const location = useLocation();

    // Si viene de otra página (por ejemplo el carrito), regresarlo ahí después de loguearse
    /*     const from = location.state?.from?.pathname || '/'; */

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Registrar usuario
            const response = await authService.register({ name, email, password });

            toast.success(response.message || '¡Cuenta creada! Revisa tu email para verificarla.');

            // Redirigimos al login ya que el usuario debe verificar su email antes de entrar
            navigate('/login', { state: { from: location.state?.from } });
        } catch (error: any) {
            toast.error(error.message || 'Error al crear la cuenta');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <MainLayout>
            <div className="login-page-container">
                <div className="login-card">
                    <div className="login-header">
                        <h2>Crear una Cuenta</h2>
                        <p>Únete a Zona Música</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre Completo</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Tu nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="tu@correo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <button type="submit" className="btn-add-primary login-btn" disabled={isLoading}>
                            {isLoading ? 'Registrando...' : 'Crear Cuenta'}
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>¿Ya tienes una cuenta? <NavLink to="/login" state={{ from: location.state?.from }}>Inicia Sesión aquí</NavLink></p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
