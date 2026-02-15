import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, Mail, Trash2, Check, RefreshCw, 
  MessageSquare, Clock, Building, Phone,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { companyInfo } from '../data/mockData';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({ totalContacts: 0, unreadContacts: 0 });
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  const getAuthHeaders = useCallback(() => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
  }), []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [contactsRes, statsRes] = await Promise.all([
        axios.get(`${BACKEND_URL}/api/admin/contacts`, getAuthHeaders()),
        axios.get(`${BACKEND_URL}/api/admin/stats`, getAuthHeaders())
      ]);
      setContacts(contactsRes.data);
      setStats(statsRes.data);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    } finally {
      setLoading(false);
    }
  }, [getAuthHeaders]);

  const validateAndFetch = useCallback(async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login');
      return;
    }

    try {
      await axios.get(`${BACKEND_URL}/api/admin/validate`, getAuthHeaders());
      fetchData();
    } catch (err) {
      localStorage.removeItem('adminToken');
      navigate('/admin-login');
    }
  }, [navigate, getAuthHeaders, fetchData]);

  useEffect(() => {
    validateAndFetch();
  }, [validateAndFetch]);

  const markAsRead = async (id) => {
    try {
      await axios.put(`${BACKEND_URL}/api/admin/contacts/${id}/read`, {}, getAuthHeaders());
      fetchData();
    } catch (err) {
      console.error('Failed to mark as read:', err);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      await axios.delete(`${BACKEND_URL}/api/admin/contacts/${id}`, getAuthHeaders());
      fetchData();
    } catch (err) {
      console.error('Failed to delete:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <main className="bg-black min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src={companyInfo.logoUrl} alt="Logo" className="h-8 w-auto" />
              <span className="text-white font-semibold">Admin Dashboard</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Messages</p>
                <p className="text-3xl font-bold text-white mt-1">{stats.totalContacts}</p>
              </div>
              <MessageSquare className="w-10 h-10 text-gold-400" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Unread Messages</p>
                <p className="text-3xl font-bold text-gold-400 mt-1">{stats.unreadContacts}</p>
              </div>
              <Mail className="w-10 h-10 text-gold-400" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50">
            <button
              onClick={fetchData}
              className="w-full flex items-center justify-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <RefreshCw className={`w-6 h-6 ${loading ? 'animate-spin' : ''}`} />
              <span className="font-medium">Refresh Data</span>
            </button>
          </div>
        </div>

        {/* Contact Messages */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700/50">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Contact Form Submissions</h2>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <RefreshCw className="w-8 h-8 text-gold-400 animate-spin mx-auto" />
              <p className="text-gray-400 mt-4">Loading messages...</p>
            </div>
          ) : contacts.length === 0 ? (
            <div className="p-12 text-center">
              <Mail className="w-12 h-12 text-gray-600 mx-auto" />
              <p className="text-gray-400 mt-4">No messages yet</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-700">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`p-6 transition-colors ${!contact.read ? 'bg-gold-400/5' : ''}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-white">
                          {contact.firstName} {contact.lastName}
                        </h3>
                        {!contact.read && (
                          <span className="px-2 py-0.5 bg-gold-400 text-black text-xs font-medium rounded">
                            NEW
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Mail className="w-4 h-4 mr-1" />
                          {contact.email}
                        </span>
                        {contact.phone && (
                          <span className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            {contact.phone}
                          </span>
                        )}
                        {contact.company && (
                          <span className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {contact.company}
                          </span>
                        )}
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {formatDate(contact.timestamp)}
                        </span>
                      </div>
                      {contact.service && (
                        <p className="text-gold-400 text-sm mt-2">Service: {contact.service}</p>
                      )}
                      
                      {/* Expandable Message */}
                      <button
                        onClick={() => setExpandedId(expandedId === contact.id ? null : contact.id)}
                        className="flex items-center space-x-1 text-gray-400 hover:text-white mt-3 text-sm"
                      >
                        {expandedId === contact.id ? (
                          <><ChevronUp className="w-4 h-4" /><span>Hide message</span></>
                        ) : (
                          <><ChevronDown className="w-4 h-4" /><span>Show message</span></>
                        )}
                      </button>
                      
                      {expandedId === contact.id && (
                        <div className="mt-3 p-4 bg-gray-800/50 rounded-lg">
                          <p className="text-gray-300 whitespace-pre-wrap">{contact.message}</p>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 ml-4">
                      {!contact.read && (
                        <button
                          onClick={() => markAsRead(contact.id)}
                          className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-400/10 rounded-lg transition-colors"
                          title="Mark as read"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteContact(contact.id)}
                        className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
