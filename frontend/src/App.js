// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import './App.css'; // или ./components/Shared/FormStyles.css

const App = () => {
    return (
        <Router>
            <div className='wrapper'>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>

                <div className="navigation-buttons">
                    <Link to="/register">
                        <button>Перейти к регистрации</button>
                    </Link>
                    <Link to="/login">
                        <button>Перейти к входу</button>
                    </Link>
                </div>
            </div>
        </Router>
    );
};

export default App;
