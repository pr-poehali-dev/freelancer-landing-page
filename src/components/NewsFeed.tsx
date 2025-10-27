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
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-orange-500">
          <span className="animate-float">📰</span>
          Новостная лента
        </h2>
      </div>
      
      <div className="space-y-4">
        {newsItems.map((news) => (
          <Card
            key={news.id}
            className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-primary/50 overflow-hidden group"
          >
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                  {news.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{news.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {news.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{news.excerpt}</p>
              <Button variant="link" className="mt-3 text-primary p-0 h-auto text-sm">
                Читать далее
                <Icon name="ArrowRight" className="ml-1" size={14} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
