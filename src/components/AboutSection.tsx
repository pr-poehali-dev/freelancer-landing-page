import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="mb-24 relative">
      {/* Декоративные элементы */}
      <div className="absolute -top-20 left-10 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="text-center mb-12 relative z-10">
        <div className="inline-block mb-6">
          <div className="text-6xl animate-float">🎓</div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
          Самозанятый - кто это?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Разбираемся в главных вопросах о статусе самозанятого
        </p>
      </div>

      <Tabs defaultValue="basics" className="max-w-5xl mx-auto relative z-10">
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
                      <p className="font-semibold text-lg mb-1">{benefit.title}</p>
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
              <CardTitle className="text-3xl">Ограничения и запреты</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { 
                  icon: 'Users', 
                  title: 'Нельзя нанимать сотрудников', 
                  desc: 'Можно работать только самостоятельно, без найма персонала' 
                },
                { 
                  icon: 'Building2', 
                  title: 'Запрещённые виды деятельности', 
                  desc: 'Перепродажа товаров, добыча полезных ископаемых, доставка товаров с приёмом платежей' 
                },
                { 
                  icon: 'TrendingUp', 
                  title: 'Лимит дохода', 
                  desc: 'Годовой доход не должен превышать 2.4 млн рублей' 
                },
                { 
                  icon: 'Ban', 
                  title: 'Несовместимость с другими режимами', 
                  desc: 'Нельзя совмещать с ИП, ООО или работой по трудовому договору в той же сфере' 
                }
              ].map((limit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-orange-50 rounded-2xl border-2 border-orange-200">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={limit.icon as any} className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">{limit.title}</p>
                    <p className="text-muted-foreground">{limit.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default AboutSection;