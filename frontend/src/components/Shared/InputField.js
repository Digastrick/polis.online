import React from 'react';

const InputField = ({ name, type = 'text', value, onChange, error }) => {
    return (
        <div>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
            />
            {error && <p>{error}</p>}
        </div>
    );
};

export default InputField;
