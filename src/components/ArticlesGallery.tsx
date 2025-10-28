import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Article {
  title: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

interface ArticlesGalleryProps {
  articles: Article[];
}

const ArticlesGallery = ({ articles }: ArticlesGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [articles.length]);

  const article = articles[currentIndex];

  return (
    <div id="articles" className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {article.title}
        </h2>
        
        <p className="text-lg md:text-xl mb-6 text-white/90 leading-relaxed">
          {article.tags.join(' • ')}
        </p>
        
        <div className="flex items-center gap-3 mb-8 text-sm text-white/80">
          <Icon name="User" size={16} />
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <div className="flex gap-2 mb-6">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-4'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesGallery;