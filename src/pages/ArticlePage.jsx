import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Share2, BookOpen } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticle = useCallback(async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/articles/${id}`);
      setArticle(response.data);
    } catch (err) {
      setError('Article not found');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <main className="bg-black min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-4 text-center py-20">
          <div className="w-12 h-12 border-4 border-gold-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-400 mt-4">Loading article...</p>
        </div>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="bg-black min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-4 text-center py-20">
          <BookOpen className="w-16 h-16 text-gray-600 mx-auto" />
          <h1 className="text-2xl font-bold text-white mt-4">Article Not Found</h1>
          <p className="text-gray-400 mt-2">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/library"
            className="inline-flex items-center mt-6 px-6 py-3 bg-gold-400 text-black font-semibold rounded hover:bg-gold-300 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Library
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          {article.image && (
            <div className="absolute inset-0 opacity-20">
              <img src={article.image} alt="" className="w-full h-full object-cover" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            to="/library"
            className="inline-flex items-center text-gray-400 hover:text-gold-400 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Library
          </Link>

          {/* Category */}
          <span className="inline-block px-3 py-1 bg-gold-400/90 text-black text-xs font-semibold rounded mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 mt-6 text-gray-400">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {article.author}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {article.publishDate}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {article.readTime}
            </span>
            <button
              onClick={handleShare}
              className="flex items-center hover:text-gold-400 transition-colors"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          {article.image && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Article Body */}
          <article 
            className="prose prose-lg prose-invert max-w-none"
            data-testid="article-content"
          >
            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
              {article.body}
            </div>
          </article>

          {/* Author Card */}
          <div className="mt-16 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gold-400/10 rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-gold-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Written by</p>
                <p className="text-white font-semibold">{article.author}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Interested in learning more?</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold-400 text-black font-semibold rounded hover:bg-gold-300 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticlePage;
