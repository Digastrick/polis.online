
import React, { useState } from 'react';
import { registerUser } from '../../api'; 
import InputField from '../Shared/InputField';
import FormContainer from '../Shared/FormContainer';

const Register = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(form);  
            alert('Registration successful');
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
            <h1>Регистрация</h1>
                <InputField
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name?.[0]}
                />
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
                <button type="submit">Регистрация</button>
            </form>
        </FormContainer>
    );
};

export default Register;
