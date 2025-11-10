import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState('menu');
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [coins, setCoins] = useState(1250);
  const [gems, setGems] = useState(45);
  const [searchingPvP, setSearchingPvP] = useState(false);

  const characters = [
    {
      id: 'knight',
      name: 'Рыцарь Артур',
      class: 'Рыцарь',
      level: 15,
      hp: 1200,
      maxHp: 1200,
      attack: 180,
      defense: 220,
      image: '⚔️',
      color: 'from-red-600 to-orange-600'
    },
    {
      id: 'mage',
      name: 'Волшебница Элара',
      class: 'Маг',
      level: 14,
      hp: 800,
      maxHp: 800,
      attack: 280,
      defense: 120,
      image: '🔮',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'archer',
      name: 'Охотник Кайл',
      class: 'Лучник',
      level: 13,
      hp: 950,
      maxHp: 950,
      attack: 220,
      defense: 160,
      image: '🏹',
      color: 'from-green-600 to-teal-600'
    }
  ];

  const worldMap = [
    { id: 1, name: 'Королевский замок', status: 'completed', icon: 'Castle' },
    { id: 2, name: 'Тёмный лес', status: 'active', icon: 'Trees' },
    { id: 3, name: 'Горы драконов', status: 'locked', icon: 'Mountain' },
    { id: 4, name: 'Пустыня теней', status: 'locked', icon: 'Skull' },
    { id: 5, name: 'Кристальные пещеры', status: 'locked', icon: 'Gem' }
  ];

  const shopItems = [
    { id: 1, name: 'Меч Дракона', type: 'Оружие', price: 500, currency: 'coins', attack: '+50', icon: 'Sword' },
    { id: 2, name: 'Посох Магии', type: 'Оружие', price: 25, currency: 'gems', attack: '+75', icon: 'Wand2' },
    { id: 3, name: 'Алмазная броня', type: 'Броня', price: 35, currency: 'gems', defense: '+80', icon: 'Shield' },
    { id: 4, name: 'Зелье здоровья', type: 'Расходник', price: 50, currency: 'coins', effect: '+200 HP', icon: 'Heart' }
  ];

  const quests = [
    { id: 1, name: 'Победить Лесного Тролля', reward: 150, type: 'PvE', progress: 0, max: 1 },
    { id: 2, name: 'Победить в 3 PvP боях', reward: 300, type: 'PvP', progress: 1, max: 3 },
    { id: 3, name: 'Собрать 50 кристаллов', reward: 200, type: 'PvE', progress: 32, max: 50 }
  ];

  const handlePvPSearch = () => {
    setSearchingPvP(true);
    setTimeout(() => {
      setSearchingPvP(false);
      alert('Соперник найден! Готовься к битве! ⚔️');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 font-roboto overflow-x-hidden">
      {currentScreen === 'menu' && (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/e66df4b3-e98f-4836-99c4-9e59a19a38c7/files/20a677db-ecba-44b9-910b-061911559c23.jpg)' }}
          />
          
          <div className="relative z-10 text-center space-y-8 max-w-md w-full">
            <h1 className="text-6xl font-cinzel font-bold text-primary animate-pulse-glow">
              REALM
            </h1>
            <p className="text-xl text-muted-foreground font-cinzel">OF LEGENDS</p>

            <div className="space-y-3 pt-8">
              <Button 
                onClick={() => setCurrentScreen('characters')}
                className="w-full h-14 text-lg font-cinzel bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105"
              >
                <Icon name="Play" className="mr-2" size={24} />
                Начать игру
              </Button>
              
              <Button 
                onClick={() => setCurrentScreen('pvp')}
                className="w-full h-14 text-lg font-cinzel bg-accent hover:bg-accent/90 transition-all hover:scale-105"
              >
                <Icon name="Swords" className="mr-2" size={24} />
                PvP Арена
              </Button>
              
              <Button 
                onClick={() => setCurrentScreen('map')}
                className="w-full h-14 text-lg font-cinzel bg-secondary hover:bg-secondary/90 transition-all hover:scale-105"
              >
                <Icon name="Map" className="mr-2" size={24} />
                Карта мира
              </Button>
              
              <Button 
                variant="outline"
                className="w-full h-14 text-lg font-cinzel border-primary/50 hover:bg-primary/10"
              >
                <Icon name="Settings" className="mr-2" size={24} />
                Настройки
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentScreen === 'characters' && (
        <div className="min-h-screen p-4 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Button onClick={() => setCurrentScreen('menu')} variant="ghost">
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <h2 className="text-2xl font-cinzel font-bold text-primary">Персонажи</h2>
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-sm">
                  <Icon name="Coins" size={16} className="mr-1" />
                  {coins}
                </Badge>
                <Badge variant="secondary" className="text-sm bg-secondary">
                  <Icon name="Gem" size={16} className="mr-1" />
                  {gems}
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              {characters.map((char) => (
                <Card 
                  key={char.id}
                  className={`p-4 cursor-pointer transition-all hover:scale-[1.02] border-2 ${
                    selectedCharacter === char.id ? 'border-primary' : 'border-border'
                  }`}
                  onClick={() => setSelectedCharacter(char.id)}
                >
                  <div className="flex gap-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${char.color} flex items-center justify-center text-4xl animate-float`}>
                      {char.image}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-cinzel font-bold">{char.name}</h3>
                          <p className="text-sm text-muted-foreground">{char.class} • Уровень {char.level}</p>
                        </div>
                        {selectedCharacter === char.id && (
                          <Badge className="bg-primary">Выбран</Badge>
                        )}
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-muted-foreground">HP</span>
                            <span>{char.hp}/{char.maxHp}</span>
                          </div>
                          <Progress value={(char.hp / char.maxHp) * 100} className="h-2" />
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="flex items-center gap-1">
                            <Icon name="Sword" size={16} className="text-accent" />
                            <span>{char.attack}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Shield" size={16} className="text-secondary" />
                            <span>{char.defense}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <Button 
                onClick={() => setCurrentScreen('inventory')}
                className="w-full h-12 font-cinzel bg-secondary hover:bg-secondary/90"
                disabled={!selectedCharacter}
              >
                <Icon name="Backpack" className="mr-2" />
                Инвентарь
              </Button>
              <Button 
                onClick={() => setCurrentScreen('shop')}
                className="w-full h-12 font-cinzel bg-primary hover:bg-primary/90"
                disabled={!selectedCharacter}
              >
                <Icon name="ShoppingBag" className="mr-2" />
                Магазин
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentScreen === 'map' && (
        <div className="min-h-screen p-4 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Button onClick={() => setCurrentScreen('menu')} variant="ghost">
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <h2 className="text-2xl font-cinzel font-bold text-primary">Карта мира</h2>
              <div className="w-10" />
            </div>

            <div className="space-y-4">
              {worldMap.map((location) => (
                <Card 
                  key={location.id}
                  className={`p-4 transition-all ${
                    location.status === 'active' ? 'border-primary border-2 cursor-pointer hover:scale-[1.02]' :
                    location.status === 'locked' ? 'opacity-50 cursor-not-allowed' :
                    'cursor-pointer hover:scale-[1.02]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      location.status === 'completed' ? 'bg-green-600/20 border-2 border-green-600' :
                      location.status === 'active' ? 'bg-primary/20 border-2 border-primary animate-pulse-glow' :
                      'bg-muted border-2 border-border'
                    }`}>
                      <Icon name={location.icon as any} size={28} className={
                        location.status === 'completed' ? 'text-green-600' :
                        location.status === 'active' ? 'text-primary' :
                        'text-muted-foreground'
                      } />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-cinzel font-bold">{location.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {location.status === 'completed' ? '✓ Завершено' :
                         location.status === 'active' ? 'Доступно' :
                         '🔒 Заблокировано'}
                      </p>
                    </div>

                    {location.status === 'active' && (
                      <Button size="sm" className="font-cinzel">
                        Войти
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <Button 
              onClick={() => setCurrentScreen('quests')}
              className="w-full mt-6 h-12 font-cinzel bg-secondary hover:bg-secondary/90"
            >
              <Icon name="ScrollText" className="mr-2" />
              Квесты
            </Button>
          </div>
        </div>
      )}

      {currentScreen === 'shop' && (
        <div className="min-h-screen p-4 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Button onClick={() => setCurrentScreen('characters')} variant="ghost">
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <h2 className="text-2xl font-cinzel font-bold text-primary">Магазин</h2>
              <div className="flex gap-2">
                <Badge variant="secondary">
                  <Icon name="Coins" size={16} className="mr-1" />
                  {coins}
                </Badge>
                <Badge className="bg-secondary">
                  <Icon name="Gem" size={16} className="mr-1" />
                  {gems}
                </Badge>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="all">Всё</TabsTrigger>
                <TabsTrigger value="weapons">Оружие</TabsTrigger>
                <TabsTrigger value="armor">Броня</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-3">
                {shopItems.map((item) => (
                  <Card key={item.id} className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <Icon name={item.icon as any} size={24} className="text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-cinzel font-bold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.type}</p>
                        {item.attack && <Badge variant="outline" className="mt-1 text-xs">{item.attack} Атака</Badge>}
                        {item.defense && <Badge variant="outline" className="mt-1 text-xs">{item.defense} Защита</Badge>}
                        {item.effect && <Badge variant="outline" className="mt-1 text-xs">{item.effect}</Badge>}
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-2">
                          <Icon name={item.currency === 'coins' ? 'Coins' : 'Gem'} size={18} className={item.currency === 'gems' ? 'text-secondary' : ''} />
                          <span className="font-bold">{item.price}</span>
                        </div>
                        <Button size="sm" className="font-cinzel">
                          Купить
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}

      {currentScreen === 'pvp' && (
        <div className="min-h-screen p-4 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Button onClick={() => setCurrentScreen('menu')} variant="ghost">
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <h2 className="text-2xl font-cinzel font-bold text-primary">PvP Арена</h2>
              <div className="w-10" />
            </div>

            <Card className="p-6 mb-6 bg-gradient-to-br from-accent/10 to-destructive/10 border-2 border-accent">
              <div className="text-center space-y-4">
                <Icon name="Swords" size={64} className="mx-auto text-accent animate-pulse" />
                <h3 className="text-2xl font-cinzel font-bold">Битва за славу!</h3>
                <p className="text-muted-foreground">Сразись с игроками со всего мира</p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-3 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-primary">127</div>
                    <div className="text-xs text-muted-foreground">Побед</div>
                  </div>
                  <div className="p-3 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-accent">45</div>
                    <div className="text-xs text-muted-foreground">Поражений</div>
                  </div>
                </div>

                <Button 
                  onClick={handlePvPSearch}
                  disabled={searchingPvP}
                  className="w-full h-14 text-lg font-cinzel bg-accent hover:bg-accent/90"
                >
                  {searchingPvP ? (
                    <>
                      <Icon name="Loader2" className="mr-2 animate-spin" size={24} />
                      Поиск соперника...
                    </>
                  ) : (
                    <>
                      <Icon name="Sword" className="mr-2" size={24} />
                      Найти бой
                    </>
                  )}
                </Button>
              </div>
            </Card>

            <h3 className="text-lg font-cinzel font-bold mb-4">Топ игроков</h3>
            <div className="space-y-3">
              {[
                { name: 'DragonSlayer', rating: 2450, wins: 234 },
                { name: 'ShadowMage', rating: 2380, wins: 198 },
                { name: 'IronKnight', rating: 2310, wins: 176 },
                { name: 'StormArcher', rating: 2290, wins: 165 }
              ].map((player, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      index === 0 ? 'bg-primary text-primary-foreground' :
                      index === 1 ? 'bg-muted-foreground text-background' :
                      index === 2 ? 'bg-accent text-accent-foreground' :
                      'bg-muted'
                    }`}>
                      {index + 1}
                    </div>
                    
                    <Avatar>
                      <AvatarFallback>{player.name[0]}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <h4 className="font-bold">{player.name}</h4>
                      <p className="text-sm text-muted-foreground">{player.wins} побед</p>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Icon name="Trophy" size={16} className="text-primary" />
                        <span className="font-bold">{player.rating}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentScreen === 'quests' && (
        <div className="min-h-screen p-4 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Button onClick={() => setCurrentScreen('map')} variant="ghost">
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <h2 className="text-2xl font-cinzel font-bold text-primary">Квесты</h2>
              <div className="w-10" />
            </div>

            <div className="space-y-4">
              {quests.map((quest) => (
                <Card key={quest.id} className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-cinzel font-bold">{quest.name}</h3>
                        <Badge variant="outline" className="mt-1 text-xs">{quest.type}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-primary">
                          <Icon name="Coins" size={16} />
                          <span className="font-bold">+{quest.reward}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Прогресс</span>
                        <span>{quest.progress}/{quest.max}</span>
                      </div>
                      <Progress value={(quest.progress / quest.max) * 100} className="h-2" />
                    </div>

                    <Button 
                      variant={quest.progress === quest.max ? 'default' : 'outline'}
                      className="w-full font-cinzel"
                      disabled={quest.progress !== quest.max}
                    >
                      {quest.progress === quest.max ? 'Получить награду' : 'В процессе'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentScreen === 'inventory' && (
        <div className="min-h-screen p-4 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Button onClick={() => setCurrentScreen('characters')} variant="ghost">
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <h2 className="text-2xl font-cinzel font-bold text-primary">Инвентарь</h2>
              <div className="w-10" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[...Array(12)].map((_, i) => (
                <Card 
                  key={i}
                  className="aspect-square flex items-center justify-center cursor-pointer hover:border-primary transition-all hover:scale-105"
                >
                  {i < 3 ? (
                    <Icon name={i === 0 ? 'Sword' : i === 1 ? 'Shield' : 'Heart'} size={32} className="text-primary" />
                  ) : (
                    <Icon name="Plus" size={32} className="text-muted-foreground" />
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
