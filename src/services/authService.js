import api from './api';

export const login = async (credentials) => {
  try {
    const response = await api.post('/loginUsuario', credentials);
    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/registraUsuario', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
