import axios from 'axios';

// Crea una instancia de Axios con una configuración base
const api = axios.create({
  baseURL: "https://film-hub250.vercel.app", // URL base de tu backend
  timeout: 10000, // Timeout opcional
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de respuesta para manejar errores
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API call error:', error);
    return Promise.reject(error);
  }
);

export default api;
