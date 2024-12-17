import React, { useState } from 'react';
import { loginUser } from '../../api'; 
import InputField from '../Shared/InputField';
import FormContainer from '../Shared/FormContainer';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(form); 
            alert('Login successful');
        } catch (error) {
            if (error.response?.status === 422 || error.response?.status === 401) {
                setErrors(error.response.data.errors || { general: ['Invalid credentials'] });
            }
        }
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
            <h1>Вход</h1>
                <InputField
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email?.[0]}
                />
                <InputField
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    error={errors.password?.[0]}
                />
                {errors.general && <p>{errors.general[0]}</p>}
                <button type="submit">Войти</button>
            </form>
        </FormContainer>
    );
};

export default Login;
