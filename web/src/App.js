import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import { ThemeProvider } from './styles/Theme';
import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
        <Router>
            <ThemeProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </ThemeProvider>
        </Router>
    );
};

export default App;
