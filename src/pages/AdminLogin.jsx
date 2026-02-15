import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { companyInfo } from '../data/mockData';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateToken = useCallback(async (token) => {
    try {
      await axios.get(`${BACKEND_URL}/api/admin/validate`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/admin');
    } catch (err) {
      localStorage.removeItem('adminToken');
    }
  }, [navigate]);

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      validateToken(token);
    }
  }, [validateToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/admin/login`, {
        password: password
      });

      if (response.data.success) {
        localStorage.setItem('adminToken', response.data.token);
        navigate('/admin');
      } else {
        setError(response.data.message || 'Invalid password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src={companyInfo.logoUrl}
            alt={companyInfo.name}
            className="h-16 w-auto mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-white">Admin Login</h1>
          <p className="text-gray-400 mt-2">Enter your admin password to continue</p>
        </div>

        {/* Login Form */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg p-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Admin Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  data-testid="admin-password-input"
                  className="w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              data-testid="admin-login-btn"
              className="w-full py-3 bg-gold-400 text-black font-semibold rounded-lg hover:bg-gold-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          This area is restricted to authorized personnel only.
        </p>
      </div>
    </main>
  );
};

export default AdminLogin;
