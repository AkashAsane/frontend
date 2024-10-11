import React, { useState } from 'react';
import Login from './Login';
import axios from 'axios';
import { useAuth } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
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

  const { login } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Signup data:', formData);
    try {
      const response = await axios.post('https://backend-2-4liw.onrender.com/api/auth/login', {
        email: formData.email,
        password: formData.password,
        username: formData.username
      });

    
      login(response.data.user); 
      navigate('/login');
    } catch (error) {
      alert('Cannot register user: ' + error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200"> 
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 bg-opacity-100 z-50">
        <h1 className="text-3xl font-serif text-center mb-6">User SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              value={formData.username} 
              onChange={handleChange}
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p>Already have an account? <span><a href="/login">click here</a></span></p>
      </div>
    </div>
  );
}

export default Signup;
