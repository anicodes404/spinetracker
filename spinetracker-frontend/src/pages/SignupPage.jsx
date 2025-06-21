import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; 

export default function SignupPage() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate(); 

    const handleSignup = async () => {
        const res = await fetch('/api/auth/register', {
            method: 'POST', 
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, password }), 
        }); 

        if (res.ok) {
            navigate('/bookshelf'); //redirect after a signup
        } else {
            const data = await res.json(); 
            alert(data.detail || 'Signup failed'); 
        }
    };

    return (
        <div className="p-4 max-w-sm mx-auto mt-20">
            <h1 className='text-2xl mb-4'>Create Account</h1>
            <input className="w-full mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="w-full mb-4" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup} className="bg-primary text-white px-4 py-2 w-full">
            Sign Up
            </button>

            <p className="mt-4 text-sm">
                    Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link>
            </p>

            <p className="mt-4 text-sm">
                    Already have an account? <Link to="/login" className="text-primary">Log in</Link>
            </p>
        </div>
    );
}

