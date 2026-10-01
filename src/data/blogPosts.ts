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
    description: 'Aprenda truques práticos por cômodo, móveis funcionais, prateleiras suspensas e organização sem perfurar canos ou conduítes elétricos. Dicas do Técnico Osmar.',
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
      'Com o crescimento de novos edifícios e apartamentos compactos em bairros como Victor Konder, Vila Nova, Itoupava Seca e Centro de Blumenau, saber aproveitar cada metro quadrado tornou-se uma necessidade essencial para o conforto e harmonia da família.',
      'Muitas vezes, a sensação de desorganização não é falta de espaço, mas sim falta de planejamento por cômodos e da **verticalização inteligente** das paredes.',
      '### 1. As 5 dicas de organização por cômodos essenciais',
      'No acervo prático da Fix Serviços, a regra número um é que cada cômodo tenha um fluxo funcional sem acúmulo de objetos soltos:',
      '* **Cozinha funcional:** Libere espaço precioso da pia instalando barras imantadas para facas, suportes aéreos para rolo de papel e temperos, e prateleiras internas para armários.',
      '* **Sala de estar espaçosa:** O uso de suporte articulado para TV na parede ou painel suspenso elimina racks volumosos e recupera até 50 cm de profundidade na área de circulação.',
      '* **Quartos tranquilos:** Aposte em sapateiras verticais fechadas com espelho (que cumprem dupla função) e calçadeiras com baú para guardar roupas de cama pesadas de inverno.',
      '* **Banheiro limpo e sem umidade:** Instale nichos de box aparafusados (evite ventosas plásticas que soltam constantemente com a umidade de Blumenau) e suportes duplos para toalhas.',
      '* **Área de serviço compacta:** Instale prateleiras sobre a máquina de lavar para acomodar sabão, amaciante e produtos longe de crianças, além de ganchos organizadores de vassouras e rodos.',
      '### 2. Mobílias e estruturas funcionais para verticalizar o espaço',
      'As paredes são a maior área útil não aproveitada da casa. A instalação de prateleiras acima de mesas de escritório, bancadas e camas devolve amplitude ao ambiente:',
      '* **Atenção à fixação correta:** Em paredes de alvenaria com tijolo furado, use buchas universais do tipo FU ou buchas específicas para bloco oco (como Fischer UX ou SX). Buchas comuns para concreto tendem a afrouxar com o tempo quando fixadas na casca oca do tijolo cerâmico.',
      '### 3. Aproveitamento total com o Varal de Teto',
      'O varal de teto suspenso com sistema de carretilhas e roldanas de nylon é a solução campeã em apartamentos: seca as roupas aproveitando o ar quente que sobe e devolve 100% da área útil do chão da lavanderia.',
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
    description: 'Descubra a voltagem oficial de Blumenau e Santa Catarina, cuidados ao trazer eletrodomésticos 110V/127V de outros estados, transformadores e frequência 60Hz.',
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
      'Se você planeja se mudar para a terceira maior cidade de Santa Catarina ou acabou de chegar e tem dúvidas se deve trazer seus eletrodomésticos, este guia técnico da Fix Serviços vai esclarecer tudo sobre a rede elétrica local.',
      '### 1. A resposta direta: a tensão padrão em Blumenau é 220 Volts',
      'Na área de concessão da Celesc (Centrais Elétricas de Santa Catarina), a rede residencial padrão de Blumenau e do Vale do Itajaí opera em **220 Volts** fase-neutro (em redes estrela) ou fase-fase (em redes delta).',
      'Isso significa que praticamente **todas as tomadas residenciais entregam 220V**, ao contrário de cidades de São Paulo, Rio de Janeiro, Minas Gerais e Paraná (Curitiba), onde a tensão monofásica padrão costuma ser 127V (popularmente chamada de 110V).',
      '### 2. O que acontece ao ligar um aparelho 110V em tomada 220V?',
      '* **Queima imediata:** Se você plugar um aparelho exclusivo 127V/110V (como cafeteiras, secadores de cabelo, aspiradores de pó ou micro-ondas) diretamente na tomada 220V de Blumenau, o motor ou a placa eletrônica queimará em frações de segundo, com fumaça e cheiro de queimado.',
      '* **Aparelhos Bivolt Automáticos:** Celulares, notebooks, TVs modernas e carregadores em geral possuem fontes chaveadas bivolt (100V a 240V) e funcionam perfeitamente sem qualquer adaptação.',
      '* **Aparelhos com chave seletora manual (110V/220V):** Fontes de computadores desktop, batedeiras e ferramentas elétricas exigem que você mude manualmente a chave vermelha para a posição **220V** antes de ligar na tomada.',
      '### 3. Vale a pena utilizar Autotransformador em Blumenau?',
      'O uso de autotransformador de 220V para 110V é uma alternativa, mas exige cuidados fundamentais:',
      '* **Atenção a áreas úmidas:** Jamais deixe um transformador apoiado no chão da área de serviço ou próximo à máquina de lavar. Máquinas de lavar trabalham com água, mas o transformador não: no chão úmido ele oxida, mancha o piso com ferrugem e gera risco gravíssimo de choque elétrico letal.',
      '* **Potência correta:** O transformador deve ter capacidade em VA com folga de pelo menos 30% a 50% acima da potência em Watts do aparelho.',
      '### 4. Dúvida comum de estrangeiros: Frequência de 50 Hz vs 60 Hz',
      'Quem vem de países vizinhos (como Argentina, Paraguai ou Uruguai) ou da Europa traz aparelhos fabricados para 50 Hz. No Brasil e em Blumenau, a frequência oficial é **60 Hz**.',
      'Eletrônicos com fontes chaveadas se adaptam normalmente (50/60 Hz). No entanto, **aparelhos com motores elétricos tradicionais (geladeiras antigas, compressores, lavadoras)** projetados exclusivamente para 50 Hz irão girar 20% mais rápido em 60 Hz, aquecendo excessivamente e reduzindo drasticamente a vida útil do motor.',
      '### 5. Tomada de 10A vs Tomada de 20A: perigo dos pinos forçados',
      '* **Tomadas de 10 Amperes (furo fino de 4,0 mm):** Para eletrodomésticos leves até 2.200W em 220V.',
      '* **Tomadas de 20 Amperes (furo grosso de 4,8 mm):** Obrigatórias para Air Fryer, forno elétrico, micro-ondas, secadores profissionais e máquinas de lavar.',
      '**NUNCA force nem lixe o pino de 20A** para caber na tomada fina de 10A, e evite adaptadores tipo benjamim, pois o superaquecimento do contato pode iniciar chamas no espelho da tomada.'
    ],
    faqs: [
      {
        question: 'Vale a pena vender aparelhos 110V antes de se mudar para Blumenau?',
        answer: 'Na maioria das vezes sim! Aparelhos de alto consumo térmico (ferro de passar, secador, air fryer) exigem transformadores pesados e caros. Vender na cidade de origem economiza custo de frete na mudança e permite comprar modelos novos 220V em Blumenau.'
      },
      {
        question: 'Um eletricista pode puxar uma linha 110V dedicada em Blumenau?',
        answer: 'Na rede da Celesc monofásica onde a tensão entre fase e neutro é 220V, não existe neutro a 127V na rua. Para ter 110V em uma tomada específica é indispensável instalar um autotransformador dedicado de quadro ou de tomada.'
      }
    ]
  },
  {
    slug: 'como-trocar-resistencia-chuveiro-passo-a-passo',
    title: 'Como trocar a resistência do chuveiro elétrico sem queimar a peça nova: passo a passo',
    description: 'Chuveiro queimou e a água ficou gelada? Veja o passo a passo seguro para testar o disjuntor, checar a pressão do diafragma e trocar a resistência sem risco de queima a seco.',
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
      'No inverno rigoroso de Blumenau e do Vale do Itajaí, poucas coisas são mais frustrantes do que entrar no banho e sentir a água esfriar de repente com um estalo característico vindo do chuveiro.',
      'A queima da resistência elétrica é a ocorrência residencial mais frequente nos meses frios, decorrente do uso contínuo na potência máxima ("modo inverno").',
      'Antes de sair correndo para comprar uma peça nova, existem verificações preliminares cruciais que o morador deve fazer.',
      '### 1. Testes antes de condenar a resistência',
      '* **1º Teste: O disjuntor desarmou no quadro de luz?** Vá até o quadro de distribuição (QDC). O circuito do chuveiro opera com disjuntores de amperagem alta (geralmente de 32A, 40A ou 50A). Se o disjuntor estiver na posição desligada (meio-termo ou OFF), rearme-o antes de desmontar o chuveiro.',
      '* **2º Teste: Existe pressão suficiente de água?** O chuveiro possui um diafragma interno de borracha que se eleva com a pressão da água para encostar nos contatos elétricos. Se a pressão da caixa d\'água caiu ou o registro não foi aberto o suficiente, o diafragma não arma e a resistência nem sequer recebe corrente elétrica!',
      '### 2. Segurança obrigatória: desligue o disjuntor geral',
      'Água e eletricidade formam uma combinação fatal. **NUNCA confie apenas na chave seletora do chuveiro desligada.** Desligue o disjuntor correspondente no quadro de distribuição e avise as pessoas da casa para não religarem enquanto você faz o serviço.',
      '### 3. Escolha o modelo exato para a sua ducha (Potência e Voltagem)',
      'Antes de ir à loja de materiais elétricos:',
      '* Leve a resistência queimada ou tire uma foto legível da etiqueta superior do chuveiro.',
      '* Verifique a **tensão (220V em Blumenau)** e a **potência (ex: 5500W, 6800W ou 7500W)**.',
      '* Modelos modernos blindados ou planos (como Lorenzetti Acqua Duo, Ducha Advanced, Corona ou Hydra) utilizam cartuchos de encaixe rápido que não podem ser dobrados com alicate.',
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
  },
  {
    slug: 'as-vantagens-das-instalacoes-eletricas-subterraneas',
    title: 'As vantagens das instalações elétricas subterrâneas em Blumenau: segurança, estética e normas NBR 5410',
    description: 'Entenda os benefícios da fiação subterrânea contra tempestades e quedas de árvores em Blumenau, regras da NBR 5410 para cabos de 1kV e profundidades seguras de valas.',
    date: '2026-09-30',
    category: 'Eletricista',
    readTime: '6 min de leitura',
    serviceLink: '/eletricista/',
    serviceName: 'Instalações e Manutenções Elétricas em Blumenau',
    author: {
      name: 'Técnico Osmar',
      role: 'Eletricista Profissional Certificado NR10',
    },
    content: [
      'Na maioria das cidades brasileiras, as redes de água e esgoto subterrâneas já são o padrão há muitas décadas. No entanto, tubulações que passam pelo subsolo conduzindo fios de energia elétrica, telefonia e fibra óptica ainda representam um diferencial moderno e de alto padrão em Blumenau e região.',
      'Com o clima subtropical do Vale do Itajaí, marcado por tempestades fortes de verão, vendavais intensos e constante arborização urbana, a infraestrutura elétrica subterrânea ganha destaque como a solução definitiva para evitar interrupções de fornecimento de energia.',
      '### 1. Rede aérea vs Rede subterrânea: imunidade climática',
      'A principal vantagem prática da rede subterrânea é a confiabilidade e durabilidade do sistema elétrico:',
      '* **Imunidade contra quedas de galhos e vendavais:** No sistema aéreo tradicional, ventos fortes arremessam galhos sobre os fios, rompem cabos de fase e provocam curto-circuitos graves que desarmam transformadores da Celesc. No subsolo, a linha fica totalmente protegida das intempéries.',
      '* **Fim dos acidentes de trânsito com postes:** Caminhões com carga alta ou veículos desgovernados frequentemente colidem contra postes nas calçadas de Blumenau, derrubando a rede de um quarteirão inteiro. Na fiação subterrânea, esse risco é inexistente.',
      '* **Vida útil prolongada:** Cabos protegidos sob a terra não sofrem com radiação ultravioleta (UV) do sol, calor excessivo na superfície ou oxidação por intempéries, durando décadas a mais.',
      '### 2. Estética e valorização imobiliária em Blumenau',
      'A ausência de postes com maçarocas de fios emaranhados e transformadores suspensos transforma a paisagem visual de condomínios fechados, bairros nobres e acessos residenciais.',
      'Projetos arquitetônicos contemporâneos em bairros como Vila Formosa, Jardim Blumenau e Ponta Aguda adotam a ligação subterrânea a partir do padrão de entrada para garantir fachadas limpas, elegantes e sem cabos pendurados cruzando a frente do imóvel.',
      '### 3. Requisitos técnicos obrigatórios da norma NBR 5410 da ABNT',
      'Uma instalação subterrânea segura requer rigoroso cumprimento das normas técnicas da ABNT (NBR 5410 para Baixa Tensão):',
      '* **Uso de cabos unipolares ou multipolares de 1kV (com capa protetora):** Em redes enterradas (seja em eletrodutos ou diretamente no solo), é obrigatório utilizar cabos providos de capa protetora externa com classe de isolação de 0,6/1kV (cabos tipo HEPR ou PVC 1kV). Fios comuns sem capa (apenas com isolamento de 750V) não possuem resistência mecânica para o solo úmido e só podem ser usados se o eletroduto for comprovadamente estanque em trecho contínuo sem caixas de passagem intermediárias.',
      '* **Profundidade mínima de 70 cm da superfície:** As valas para eletrodutos de baixa tensão devem respeitar profundidade mínima de 70 centímetros em jardins, quintais e áreas de pedestres para prevenir perfurações acidentais em jardinagem.',
      '* **Profundidade de 1,00 metro em travessias veiculares:** Em garagens, rampas de acesso de carros e vias de circulação, a profundidade mínima deve ser aumentada para 1 metro, incluindo faixa de folga de 50 cm de cada lado para suportar o peso e a compactação do tráfego.',
      '### 4. Cuidados essenciais contra umidade e infiltrações',
      '* **Eletrodutos rígidos ou corrugados de PEAD:** Para valas subterrâneas, utilizam-se dutos de PEAD específicos para redes elétricas enterradas, que resistem ao esmagamento da terra e à umidade contínua do solo.',
      '* **Caixas de passagem com dreno:** As caixas de inspeção no solo devem ter fundo com brita drenante para evitar o represamento de água da chuva ao redor dos conectores.',
      '* **Conexões seladas com fita de autofusão e gel isolante:** Toda derivação que necessite ser feita no subsolo precisa ser impermeabilizada com fita de autofusão e resina ou conectores subterrâneos blindados com gel protetor.'
    ],
    faqs: [
      {
        question: 'Existe risco de choque elétrico ao caminhar sobre a grama com fiação subterrânea?',
        answer: 'Não, nenhum risco. A proteção é garantida pela isolação reforçada dos cabos de 1kV, pelos eletrodutos estanques e pela profundidade técnica regulamentada pela NBR 5410.'
      },
      {
        question: 'Como é feita a ligação do padrão de entrada da Celesc até o quadro residencial?',
        answer: 'O padrão de entrada recebe a energia da concessionária e dela sai um eletroduto subterrâneo que corre até o Quadro de Distribuição (QDC) da residência, com curvas suaves de raio longo para permitir a puxada dos condutores de alta bitola.'
      }
    ]
  },
  {
    slug: 'tipos-de-suporte-para-tv-em-painel-como-escolher-e-instalar',
    title: 'Tipos de suporte para TV em painel e parede: como escolher e 4 cuidados para não danificar seu aparelho',
    description: 'Guia completo para escolher entre suporte fixo, inclinável ou articulado em painel de MDF ou alvenaria. Veja 4 sinais de alerta e evite acidentes em Blumenau.',
    date: '2026-09-30',
    category: 'Marido de Aluguel',
    readTime: '6 min de leitura',
    serviceLink: '/marido-de-aluguel/instalacao-de-tv-em-blumenau/',
    serviceName: 'Instalação de TV e Suportes em Blumenau',
    author: {
      name: 'Técnico Osmar',
      role: 'Marido de Aluguel e Pequenos Reparos',
    },
    content: [
      'Ter uma Smart TV de tela grande (seja LED, QLED ou OLED) instalada na parede ou em um painel planejado valoriza a sala de estar, melhora o ângulo de visão e elimina móveis volumosos do caminho.',
      'No entanto, a fixação incorreta é uma das maiores causas de acidentes residenciais: suportes mal dimensionados que cedem com o peso, parafusos que soltam do painel de MDF e até perfurações desastrosas de canos e eletrodutos escondidos na parede.',
      '### 1. Os 3 tipos de suporte para TV: prós, contras e onde usar',
      'Antes de comprar o suporte, é fundamental escolher o modelo certo para a dinâmica do seu cômodo:',
      '* **Suporte Fixo (Universal ou Slim):** Mantém a TV praticamente colada à parede (cerca de 2 a 3 cm de distância). Vantagem: visual ultralimpo e minimalista de quadro. Desvantagem: dificulta plugar cabos HDMI, ópticos e USB traseiros após fixado. É a escolha perfeita quando a TV fica exatamente na linha direta dos olhos em relação ao sofá da sala.',
      '* **Suporte Inclinável (Tilt):** Permite ajuste vertical para baixo em até 15 graus. Indispensável para quartos onde a TV é instalada em ponto mais alto em relação à cama, permitindo direcionar a tela para o olhar de quem está deitado e eliminando reflexos incômodos de luzes de teto e janelas.',
      '* **Suporte Articulado (Braço Simples ou Duplo):** Permite afastar a TV da parede e girá-la para a esquerda ou direita em até 90 graus. Ideal para ambientes integrados (como sala de estar conjugada com sala de jantar ou cozinha americana). Exige máxima atenção à ancoragem estrutural devido ao efeito de alavanca com o braço estendido.',
      '### 2. O Padrão VESA e o peso da tela: o que você precisa conferir',
      'Nunca compre um suporte baseando-se apenas na informação de polegadas impressa na caixa:',
      '* **Padrão VESA:** É a distância padronizada em milímetros entre os 4 furos de rosca na traseira da sua TV (ex: 200x200mm, 400x200mm, 400x400mm). O suporte precisa ser compatível com essa furação exata.',
      '* **Carga Máxima (kg):** Verifique o peso líquido da TV no manual do fabricante. O suporte e a parede devem suportar com folga de pelo menos 30% esse peso.',
      '### 3. Parede de Alvenaria vs Painel de MDF vs Gesso Drywall',
      '* **Em Painel de Madeira ou MDF:** Painéis decorativos de 15mm de espessura não foram projetados para segurar sozinhos suportes articulados pesados com TV de 65 polegadas. Nesses casos, o instalador deve utilizar parafusos passantes ancorados na alvenaria que fica por trás do móvel.',
      '* **Em Paredes de Alvenaria (Tijolo Furado de Blumenau):** O tijolo cerâmico oco quebra com buchas comuns de concreto. É obrigatório o uso de buchas universais de nylon (Fischer UX ou SX 8mm/10mm) que criam nós de travamento dentro da cavidade do tijolo.',
      '* **Em Paredes de Drywall:** Suportes pesados devem ser aparafusados diretamente nos montantes metálicos estruturais da divisória de gesso, com auxílio de detector de metais.',
      '### 4. Os 4 sinais de perigo ao tentar instalar sozinho',
      'No acervo da Fix Serviços, identificamos 4 situações clássicas em que fazer a instalação sem auxílio profissional resulta em prejuízo:',
      '1. **Você não sabe onde passam as tubulações hidráulicas e conduítes elétricos:** Na maioria dos apartamentos de Blumenau, tomadas e conduítes de cabos de rede sobem exatamente pelo eixo central onde o suporte da TV será parafusado. Perfurar um cano de água ou cortar o conduíte elétrico exige quebrar a parede para consertar.',
      '2. **Falta de ferramentas de nivelamento de precisão:** Furar apenas 3 milímetros fora de nível deixa a TV visivelmente torta na parede, forçando novas furações indesejadas no revestimento.',
      '3. **Tentar levantar e travar a TV sozinho:** Telas modernas acima de 50 polegadas possuem molduras ultrafinas e não suportam pressão de dedos diretamente sobre o painel de cristal líquido ou OLED. Levantar sozinho sem apoio de uma segunda pessoa pode torcer a carcaça e quebrar a tela internamente.',
      '4. **Usar parafusos inadequados fornecidos no kit:** Kits universais de suporte acompanham parafusos de diversos comprimentos. Usar um parafuso longo demais pode perfurar a placa lógica interna da TV ao apertar com força.'
    ],
    faqs: [
      {
        question: 'A que altura do chão a TV deve ficar instalada?',
        answer: 'A regra de ouro da ergonomia recomenda que o centro da tela fique na linha dos olhos de quem está sentado confortavelmente no sofá, geralmente entre 1,20m e 1,30m do piso acabado.'
      },
      {
        question: 'Posso usar suporte articulado em qualquer painel de MDF?',
        answer: 'Não. Suportes articulados exercem forte força de alavanca ao serem puxados para frente. Se o painel for fino ou estiver apenas colado, o suporte arrancará o MDF da parede. A fixação deve obrigatoriamente transpassar o painel e alcançar a parede de alvenaria atrás.'
      }
    ]
  },
  {
    slug: 'fogao-cooktop-estalando-sozinho-o-que-fazer',
    title: 'Fogão ou cooktop estalando sozinho sem parar? Descubra as causas e como resolver',
    description: 'Acendimento automático do cooktop ou fogão disparou e não para de fazer tique-tique? Veja o que fazer imediatamente, causas de umidade e solução segura com o Técnico Osmar.',
    date: '2026-09-30',
    category: 'Eletricista',
    readTime: '5 min de leitura',
    serviceLink: '/eletricista/',
    serviceName: 'Serviços de Manutenção Elétrica em Blumenau',
    author: {
      name: 'Técnico Osmar',
      role: 'Eletricista Profissional Certificado NR10',
    },
    content: [
      'Você acabou de limpar a cozinha ou preparar o almoço e, de repente, começa a ouvir um barulho repetitivo e incessante de faíscas vindo do fogão: o famoso "tique-tique-tique" contínuo do centelhador elétrico.',
      'Esse comportamento de fogão ou cooktop que fica estalando sozinho sem parar é uma das queixas elétricas residenciais mais comuns em Blumenau e costuma assustar moradores devido ao risco associado ao gás e eletricidade.',
      '### 1. O que fazer IMEDIATAMENTE (Procedimento de Segurança)',
      'Antes de tentar qualquer intervenção na bancada da cozinha, execute estes passos de segurança:',
      '* **1º Passo: Desconecte o fogão da tomada:** Ao retirar o plugue de 220V da tomada, a usina de ignição perde alimentação elétrica e os estalos param imediatamente. Isso evita que a bobina da usina superaqueça e queime por operar continuamente.',
      '* **2º Passo: Verifique se não há cheiro de gás:** O centelhador elétrico gera faíscas reais projetadas para acender a chama. Se houver qualquer vazamento simultâneo na mangueira ou registro de gás, a centelha contínua pode provocar combustão repentina. Se sentir cheiro de gás, feche imediatamente o registro do botijão ou da tubulação predial.',
      '### 2. As causas principais do acendimento automático disparado',
      'Na grande maioria das ocorrências atendidas pela Fix Serviços em marcas como Mueller, Fischer, Brastemp, Electrolux e Consul, a causa é uma das quatro a seguir:',
      '* **1. Umidade ou água acumulada nos botões após limpeza (Causa nº 1):** Ao lavar a mesa do cooktop com esponja muito molhada ou borrifar desengordurante em excesso, a água escorre pela fresta dos registros (manípulos) e atinge os interruptores elétricos internos. A água é condutora e fecha o contato elétrico, fazendo a usina interpretar que o botão está sendo pressionado sem parar.',
      '* **2. Gordura espessa travando a mola do manípulo:** Em frituras constantes, resíduos de gordura penetram no mecanismo do registro. A mola de retorno perde pressão e o contato elétrico fica fisicamente preso na posição de acionamento.',
      '* **3. Vela de ignição (eletrodo cerâmico) suja ou trincada:** O pino de porcelana branca ao lado do queimador pode acumular gordura carbonizada ou líquidos de cozimento derramados (como leite ou café fervido), gerando fuga de corrente para a mesa de inox ou vidro.',
      '* **4. Usina de ignição eletrônica em curto:** A usina é o módulo sob o fogão que eleva a tensão para gerar a faísca. Se o componente sofreu pico de tensão ou infiltração interna, o circuito pode travar ligado em curto-circuito.',
      '### 3. Como resolver o problema em casa (Dica do Técnico Osmar)',
      'Se o problema começou logo após uma faxina ou derramamento de líquidos, você mesmo pode tentar solucionar com segurança:',
      '* **Remova os botões plásticos:** Puxe os botões (manípulos) retos para cima com as mãos para ter acesso ao eixo metálico.',
      '* **O truque do secador de cabelos:** Com o fogão totalmente FORA DA TOMADA, ligue um secador de cabelo em temperatura morna (nunca em calor escaldante para não derreter borrachas de vedação) e sopre o ar quente sobre as frestas dos eixos dos botões por 5 a 10 minutos.',
      '* **Aguarde a evaporação:** Deixe o aparelho descansar ventilado por algumas horas para garantir que toda a condensação interna se dissipe.',
      '* **Teste seguro:** Conecte novamente o cabo na tomada. Em mais de 80% dos casos simples de umidade pós-limpeza, o estalo cessa completamente após a secagem correta.',
      '### 4. O que NUNCA fazer',
      '* **Nunca enfie facas ou arames:** Jamais utilize pontas de faca, tesouras ou clipes metálicos para tentar soltar o botão por dentro, pois há risco de perfurar a fiação interna e provocar curto-circuito ou vazamento de gás.',
      '* **Nunca jogue álcool comum líquido no registro:** O álcool 70% contém água e é altamente inflamável. Para limpar componentes elétricos, utiliza-se apenas limpa-contato elétrico spray ou álcool isopropílico 99,8% com o aparelho desenergizado.',
      '### 5. Quando chamar um eletricista profissional em Blumenau',
      'Se mesmo após secar completamente o fogão continuar estalando no momento em que é ligado na tomada, os interruptores do chicote elétrico ou a própria usina de ignição sofreram curto-circuito permanente e precisam ser substituídos com peças técnicas originais e testes de isolação com multímetro.'
    ],
    faqs: [
      {
        question: 'O fogão estalando sozinho pode explodir?',
        answer: 'O estalo elétrico em si não explode o aparelho. No entanto, como ele gera faíscas contínuas, se houver qualquer vazamento de gás na cozinha há risco grave de ignição. Desconecte sempre o aparelho da tomada imediatamente ao notar os estalos contínuos.'
      },
      {
        question: 'Fogão com acendimento automático precisa de aterramento na tomada em Blumenau?',
        answer: 'Sim, indispensável. Em tomadas 220V de Blumenau, o pino central de aterramento protege o usuário contra choques elétricos na mesa de inox e previne que ruídos de alta frequência da usina danifiquem placas eletrônicas de outros aparelhos na casa.'
      }
    ]
  }
];


