import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeNews, setActiveNews] = useState(0);

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

  const contracts = [
    {
      title: 'Договор на оказание услуг',
      description: 'Универсальный договор для работы с клиентами',
      downloads: 1245,
      format: 'DOCX',
      icon: 'FileText'
    },
    {
      title: 'Акт выполненных работ',
      description: 'Шаблон акта для подтверждения выполнения услуг',
      downloads: 892,
      format: 'DOCX',
      icon: 'FileCheck'
    },
    {
      title: 'Договор подряда',
      description: 'Для работ с конкретным результатом',
      downloads: 673,
      format: 'DOCX',
      icon: 'Hammer'
    },
    {
      title: 'NDA (соглашение о конфиденциальности)',
      description: 'Защита коммерческой тайны клиента',
      downloads: 534,
      format: 'PDF',
      icon: 'Lock'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 animate-gradient bg-[length:200%_200%]" />
      
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
              <span className="text-2xl">💼</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              СамоЗанят.PRO
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О статусе</a>
            <a href="#articles" className="text-foreground hover:text-primary transition-colors">Журнал</a>
            <a href="#contracts" className="text-foreground hover:text-primary transition-colors">Договоры</a>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Войти
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-24 text-center animate-fade-in">
          <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Всё о самозанятости<br />в одном месте
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Актуальные новости, полезные статьи и готовые шаблоны документов для вашего успешного старта
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать работу
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-primary/5">
              <Icon name="PlayCircle" className="mr-2" size={20} />
              Смотреть гайд
            </Button>
          </div>
        </section>

        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold flex items-center gap-3">
              <span className="animate-float">📰</span>
              Новостная лента
            </h2>
            <Button variant="ghost" className="text-primary">
              Все новости
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {newsItems.map((news, index) => (
              <Card
                key={news.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden group animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveNews(index)}
              >
                <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {news.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{news.excerpt}</p>
                  <Button variant="link" className="mt-4 text-primary p-0 group-hover:gap-3 transition-all">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="animate-float">🎓</span>
              Что такое самозанятость?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Разбираемся в главных вопросах о статусе самозанятого
            </p>
          </div>

          <Tabs defaultValue="basics" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 h-auto p-2 bg-white/50 backdrop-blur-sm rounded-2xl">
              <TabsTrigger value="basics" className="rounded-xl py-4 text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                <Icon name="Book" className="mr-2" size={18} />
                Основы
              </TabsTrigger>
              <TabsTrigger value="taxes" className="rounded-xl py-4 text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                <Icon name="Calculator" className="mr-2" size={18} />
                Налоги
              </TabsTrigger>
              <TabsTrigger value="benefits" className="rounded-xl py-4 text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                <Icon name="TrendingUp" className="mr-2" size={18} />
                Преимущества
              </TabsTrigger>
              <TabsTrigger value="limits" className="rounded-xl py-4 text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white">
                <Icon name="AlertCircle" className="mr-2" size={18} />
                Ограничения
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="basics" className="mt-8">
              <Card className="border-2 border-primary/20 shadow-xl rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Кто такой самозанятый?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Самозанятый — это физическое лицо, которое работает на себя и платит налог на профессиональный доход (НПД). 
                    Это специальный налоговый режим для тех, кто оказывает услуги или продаёт товары собственного производства.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl">
                      <Icon name="Users" className="mb-3 text-primary" size={32} />
                      <h4 className="font-semibold text-xl mb-2">Более 8 млн</h4>
                      <p className="text-muted-foreground">самозанятых в России</p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-6 rounded-2xl">
                      <Icon name="Percent" className="mb-3 text-secondary" size={32} />
                      <h4 className="font-semibold text-xl mb-2">До 6%</h4>
                      <p className="text-muted-foreground">максимальная налоговая ставка</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="taxes" className="mt-8">
              <Card className="border-2 border-primary/20 shadow-xl rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Налоговая система</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-lg">
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        4%
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Работа с физическими лицами</p>
                        <p className="text-muted-foreground">Когда вы оказываете услуги обычным людям</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        6%
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Работа с юридическими лицами</p>
                        <p className="text-muted-foreground">Когда ваш заказчик — компания или ИП</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-2xl">
                    <Icon name="Gift" className="mb-3 text-accent" size={32} />
                    <p className="font-semibold text-xl mb-2">Налоговый вычет 10 000 ₽</p>
                    <p className="text-muted-foreground">Бонус при регистрации — уменьшает сумму налога</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="mt-8">
              <Card className="border-2 border-primary/20 shadow-xl rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Преимущества статуса</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      { icon: 'Smartphone', title: 'Простая регистрация', desc: 'За 15 минут через приложение «Мой налог»' },
                      { icon: 'FileText', title: 'Никакой отчётности', desc: 'Налог рассчитывается автоматически' },
                      { icon: 'Wallet', title: 'Легальная работа', desc: 'Официальный доход и подтверждение для банков' },
                      { icon: 'Shield', title: 'Низкие налоги', desc: 'Всего 4-6% от дохода без дополнительных взносов' },
                      { icon: 'Zap', title: 'Быстрое начало', desc: 'Можно начать работать сразу после регистрации' },
                      { icon: 'CreditCard', title: 'Приём платежей', desc: 'От физлиц, юрлиц и ИП' }
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 hover:bg-primary/5 rounded-2xl transition-colors">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name={benefit.icon as any} className="text-white" size={24} />
                        </div>
                        <div>
                          <p className="font-semibold text-lg mb-1">{benefit.title}</p>
                          <p className="text-muted-foreground">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="limits" className="mt-8">
              <Card className="border-2 border-primary/20 shadow-xl rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Важные ограничения</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: 'Лимит дохода', desc: 'До 2,4 млн рублей в год', icon: 'TrendingUp' },
                      { title: 'Без сотрудников', desc: 'Нельзя нанимать работников по трудовым договорам', icon: 'Users' },
                      { title: 'Запрещённые виды деятельности', desc: 'Нельзя перепродавать товары, добывать полезные ископаемые и др.', icon: 'XCircle' },
                      { title: 'Пенсионные взносы', desc: 'Период самозанятости не входит в трудовой стаж автоматически', icon: 'Clock' }
                    ].map((limit, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-5 bg-orange-50 rounded-2xl border border-orange-200">
                        <Icon name={limit.icon as any} className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                        <div>
                          <p className="font-semibold text-lg mb-1">{limit.title}</p>
                          <p className="text-muted-foreground">{limit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section id="articles" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
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
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="User" size={14} />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="rounded-2xl border-2 hover:bg-primary/5 text-lg px-8 py-6">
              Посмотреть все статьи
              <Icon name="ArrowRight" className="ml-2" size={18} />
            </Button>
          </div>
        </section>

        <section id="contracts" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="animate-float">📄</span>
              Шаблоны договоров
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовые документы для работы с клиентами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contracts.map((contract, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 group animate-fade-in rounded-3xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                        <Icon name={contract.icon as any} className="text-white" size={28} />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {contract.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {contract.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="font-mono text-xs">
                      {contract.format}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Download" size={16} />
                      {contract.downloads.toLocaleString()} скачиваний
                    </span>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl">
                      <Icon name="Download" className="mr-2" size={16} />
                      Скачать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-xl">💼</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  СамоЗанят.PRO
                </span>
              </div>
              <p className="text-muted-foreground">
                Всё для успешной работы самозанятых в России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О статусе</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Журнал</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Договоры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-xl hover:bg-primary/10">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-xl hover:bg-primary/10">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-xl hover:bg-primary/10">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-muted-foreground">
            <p>© 2024 СамоЗанят.PRO. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
