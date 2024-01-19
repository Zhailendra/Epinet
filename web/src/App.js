import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import { ThemeProvider } from './styles/Theme';
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Demandes from "./pages/Demandes";
import Support from "./pages/Support";
import Planification from "./pages/Planification";
import Notification from "./pages/Notification";

const App = () => {
    return (
        <Router>
            <ThemeProvider>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/calendrier" element={<Calendar />} />
                    <Route path="/demandes" element={<Demandes />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/planification" element={<Planification />} />
                    <Route path="/notifications" element={<Notification />} />
                </Routes>
            </ThemeProvider>
        </Router>
    );
};

export default App;
