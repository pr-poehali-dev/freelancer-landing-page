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
  return (
    <div id="articles">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-orange-500">
          <span className="animate-float">📚</span>
          Статьи
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden group"
          >
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-32 flex items-center justify-center text-5xl">
              {article.image}
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Icon name="User" size={12} />
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {article.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArticlesGallery;
