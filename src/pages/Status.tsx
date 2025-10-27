import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Status = () => {
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
            <span className="animate-float">📋</span>
            Все о статусе
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полная информация о статусе самозанятого в России
          </p>
        </div>

        <section id="basic-info" className="mb-16">
          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-3xl text-orange-500 flex items-center gap-3">
                <Icon name="Info" size={32} />
                Основная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-4">
              <p>
                Самозанятый — это физическое лицо, которое самостоятельно оказывает услуги или продает товары собственного производства без привлечения наемных работников.
              </p>
              <p>
                Статус самозанятого позволяет легально вести предпринимательскую деятельность с минимальной налоговой нагрузкой и упрощенной отчетностью.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="pros-cons" className="mb-16">
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

        <section id="comparison" className="mb-16">
          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-3xl text-orange-500 flex items-center gap-3">
                <Icon name="GitCompare" size={32} />
                Сравнение с иными юридическими статусами
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border p-4 text-left">Параметр</th>
                      <th className="border p-4 text-left">Самозанятый</th>
                      <th className="border p-4 text-left">ИП</th>
                      <th className="border p-4 text-left">ООО</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-4 font-semibold">Налоги</td>
                      <td className="border p-4">4-6%</td>
                      <td className="border p-4">6-15%</td>
                      <td className="border p-4">15-20%</td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-semibold">Отчетность</td>
                      <td className="border p-4">Не требуется</td>
                      <td className="border p-4">Декларация</td>
                      <td className="border p-4">Полная</td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-semibold">Сотрудники</td>
                      <td className="border p-4">Нельзя</td>
                      <td className="border p-4">Можно</td>
                      <td className="border p-4">Можно</td>
                    </tr>
                    <tr>
                      <td className="border p-4 font-semibold">Регистрация</td>
                      <td className="border p-4">Онлайн, бесплатно</td>
                      <td className="border p-4">800₽, документы</td>
                      <td className="border p-4">4000₽+, документы</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="responsibility" className="mb-16">
          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-3xl text-orange-500 flex items-center gap-3">
                <Icon name="AlertTriangle" size={32} />
                Ответственность
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-4">
              <p>
                Самозанятые несут ответственность за несвоевременную уплату налогов и нарушение правил применения специального налогового режима.
              </p>
              <div className="space-y-3">
                <h4 className="font-bold text-xl">Виды ответственности:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Dot" className="text-orange-500 mt-1" size={20} />
                    <span><strong>Штраф за несвоевременную уплату налога:</strong> 20% от суммы неуплаченного налога</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Dot" className="text-orange-500 mt-1" size={20} />
                    <span><strong>Штраф за непробитие чека:</strong> 20% от суммы расчета (первое нарушение), 100% (повторное)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Dot" className="text-orange-500 mt-1" size={20} />
                    <span><strong>Утрата права на НПД:</strong> при превышении лимита дохода или нарушении условий применения</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="rights-protection" className="mb-16">
          <Card className="rounded-3xl border-2 hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="text-3xl text-orange-500 flex items-center gap-3">
                <Icon name="Shield" size={32} />
                Защита прав
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-4">
              <p>
                Самозанятые граждане имеют право на защиту своих интересов в судебном и досудебном порядке.
              </p>
              <div className="space-y-3">
                <h4 className="font-bold text-xl">Основные права:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-1" size={20} />
                    <span>Право на обжалование действий налоговых органов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-1" size={20} />
                    <span>Право на судебную защиту своих прав и интересов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-1" size={20} />
                    <span>Право требовать оплату за оказанные услуги через суд</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-600 mt-1" size={20} />
                    <span>Право на получение консультаций в налоговых органах</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Status;