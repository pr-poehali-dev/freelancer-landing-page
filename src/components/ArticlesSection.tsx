import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Article {
  title: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

interface ArticlesSectionProps {
  articles: Article[];
}

const ArticlesSection = ({ articles }: ArticlesSectionProps) => {
  return (
    <section id="articles" className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-orange-500">
          <span className="animate-float">📚</span>
          Журнал для самозанятых
        </h2>
        <p className="text-xl text-muted-foreground">
          Практические советы и полезные инструкции
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30 overflow-hidden group animate-fade-in rounded-3xl"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {article.image}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;