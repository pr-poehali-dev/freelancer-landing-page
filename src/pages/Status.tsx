import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

const Status = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      <motion.div 
        className="fixed top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
      />
      <motion.div 
        className="fixed top-40 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
      />
      <motion.div 
        className="fixed bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
      />
      
      <Header />

      <main className="container mx-auto px-4 py-12 pt-24 relative z-10">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2 text-primary hover:bg-primary hover:text-white">
              <Icon name="ArrowLeft" size={20} />
              На главную
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12 relative z-10">
          <div className="inline-block mb-6">
            <div className="text-6xl animate-float">🎓</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
            Самозанятый - кто это?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Разбираемся в главных вопросах о статусе самозанятого
          </p>
        </div>

        <Tabs defaultValue="basics" className="max-w-5xl mx-auto relative z-10 mb-16">
          <TabsList className="grid w-full grid-cols-4 h-auto p-2 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-gray-200">
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
            <Card className="border-2 border-primary/20 shadow-2xl rounded-[2.5rem] hover:shadow-3xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-3xl">Кто такой самозанятый?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  Самозанятый — это физическое лицо, которое работает на себя и платит налог на профессиональный доход (НПД). 
                  Это специальный налоговый режим для тех, кто оказывает услуги или продаёт товары собственного производства.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-[1.5rem] border border-primary/20"
                  >
                    <Icon name="Users" className="mb-3 text-primary" size={32} />
                    <h4 className="font-semibold text-xl mb-2">Более 8 млн</h4>
                    <p className="text-muted-foreground">самозанятых в России</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gradient-to-br from-secondary/10 to-accent/10 p-6 rounded-[1.5rem] border border-secondary/20"
                  >
                    <Icon name="TrendingUp" className="mb-3 text-secondary" size={32} />
                    <h4 className="font-semibold text-xl mb-2">До 2.4 млн ₽</h4>
                    <p className="text-muted-foreground">годовой доход</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="taxes" className="mt-8">
            <Card className="border-2 border-primary/20 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-3xl">Налоги самозанятых</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-primary/20"
                  >
                    <div className="text-5xl mb-4 text-center">👤</div>
                    <h4 className="font-bold text-2xl mb-2 text-center">4%</h4>
                    <p className="text-center text-muted-foreground">
                      С доходов от физических лиц
                    </p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-secondary/20"
                  >
                    <div className="text-5xl mb-4 text-center">🏢</div>
                    <h4 className="font-bold text-2xl mb-2 text-center">6%</h4>
                    <p className="text-center text-muted-foreground">
                      С доходов от юридических лиц и ИП
                    </p>
                  </motion.div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-xl mb-3 flex items-center gap-2">
                    <Icon name="Gift" size={24} className="text-primary" />
                    Налоговый вычет
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    При регистрации вы получаете налоговый вычет 10 000 ₽. Он автоматически уменьшает ваши налоговые платежи 
                    до тех пор, пока не будет использован полностью.
                  </p>
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
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      whileHover={{ x: 8, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                      className="flex items-start gap-4 p-4 rounded-2xl"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0"
                      >
                        <Icon name={benefit.icon as any} className="text-white" size={24} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-xl mb-1">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="limits" className="mt-8">
            <Card className="border-2 border-primary/20 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-3xl">Ограничения статуса</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
                    <h4 className="font-semibold text-xl mb-3 flex items-center gap-2 text-red-700">
                      <Icon name="DollarSign" size={24} />
                      Лимит дохода
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Максимальный годовой доход — 2.4 млн рублей. При превышении нужно переходить на другой налоговый режим.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
                    <h4 className="font-semibold text-xl mb-3 flex items-center gap-2 text-amber-700">
                      <Icon name="Users" size={24} />
                      Работники
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Нельзя нанимать сотрудников по трудовым договорам. Работать можно только самостоятельно.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                    <h4 className="font-semibold text-xl mb-3 flex items-center gap-2 text-blue-700">
                      <Icon name="Briefcase" size={24} />
                      Виды деятельности
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Некоторые виды деятельности запрещены для самозанятых:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <Icon name="X" className="text-red-500 mt-1 flex-shrink-0" size={18} />
                        <span>Перепродажа товаров</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="X" className="text-red-500 mt-1 flex-shrink-0" size={18} />
                        <span>Добыча и продажа полезных ископаемых</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="X" className="text-red-500 mt-1 flex-shrink-0" size={18} />
                        <span>Курьерские услуги для других организаций</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="X" className="text-red-500 mt-1 flex-shrink-0" size={18} />
                        <span>Продажа подакцизных товаров</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                    <h4 className="font-semibold text-xl mb-3 flex items-center gap-2 text-purple-700">
                      <Icon name="Clock" size={24} />
                      Трудовой стаж
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Период работы как самозанятый не засчитывается в трудовой стаж, если не делать добровольные взносы в ПФР.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mb-12 rounded-2xl border bg-white shadow max-w-2xl mx-auto">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-orange-500 flex items-center gap-2">
              <Icon name="List" size={20} />
              Дополнительная информация
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#pros-cons" 
                    className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-primary/10 transition-colors group text-sm"
                  >
                    <Icon name="ChevronRight" className="text-primary" size={16} />
                    <span className="group-hover:text-primary transition-colors">Плюсы и минусы статуса</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#comparison" 
                    className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-primary/10 transition-colors group text-sm"
                  >
                    <Icon name="ChevronRight" className="text-primary" size={16} />
                    <span className="group-hover:text-primary transition-colors">Сравнение с иными статусами</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#responsibility" 
                    className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-primary/10 transition-colors group text-sm"
                  >
                    <Icon name="ChevronRight" className="text-primary" size={16} />
                    <span className="group-hover:text-primary transition-colors">Ответственность</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#rights-protection" 
                    className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-primary/10 transition-colors group text-sm"
                  >
                    <Icon name="ChevronRight" className="text-primary" size={16} />
                    <span className="group-hover:text-primary transition-colors">Защита прав</span>
                  </a>
                </li>
              </ul>
            </nav>
          </CardContent>
        </Card>

        <section id="pros-cons" className="mb-16 scroll-mt-24">
          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-3xl text-orange-500 flex items-center gap-3">
                <Icon name="Scale" size={32} />
                Плюсы и минусы статуса
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
                    <Icon name="Plus" size={24} />
                    Плюсы
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 mt-1" size={20} />
                      <span>Низкая налоговая ставка (4-6%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 mt-1" size={20} />
                      <span>Не нужно сдавать декларации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 mt-1" size={20} />
                      <span>Простая регистрация онлайн</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 mt-1" size={20} />
                      <span>Не нужно платить страховые взносы</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <Icon name="Minus" size={24} />
                    Минусы
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-red-600 mt-1" size={20} />
                      <span>Ограничение по доходу (2.4 млн руб/год)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-red-600 mt-1" size={20} />
                      <span>Нельзя нанимать работников</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-red-600 mt-1" size={20} />
                      <span>Не идет трудовой стаж</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" className="text-red-600 mt-1" size={20} />
                      <span>Ограничения на виды деятельности</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="comparison" className="mb-16 scroll-mt-24">
          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-3xl text-orange-500 flex items-center gap-3">
                <Icon name="GitCompare" size={32} />
                Сравнение с иными статусами
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2">
                      <th className="py-3 px-4">Критерий</th>
                      <th className="py-3 px-4 text-center">Самозанятый</th>
                      <th className="py-3 px-4 text-center">ИП</th>
                      <th className="py-3 px-4 text-center">ООО</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Регистрация</td>
                      <td className="py-3 px-4 text-center">Онлайн, 15 мин</td>
                      <td className="py-3 px-4 text-center">5-7 дней</td>
                      <td className="py-3 px-4 text-center">10-15 дней</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Налоги</td>
                      <td className="py-3 px-4 text-center">4-6%</td>
                      <td className="py-3 px-4 text-center">6-15%</td>
                      <td className="py-3 px-4 text-center">15-20%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Отчетность</td>
                      <td className="py-3 px-4 text-center">Нет</td>
                      <td className="py-3 px-4 text-center">Да</td>
                      <td className="py-3 px-4 text-center">Да</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Работники</td>
                      <td className="py-3 px-4 text-center">Нельзя</td>
                      <td className="py-3 px-4 text-center">Можно</td>
                      <td className="py-3 px-4 text-center">Можно</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="responsibility" className="mb-16 scroll-mt-24">
          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-3xl text-orange-500 flex items-center gap-3">
                <Icon name="Gavel" size={32} />
                Ответственность
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-4">
              <p>
                Самозанятые несут ответственность за нарушения налогового законодательства:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="AlertTriangle" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Штраф за неуплату налога — 20% от суммы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="AlertTriangle" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Штраф за непередачу сведений о доходах — от 20% суммы расчета</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="AlertTriangle" className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span>Штраф за повторное нарушение — размер неуплаченного налога</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="rights-protection" className="mb-16 scroll-mt-24">
          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-3xl text-orange-500 flex items-center gap-3">
                <Icon name="ShieldCheck" size={32} />
                Защита прав
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-4">
              <p>
                Самозанятые могут защитить свои права в случае спора с клиентом:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span>Заключать договоры на оказание услуг</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span>Выставлять чеки через приложение «Мой налог»</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span>Обращаться в суд при неоплате</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span>Получать консультации в налоговой службе</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full w-14 h-14 shadow-xl z-50 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          size="icon"
        >
          <Icon name="ArrowUp" size={24} />
        </Button>
      )}

      <Footer />
    </div>
  );
};

export default Status;
