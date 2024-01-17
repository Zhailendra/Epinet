import React, { useState } from 'react';
import styles from '../styles/login.module.scss';
import { withTheme } from "../styles/Theme";

const LoginForm = ({ theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

    return (
        <div className={styles.loginForm} style={{backgroundColor: theme.secondaryColor}}>
            <h2>Login</h2>
            <button className={styles.officeLoginButton} style={{backgroundColor: theme.secondaryColor, color: theme.primaryColor, borderColor: theme.tertiaryColor}}>
                <img src="../assets/office.png" alt="Office-icon" />
                Continue with Office
            </button>
            <div className={styles.orDivider} style={{color: theme.tertiaryColor}}>
                <hr style={{backgroundColor: theme.tertiaryColor}}/>
                <span>or Sign in with Email</span>
                <hr style={{backgroundColor: theme.tertiaryColor}} />
            </div>
            <form>
                <label style={{color: theme.primaryColor}}>Email:</label>
                <input
                    type="email"
                    value={email}
                    placeholder="login@epitech.eu"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label style={{color: theme.primaryColor}}>Password:</label>
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.rememberMe}>
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label style={{color: theme.primaryColor}} htmlFor="rememberMe">Remember Me</label>
                </div>
                <button style={{color: theme.secondaryColor}} type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );

};

    const LoginPage = ({ theme }) => {
        return (
            <div className={styles.loginPage}>
                <div className={styles.logoContainer}>
                    <img src="../assets/Logos_Epitech/EPI-LOGO-2023-NOIR.png" alt="Logo" />
                </div>
                <div className={styles.loginFormContainer} style={{backgroundColor: theme.secondaryColor}}>
                    <LoginForm theme={theme}/>
                </div>
                <div className={styles.slidePage} style={{backgroundColor: theme.primaryColor}}></div>
            </div>
        );
    };

export default withTheme(LoginPage);
