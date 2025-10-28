import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Header = () => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const isActive = (path: string) => location.pathname === path;

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
            <div 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 sm:gap-3 animate-fade-in cursor-pointer lg:cursor-default"
            >
              <Link to="/" className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <img src="https://cdn.poehali.dev/files/05a57aaa-2097-4bf1-bcc9-8a05f9b76d3f.png" alt="Логотип" className="w-full h-full object-contain" />
                </div>
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Я - самозанятый
                </span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8 items-center">
              <a 
                href="#about" 
                className="text-primary hover:text-blue-600 transition-all"
              >
                Самозанятый - кто это?
              </a>
              <Link 
                to="/journal" 
                className={`transition-all ${isActive('/journal') ? 'text-blue-600' : 'text-primary hover:text-blue-600'}`}
              >
                Журнал
              </Link>
              <Link 
                to="/templates" 
                className={`transition-all ${isActive('/templates') ? 'text-blue-600' : 'text-primary hover:text-blue-600'}`}
              >
                Шаблоны документов
              </Link>
              
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
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 transition-all">
                Войти
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden gap-2 items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                className="hover:bg-primary/10 transition-all"
              >
                <Icon name="Search" size={24} className="text-orange-500" strokeWidth={2.5} />
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-primary hover:bg-primary hover:text-white rounded-xl transition-all">
                Самозанятый - кто это?
              </a>
              <Link 
                to="/journal" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block px-4 py-3 rounded-xl transition-all ${isActive('/journal') ? 'bg-primary text-white' : 'text-primary hover:bg-primary hover:text-white'}`}
              >
                Журнал
              </Link>
              <Link 
                to="/templates" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block px-4 py-3 rounded-xl transition-all ${isActive('/templates') ? 'bg-primary text-white' : 'text-primary hover:bg-primary hover:text-white'}`}
              >
                Шаблоны документов
              </Link>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                Войти
              </Button>
            </div>
          </div>
        )}

        {/* Search Mobile Popup */}
        {searchOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/50 z-50 animate-fade-in" onClick={() => setSearchOpen(false)}>
            <div className="bg-white m-4 rounded-2xl p-4" onClick={(e) => e.stopPropagation()}>
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
          </div>
        )}
      </header>
    </>
  );
};

export default Header;