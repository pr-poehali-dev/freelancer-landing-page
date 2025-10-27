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
    <div id="articles">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-orange-500">
          <span className="animate-float">📚</span>
          Статьи
        </h2>
        <div className="flex gap-2">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <Card
        className="cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden group animate-fade-in"
        key={currentIndex}
      >
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center text-7xl">
          {article.image}
        </div>
        <CardContent className="p-6">
          <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Icon name="User" size={16} />
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticlesGallery;