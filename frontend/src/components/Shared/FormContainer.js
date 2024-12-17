import React from 'react';
import './FormStyle.css'
const FormContainer = ({ children }) => {
    return (
        <div className="form">
            {children}
        </div>
    );
};

export default FormContainer;
