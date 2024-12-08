import { useState, ChangeEvent } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import axios from "axios";
import { Links } from '../../models/Models';
import { jwtDecode } from 'jwt-decode';

interface LoginCredentials {
    email: string;
    password: string;
}

interface DecodedToken {
    id: string;
    email: string;
    role: string;
    exp: number; // Token expiration timestamp
}

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState<LoginCredentials>({ email: '', password: '' });
    const [error, setError] = useState<string>('');
    // const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const addTokenToHeaders = (token: string) => {
        console.log('Token:', token); // Debug the token here
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    const handleLogin = async (credentials: LoginCredentials) => {
        try {
            const response = await axios.post('http://localhost:4001/api/auth/login', credentials);
            const accessToken = response.data;
            console.log(accessToken);
            if (accessToken) {
                addTokenToHeaders(accessToken);
                return { token: accessToken };
            } else {
                throw new Error('Token not received');
            }
        } catch (error) {
            console.error('Login error', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { token } = await handleLogin(credentials);
            console.log('Login successful', token.accessToken);

            // Decode the token to get the user role
            const decodedToken: DecodedToken = jwtDecode<DecodedToken>(token.accessToken);
            console.log('Decoded token', decodedToken.id);
            console.log('Token', token.accessToken);
            const role = decodedToken.role;

            // Store the token in local storage
            localStorage.setItem('authToken', token.accessToken);

            // Redirect to RoleChoice page if the role is 'admin'
            if (role === 'Tester') {
                navigate('/profile', { replace: true });
            } else {
                navigate('/profile', { replace: true });
            }
        } catch (error) {
            setError('Login failed. Please check your credentials.');
            console.error('Login error', error);
        }
    };

    const handleForgotPassword = () => {
        navigate(Links.forgotPassword);
    };

    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__text">
                    <a href="/" className="login__text-title">
                        <img src="src/assets/images/loginpagelogo.svg" alt="Logo" />
                    </a>
                    <h1>India's First eCommerce</h1>
                    <h2>and Applied Marketing Academy</h2>
                    <p>Industry backed programs designed by professionals to accelerate your digital career.</p>
                    {error && <p className="login__error">{error}</p>}
                </div>
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login__form-wrapper">
                        <div className="login__form-title">
                            <img src="src/assets/images/loginformlogo.svg" alt="Logo" />
                            <h1>Learner Login</h1>
                            <p>Sign In to your Account</p>
                        </div>
                        <div className="login__form-item">
                            <span className="login__form-item-text">Email ID</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your Email ID"
                                value={credentials.email}
                                onChange={handleChange}
                                required
                            />
                            <span className="login__form-item-text">Password</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="login__form-passwords">
                            <label className="login__form-passwords-check">
                                <input type="checkbox" />
                                <span>Remember Me</span>
                            </label>
                            <div className="login__form-passwords-forgot" onClick={handleForgotPassword}>
                                Forgot Password
                            </div>
                        </div>
                        <div className="login__form-submit">
                            <button type="submit">Login</button>
                            {error && <p className="error">{error}</p>}
                        </div>
                        <div className="login__form-link">
                            <p className="login__form-link-text">
                                Do not have an account?{' '}
                                <NavLink className="login__form-link-text-nav" to={Links.register}>
                                    Register
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
