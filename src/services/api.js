import axios from 'axios';

// Instancia base de Axios
const api = axios.create({
  baseURL: 'http://localhost:8080/', // <-- CAMBIA esto por tu endpoint real
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token automáticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // <-- o el método que uses para guardar el token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar errores globales (opcional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Opcional: redirigir a login o cerrar sesión
      console.warn('Sesión expirada o no autorizada');
      // window.location.href = '/login'; // descomenta si quieres redirigir
    }
    return Promise.reject(error);
  }
);

export default api;
