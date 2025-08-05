import api from './api';
import {jwtDecode} from 'jwt-decode';

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    console.log('Respuesta del servidor:', response.data.data);
    const token = response.data.data.token;

    console.log('Token recibido:', token);

    const decoded = jwtDecode(token);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(decoded));

    console.log('Token guardado en localStorage');

    return {
      token,
      user: decoded,
    };
  } catch (error) {
    console.error('Error en login:', error);
    throw error.response?.data || error;
  }
};



export const register = async (userData) => {
  try {
    const response = await api.post('/auth/registrar', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
