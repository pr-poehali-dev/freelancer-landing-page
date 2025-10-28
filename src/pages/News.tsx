import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Налоги', 'Законодательство', 'Финансы', 'Статистика', 'Карьера'];

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

  const newsItems = [
    {
      id: 1,
      date: '25 октября 2024',
      title: 'Новые налоговые льготы для самозанятых в 2024',
      excerpt: 'Правительство утвердило расширение льгот для самозанятых граждан. Теперь доступны дополнительные вычеты...',
      category: 'Налоги'
    },
    {
      id: 2,
      date: '20 октября 2024',
      title: 'Количество самозанятых превысило 8 миллионов',
      excerpt: 'По данным ФНС, число зарегистрированных самозанятых в России достигло рекордных значений...',
      category: 'Статистика'
    },
    {
      id: 3,
      date: '15 октября 2024',
      title: 'Как правильно работать с иностранными заказчиками',
      excerpt: 'Новые правила для самозанятых при работе с зарубежными клиентами. Разбираем все нюансы...',
      category: 'Инструкции'
    },
    {
      id: 4,
      date: '10 октября 2024',
      title: 'Изменения в налоговом законодательстве с 2025 года',
      excerpt: 'Минфин подготовил изменения в налоговое законодательство, касающиеся самозанятых граждан...',
      category: 'Законодательство'
    },
    {
      id: 5,
      date: '5 октября 2024',
      title: 'Самозанятые смогут получать больничные',
      excerpt: 'Рассматривается законопроект о добровольном медицинском страховании для самозанятых...',
      category: 'Новости'
    },
    {
      id: 6,
      date: '1 октября 2024',
      title: 'Топ-10 профессий для самозанятых в 2024',
      excerpt: 'Эксперты определили самые востребованные и высокооплачиваемые профессии среди самозанятых...',
      category: 'Карьера'
    },
    {
      id: 7,
      date: '25 сентября 2024',
      title: 'Как избежать блокировки счета самозанятого',
      excerpt: 'ЦБ усилил контроль за финансовыми операциями. Рассказываем, как не попасть под блокировку...',
      category: 'Финансы'
    },
    {
      id: 8,
      date: '20 сентября 2024',
      title: 'Самозанятость и пенсия: что нужно знать',
      excerpt: 'Разбираем, как самозанятость влияет на будущую пенсию и что можно сделать для её увеличения...',
      category: 'Пенсии'
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
            <span className="animate-float">📰</span>
            Новости
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Актуальные новости для самозанятых граждан
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск по новостям..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-2xl border-2 focus:border-primary"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8 gap-3 flex-wrap">
          {categories.map((category) => (
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
              {category}
            </Button>
          ))}
        </div>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems
              .filter((news) => {
                const matchesSearch = searchQuery === '' ||
                  news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  news.category.toLowerCase().includes(searchQuery.toLowerCase());
                
                const matchesCategory = selectedCategory === 'Все' || news.category === selectedCategory;
                
                return matchesSearch && matchesCategory;
              })
              .map((news) => (
                <Card
                  key={news.id}
                  className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-primary/50 overflow-hidden group rounded-3xl"
                >
                  <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm">
                        {news.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{news.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">{news.excerpt}</p>
                    <Button variant="link" className="text-primary p-0 h-auto">
                      Читать далее
                      <Icon name="ArrowRight" className="ml-1" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
          {newsItems.filter((news) => {
            const matchesSearch = searchQuery === '' ||
              news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
              news.category.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesCategory = selectedCategory === 'Все' || news.category === selectedCategory;
            
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

export default News;