import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import { useAuth } from '../context/Authcontext';

const Login = () => {
  const navigate = useNavigate();
   const { login } = useAuth(); 
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('login data:', formData);
    try {
      const response = await axios.post('https://backend-2-4liw.onrender.com/api/auth/login', {
        email: formData.email,
        password: formData.password
      });

      // Store user data including token
      login(response.data.user); // Pass the user object directly
      navigate('/create');
    } catch (error) {
      alert('Cannot login: ' + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200"> 
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 bg-opacity-100 z-50">
        <h1 className="text-3xl font-serif text-center mb-6">User Login</h1>
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              value={formData.email} 
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              value={formData.password} 
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p>Don't have an account? <span><a href="/signup">click here</a></span></p>
      </div>
    </div>
  );
}

export default Login
