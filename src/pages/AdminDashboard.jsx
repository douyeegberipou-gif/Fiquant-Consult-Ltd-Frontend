import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, Mail, Trash2, Check, RefreshCw, 
  MessageSquare, Clock, Building, Phone,
  ChevronDown, ChevronUp, Plus, Edit, BookOpen,
  Star, Save, X, FileText, Upload, Image
} from 'lucide-react';
import { companyInfo } from '../data/mockData';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const [contacts, setContacts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [featuredInsights, setFeaturedInsights] = useState([]);
  const [stats, setStats] = useState({ totalContacts: 0, unreadContacts: 0, totalArticles: 0, publishedArticles: 0 });
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [showArticleForm, setShowArticleForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [articleForm, setArticleForm] = useState({
    title: '',
    body: '',
    excerpt: '',
    author: 'Fiquant Consult',
    category: 'ARTICLE',
    image: '',
    publishDate: new Date().toISOString().split('T')[0],
    published: true
  });
  const navigate = useNavigate();

  const getAuthHeaders = useCallback(() => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
  }), []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [contactsRes, statsRes, articlesRes, featuredRes] = await Promise.all([
        axios.get(`${BACKEND_URL}/api/admin/contacts`, getAuthHeaders()),
        axios.get(`${BACKEND_URL}/api/admin/stats`, getAuthHeaders()),
        axios.get(`${BACKEND_URL}/api/admin/articles`, getAuthHeaders()),
        axios.get(`${BACKEND_URL}/api/admin/featured-insights`, getAuthHeaders())
      ]);
      setContacts(contactsRes.data);
      setStats(statsRes.data);
      setArticles(articlesRes.data);
      setFeaturedInsights(featuredRes.data);
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

  // Contact functions
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

  // Article functions
  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingArticle) {
        await axios.put(`${BACKEND_URL}/api/admin/articles/${editingArticle.id}`, articleForm, getAuthHeaders());
      } else {
        await axios.post(`${BACKEND_URL}/api/admin/articles`, articleForm, getAuthHeaders());
      }
      resetArticleForm();
      fetchData();
    } catch (err) {
      console.error('Failed to save article:', err);
      alert('Failed to save article');
    }
  };

  const editArticle = (article) => {
    setEditingArticle(article);
    setArticleForm({
      title: article.title,
      body: article.body,
      excerpt: article.excerpt || '',
      author: article.author,
      category: article.category,
      image: article.image || '',
      publishDate: article.publishDate,
      published: article.published
    });
    setShowArticleForm(true);
  };

  const deleteArticle = async (id) => {
    if (!window.confirm('Are you sure you want to delete this article?')) return;
    try {
      await axios.delete(`${BACKEND_URL}/api/admin/articles/${id}`, getAuthHeaders());
      fetchData();
    } catch (err) {
      console.error('Failed to delete article:', err);
    }
  };

  const resetArticleForm = () => {
    setShowArticleForm(false);
    setEditingArticle(null);
    setArticleForm({
      title: '',
      body: '',
      excerpt: '',
      author: 'Fiquant Consult',
      category: 'ARTICLE',
      image: '',
      publishDate: new Date().toISOString().split('T')[0],
      published: true
    });
  };

  // Image upload handler
  const handleImageUpload = async (file) => {
    if (!file) return;
    
    setUploadingImage(true);
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/admin/upload`, formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response.data.success) {
        // Set the full URL for the uploaded image
        const imageUrl = `${BACKEND_URL}${response.data.url}`;
        setArticleForm(prev => ({ ...prev, image: imageUrl }));
      }
    } catch (err) {
      console.error('Failed to upload image:', err);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploadingImage(false);
    }
  };

  // Featured Insights functions
  const setFeaturedInsight = async (position, articleId) => {
    try {
      await axios.post(`${BACKEND_URL}/api/admin/featured-insights`, { position, articleId }, getAuthHeaders());
      fetchData();
    } catch (err) {
      console.error('Failed to set featured insight:', err);
    }
  };

  const removeFeaturedInsight = async (position) => {
    if (!window.confirm('Remove this featured insight?')) return;
    try {
      await axios.delete(`${BACKEND_URL}/api/admin/featured-insights/${position}`, getAuthHeaders());
      fetchData();
    } catch (err) {
      console.error('Failed to remove featured insight:', err);
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

  const tabs = [
    { id: 'contacts', label: 'Messages', icon: Mail, count: stats.unreadContacts },
    { id: 'articles', label: 'Articles', icon: BookOpen, count: stats.totalArticles },
    { id: 'featured', label: 'Featured', icon: Star }
  ];

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
              data-testid="admin-logout-btn"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Messages</p>
                <p className="text-2xl font-bold text-white mt-1">{stats.totalContacts}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-gold-400" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Unread</p>
                <p className="text-2xl font-bold text-gold-400 mt-1">{stats.unreadContacts}</p>
              </div>
              <Mail className="w-8 h-8 text-gold-400" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Articles</p>
                <p className="text-2xl font-bold text-white mt-1">{stats.totalArticles}</p>
              </div>
              <BookOpen className="w-8 h-8 text-gold-400" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700/50">
            <button
              onClick={fetchData}
              className="w-full flex items-center justify-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <RefreshCw className={`w-6 h-6 ${loading ? 'animate-spin' : ''}`} />
              <span className="font-medium">Refresh</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-900/50 p-1 rounded-lg w-fit">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id 
                  ? 'bg-gold-400 text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
              data-testid={`tab-${tab.id}`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.count !== undefined && tab.count > 0 && (
                <span className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                  activeTab === tab.id ? 'bg-black/20' : 'bg-gold-400/20 text-gold-400'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'contacts' && (
          <ContactsTab 
            contacts={contacts}
            loading={loading}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
            markAsRead={markAsRead}
            deleteContact={deleteContact}
            formatDate={formatDate}
          />
        )}

        {activeTab === 'articles' && (
          <ArticlesTab
            articles={articles}
            loading={loading}
            showArticleForm={showArticleForm}
            setShowArticleForm={setShowArticleForm}
            articleForm={articleForm}
            setArticleForm={setArticleForm}
            editingArticle={editingArticle}
            handleArticleSubmit={handleArticleSubmit}
            editArticle={editArticle}
            deleteArticle={deleteArticle}
            resetArticleForm={resetArticleForm}
            handleImageUpload={handleImageUpload}
            uploadingImage={uploadingImage}
          />
        )}

        {activeTab === 'featured' && (
          <FeaturedTab
            articles={articles}
            featuredInsights={featuredInsights}
            setFeaturedInsight={setFeaturedInsight}
            removeFeaturedInsight={removeFeaturedInsight}
          />
        )}
      </div>
    </main>
  );
};


// Contacts Tab Component
const ContactsTab = ({ contacts, loading, expandedId, setExpandedId, markAsRead, deleteContact, formatDate }) => (
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
);


// Articles Tab Component
const ArticlesTab = ({ 
  articles, loading, showArticleForm, setShowArticleForm, 
  articleForm, setArticleForm, editingArticle, handleArticleSubmit, 
  editArticle, deleteArticle, resetArticleForm, handleImageUpload, uploadingImage 
}) => (
  <div className="space-y-6">
    {/* Add Article Button */}
    {!showArticleForm && (
      <button
        onClick={() => setShowArticleForm(true)}
        className="flex items-center space-x-2 px-4 py-2 bg-gold-400 text-black font-semibold rounded-lg hover:bg-gold-300 transition-colors"
        data-testid="add-article-btn"
      >
        <Plus className="w-5 h-5" />
        <span>Add Article</span>
      </button>
    )}

    {/* Article Form */}
    {showArticleForm && (
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">
            {editingArticle ? 'Edit Article' : 'New Article'}
          </h2>
          <button
            onClick={resetArticleForm}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleArticleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Title *</label>
              <input
                type="text"
                value={articleForm.title}
                onChange={(e) => setArticleForm({...articleForm, title: e.target.value})}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                placeholder="Article title"
                data-testid="article-title-input"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Category</label>
              <select
                value={articleForm.category}
                onChange={(e) => setArticleForm({...articleForm, category: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
              >
                <option value="ARTICLE">Article</option>
                <option value="REPORT">Report</option>
                <option value="CASE_STUDY">Case Study</option>
                <option value="PODCAST">Podcast</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Author</label>
              <input
                type="text"
                value={articleForm.author}
                onChange={(e) => setArticleForm({...articleForm, author: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                placeholder="Author name"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Publish Date</label>
              <input
                type="date"
                value={articleForm.publishDate}
                onChange={(e) => setArticleForm({...articleForm, publishDate: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Article Image</label>
            <div className="space-y-3">
              {/* Image Preview */}
              {articleForm.image && (
                <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src={articleForm.image} 
                    alt="Article preview" 
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setArticleForm({...articleForm, image: ''})}
                    className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              
              {/* Upload Button */}
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:border-gold-400 cursor-pointer transition-colors">
                  <Upload className="w-5 h-5" />
                  <span>{uploadingImage ? 'Uploading...' : 'Upload Image'}</span>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={(e) => handleImageUpload(e.target.files[0])}
                    className="hidden"
                    disabled={uploadingImage}
                  />
                </label>
                <span className="text-gray-500 text-sm">PNG, JPEG, or WebP</span>
              </div>
              
              {/* Or use URL */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 text-sm">Or enter URL:</span>
                <input
                  type="url"
                  value={articleForm.image}
                  onChange={(e) => setArticleForm({...articleForm, image: e.target.value})}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-gold-400"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Excerpt (optional)</label>
            <textarea
              value={articleForm.excerpt}
              onChange={(e) => setArticleForm({...articleForm, excerpt: e.target.value})}
              rows={2}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold-400 resize-none"
              placeholder="Brief description of the article..."
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Body * (max 5,000 words)</label>
            <textarea
              value={articleForm.body}
              onChange={(e) => setArticleForm({...articleForm, body: e.target.value})}
              required
              rows={12}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold-400 resize-y"
              placeholder="Write your article content here..."
              data-testid="article-body-input"
            />
            <p className="text-gray-500 text-sm mt-1">
              {articleForm.body.split(/\s+/).filter(w => w).length} / 5,000 words
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={articleForm.published}
                onChange={(e) => setArticleForm({...articleForm, published: e.target.checked})}
                className="w-4 h-4 rounded border-gray-700 text-gold-400 focus:ring-gold-400"
              />
              <span className="text-gray-300">Published</span>
            </label>
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              className="flex items-center space-x-2 px-6 py-3 bg-gold-400 text-black font-semibold rounded-lg hover:bg-gold-300 transition-colors"
              data-testid="save-article-btn"
            >
              <Save className="w-5 h-5" />
              <span>{editingArticle ? 'Update Article' : 'Save Article'}</span>
            </button>
            <button
              type="button"
              onClick={resetArticleForm}
              className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )}

    {/* Articles List */}
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700/50">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold text-white">All Articles</h2>
      </div>

      {loading ? (
        <div className="p-12 text-center">
          <RefreshCw className="w-8 h-8 text-gold-400 animate-spin mx-auto" />
        </div>
      ) : articles.length === 0 ? (
        <div className="p-12 text-center">
          <BookOpen className="w-12 h-12 text-gray-600 mx-auto" />
          <p className="text-gray-400 mt-4">No articles yet</p>
        </div>
      ) : (
        <div className="divide-y divide-gray-700">
          {articles.map((article) => (
            <div key={article.id} className="p-6 hover:bg-gray-800/30 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-white">{article.title}</h3>
                    <span className="px-2 py-0.5 bg-gold-400/20 text-gold-400 text-xs font-medium rounded">
                      {article.category}
                    </span>
                    {!article.published && (
                      <span className="px-2 py-0.5 bg-gray-700 text-gray-400 text-xs font-medium rounded">
                        Draft
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>{article.publishDate}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => editArticle(article)}
                    className="p-2 text-gray-400 hover:text-gold-400 hover:bg-gold-400/10 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteArticle(article.id)}
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
);


// Featured Insights Tab Component
const FeaturedTab = ({ articles, featuredInsights, setFeaturedInsight, removeFeaturedInsight }) => {
  const positions = [1, 2, 3, 4];
  const publishedArticles = articles.filter(a => a.published);

  const getFeaturedAtPosition = (pos) => {
    return featuredInsights.find(f => f.position === pos);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700/50">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold text-white">Featured Insights</h2>
        <p className="text-gray-400 text-sm mt-1">
          Select which articles appear in the "Featured Insights" section on the homepage
        </p>
      </div>

      <div className="p-6 space-y-4">
        {positions.map((pos) => {
          const featured = getFeaturedAtPosition(pos);
          
          return (
            <div key={pos} className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg">
              <div className="w-10 h-10 bg-gold-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gold-400 font-bold">{pos}</span>
              </div>
              
              <div className="flex-1">
                <select
                  value={featured?.articleId || ''}
                  onChange={(e) => {
                    if (e.target.value) {
                      setFeaturedInsight(pos, e.target.value);
                    }
                  }}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                  data-testid={`featured-select-${pos}`}
                >
                  <option value="">Select an article...</option>
                  {publishedArticles.map(article => (
                    <option key={article.id} value={article.id}>
                      {article.title}
                    </option>
                  ))}
                </select>
              </div>

              {featured && (
                <button
                  onClick={() => removeFeaturedInsight(pos)}
                  className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                  title="Remove"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      {publishedArticles.length === 0 && (
        <div className="px-6 pb-6">
          <div className="p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
            <p className="text-yellow-400 text-sm">
              <FileText className="w-4 h-4 inline mr-2" />
              No published articles available. Create and publish articles first.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
