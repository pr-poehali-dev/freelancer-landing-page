import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ArticlesSection from '@/components/ArticlesSection';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Journal = () => {
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
    },
    {
      title: 'Юридические аспекты работы с самозанятыми',
      author: 'Анна Волкова',
      date: '5 октября',
      readTime: '10 мин',
      tags: ['право', 'договоры'],
      image: '⚖️'
    },
    {
      title: 'Как найти первых клиентов самозанятому',
      author: 'Петр Иванов',
      date: '1 октября',
      readTime: '6 мин',
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
            <Button variant="ghost" className="gap-2">
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полезные статьи, советы и инструкции для самозанятых
          </p>
        </div>

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

export default Journal;
