import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsFeed from '@/components/NewsFeed';
import ArticlesGallery from '@/components/ArticlesGallery';
import AboutSection from '@/components/AboutSection';

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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="fixed top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="fixed top-40 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="fixed bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <Header />

      <main className="container mx-auto px-4 py-12 pt-24 relative z-10">
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-[2.5rem] p-8 shadow-2xl text-white text-center animate-fade-in relative overflow-hidden">
            {/* Декоративные геометрические фигуры */}
            <div className="absolute top-4 right-8 w-16 h-16 border-4 border-white/20 rounded-2xl rotate-12"></div>
            <div className="absolute bottom-4 left-8 w-12 h-12 bg-white/10 rounded-full"></div>
            <div className="absolute top-1/2 left-12 w-8 h-8 border-4 border-white/20 rounded-full"></div>
            <div className="absolute bottom-8 right-16 w-10 h-10 bg-white/10 rotate-45"></div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2 relative z-10">
              Подходит ли вам статус самозанятого?
            </h1>
          </div>
        </section>

        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
            <ArticlesGallery articles={articles} />
            <NewsFeed newsItems={newsItems} />
          </div>
        </section>

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;