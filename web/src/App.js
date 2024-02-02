import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './styles/Theme';

/* Pages */

import LoginPage from './pages/Login';
import SignUpForm from './pages/Create';

/* Common */

import Dashboard from "./component/Dashboard";
import Notifications from "./component/Notifications";

/* Admin side */

import Demandes from "./pages/admin-side/Demandes";
import Support from "./pages/admin-side/Support";
import Planification from "./pages/admin-side/Planification";

/* Student side */

import Demandesaccept from 'pages/student-side/Demande-accept';
import MesDemandes from 'pages/student-side/Mes-demandes';

const App = () => {
    return (
        <Router>
            <ThemeProvider>
                <Routes>

                    /* Pages */

                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpForm />} />

                    /* Common */

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/notifications" element={<Notifications />} />

                    /* Admin side */

                    <Route path="/demandes" element={<Demandes />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/planification" element={<Planification />} />

                    /* Student side */

                    <Route path="/demande-accept" element={<Demandesaccept />} />
                    <Route path="/mes-demandes" element={<MesDemandes />} />    

                </Routes>
            </ThemeProvider>
        </Router>
    );
};

export default App;
