import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 animate-gradient bg-[length:200%_200%]" />
      
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 animate-fade-in">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <img src="https://cdn.poehali.dev/files/05a57aaa-2097-4bf1-bcc9-8a05f9b76d3f.png" alt="Логотип" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Я - самозанятый
              </span>
            </Link>
            <div className="flex gap-6 items-center">
              <div className="relative group">
                <a href="#about" className="text-primary hover:text-orange-500 hover:underline transition-all cursor-pointer">
                  Самозанятый - кто это?
                </a>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border-2 border-primary/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <a href="#status" className="block px-6 py-3 text-primary hover:bg-primary hover:text-white transition-all">
                    Все о статусе
                  </a>
                  <a href="#registration" className="block px-6 py-3 text-primary hover:bg-primary hover:text-white transition-all">
                    Регистрация
                  </a>
                  <a href="#taxes" className="block px-6 py-3 text-primary hover:bg-primary hover:text-white transition-all">
                    Налоги
                  </a>
                </div>
              </div>
              <Link to="/journal" className="text-primary hover:text-orange-500 hover:underline transition-all">Журнал для самозанятых</Link>
              <Link to="/templates" className="text-primary hover:text-orange-500 hover:underline transition-all">Шаблоны документов</Link>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                Войти
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;