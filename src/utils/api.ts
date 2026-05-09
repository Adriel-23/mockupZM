const API_URL = 'http://localhost:2323/api';

/**
 * Función genérica para hacer peticiones al backend.
 * Automáticamente inyecta el token de autorización si existe.
 */
export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
    const token = localStorage.getItem('token');

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...(options.headers as Record<string, string>),
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    // Si la respuesta es 401 (Unauthorized), podríamos limpiar el token aquí
    if (response.status === 401) {
        localStorage.removeItem('token');
        // Opcional: redirigir a login o lanzar un evento global
    }

    // Para respuestas de error, intentar leer el JSON del body si existe
    if (!response.ok) {
        let errorMessage = 'Ocurrió un error en la petición';
        try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
        } catch (e) {
            // Ignorar error de parseo si no hay JSON
        }
        throw new Error(errorMessage);
    }

    // Algunas peticiones (como DELETE o cuando no hay body) pueden no retornar JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return response.json();
    }

    return response.text();
}
