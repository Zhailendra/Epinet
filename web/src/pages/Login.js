import React, { useState } from 'react';
import styles from '../styles/login.module.scss';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

    return (
        <div className={styles.loginForm}>
            <h2>Login</h2>
            <button className={styles.officeLoginButton}>
                <img src="../assets/office.png" alt="Office-icon" />
                Continue with Office
            </button>
            <div className={styles.orDivider}>
                <hr />
                <span>or Sign in with Email</span>
                <hr />
            </div>
            <form>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    placeholder="login@epitech.eu"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
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
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );

};

    const LoginPage = () => {
        return (
            <div className={styles.loginPage}>
                <div className={styles.loginFormContainer}>
                    <LoginForm/>
                </div>
                <div className={styles.slidePage}></div>
            </div>
        );
    };

export default LoginPage;
