import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Search, BookOpen, Filter } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const LibraryPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/articles`);
      setArticles(response.data);
    } catch (err) {
      console.error('Failed to fetch articles:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['ALL', ...new Set(articles.map(a => a.category))];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold-900/10 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-400 text-sm font-medium uppercase tracking-wider">Knowledge Hub</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
              Our <span className="text-gold-400">Library</span>
            </h1>
            <p className="text-xl text-gray-400 mt-6 leading-relaxed">
              Explore our collection of articles, insights, and research on business consulting, 
              tax advisory, risk management, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                data-testid="library-search-input"
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-8 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none cursor-pointer"
                data-testid="library-category-filter"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="w-12 h-12 border-4 border-gold-400 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-gray-400 mt-4">Loading articles...</p>
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto" />
              <h3 className="text-xl font-semibold text-white mt-4">No articles found</h3>
              <p className="text-gray-400 mt-2">
                {searchTerm || selectedCategory !== 'ALL' 
                  ? 'Try adjusting your search or filter criteria'
                  : 'Check back soon for new content'}
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-400 mb-8">{filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-gold-400/50 transition-all duration-300"
                    data-testid={`article-card-${article.id}`}
                  >
                    <Link to={`/library/${article.id}`} className="block">
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gold-900/30 to-gray-900">
                        {article.image ? (
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <BookOpen className="w-12 h-12 text-gold-400/50" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 bg-gold-400/90 text-black text-xs font-semibold rounded">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors leading-tight line-clamp-2">
                          {article.title}
                        </h3>
                        
                        {article.excerpt && (
                          <p className="text-gray-400 mt-3 text-sm line-clamp-2">
                            {article.excerpt}
                          </p>
                        )}

                        <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </span>
                          <span>{article.publishDate}</span>
                        </div>
                        
                        <div className="mt-4 flex items-center text-gold-400 text-sm font-medium group-hover:text-gold-300">
                          Read article
                          <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default LibraryPage;
