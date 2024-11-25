import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm() {

    const [login, setLogin] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const Login = async () => {
        try {
            const response = await axios.post('https://mernback-uwcp.onrender.com/login',
                {email, password});

                setLogin([...login, response.data]);
            setEmail('');
            setPassword('');
            alert('user logged in')
        } catch (error) {
            setError('Failed to login user')
        }
    } 
  return (
    <div>
        <h1>SignupForm</h1>
        {error && <p style={{color:'red'}}>{error}</p>}
        <input
        type='email'
        value={email}
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type='password'
        value={password}
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={Login}>Login</button>
    </div>
  )
}
