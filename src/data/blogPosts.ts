export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: 'Eletricista' | 'Encanador' | 'Marido de Aluguel' | 'Casa Inteligente';
  readTime: string;
  serviceLink: string;
  serviceName: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
  faqs?: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'como-escolher-disjuntor-chuveiro-blumenau',
    title: 'Como escolher o disjuntor e a fiação corretos para chuveiro em Blumenau (110V vs 220V)',
    description: 'Aprenda a dimensionar disjuntor e bitola de cabo para chuveiros elétricos de 5500W a 7800W. Evite quedas de energia e riscos elétricos com dicas do Técnico Osmar.',
    date: '2026-09-28',
    category: 'Eletricista',
    readTime: '5 min de leitura',
    serviceLink: '/eletricista/instalacao-de-chuveiro/',
    serviceName: 'Instalação de Chuveiro Elétrico em Blumenau',
    author: {
      name: 'Técnico Osmar',
      role: 'Eletricista Profissional Certificado NR10',
    },
    content: [
      'O chuveiro elétrico é o aparelho que mais consome corrente elétrica em uma residência. Em Blumenau, onde a tensão padrão residencial na rede Celesc costuma ser 220V (bifásica ou monofásica fase-fase dependendo da ligação), o dimensionamento incorreto do disjuntor e da fiação é o principal responsável por cheiro de queimado e disjuntores que desarmam durante o banho.',
      '### 1. A fórmula básica de dimensionamento elétrico',
      'Para descobrir a corrente elétrica (Amperes) exigida pelo seu chuveiro, usamos a fórmula simples: **Corrente (A) = Potência (Watts) ÷ Tensão (Volts)**.',
      'Por exemplo, um chuveiro moderno de **7.500 Watts** ligado em **220 Volts**: 7.500 ÷ 220 = **34,09 Amperes**.',
      'Pela norma NBR 5410 da ABNT, nunca utilizamos um disjuntor com capacidade inferior à corrente máxima do chuveiro, e a fiação precisa suportar com folga a corrente nominal.',
      '### 2. Tabela de referência rápida para chuveiros 220V',
      '* **Chuveiro até 5.500W (220V):** Corrente aproximada de 25A → Fiação mínima de **4,0 mm²** → Disjuntor de **32A** (Curva C).',
      '* **Chuveiro de 6.800W (220V):** Corrente aproximada de 31A → Fiação mínima de **6,0 mm²** → Disjuntor de **40A** (Curva C).',
      '* **Chuveiro de 7.500W a 7.800W (220V):** Corrente aproximada de 34A a 35,5A → Fiação mínima de **6,0 mm²** (para distâncias até 20m) ou **10,0 mm²** → Disjuntor de **40A a 50A**.',
      '### 3. Por que você NUNCA deve apenas trocar o disjuntor sem verificar os fios',
      'Um dos erros mais perigosos que encontramos em residências nos bairros de Blumenau é quando o disjuntor de 25A desarma com frequência e o morador apenas substitui por um disjuntor de 40A ou 50A, mantendo os fios finos de 2,5 mm² ou 4,0 mm².',
      'O disjuntor existe justamente para proteger o fio contra aquecimento excessivo. Se o disjuntor for maior do que a capacidade do condutor, o fio vai derreter dentro da parede, provocando curto-circuito e até princípio de incêndio.',
      '### 4. Cuidados essenciais na conexão no banheiro',
      '* **Elimine a tomada tradicional de pino:** Chuveiro elétrico deve ser ligado diretamente com **conectores cerâmicos de porcelana** ou conectores de torção e alavanca certificados (como WAGO Linha 221 para alta corrente).',
      '* **Aterramento é obrigatório:** O fio verde (terra) deve estar conectado ao sistema de aterramento da residência para evitar choques no registro metálico durante o banho.'
    ],
    faqs: [
      {
        question: 'Posso usar disjuntor comum Curva B ou Curva C para chuveiro?',
        answer: 'Para cargas puramente resistivas como chuveiros, o disjuntor Curva B é aceito, porém em quadros residenciais modernos utiliza-se comumente a Curva C para manter a padronização e estabilidade do circuito.'
      },
      {
        question: 'Qual o risco de emendar o fio do chuveiro com fita isolante comum?',
        answer: 'A alta corrente elétrica provoca aquecimento nas pontas de cobre. A fita isolante derrete com o calor, oxidando o condutor e causando mau contato, faíscas e risco de choque elétrico dentro do box.'
      }
    ]
  },
  {
    slug: 'valvula-hydra-disparada-como-consertar',
    title: 'Válvula Hydra disparada ou vazando: como resolver sem quebrar a parede',
    description: 'Descubra as causas da descarga Hydra vazando ou disparada direto no vaso sanitário. Passo a passo para trocar o reparo original sem quebra-quebra em Blumenau.',
    date: '2026-09-27',
    category: 'Encanador',
    readTime: '4 min de leitura',
    serviceLink: '/encanador/reparo-valvula-descarga-hydra-docol/',
    serviceName: 'Reparo de Válvula de Descarga em Blumenau',
    author: {
      name: 'Técnico Osmar',
      role: 'Encanador e Reparador Hidráulico',
    },
    content: [
      'Você aperta a descarga e a água continua descendo sem parar no vaso sanitário? A válvula de descarga disparada é uma das principais emergências hidráulicas residenciais em Blumenau e pode desperdiçar milhares de litros de água tratada em poucas horas.',
      'A boa notícia é que em 95% dos casos **não é necessário quebrar azulejos nem abrir a parede** para consertar o problema.',
      '### 1. O que fazer de imediato ao perceber o disparo',
      'A maioria das válvulas Hydra e Docol possui um registro regulador de vazão embutido na própria carcaça:',
      '1. Remova a tampa frontal (acabamento metálico ou plástico) desrosqueando os parafusos laterais ou o botão central.',
      '2. Com uma chave de fenda grande ou chave apropriada, gire o parafuso central regulador no sentido horário até travar.',
      '3. Isso fechará a passagem de água da própria válvula, evitando ter que fechar o registro geral de todo o apartamento ou residência.',
      '### 2. Por que a válvula dispara ou fica com filete de água?',
      '* **Desgaste do êmbolo (cartucho interno):** A borracha de vedação resseca e perde a flexibilidade com o cloro da água, não conseguindo vedar o assento da válvula.',
      '* **Acúmulo de sujeira ou areia:** Pequenos resíduos provenientes da caixa d\'água entram na câmara de descompressão, travando o pistão na posição aberta.',
      '* **Mola interna fadigada:** A mola de retorno de aço inoxidável perde a tensão e não empurra o reparo de volta após o acionamento.',
      '### 3. A solução definitiva: troca do reparo completo',
      'Para garantir durabilidade de anos, a melhor prática é a substituição do cartucho/êmbolo por um kit de reparo original compatível com o calibre da sua válvula (Hydra Max 2550, Hydra Clean, Hydra Duo ou Docol).',
      'Durante a troca, é fundamental limpar a sede interna de latão para remover crostas minerais antes de rosquear a tampa com vedação nova lubrificada com vaselina neutra.'
    ],
    faqs: [
      {
        question: 'Vale a pena trocar apenas a borrachinha do reparo?',
        answer: 'Não é recomendável. As borrachas paralelas costumam durar poucos meses. A substituição do cartucho original completo (êmbolo, mola e guarnições) garante estanqueidade perfeita e funcionamento macio.'
      },
      {
        question: 'Quanto tempo dura um reparo novo de válvula Hydra?',
        answer: 'Um reparo original Deca Hydra instalado corretamente por um encanador profissional dura em média de 5 a 10 anos sem apresentar novos vazamentos.'
      }
    ]
  },
  {
    slug: 'instalacao-fechadura-digital-guia-pratico',
    title: 'Guia de instalação de fechadura digital: modelos de embutir vs sobrepor',
    description: 'Tudo o que você precisa saber antes de instalar uma fechadura eletrônica em porta de madeira, pivotante ou metal em Blumenau.',
    date: '2026-09-25',
    category: 'Casa Inteligente',
    readTime: '6 min de leitura',
    serviceLink: '/casa-inteligente/instalacao-de-fechadura-digital/',
    serviceName: 'Instalação de Fechadura Digital em Blumenau',
    author: {
      name: 'Técnico Osmar',
      role: 'Especialista em Automação e Instalações',
    },
    content: [
      'As fechaduras digitais e biométricas deixaram de ser itens de luxo e se tornaram padrão de conveniência e segurança nos imóveis de Blumenau. Chegar em casa e entrar apenas com a digital, senha ou smartphone elimina o incômodo de carregar molhos de chaves.',
      'No entanto, a escolha do modelo errado ou uma furação imprecisa na porta pode comprometer a segurança e danificar a folha de madeira.',
      '### 1. Fechadura de Sobrepor vs Fechadura de Embutir',
      '* **Fechadura de Sobrepor (Trinco de encosto):** É instalada por cima da folha da porta, mantendo a maçaneta tradicional original. É a opção ideal para quem busca instalação mais rápida e menos furos na porta.',
      '* **Fechadura de Embutir (Com maçaneta integrada):** Substitui completamente a fechadura mecânica antiga. O mecanismo de tranca (mortise) fica escondido dentro da madeira, proporcionando acabamento nobre e travamento robusto.',
      '### 2. Cuidados com a espessura da porta',
      'Antes de comprar a fechadura, meça com uma régua a espessura da sua porta:',
      '* A maioria dos modelos residenciais exige espessura mínima de **35 mm a 50 mm**.',
      '* Portas pivotantes de madeira maciça muitas vezes possuem espessura de 60 mm a 70 mm, exigindo parafusos prolongadores específicos.',
      '### 3. Atenção à exposição a chuva e sol',
      'Se a porta da sua casa fica exposta a intempéries (sol direto ou chuva), certifique-se de adquirir um modelo com certificação **IP55 ou IP65** resistente à umidade. Fechaduras convencionais para corredores internos de apartamento queimam o leitor biométrico se forem molhadas pela chuva.'
    ],
    faqs: [
      {
        question: 'O que acontece se a pilha da fechadura digital acabar?',
        answer: 'Todas as fechaduras digitais modernas emitem alertas sonoros e luminosos semanas antes das pilhas esgotarem. Caso acabem totalmente, é possível fornecer energia de emergência via bateria 9V externa ou cabo USB-C para abrir a porta normalmente.'
      }
    ]
  },
  {
    slug: 'como-instalar-varal-de-teto-apartamento',
    title: 'Como instalar varal de teto com carretilha em apartamento com segurança',
    description: 'Passo a passo para fixar varal de teto em laje de concreto ou forro de gesso, com escolha correta de buchas, cordas de nylon e nivelamento.',
    date: '2026-09-22',
    category: 'Marido de Aluguel',
    readTime: '4 min de leitura',
    serviceLink: '/marido-de-aluguel/instalacao-varal-de-teto/',
    serviceName: 'Instalação de Varal de Teto em Blumenau',
    author: {
      name: 'Técnico Osmar',
      role: 'Marido de Aluguel e Pequenos Reparos',
    },
    content: [
      'Em apartamentos e lavanderias compactas em Blumenau, o varal de teto com sistema de carretilhas e roldanas é a solução número um para secar roupas aproveitando a ventilação natural do teto sem ocupar espaço no chão.',
      'Porém, pendurar roupas molhadas e pesadas exige fixação firme para evitar que o varal ceda ou arranque da laje.',
      '### 1. Identificando a estrutura do teto: Laje vs Gesso',
      '* **Laje de concreto maciço:** É o cenário ideal. Usam-se buchas de nylon número 6 ou 8 com ganchos roscáveis de boa qualidade.',
      '* **Teto rebaixado com gesso ou drywall:** NUNCA fixe o varal diretamente na placa de gesso com buchas comuns. É necessário localizar as vigas metálicas de sustentação do gesso ou utilizar extensores metálicos ancorados direto na laje original por cima do forro.',
      '### 2. Dica de ouro para as cordas não enrolarem',
      'Ao passar as cordas pelas carretilhas duplas e simples, certifique-se de que a descida para o prendedor na parede lateral fique perfeitamente alinhada. As carretilhas devem girar livres para que o varal suba paralelo e nivelado ao puxar a corda.',
      'Sempre utilize cordas de polipropileno trançado de boa espessura (3mm ou 3,5mm), pois cordas baratas desfiam rapidamente com o atrito das roldanas.'
    ],
    faqs: [
      {
        question: 'Quantos quilos de roupa um varal de teto bem instalado suporta?',
        answer: 'Um varal de alumínio reforçado ancorado em laje de concreto com buchas S8 suporta com segurança entre 15 kg e 20 kg de roupas úmidas distribuídas.'
      }
    ]
  }
];
