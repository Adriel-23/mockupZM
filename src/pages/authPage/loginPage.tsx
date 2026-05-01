import MainLayout from '../../components/layout/MainLayout/MainLayout';
import { NavLink } from 'react-router-dom';
import './loginPage.css';

export function LoginPage() {
    return (
        <MainLayout>
            <div className="login-page-container">
                <div className="login-card">
                    <div className="login-header">
                        <h2>Bienvenido de Vuelta</h2>
                        <p>Ingresa a tu cuenta de Zona Música</p>
                    </div>

                    <form className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="tu@correo.com" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="••••••••" 
                                required 
                            />
                        </div>

                        <div className="form-options">
                            <label className="remember-me">
                                <input type="checkbox" /> Recordarme
                            </label>
                            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
                        </div>

                        <button type="submit" className="btn-add-primary login-btn">
                            Iniciar Sesión
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>¿No tienes una cuenta? <NavLink to="/#">Regístrate aquí</NavLink></p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}