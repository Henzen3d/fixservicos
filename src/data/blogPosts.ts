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
  },
  {
    slug: 'ideias-organizacao-casa-apartamento-blumenau',
    title: '10 ideias práticas para organizar casa ou apartamento em Blumenau (Guia Atualizado 2026)',
    description: 'Aprenda a verticalizar espaços, instalar nichos, suportes de TV articulados, prateleiras e organizadores sem furar canos ou fios elétricos. Dicas do Técnico Osmar.',
    date: '2026-09-30',
    category: 'Marido de Aluguel',
    readTime: '6 min de leitura',
    serviceLink: '/marido-de-aluguel/',
    serviceName: 'Serviços de Marido de Aluguel e Fixação em Blumenau',
    author: {
      name: 'Técnico Osmar',
      role: 'Marido de Aluguel e Pequenos Reparos',
    },
    content: [
      'Com o crescimento de novos edifícios e apartamentos compactos em bairros como Victor Konder, Vila Nova, Itoupava Seca e Centro de Blumenau, saber aproveitar cada metro quadrado tornou-se uma necessidade essencial para o conforto da família.',
      'Muitas vezes, a sensação de desorganização não é falta de espaço, mas sim falta de **verticalização inteligente** das paredes e cantos mortos da residência.',
      '### 1. Verticalização inteligente com prateleiras e nichos flutuantes',
      'As paredes são a maior área útil não aproveitada da casa. A instalação de prateleiras acima de mesas de escritório, bancadas e camas libera espaço de circulação no piso.',
      '* **Atenção à fixação correta:** Em paredes de alvenaria com tijolo furado, use buchas universais do tipo FU ou buchas específicas para bloco oco (como Fischer UX ou SX). Buchas comuns para concreto tendem a afrouxar com o tempo quando fixadas na casca oca do tijolo cerâmico.',
      '### 2. Suporte de TV articulado ou painel suspenso',
      'Apoiar a TV sobre racks tradicionais consome até 50 cm de profundidade na sala de estar. A fixação da TV na parede com suporte articulado ou inclinado permite embutir a fiação com canaletas discretas e libera a área inferior para circulação ou móveis compactos.',
      '### 3. Aproveitamento total da lavanderia',
      '* **Varal de teto suspenso:** Libera 100% da área útil do piso.',
      '* **Prateleiras sobre a máquina de lavar:** Excelente local para acomodar cestos organizadores, sabão em pó, amaciante e produtos de limpeza longe do alcance de crianças e animais de estimação.',
      '* **Ganchos utilitários para vassouras e rodos:** Fixados na lateral da parede evitam que vassouras e pás fiquem jogadas nos cantos.',
      '### 4. Cuidados vitais: como furar paredes sem furar canos ou eletrodutos',
      'Antes de usar a furadeira na parede, lembre-se das regras fundamentais da construção civil:',
      '1. **Em banheiros e cozinhas:** Canos de água fria e esgoto quase sempre correm em linha reta (vertical ou horizontal) a partir dos registros, pias, sifões e chuveiros. Evite qualquer furação no alinhamento direto dessas tubulações.',
      '2. **Em salas e quartos:** Conduítes elétricos descem dos interruptores e tomadas em linha reta até o teto ou rodapé. Nunca fure exatamente acima ou abaixo de espelhos de tomadas.',
      '3. **Use detectores de vigas e metais:** Na dúvida, profissionais utilizam scanners de parede para garantir segurança total.',
      '### 5. Ganchos adesivos pesados vs buchas com parafusos',
      'Em Blumenau, a alta umidade típica do Vale do Itajaí compromete a cola de ganchos adesivos convencionais após alguns meses. Para objetos acima de 1,5 kg (espelhos, quadros com moldura de vidro e porta-chaves pesados), a fixação mecânica com parafuso e bucha de nylon de 5mm ou 6mm é a única garantia de segurança contra quedas repentinas.'
    ],
    faqs: [
      {
        question: 'Qual o peso seguro que uma prateleira com suporte invisível aguenta?',
        answer: 'Suportes invisíveis de boa procedência em parede de tijolo maciço ou bloco estrutural suportam em média de 10 a 15 kg por haste. Para cargas mais pesadas como livros grossos, recomendamos suportes tipo mão francesa de aço.'
      },
      {
        question: 'É possível instalar prateleiras e nichos em paredes de gesso drywall?',
        answer: 'Sim! No drywall utilizam-se buchas basculantes (Fly ou Toggle) ou buchas caracol metálicas, e preferencialmente faz-se a fixação ancorada diretamente nos montantes metálicos de sustentação da estrutura.'
      }
    ]
  },
  {
    slug: 'qual-voltagem-em-blumenau-110v-ou-220v',
    title: 'Qual é a voltagem em Blumenau? Guia definitivo sobre 220V, tomadas 10A vs 20A e segurança',
    description: 'Descubra a voltagem oficial de Blumenau e Santa Catarina, cuidados ao trazer eletrodomésticos 110V/127V de outros estados e dimensionamento de tomadas.',
    date: '2026-09-30',
    category: 'Eletricista',
    readTime: '5 min de leitura',
    serviceLink: '/eletricista/troca-de-tomada/',
    serviceName: 'Troca e Instalação de Tomadas em Blumenau',
    author: {
      name: 'Técnico Osmar',
      role: 'Eletricista Profissional Certificado NR10',
    },
    content: [
      'Uma das perguntas mais frequentes feitas por pessoas que acabaram de se mudar para Blumenau e cidades vizinhas do Vale do Itajaí (Gaspar, Pomerode, Indaial) é: **qual é a voltagem padrão das tomadas na cidade?**',
      '### 1. A resposta direta: a tensão padrão em Blumenau é 220 Volts',
      'Na área de concessão da Celesc (Centrais Elétricas de Santa Catarina), a rede residencial padrão de Blumenau opera em **220 Volts** fase-neutro (em redes estrela) ou fase-fase (em redes delta).',
      'Isso significa que praticamente **todas as tomadas convencionais residenciais entregam 220V**, ao contrário de estados como São Paulo, Rio de Janeiro, Minas Gerais e Paraná (Curitiba), onde a tensão monofásica padrão costuma ser 127V (frequentemente chamada de 110V).',
      '### 2. O que acontece ao ligar um aparelho 110V em tomada 220V?',
      '* **Queima imediata:** Se você plugar um aparelho exclusivo 127V/110V (como cafeteiras, secadores de cabelo, aspiradores de pó ou micro-ondas) diretamente na tomada 220V de Blumenau, o motor ou a placa eletrônica queimará em frações de segundo, com fumaça e cheiro característico de isolamento derretido.',
      '* **Aparelhos Bivolt Automáticos:** Celulares, notebooks, TVs modernas e carregadores em geral possuem fontes chaveadas bivolt (100V a 240V) e funcionam perfeitamente em Blumenau sem necessidade de qualquer adaptação.',
      '* **Aparelhos com chave seletora manual (110V/220V):** Equipamentos como fontes de computadores desktop, batedeiras e ferramentas elétricas exigem que você mude manualmente a chave vermelha seletora para a posição **220V** antes de plugar na parede.',
      '### 3. A diferença entre Tomada de 10A e Tomada de 20A',
      'Você já tentou ligar um forno elétrico, air fryer, micro-ondas ou secador potente e o pino grosso simplesmente não entrou na tomada?',
      '* **Tomadas de 10 Amperes (furo fino de 4,0 mm):** Projetadas para eletrodomésticos leves (TVs, luminárias, carregadores, computadores) com potência de até 2.200 Watts em 220V.',
      '* **Tomadas de 20 Amperes (furo grosso de 4,8 mm):** Obrigatórias por norma para aparelhos de alta potência resistiva e térmica (Air Fryer, forno elétrico, micro-ondas, ferro de passar, lava-louças e ar-condicionado).',
      '### 4. O perigo de lixar o pino ou usar adaptadores "Benjamim"',
      '**NUNCA force nem lixe o pino de 20A** para caber na tomada fina de 10A, e evite adaptadores plásticos. A alta corrente elétrica faz a tomada de 10A superaquecer internamente, derretendo o espelho plástico e gerando risco real de incêndio no circuito elétrico.'
    ],
    faqs: [
      {
        question: 'Vale a pena comprar um autotransformador para usar aparelhos 110V em Blumenau?',
        answer: 'Para aparelhos pequenos e eletrônicos caros sim. Porém, para aparelhos de alto aquecimento (ferro de passar, secador ou fritadeira), o transformador precisa ser muito pesado e caro (acima de 3000 VA). Nesses casos, costuma ser mais econômico e seguro substituir o eletrodoméstico por um modelo 220V nativo.'
      },
      {
        question: 'Um eletricista pode puxar uma linha 110V dedicada em Blumenau?',
        answer: 'Na rede pública da Celesc onde a tensão monofásica é 220V entre fase e neutro, não há neutro a 127V disponível. Para obter 127V é necessário instalar um autotransformador dedicado de quadro ou individual.'
      }
    ]
  },
  {
    slug: 'como-trocar-resistencia-chuveiro-passo-a-passo',
    title: 'Como trocar a resistência do chuveiro elétrico sem queimar a peça nova: passo a passo',
    description: 'Chuveiro queimou e a água ficou gelada? Veja o passo a passo seguro para substituir a resistência sem risco de choque e sem queimar o refil novo no primeiro uso.',
    date: '2026-09-30',
    category: 'Eletricista',
    readTime: '5 min de leitura',
    serviceLink: '/eletricista/troca-de-resistencia-de-chuveiro-queimado/',
    serviceName: 'Troca de Resistência de Chuveiro em Blumenau',
    author: {
      name: 'Técnico Osmar',
      role: 'Eletricista Profissional Certificado NR10',
    },
    content: [
      'No inverno rigoroso de Blumenau e do Vale do Itajaí, poucas coisas são mais frustrantes do que entrar no banho e sentir a água esfriar de repente com um estalo vindo do chuveiro.',
      'A queima da resistência elétrica é a ocorrência residencial mais frequente nos meses frios, decorrente do uso contínuo na potência máxima ("modo inverno").',
      'Embora a substituição pareça simples, milhares de pessoas queimam a resistência novinha em menos de 3 segundos simplesmente por pularem uma etapa elementar.',
      '### 1. Regra fundamental de segurança: desligue o disjuntor',
      'Água e eletricidade formam uma combinação fatal. **NUNCA confie apenas na chave seletora do chuveiro desligada.**',
      '1. Dirija-se até o quadro de distribuição de energia (QDC) da sua casa.',
      '2. Identifique e desligue o disjuntor exclusivo do circuito do chuveiro.',
      '3. Teste o chuveiro abrindo o registro para ter 100% de certeza de que não há corrente circulando.',
      '### 2. Escolha o modelo exato para a sua ducha (Potência e Voltagem)',
      'Antes de ir à loja de materiais elétricos:',
      '* Leve a resistência queimada ou tire uma foto legível da etiqueta superior do chuveiro.',
      '* Verifique a **tensão (220V em Blumenau)** e a **potência (ex: 5500W, 6800W ou 7500W)**.',
      '* Modelos modernos blindados ou planos (como Lorenzetti Acqua Duo, Ducha Advanced, Corona ou Hydra) utilizam cartuchos de encaixe rápido que não podem ser dobrados com alicate.',
      '### 3. O passo a passo da substituição',
      '1. Desrosqueie a câmara inferior ou o espalhador de água com cuidado para não danificar o diafragma de borracha.',
      '2. Remova os restos do filamento rompido com um alicate de bico, observando os pontos de contato A, B e C.',
      '3. Encaixe a resistência nova firmemente nos polos metálicos, garantindo contato perfeito sem folgas.',
      '4. Limpe os furinhos do espalhador de água com uma escovinha para remover o limo e calcário antes de fechar.',
      '### 4. O segredo de ouro: o "Banho Frio" obrigatório',
      'Este é o passo que evita que você jogue fora o dinheiro da resistência nova:',
      '**ANTES de religar o disjuntor no quadro de luz**, abra o registro de água no modo totalmente frio.',
      'Deixe a água escorrer por cerca de 30 a 60 segundos até o jato sair uniforme e encher completamente o copo interno do chuveiro.',
      'Se você religar o disjuntor com a câmara de aquecimento cheia de ar, a resistência atinge mais de 1000°C instantaneamente no vácuo e queima imediatamente a seco!'
    ],
    faqs: [
      {
        question: 'Vale a pena esticar e emendar uma resistência queimada?',
        answer: 'NUNCA faça isso. Ao emendar a espiral rompida, o comprimento total diminui, o que reduz a resistência ôhmica e aumenta perigosamente a corrente elétrica, podendo superaquecer a fiação e provocar derretimento da carcaça plástica do chuveiro.'
      },
      {
        question: 'Por que o chuveiro queima a resistência toda hora?',
        answer: 'Queimas frequentes geralmente são causadas por baixa pressão de água (ar na tubulação), fiação frouxa superaquecendo os conectores, ou oscilações de pico de tensão da rede.'
      }
    ]
  }
];
