import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsFeed from '@/components/NewsFeed';
import ArticlesGallery from '@/components/ArticlesGallery';
import AboutSection from '@/components/AboutSection';
import { motion, useScroll, useTransform } from 'framer-motion';

const Index = () => {
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const blob3Y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
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
      {/* Декоративные элементы фона с параллаксом */}
      <motion.div 
        style={{ y: blob1Y }}
        className="fixed top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
      />
      <motion.div 
        style={{ y: blob2Y }}
        className="fixed top-40 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
      />
      <motion.div 
        style={{ y: blob3Y }}
        className="fixed bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
      />
      
      <Header />

      <main className="container mx-auto px-4 py-12 pt-24 relative z-10">
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-[2.5rem] p-8 shadow-2xl text-white relative overflow-hidden">
            {/* Декоративные геометрические фигуры */}
            <motion.div 
              animate={{ rotate: [12, 22, 12], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-4 right-8 w-16 h-16 border-4 border-white/20 rounded-2xl"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-4 left-8 w-12 h-12 bg-white/10 rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/2 left-12 w-8 h-8 border-4 border-white/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: [45, 60, 45] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-8 right-16 w-10 h-10 bg-white/10"
            />
            
            <div className="flex items-center justify-center gap-8 flex-wrap relative z-10">
              <motion.img 
                src="https://cdn.poehali.dev/projects/303552be-1b66-4b75-b6fd-00b501d98681/files/9cac1bba-d0ee-483e-9767-54bb6a5942da.jpg"
                alt="Веселый фрилансер"
                className="w-32 h-32 object-contain"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <h1 className="text-3xl md:text-4xl font-bold">
                Подходит ли вам статус самозанятого?
              </h1>
              <motion.img 
                src="https://cdn.poehali.dev/projects/303552be-1b66-4b75-b6fd-00b501d98681/files/775ac872-d6e1-4a8d-942f-f81775801bf4.jpg"
                alt="Думающий персонаж"
                className="w-32 h-32 object-contain"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ArticlesGallery articles={articles} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <NewsFeed newsItems={newsItems} />
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <AboutSection />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;