import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const newHistory = [searchQuery.trim(), ...searchHistory.filter(item => item !== searchQuery.trim())].slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      window.location.href = `/journal?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleHistoryClick = (query: string) => {
    setSearchQuery(query);
    window.location.href = `/journal?search=${encodeURIComponent(query)}`;
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

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
                  <Link to="/status" className="block px-6 py-3 text-primary hover:bg-primary hover:text-white transition-all">
                    Все о статусе
                  </Link>
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
              
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="hover:bg-primary/10 transition-all"
                >
                  <Icon name="Search" size={32} className="text-orange-500" strokeWidth={2.5} />
                </Button>
                
                {searchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border-2 border-primary/10 p-4 animate-fade-in">
                    <form onSubmit={handleSearch}>
                      <div className="relative mb-3">
                        <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input
                          type="text"
                          placeholder="Поиск по сайту..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 rounded-xl border-2 focus:border-primary"
                          autoFocus
                        />
                      </div>
                    </form>
                    
                    {searchHistory.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-muted-foreground font-medium">Последние запросы</span>
                          <button
                            onClick={clearHistory}
                            className="text-xs text-primary hover:text-orange-500 transition-colors"
                          >
                            Очистить
                          </button>
                        </div>
                        <div className="space-y-1">
                          {searchHistory.map((query, index) => (
                            <button
                              key={index}
                              onClick={() => handleHistoryClick(query)}
                              className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/5 transition-all flex items-center gap-2 group"
                            >
                              <Icon name="Clock" size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                              <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">{query}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
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