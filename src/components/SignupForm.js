import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignupForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const Signup = async () => {
        try {
            const response = await axios.post('https://mernback-uwcp.onrender.com/signup',
                {name : name, email : email, password : password});
            setName('');
            setEmail('');
            setPassword('');
            navigate('/login');
        } catch (error) {
            setError('Failed to crete user')
        }
    } 
  return (
    <div>
        <h1>SignupForm</h1>
        {error && <p style={{color:'red'}}>{error}</p>}
        <input
        type='text'
        value={name}
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
        />
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
        <button onClick={Signup}>Signup</button>
    </div>
  )
}
