import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Journal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [sortBy, setSortBy] = useState('date');

  const categories = ['Все', 'Новичкам', 'Бухгалтерия', 'Маркетинг', 'Право', 'Клиенты'];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const articles = [
    {
      title: '10 ошибок начинающих самозанятых',
      author: 'Мария Петрова',
      date: '22 октября',
      dateValue: '2024-10-22',
      readTime: '5 мин',
      views: 1250,
      tags: ['новичкам', 'ошибки'],
      image: '📊'
    },
    {
      title: 'Как вести учёт доходов и расходов',
      author: 'Иван Смирнов',
      date: '18 октября',
      dateValue: '2024-10-18',
      readTime: '8 мин',
      views: 890,
      tags: ['бухгалтерия', 'учёт'],
      image: '💼'
    },
    {
      title: 'Маркетинг для самозанятых: первые шаги',
      author: 'Елена Кузнецова',
      date: '12 октября',
      dateValue: '2024-10-12',
      readTime: '6 мин',
      views: 2100,
      tags: ['маркетинг', 'продвижение'],
      image: '🎯'
    },
    {
      title: 'Как перейти с ИП на самозанятость',
      author: 'Дмитрий Соколов',
      date: '8 октября',
      dateValue: '2024-10-08',
      readTime: '7 мин',
      views: 1560,
      tags: ['переход', 'ИП'],
      image: '🔄'
    },
    {
      title: 'Юридические аспекты работы с самозанятыми',
      author: 'Анна Волкова',
      date: '5 октября',
      dateValue: '2024-10-05',
      readTime: '10 мин',
      views: 760,
      tags: ['право', 'договоры'],
      image: '⚖️'
    },
    {
      title: 'Как найти первых клиентов самозанятому',
      author: 'Петр Иванов',
      date: '1 октября',
      dateValue: '2024-10-01',
      readTime: '6 мин',
      views: 1820,
      tags: ['клиенты', 'начало'],
      image: '🎯'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      <Header />

      <main className="container mx-auto px-4 py-12 pt-24">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2 text-primary hover:bg-primary hover:text-white">
              <Icon name="ArrowLeft" size={20} />
              На главную
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3 text-orange-500">
            <span className="animate-float">📚</span>
            Журнал для самозанятых
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Полезные статьи, советы и инструкции для самозанятых
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск по статьям..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-2xl border-2 focus:border-primary"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-8 gap-6 flex-wrap">
          <div className="flex gap-3 flex-wrap">
          {categories.map((category) => {
            const count = category === 'Все' ? articles.length : articles.filter((article) => 
              article.tags.some(tag => {
                if (category === 'Новичкам') return tag === 'новичкам' || tag === 'начало';
                if (category === 'Бухгалтерия') return tag === 'бухгалтерия' || tag === 'учёт';
                if (category === 'Маркетинг') return tag === 'маркетинг' || tag === 'продвижение';
                if (category === 'Право') return tag === 'право' || tag === 'договоры';
                if (category === 'Клиенты') return tag === 'клиенты';
                return false;
              })
            ).length;
            
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'hover:bg-primary/10'
                }`}
              >
                {category} <span className="ml-1.5 opacity-70">({count})</span>
              </Button>
            );
          })}
          </div>
          
          <div className="flex items-center gap-2 border-l pl-6">
            <span className="text-sm text-muted-foreground">Сортировка:</span>
            <Button
              variant={sortBy === 'date' ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy('date')}
              className="rounded-full"
            >
              По дате
            </Button>
            <Button
              variant={sortBy === 'popular' ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy('popular')}
              className="rounded-full"
            >
              По популярности
            </Button>
          </div>
        </div>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles
              .filter((article) => {
                const matchesSearch = searchQuery === '' ||
                  article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                  article.author.toLowerCase().includes(searchQuery.toLowerCase());
                
                const matchesCategory = selectedCategory === 'Все' ||
                  article.tags.some(tag => {
                    if (selectedCategory === 'Новичкам') return tag === 'новичкам' || tag === 'начало';
                    if (selectedCategory === 'Бухгалтерия') return tag === 'бухгалтерия' || tag === 'учёт';
                    if (selectedCategory === 'Маркетинг') return tag === 'маркетинг' || tag === 'продвижение';
                    if (selectedCategory === 'Право') return tag === 'право' || tag === 'договоры';
                    if (selectedCategory === 'Клиенты') return tag === 'клиенты';
                    return false;
                  });
                
                return matchesSearch && matchesCategory;
              })
              .sort((a, b) => {
                if (sortBy === 'date') {
                  return new Date(b.dateValue).getTime() - new Date(a.dateValue).getTime();
                } else {
                  return b.views - a.views;
                }
              })
              .map((article, index) => (
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
          {articles.filter((article) => {
            const matchesSearch = searchQuery === '' ||
              article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
              article.author.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesCategory = selectedCategory === 'Все' ||
              article.tags.some(tag => {
                if (selectedCategory === 'Новичкам') return tag === 'новичкам' || tag === 'начало';
                if (selectedCategory === 'Бухгалтерия') return tag === 'бухгалтерия' || tag === 'учёт';
                if (selectedCategory === 'Маркетинг') return tag === 'маркетинг' || tag === 'продвижение';
                if (selectedCategory === 'Право') return tag === 'право' || tag === 'договоры';
                if (selectedCategory === 'Клиенты') return tag === 'клиенты';
                return false;
              });
            
            return matchesSearch && matchesCategory;
          }).length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">По вашему запросу ничего не найдено</p>
            </div>
          )}
        </section>
      </main>

      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 animate-fade-in"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} />
        </button>
      )}
    </div>
  );
};

export default Journal;