import Header from '@/components/Header';
import NewsFeed from '@/components/NewsFeed';
import ArticlesGallery from '@/components/ArticlesGallery';
import AboutSection from '@/components/AboutSection';
import ArticlesSection from '@/components/ArticlesSection';

const Index = () => {
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
    }
  ];

  const articles = [
    {
      title: '10 ошибок начинающих самозанятых',
      author: 'Мария Петрова',
      date: '22 октября',
      readTime: '5 мин',
      tags: ['новичкам', 'ошибки'],
      image: '📊'
    },
    {
      title: 'Как вести учёт доходов и расходов',
      author: 'Иван Смирнов',
      date: '18 октября',
      readTime: '8 мин',
      tags: ['бухгалтерия', 'учёт'],
      image: '💼'
    },
    {
      title: 'Маркетинг для самозанятых: первые шаги',
      author: 'Елена Кузнецова',
      date: '12 октября',
      readTime: '6 мин',
      tags: ['маркетинг', 'продвижение'],
      image: '🎯'
    },
    {
      title: 'Как перейти с ИП на самозанятость',
      author: 'Дмитрий Соколов',
      date: '8 октября',
      readTime: '7 мин',
      tags: ['переход', 'ИП'],
      image: '🔄'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      <Header />

      <main className="container mx-auto px-4 py-12 pt-24">
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 shadow-2xl text-white text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Подходит ли вам статус самозанятого?
            </h1>
          </div>
        </section>

        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ArticlesGallery articles={articles} />
            <NewsFeed newsItems={newsItems} />
          </div>
        </section>

        <AboutSection />
        <ArticlesSection articles={articles} />
      </main>

      <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 mt-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Я - самозанятый. Информационный портал для самозанятых граждан
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;