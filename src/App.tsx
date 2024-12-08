import './styles.css'
import './css/font.css'
import './css/reset.css'
import {BrowserRouter} from "react-router-dom";
import Rout from './components/Rout.tsx'
import {useEffect} from "react";
import axiosConfig from "./api/axiosConfig.ts";

function App() {
    const loadToken = () => {
        const token = localStorage.getItem('authToken');
        if (token) {
            axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    };

    useEffect(() => {
        loadToken();
    }, []);

    return (
        <BrowserRouter>
            <Rout/>
        </BrowserRouter>
    )
}

export default App
