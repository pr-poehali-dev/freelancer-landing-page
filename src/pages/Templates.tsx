import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50">
      <Header />

      <main className="container mx-auto px-4 py-12 pt-24">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2 text-primary hover:bg-primary hover:text-white">
              <Icon name="ArrowLeft" size={20} />
              На главную
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3 text-orange-500">
            <span className="animate-float">📄</span>
            Шаблоны документов
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Готовые договоры и акты для работы с клиентами
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск по шаблонам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-2xl border-2 focus:border-primary"
              />
            </div>
          </div>
        </div>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contracts
              .filter((contract) =>
                searchQuery === '' ||
                contract.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                contract.description.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((contract, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/30 group animate-fade-in rounded-3xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={contract.icon as any} className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {contract.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {contract.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Download" size={16} />
                        <span>{contract.downloads.toLocaleString()}</span>
                      </div>
                      <Badge variant="secondary">{contract.format}</Badge>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
          {contracts.filter((contract) =>
            searchQuery === '' ||
            contract.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contract.description.toLowerCase().includes(searchQuery.toLowerCase())
          ).length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">По вашему запросу ничего не найдено</p>
            </div>
          )}
        </section>
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

export default Templates;