import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import { ThemeProvider } from './styles/Theme';
import Dashboard from "./pages/admin-side/Dashboard";
import Calendar from "./pages/admin-side/Calendar";
import Demandes from "./pages/admin-side/Demandes";
import Support from "./pages/admin-side/Support";
import Planification from "./pages/admin-side/Planification";
import Notification from "./pages/admin-side/Notification";
import StudentNotification from 'pages/student-side/Notification';
import MonDashboard from 'pages/student-side/Dashboard';
import Demandesaccept from 'pages/student-side/Demande-accept';
import MesDemandes from 'pages/student-side/Mes-demandes';

const App = () => {
    return (
        <Router>
            <ThemeProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/calendrier" element={<Calendar />} />
                    <Route path="/demandes" element={<Demandes />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/planification" element={<Planification />} />
                    <Route path="/notifications" element={<Notification />} />
                    <Route path="/student-notification" element={<StudentNotification />} />
                    <Route path="/student-dashboard" element={<MonDashboard />} />
                    <Route path="/demande-accept" element={<Demandesaccept />} />
                    <Route path="/mes-demandes" element={<MesDemandes />} />    

                </Routes>
            </ThemeProvider>
        </Router>
    );
};

export default App;
