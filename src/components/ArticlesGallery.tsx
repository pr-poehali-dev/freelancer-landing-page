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
    <div id="articles" className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-[2.5rem] p-8 md:p-12 shadow-xl text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
      
      {/* Дополнительные геометрические формы */}
      <div className="absolute top-1/4 right-20 w-20 h-20 border-4 border-white/10 rounded-3xl rotate-12 animate-float"></div>
      <div className="absolute bottom-1/4 left-16 w-16 h-16 bg-white/5 rounded-2xl -rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-12 h-12 border-4 border-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10">
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
            {article.tags[0]}
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
          {article.title}
        </h2>
        
        <div className="flex items-center gap-4 mb-8 text-sm text-white/90">
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <Icon name="User" size={16} />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <Icon name="Clock" size={16} />
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="flex gap-2">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 hover:bg-white/80 ${
                index === currentIndex ? 'bg-white w-12' : 'bg-white/40 w-6'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesGallery;