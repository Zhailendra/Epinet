import React, { useState, useEffect } from 'react';
import styles from '../styles/login.module.scss';
import { withTheme } from "../styles/Theme";
import { login } from "../lib/pocketbase";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';

const LoginForm = ({ theme }) => {
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState(false);
    const [errorTitleMessage, setErrorTitleMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleLogin(data) {
        try {
            setLoading(true);
            await login(data.email, data.password)
            if (rememberMe) {
                Cookies.set('rememberMe', true);
            }
            navigate('/dashboard');
        } catch (e) {
            if (e.data && e.data.data) {
                if (e.data.data.identity && e.data.data.identity.message) {
                    setErrorMessage(e.data.data.identity.message);
                } else if (e.data.data.password && e.data.data.password.message) {
                    setErrorMessage(e.data.data.password.message);
                }
            }

            setErrorTitleMessage(e.data.message)

            if (e.data.message === "Failed to authenticate.") {
                setErrorMessage("Email ou mot de passe incorrect");
            }

            setLoginError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        try {
            if (Cookies.get('rememberMe')) {
                navigate('/dashboard')
            }
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <div className={styles.loginForm} style={{backgroundColor: theme.secondaryColor}}>
            <h2>Login</h2>
            <button
                className={styles.officeLoginButton}
                style={{
                    backgroundColor: theme.secondaryColor,
                    color: theme.primaryColor,
                    borderColor: theme.tertiaryColor,
                    transition: 'background-color 0.6s, border-color 0.6s',
                }}
                // :hover styles
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#2A86FF';
                    e.currentTarget.style.borderColor = '#101720';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = theme.secondaryColor;
                    e.currentTarget.style.borderColor = theme.tertiaryColor;
                }}
            >
                <img src="/assets/office.png" alt="Office-icon" />
                Continue with Office
            </button>
            <div className={styles.orDivider} style={{color: theme.tertiaryColor}}>
                <hr style={{backgroundColor: theme.tertiaryColor}}/>
                <span>or Sign in with Email</span>
                <hr style={{backgroundColor: theme.tertiaryColor}} />
            </div>
            {loading && <div className={styles.loader} style={{color: theme.secondaryColor, backgroundColor: theme.primaryColor}}>Loading...</div>}
            {!loading && (
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label style={{color: theme.primaryColor}}>Email:</label>
                    <input
                        style={{borderColor: theme.tertiaryColor}}
                        type="email"
                        placeholder="login@epitech.eu"
                        {...register("email")}
                    />
                    <label style={{color: theme.primaryColor}}>Password:</label>
                    <input
                        style={{borderColor: theme.tertiaryColor}}
                        type="password"
                        placeholder="Password"
                        {...register("password")}
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
                    {loginError && (
                        <div>
                            <p style={{ color: theme.errorColor, textAlign: "center" }}>{errorTitleMessage}</p>
                            <p style={{ color: theme.errorColor, marginBottom: '10px', textAlign: "center" }}>{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit"
                            style={{
                                backgroundColor: theme.primaryColor,
                                color: theme.secondaryColor,
                                borderColor: theme.tertiaryColor,
                                transition: 'background-color 0.6s, border-color 0.6s',
                            }}
                        // :hover styles
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = '#2A86FF';
                                e.currentTarget.style.borderColor = '#101720';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = theme.primaryColor;
                                e.currentTarget.style.borderColor = theme.tertiaryColor;
                            }}
                    >
                        Login
                    </button>
                    <p style={{ color: theme.primaryColor, marginTop: '10px' }}>
                        Don't have an account? <Link to="/signup">Create one</Link>
                    </p>
                </form>
            )}
        </div>
    );

};

    const LoginPage = ({ theme }) => {
        return (
            <div className={styles.loginPage}>
                <div className={styles.logoContainer}>
                    <img src="/assets/Logos_Epitech/EPI-LOGO-2023-NOIR.png" alt="Logo" />
                </div>
                <div className={styles.loginFormContainer} style={{backgroundColor: theme.secondaryColor}}>
                    <LoginForm theme={theme}/>
                </div>
                <div className={styles.slidePage} style={{backgroundColor: theme.primaryColor}}></div>
            </div>
        );
    };

export default withTheme(LoginPage);
