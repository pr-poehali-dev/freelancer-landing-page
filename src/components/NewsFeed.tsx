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
    <div className="bg-white rounded-3xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Новости
        </h2>
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
      </div>
      
      <div className="space-y-6">
        {newsItems.map((news) => (
          <div
            key={news.id}
            className="cursor-pointer group pb-6 border-b border-gray-100 last:border-b-0 last:pb-0"
          >
            <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
              {news.title}
            </h3>
            <span className="text-sm text-gray-400">{news.date}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <Link to="/news" className="text-gray-900 hover:text-primary transition-all text-base font-semibold underline">
          Все новости
        </Link>
      </div>
    </div>
  );
};

export default NewsFeed;