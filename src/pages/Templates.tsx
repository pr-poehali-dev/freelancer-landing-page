import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ContractsSection from '@/components/ContractsSection';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Templates = () => {
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Готовые договоры и акты для работы с клиентами
          </p>
        </div>

        <ContractsSection contracts={contracts} />
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
