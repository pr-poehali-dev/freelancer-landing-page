import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Contract {
  title: string;
  description: string;
  downloads: number;
  format: string;
  icon: string;
}

interface ContractsSectionProps {
  contracts: Contract[];
}

const ContractsSection = ({ contracts }: ContractsSectionProps) => {
  return (
    <section id="contracts" className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <span className="animate-float">📄</span>
          Шаблоны документов
        </h2>
        <p className="text-xl text-muted-foreground">
          Готовые договоры и акты для работы с клиентами
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contracts.map((contract, index) => (
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
    </section>
  );
};

export default ContractsSection;
