import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  category: string;
}

interface NewsFeedProps {
  newsItems: NewsItem[];
}

const NewsFeed = ({ newsItems }: NewsFeedProps) => {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Новости
          </h2>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
        </div>
        
        <div className="space-y-6">
          {newsItems.map((news, index) => (
            <div
              key={news.id}
              className="cursor-pointer group/item pb-6 border-b border-gray-100 last:border-b-0 last:pb-0 hover:translate-x-2 transition-all duration-300"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-2 group-hover/item:text-primary transition-colors leading-tight">
                    {news.title}
                  </h3>
                  <span className="text-sm text-gray-400">{news.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 text-gray-900 hover:text-primary transition-all text-base font-semibold group/link"
          >
            Все новости
            <Icon name="ArrowRight" size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;