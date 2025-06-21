import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://localhost:5000/api/login', {
                method: 'POST', 
                header: { 'Content-type' : 'application/json' },
                body: JSON.stringify({ email, password }), 
            }); 

            const data = await res.json(); 
            alert(data.message); 
        }  catch(error) {
            alert('Login failed', error);
        }
    };

    // FastAPI fetch update call
    fetch("http://localhost:5000/api/login"), {
        method: "POST", 
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    }

    return(
        <div>
            <form
            onSubmit={handleLogin}
            >
            <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Spine Tracker</h2>

           <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
               type="email"
               id="email"
               className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />
          </div>
          
          <div className="mb-6">
          <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
          <input
          type="password"
          id="password"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          </div>

          <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition duration-200"
          >
         Login
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">Don't have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign up</a></p>
            </form>
        </div>
    )
}