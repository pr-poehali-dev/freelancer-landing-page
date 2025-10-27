import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-xl font-bold text-gray-700">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a 
                href="https://t.me/yourtelegram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-xl hover:scale-110"
              >
                <Icon name="Send" size={24} />
              </a>
              <a 
                href="https://vk.com/yourvk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-xl hover:scale-110"
              >
                <Icon name="MessageCircle" size={24} />
              </a>
              <a 
                href="https://youtube.com/@yourchannel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md hover:shadow-xl hover:scale-110"
              >
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-48 h-48">
              <img 
                src="https://cdn.poehali.dev/files/05a57aaa-2097-4bf1-bcc9-8a05f9b76d3f.png" 
                alt="Логотип" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-orange-500 flex items-center gap-2">
              <Icon name="MessageSquare" size={24} />
              Обратная связь
            </h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle" className="text-green-500 mx-auto mb-3" size={48} />
                <p className="text-lg font-semibold text-green-600">Спасибо за отзыв!</p>
                <p className="text-sm text-muted-foreground mt-2">Мы обязательно учтём ваше мнение</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о вашем опыте использования сайта и какие темы/разделы вы хотели бы видеть..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="rounded-xl resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity rounded-xl"
                >
                  Отправить
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-muted-foreground">
            © 2024 Я - самозанятый. Информационный портал для самозанятых граждан
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;