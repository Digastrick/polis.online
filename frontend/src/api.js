import axios from 'axios';

const API_URL = 'http://127.0.0.1:8001/api'; 

// Функция для регистрации пользователя
export const registerUser = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/register`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Функция для логина пользователя
export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/login`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};