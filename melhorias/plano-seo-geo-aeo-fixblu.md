# Plano de SEO local, GEO e AEO da Fix Serviços e Reparos

**Blumenau, 26 de novembro de 2026 • Auditoria de leitura • Código de referência `f9a33ce`**

## 1. Resumo executivo

**A Fix já foi encontrada e citada por IA em uma busca comercial real.** Ao pesquisar “quem instala chuveiro elétrico em Blumenau” no Google em português, a Visão geral criada por IA apresentou a Fix como opção, citou `fixblu.com.br` e mencionou o técnico Osmar. O bloco de três resultados locais da mesma página exibiu outras empresas. No Bing, a busca por instalação de TV na parede também exibiu a página da Fix. São observações de uma sessão. A frequência com que isso acontece e a quantidade de orçamentos decorrentes ainda precisam ser medidas.

| Ordem comercial | Oportunidade | Primeiro resultado verificável |
|---|---|---|
| 1 | Alinhar o caminho Maps → WhatsApp e os horários | O botão de agendamento abre a conversa da Fix e os canais informam o mesmo horário real de sábado. |
| 2 | Medir pedidos reais por página e serviço | Osmar consegue dizer quantos interessados de Blumenau pediram orçamento, quantos fecharam e quais páginas contribuíram. |
| 3 | Tornar verificáveis as provas já usadas na venda | Depoimentos rastreáveis e promessas de prazo, garantia e experiência compatíveis com o atendimento real. |
| 4 | Melhorar as páginas que já capturam demanda | Chuveiro, TV, fechadura e disjuntor explicam o escopo, quais fotos enviar e o que condiciona o orçamento. |
| 5 | Dar a buscadores e clientes uma descrição comercial coerente | Um cadastro alimenta horários, contato e empresa. O sitemap usa datas justificáveis e cada serviço prioritário tem um destino claro. |

**Decisão sobre estrelas.** Manter o JSON-LD da Fix sem `aggregateRating` e sem avaliações sobre a própria empresa. Valorizar o perfil público, que exibia **5,0 em 331 avaliações** na consulta. A prova social já existe onde o cliente consegue conferi-la. Uma busca que citou a Fix ocorreu com essa propriedade ausente. Isso tampouco estabelece causalidade.

## 2. Diagnóstico e método

Examinei a árvore do projeto, os templates e dados comerciais, a configuração de build, os recursos estáticos, os arquivos de migração e a saída `dist/` preexistente. Um parser percorreu os HTMLs, leu canonical, robots, títulos, imagens e JSON-LD, extraiu os links e fez uma busca a partir da home. Comparei o resultado com os elementos `loc` do XML. Examinei separadamente páginas em produção, Google Maps, Google Search, Bing e resultados da pesquisa web. Datas de rastreamento das fontes externas variam.

| Verificação | Resultado | Leitura operacional |
|---|---|---|
| Saída local | 58 documentos HTML. O sitemap lista 55, todos presentes, alcançáveis por links HTML desde a home e com canonical para si mesmos | A estrutura principal funciona sem depender de JS para descobrir os serviços. O teste considera âncoras do mesmo host, sem validar fragmentos ou destinos externos. |
| Conteúdo local indexável por meta | As 55 URLs têm um H1, título e descrição. Títulos e descrições únicos. Um H1 se repete entre duas páginas de torneira elétrica | Tratar a sobreposição pontual. O levantamento não sustenta uma reescrita geral das metas. |
| HTML e imagens | Nenhum destino interno ausente entre os links percorridos. Nenhum `img[src]` local ausente e nenhum `img` sem atributo `alt` | O resultado não mede qualidade das descrições, contraste, indexação efetiva nem respostas HTTP do domínio. |
| Saída e produção | A home e o serviço de chuveiro publicados confirmaram H1, canonical e a assinatura dos schemas do projeto. Contato abriu no domínio e exibiu telefone, horários, WhatsApp e FAQ | Uma captura externa antiga do contato remeteu a outro domínio e uma captura antiga de chuveiro mostrou o layout legado. A visita direta atual prevalece. Sem indício suficiente para diagnosticar redirecionamento externo atual. |
| Sitemap publicado | A navegação por `/sitemap.xml` terminou em `/sitemap-index.xml`, que aponta para `/sitemap-0.xml`. O XML público tinha 55 entradas, mesma contagem da saída local | O navegador confirmou destino e conteúdo. O código intermediário, os headers e a paridade de conteúdo de todas as 55 URLs continuam pendentes de captura HTTP. |
| Histórico de migração | `fixblu-urls-html.csv` tem 52 linhas de dados. Os 39 caminhos distintos do domínio principal classificados como 200/indexáveis nessa exportação de maio estão no sitemap local atual | Preservar esse conjunto em testes. O relatório de setembro em `fixblu.com.br-audit/` mapeou 42 URLs e não descreve todo o site atual. |
| Fora do sitemap | `/404.html` e `/avaliar/` têm meta noindex. `/linktree/` tem meta index/follow, mas `public/_headers` prevê X-Robots-Tag noindex para a rota | Uniformizar a intenção e verificar o header efetivo. Uma página utilitária fora do sitemap não caracteriza serviço órfão. |

## 3. Inventário reutilizável

| Peça existente | Localização | Uso no plano |
|---|---|---|
| Astro 6 declarado, Tailwind 4, integração oficial de sitemap, CSS inline e build estático | `package.json`, `astro.config.mjs`, `dist/` | Manter HTML inicial, origens canônicas e catálogo de rotas. A presença de arquivos WordPress/Divi históricos não define a tecnologia das páginas testadas. |
| Metadados, idioma pt-BR, preload, navegação, rodapé, CTA global e botão flutuante | `src/components/BaseHead.astro`, `Header.astro`, `Footer.astro`, `GlobalCTA.astro`, `WhatsAppFAB.astro`, `src/layouts/MainLayout.astro` | Ajustar uma vez os elementos compartilhados. |
| Quatro categorias, índice de serviços, 34 páginas de detalhe, atalhos para serviços relacionados e trilhas | `src/pages/{eletricista,encanador,marido-de-aluguel,casa-inteligente}/`, `src/pages/servicos/index.astro`, `src/layouts/ServicePage.astro` | Melhorar a decisão de contratar nas URLs existentes. |
| Empresa, perfis externos, horários, telefone, construtor de schema dos hubs | `src/data/business.ts`, home, contato e índice de serviços | Preservar o identificador já adotado. Diminuir os campos repetidos em templates. |
| 12 artigos, autor, data, tema e serviço associado | `src/data/blogPosts.ts`, `src/pages/blog/[slug].astro`, `src/pages/blog/index.astro` | Usar o vínculo guia → serviço e enriquecer os artigos que trazem perguntas comerciais. |
| Perfil Maps com Place ID, convite de avaliação, link de leitura e quatro cartões de depoimento | `public/avaliar/index.html`, `src/components/Reviews.astro`, `Marquee.astro` | Conferir origem e manter separados os destinos “ler avaliações” e “avaliar meu atendimento”. |
| Regras de compatibilidade, roteiros antigos e ativos | `public/_redirects`, `public/_headers`, XML/TXT na raiz, exportações XLSX/CSV, `blog/`, `Servicos Blumenau/`, `Referencias/` e arquivo legado compactado | A fonte do site Astro é `src/` + `public/`. Conferir os destinos antigos e a procedência de fotos antes do reaproveitamento. |
| GA4 com carregamento diferido, cliques WhatsApp e telefone | `src/components/TrackingScripts.astro` | Aproveitar a instrumentação existente e corrigir a interpretação comercial. |
| Índice em texto e duas descrições de recursos para agentes | `public/llms.txt`, `public/.well-known/{ai-catalog,ard}.json`, link em `BaseHead.astro` | Tratar como recursos opcionais com manutenção limitada. |

## 4. Identidade local e caminho de contratação

| Campo | Observação de 26/11 | Decisão proposta |
|---|---|---|
| Nome e categoria | Maps exibiu “Fix - Serviços e Reparos (Marido de Aluguel)”, categoria Eletricista. A marca curta do site é “Fix Serviços”, com nome alternativo nos dados | Confirmar a forma comercial realmente usada em uniforme, atendimento e documentos públicos. Registrar as variantes legítimas e evitar acrescentar palavras-chave ao perfil. |
| Telefone e agendamento | O telefone público coincide entre site e Maps. **O link de agendamento do Maps termina em `554788041306` e os CTAs do site usam `5547988041306`.** | Testar o destinatário nos dois formatos em celular, sem enviar mensagem. Se o link antigo ainda resolver, padronizar mesmo assim. A diferença de um dígito está comprovada. Perda de contatos não foi medida. |
| Horários | Maps exibiu segunda a sexta 8h–18h, sábado e domingo fechados. Contato, JSON-LD e `llms.txt` informam sábado 8h–13h | Osmar define o horário real, inclusive se sábado é apenas sob agendamento, e os canais passam a descrevê-lo de forma coerente. |
| Local de atendimento | Site, perfil e alguns diretórios exibem endereço com sala. A FAQ fala em atendimento em domicílio em Blumenau e municípios vizinhos conforme agenda. O schema declara Blumenau, mas `contactPoint.areaServed` usa BR | Confirmar se há recepção presencial com a estrutura e o horário declarados. Se a operação só visita clientes, usar configuração de área de serviço no Maps e divulgar no site apenas os dados necessários. Conferir também mapa, geo, textos em Markdown e diretórios. |
| Experiência e condições | Rodapé fala em mais de 20 anos. A faixa repete 15 mil residências e 5/5. Serviços anunciam 90 dias e atendimento no mesmo dia. Contato descreve prazo de garantia variável, agenda e visita técnica sem custo para casos complexos | Separar tempo de experiência do profissional, idade da empresa e quantidade de imóveis. Documentar o que a Fix efetivamente oferece para cada serviço. Deixar visível ao cliente se uma visita de diagnóstico é cobrada. |
| Canais externos | Maps aponta para o domínio certo. Instagram, Facebook, X e Maps aparecem em `FIX_SAME_AS`. O blog legado aparece em busca com outro e-mail. Loqal e Santo Guia mencionam a empresa, com contagens de avaliações diferentes da leitura direta do Maps | Verificar titularidade, destinos e e-mail monitorado. Usar Maps como fonte primária da nota. Confirmar se o subdomínio antigo ainda serve páginas antes de propor migração. |

Relevância, distância e notoriedade influenciam resultados locais. Um bom perfil pode aparecer na resposta de IA sem integrar o bloco de mapas da mesma busca. Uma página para cada bairro acrescentaria custo e duplicação sem resolver a divergência do agendamento. [Perfil público consultado](https://www.google.com/maps/search/?api=1&query=Fix+Servi%C3%A7os&query_place_id=ChIJTyGA3_ob35QR5Iu8YYSNRIY) · [Diretrizes para empresas](https://support.google.com/business/answer/3038177) · [Resultados locais](https://support.google.com/business/answer/7091)

## 5. Dados estruturados e decisão sobre avaliações

O parser leu **55 blocos JSON-LD em 55 páginas** do sitemap, sem erro de sintaxe. As três páginas utilitárias não continham blocos. Não foi identificado microdata por `itemtype` nos 58 HTMLs. A leitura dos templates confirma que o schema principal chega no HTML estático. Sintaxe válida, coerência com Schema.org e elegibilidade do Google são verificações diferentes.

| Família de páginas | Marcação observada no HTML gerado | Ajuste com finalidade definida |
|---|---|---|
| Home (1) | LocalBusiness + HomeAndConstructionBusiness, mesmo nó `/#organization`, catálogo com quatro ofertas, contato, horários, geo, perfis | Manter um negócio. O subtipo já herda LocalBusiness e Organization. Validar geo/endereço e ligar cada oferta ao destino real. |
| Contato e índice de serviços (2) | LocalBusiness com o mesmo ID e propriedades parcialmente repetidas | Montar o cadastro a partir de uma fonte única. Distinguir a identidade da página da identidade da empresa. |
| Categorias (4) | Service com o prestador identificado, gerado por `buildServiceSchema` | Descrever a atividade da mesma Fix. Electrician e Plumber são tipos de negócio e podem, se pertinentes, qualificar o mesmo nó. Não há necessidade de criar quatro empresas. |
| Detalhes (34) | `@graph` contendo Service e BreadcrumbList com três níveis, prestador com ID; serviço tem URL, sem ID próprio no template padrão | Acrescentar ID estável do serviço para permitir referência entre catálogo, página e oferta. Manter trilha visível e categoria corretas. |
| Artigos (12), índice editorial (1) | BlogPosting/Blog, Person, publisher; artigo com mainEntityOfPage, data de edição igual à de publicação, imagem genérica e autor ligado a contato | Usar foto do caso quando houver e autor identificável. Registrar data de revisão editorial real. |
| Privacidade (1) | WebPage com breadcrumb | Preservar representação simples. |
| Avaliações | Zero ocorrências de `aggregateRating`, `ratingValue`, `reviewCount` ou tipo Review no conjunto JSON-LD examinado. A home publicada conferida também estava sem rating | A ausência é adequada ao caso. O componente visual de depoimentos aparece em cinco páginas do build. |

**Grafo proposto.** Preservar o valor exato de `FIX_BUSINESS_ID`. A home pode reunir `WebSite #website` com `publisher → #organization`, `WebPage #webpage` com `isPartOf → #website` e a empresa como assunto principal. Num detalhe, usar `<canonical>#webpage → mainEntity → <canonical>#service → provider → https://fixblu.com.br/#organization`; relacionar a trilha à página. O catálogo pode apontar `Offer.itemOffered` para o ID do serviço e incluir sua URL. Usar `ImageObject` quando dimensões, crédito e imagem real estiverem disponíveis. Um `Person` estável só deve identificar o profissional real. Não há propriedade obsoleta comprovada na amostra lida. Validar a saída nos validadores antes da entrega futura. [Hierarquia de tipos](https://schema.org/HomeAndConstructionBusiness) · [Dados locais no Google](https://developers.google.com/search/docs/appearance/structured-data/local-business)

**Por que manter a nota fora do JSON-LD.** O vocabulário permite descrever avaliações, mas o Google considera inelegíveis para estrelas páginas de empresas que controlam a apresentação de avaliações sobre si mesmas, inclusive por widget externo. Também orienta a não agregar notas vindas de outros websites. No Maps, estrelas e contagem têm contexto próprio. Outros consumidores podem interpretar a propriedade, porém a auditoria não encontrou evidência de benefício para recomendação da Fix que justifique duplicar a nota. Não usar Product para maquiar serviço. [Regras de review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

**Como usar a reputação na página.** A nota exibida coincide com o arredondamento público na data da leitura. Isso não autentica cada um dos quatro textos fixos em `Reviews.astro`. Conferir conteúdo, fonte e autorização de uso quando aplicável, substituir os não confirmados por casos verificáveis ou pelo link “Ler avaliações no Google”. Se publicar contagem, informar data e responsável pela atualização. Manter `/avaliar/` para convites neutros após atendimentos reais, com a mesma oportunidade para todos os clientes. [Política de avaliações](https://support.google.com/business/answer/3474122)


## 6. Rastreamento, indexação e acesso por IA

**Datas de modificação.** `astro.config.mjs` escolhe uma data por hash da URL para detalhes, define datas fixas para grupos e atribui a mesma data aos artigos. A home do XML publicado traz 30/09/2026. Uma URL estável pode mudar sem o `lastmod` acompanhar. Usar data de alteração material documentada ou omitir o campo. O Google informa que desconsidera `priority` e `changefreq` e pode usar `lastmod` quando confiável. [Documentação de sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

**Legado e HTTP.** Há 292 regras em `public/_redirects`, entre elas WWW → apex, aliases do sitemap, AMP, serviços antigos e destinos genéricos. Nenhuma origem literal coincide com as 55 URLs atuais. O caminho antigo de instalação de aquecedor a gás aponta para o hub de encanador. Conteúdos de climatização convergem em eletricista, e pautas de prêmios convergem em contato. Reavaliar somente os caminhos com histórico de impressões, links ou tráfego e um destino mais fiel à intenção. O subdomínio precisa de teste próprio. Conferir no edge status final, saltos, MIME, `Location`, `X-Robots-Tag`, 404 real para rota inexistente e cache. Arquivos locais de configuração permitem formular o teste, mas não comprovam a resposta enviada pela CDN. [Regras do provedor](https://developers.cloudflare.com/pages/configuration/redirects/)

**A política publicada difere do arquivo versionado.** O `public/robots.txt` autoriza três agentes de busca por nome e o grupo geral, com exceção de `/404` no grupo geral. Na visita direta, o domínio também serviu um bloco gerenciado pela Cloudflare com `search=yes,ai-train=no,use=reference` e proibições nominais, entre elas GPTBot, ClaudeBot e Google-Extended. Não confundir sinal de uso, regra de crawling e decisão do firewall. O arquivo público não comprova que um robô recebeu HTTP 200. [Cloudflare](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/)

| Agente ou controle | Finalidade | Situação observada e decisão |
|---|---|---|
| Googlebot e Bingbot | Descoberta e indexação para busca | Sem bloqueio nominal encontrado para o conteúdo comercial; grupo geral permite. Preservar e verificar inspeção de URL e requisições válidas. |
| Google-Extended | Token que controla determinados usos de treinamento e grounding em produtos Google fora da Pesquisa | A CDN publica bloqueio. Preservar a decisão até Osmar ponderar o uso por produtos Gemini abrangidos; a separação é importante, pois houve citação na IA da Pesquisa com esse bloqueio. |
| OAI-SearchBot / GPTBot | Busca do ChatGPT / possível treinamento | O primeiro é permitido no robots público e o segundo, bloqueado. Manter a distinção e verificar se a CDN aceita tráfego legítimo de busca. |
| ChatGPT-User | Acesso iniciado pelo usuário | Sem grupo nominal identificado. A OpenAI informa que regras de robots podem não se aplicar a esses pedidos. Não equivale a indexação. |
| PerplexityBot / Perplexity-User | Descoberta para busca / recuperação a pedido | O primeiro está explicitamente permitido. O segundo não tem regra nominal observada e o provedor documenta tratamento próprio de pedidos iniciados pelo usuário. |
| Claude-SearchBot / Claude-User / ClaudeBot | Busca / solicitação de usuário / conteúdo para treinamento | Busca permitida, usuário sem regra nominal identificada, treinamento bloqueado. |
| Outros | O bloco público cita, entre outros, CCBot, Amazonbot, GoogleOther e Applebot-Extended | Preservar escolhas até haver finalidade comercial identificável. Os agentes têm funções distintas. Registrar impacto sobre carga, disponibilidade de busca e preferência de uso. |

Para verificar acesso, amostrar logs agregados da borda, comparar 2xx/3xx/403/429 por agente e rota e validar identidade por mecanismos publicados pelos provedores. Um teste só com cabeçalho User-Agent alterado simula uma requisição e não comprova a identidade ou a experiência do robô. Evitar liberar intervalos indiscriminados. Conteúdo privado precisa de controle de acesso próprio. [OpenAI](https://developers.openai.com/api/docs/bots) · [Anthropic](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) · [Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) · [Google-Extended](https://developers.google.com/crawling/docs/google-extended)

**Arquivos para IA.** `/llms.txt` existe em produção e oferece catálogo útil para leitura direta. Não foi localizado `llms-full.txt` no build. O Google esclarece que sua Pesquisa, inclusive os recursos generativos, não usa esses arquivos especiais. OpenAI e Perplexity publicam índices de documentação para seus próprios leitores, o que não demonstra que seus sistemas de busca consultem o índice da Fix. A adoção como formato editorial é diferente da adoção como sinal de busca. Manter o índice existente como experimento de baixo custo; não criar espelhos integrais em Markdown. Nos dois manifestos, a URL de texto é declarada como catálogo JSON e a página HTML de contato, como cartão JSON de servidor MCP. Corrigir a descrição ou despublicar entradas sem consumidor definido. Nunca apresentar o WhatsApp como integração de máquina disponível. [Guia do Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=pt-br) · [Proposta llms.txt](https://llmstxt.org/)


## 7. Consultas reais e concorrência em Blumenau

**Observações de pesquisa.** Sessão em 26/11/2026, com cidade explícita. A consulta Google usou `hl=pt-BR&gl=br` e exibiu Blumenau, SC. A do Bing usou `setlang=pt-br&cc=br`. Não foi fixado um ponto de GPS nem controlado o histórico de personalização. Os links reabrem consultas dinâmicas.

| Consulta / superfície | O que apareceu na sessão | Interpretação |
|---|---|---|
| “quem instala chuveiro elétrico em Blumenau” · Google | Visão geral criada por IA apresentou a Fix, citou o domínio e descreveu instalação, testes e atendimento por Osmar. Também apresentou Clay Eletricista. O bloco local exibiu FL-Encanador Blumenau, WFS Hidráulica e Elétrica Zanon. Houve conteúdo do Instagram da Fix entre os resultados web | Um caso observado de menção, citação e apresentação como prestador. Não atribuir posição permanente, clique, venda ou cobertura de outros motores. [Repetir no Google](https://www.google.com/search?q=quem+instala+chuveiro+el%C3%A9trico+em+Blumenau&hl=pt-BR&gl=br) |
| “quem instala televisão na parede em Blumenau” · Bing | Apareceu “Instalação de TV em Blumenau \| Fix Serviços”, além de outro resultado com título semelhante. Havia anúncios identificados e outras empresas | Evidência de descoberta no Bing. O segundo título, sozinho, não comprova duplicação de URL. [Repetir no Bing](https://www.bing.com/search?q=quem+instala+televis%C3%A3o+na+parede+em+Blumenau&setlang=pt-br&cc=br) |
| “quem instala fechadura digital em Blumenau suporte de TV pequenos reparos marido de aluguel Blumenau Velha Central” · pesquisa web | Surgiram página de fechadura da Fix, contato do blog legado, Conserta Fácil, Doutor Resolve e Blu Marido de Aluguel | Consulta exploratória composta. Usar perguntas simples nos testes recorrentes para atribuir resultados ao serviço correto. |
| “Preciso de um eletricista em Blumenau quem instala chuveiro elétrico em Blumenau” · pesquisa web | SP Instalações, Elétrica JC, guia de prestador e página comercial de instalação | Há concorrência tanto de empresas locais quanto de guias e páginas especializadas. |
| “Quem instala televisão na parede em Blumenau suporte TV Blumenau” · pesquisa web | Reparzo e Montador Local apareceram na amostra. Busca de marca à parte retornou diretórios e perfil profissional de Osmar | Resultados da ferramenta de pesquisa têm cobertura própria. A busca direta no Bing encontrou a Fix para uma formulação próxima. |

**Comparação local.** A presença orgânica abaixo significa que o nome ou a página surgiu na superfície indicada. “Sem leitura” significa dado desconhecido nesta coleta. Notas de plataformas não foram somadas.

| Concorrente | Estrutura, oferta e presença observada | Reputação, dados estruturados e IA | Oportunidade específica para a Fix |
|---|---|---|---|
| Conserta Fácil Blumenau | Site de empresa familiar com serviços agrupados em quatro listas, WhatsApp, suporte de TV e pequenos reparos. Encontrado na busca exploratória | Home aberta com JSON-LD WebSite. Perfil Maps, nota e citação generativa sem leitura confirmada | Mostrar um atendimento real com vários reparos, o que coube numa visita e como o cliente preparou a lista. [Site](https://consertafacilblumenau.com.br/) |
| Doutor Resolve Blumenau | Página por serviço e município, unidade e telefone local, proposta de resolver a lista em uma visita; presença da unidade no LinkedIn | DOM público com Organization, BreadcrumbList, Service e FAQPage. Nota do perfil local e citação em IA sem leitura confirmada | Aproveitar o atendimento do próprio técnico, autoria e fotos locais. Uma lista útil e uma conversa simples têm valor independentemente do tamanho da rede. [Serviço](https://doutorresolve.com.br/servico/marido/sc/blumenau) · [Unidade](https://br.linkedin.com/company/doutor-resolve-blumenau) |
| SP Instalações Elétricas | Site identifica fundador, histórico e serviços técnicos; inclui instalação de chuveiro e torneira elétrica. Encontrado na busca elétrica | Autoridade alegada no site tem responsável identificável. Sem confirmação independente de credenciais, nota Maps, JSON-LD ou citação de IA deste concorrente | Explicitar quem executa o serviço residencial e que informação permite orçar. Não competir pela abrangência industrial. [Site](https://www.spinstalacoes.com/) |
| Clay Eletricista – Residencial e Predial | Opção apresentada na mesma resposta de IA sobre chuveiro | Cartão público na resposta exibiu 5,0 e 38 avaliações. Site próprio e schema sem inspeção. Menção em IA observada, domínio citado não confirmado | Registrar em separado empresas citadas pela entidade e URLs de fato usadas como fonte. [Consulta](https://www.google.com/search?q=quem+instala+chuveiro+el%C3%A9trico+em+Blumenau&hl=pt-BR&gl=br) |
| Elétrica Zanon | Perfil de eletricista predial e residencial exibido no bloco local da mesma consulta; indicava atendimento 24 horas | Cartão do Google com 5,0 e 126 avaliações na sessão. Site/schema e menção na resposta de IA sem confirmação | Comunicar disponibilidade verdadeira e distinguir atendimento agendado de emergencial. [Consulta](https://www.google.com/search?q=quem+instala+chuveiro+el%C3%A9trico+em+Blumenau&hl=pt-BR&gl=br) |

O resultado indexado de Blu Marido de Aluguel descrevia serviços, mas a visita direta à URL amostrada mostrou “Website Builder 404”. Foi excluído da comparação estrutural atual. Os diretórios que mencionam a Fix traziam 327 e 325 avaliações enquanto o perfil público mostrava 331. Isso demonstra o custo de replicar contagens em várias fontes. [Loqal](https://loqal.com.br/profissional/fix-servicos-e-reparos-velha-14052) · [Santo Guia](https://www.santoguia.com.br/blumenau-sc/eletricista)


## 8. Matriz de consultas comerciais

URLs relativas ao domínio principal. Relevância e conversão são juízos editoriais sobre intenção, sem volume estimado. Na última coluna, “alto” significa que a página pode oferecer resposta factual e autônoma com o ajuste indicado; só os resultados da seção anterior foram observados. “Direta” indica página dedicada existente.

| Consulta representativa | Intenção | Relevância / conversão | Geografia | Página correspondente | Cobertura e lacuna | Potencial de resposta |
|---|---|---|---|---|---|---|
| Preciso de um eletricista em Blumenau | Escolher prestador | Alta / alta | Cidade | `/eletricista/` | Hub direto; explicar diagnóstico x troca | Alto |
| Quem instala chuveiro elétrico em Blumenau? | Contratar instalação | Alta / alta | Cidade | `/eletricista/instalacao-de-chuveiro/` | Direta e citada; orientar envio de modelo e bairro | Alto |
| Meu chuveiro parou de aquecer. Quem troca a resistência? | Distinguir reparo de troca | Alta / alta | Implícita | `/eletricista/troca-de-resistencia-de-chuveiro-queimado/` | Direta; indicar o que o técnico confirma na visita | Alto |
| Quem troca disjuntor que vive desarmando em Blumenau? | Diagnóstico e visita | Alta / alta | Cidade | `/eletricista/troca-de-disjuntor/` | Direta e guia relacionado; distinguir sintoma de diagnóstico | Alto |
| Qual empresa faz pequenos reparos residenciais em Blumenau? | Escolher prestador | Alta / alta | Cidade | `/marido-de-aluguel/` | Hub; dar exemplo real de lista curta | Alto |
| Tenho três reparos diferentes. Dá para resolver numa visita? | Agrupar serviços | Alta / alta | Implícita | `/marido-de-aluguel/` | Categorias existentes; explicar lista, fotos, materiais e agenda | Alto |
| Quem instala fechadura digital em Blumenau? | Instalação mecânica | Alta / alta | Cidade | `/marido-de-aluguel/instalacao-de-fechadura-digital/` | Direta; pedir modelo e foto da porta | Alto |
| Quem configura a fechadura smart com aplicativo? | Integração | Alta / alta | Implícita | `/casa-inteligente/instalacao-de-fechadura-digital/` | Direta; explicar compatibilidade com hub/app e ligação para instalação simples | Alto |
| Preciso instalar uma televisão na parede | Contratar instalação | Alta / alta | Implícita | `/marido-de-aluguel/instalacao-de-tv-em-blumenau/` | Direta e observada no Bing; conectar parede, TV e suporte ao pedido | Alto |
| Qual empresa faz elétrica e hidráulica em Blumenau? | Um só prestador | Alta / alta | Cidade | `/servicos/` | Catálogo direto; explicar agendamento conjunto | Alto |
| Quem instala automação residencial em Blumenau? | Avaliar solução | Alta / média | Cidade | `/casa-inteligente/` | Hub; delimitar dispositivos realmente suportados | Médio |
| Quem instala torneira elétrica em Blumenau? | Contratar instalação | Alta / alta | Cidade | `/eletricista/instalacao-de-torneira-eletrica/` e `/encanador/instalacao-de-torneira-eletrica/` | Duas autocanônicas com mesmo H1; atribuir intenção com dados reais | Alto |
| A Fix atende na Velha e na Velha Central? | Confirmar cobertura | Alta / alta | Bairros | `/contato/` | Cita Velha e toda a cidade; confirmar Velha Central e explicar agenda no mesmo bloco | Alto |
| Qual empresa de manutenção residencial é confiável em Blumenau? | Comparar reputação | Alta / média | Cidade | `/` e perfil Maps | Reputação pública forte; relacionar depoimentos a fonte e casos | Médio |
| Quem conserta descarga de caixa acoplada em Blumenau? | Resolver vazamento | Alta / alta | Cidade | `/encanador/conserto-de-descarga-em-caixa-acoplada/` | Direta; ajudar a distinguir caixa acoplada de válvula de parede | Alto |
| Quem instala interruptor Sonoff em Blumenau? | Instalação por marca | Média / alta | Cidade | `/casa-inteligente/instalar-interruptor-sonoff/` | Direta; indicar o que muda conforme o modelo, sem prometer compatibilidade universal | Alto |
| Quem instala persiana no meu apartamento? | Orçar fixação | Média / alta | Implícita | `/marido-de-aluguel/instalacao-de-persiana/` | Direta; informar se é instalação de peça comprada e quais medidas enviar | Alto |


## 9. Conteúdo, experiência e conversão

**Ordem editorial.** Começar por chuveiro e TV, onde há descoberta observada. Em seguida, fechadura e disjuntor. Comparar resultados com páginas de serviços semelhantes ainda sem a nova redação. O cliente deve encontrar rapidamente problema atendido, serviço incluído, condições da visita e como orçar. Modelo de trecho proposto para a página de TV, sujeito à revisão de Osmar:

> A Fix instala suportes de TV em Blumenau. Para avaliar o serviço, envie pelo WhatsApp o modelo ou o tamanho da TV, uma foto do suporte e uma foto da parede onde quer instalar. Informe o bairro e se a TV vai direto na parede ou em um painel.

Para chuveiro, pedir modelo, bairro e foto externa do ponto acessível. Para fechadura, modelo e fotos da porta, sem códigos de acesso. Para disjuntor, perguntar quando ocorre o desarme; orientar avaliação por profissional, sem pedir ao interessado que abra o quadro. Explicar as variáveis de orçamento antes de publicar qualquer faixa de preço. Manter um FAQ apenas quando a pergunta realmente modifica a contratação. A exibição de rich results de FAQ foi descontinuada no Google em 2026. [Atualizações do Google](https://developers.google.com/search/updates)

| Grupo existente | Ligação editorial a fortalecer |
|---|---|
| Elétrica | Guia de disjuntor/chuveiro → detalhe relevante → orçamento. Revisar afirmações absolutas e referências técnicas com o responsável antes da publicação. |
| Hidráulica | Sintoma → caixa acoplada ou válvula de parede → página certa. Na torneira elétrica, separar escopo hidráulico de adequação de circuito apenas quando há duas necessidades comerciais distinguíveis. |
| Instalações e pequenos reparos | Guia de suporte → TV ou painel → pedido. Usar um caso real que mostre por que o tipo de parede mudou o orçamento. |
| Casa inteligente | Fechadura convencional → instalação física; smart → integração, teste e entrega do aplicativo. Ligação cruzada já existe. Preservar também a intenção específica de Sonoff. |
| Evidências e autoria | Publicar um caso por vez, com problema, restrição, solução e resultado observável. Identificar Osmar, função e data real; usar fotos próprias autorizadas sem endereço, rosto de cliente ou detalhes sensíveis. `Servicos Blumenau/` é acervo candidato, cuja autoria e contexto precisam ser conferidos. |

**UX e acessibilidade.** Em 390 × 844, o serviço de chuveiro mostrou H1 e botão verde de orçamento na primeira tela, com mensagem específica do serviço. O flutuante sobrepôs parte de uma linha da lista na posição inicial observada. O menu visualmente recolhido ainda expôs links na árvore de acessibilidade; o botão se chama “Toggle menu” e o código alterna a altura sem atualizar `aria-expanded`. Preservar a identidade verde da Fix e o CTA principal, tornar o menu fechado inativo para foco, nomeá-lo em português e revisar a posição do flutuante. Os blocos separados de mobile e desktop podem divergir. O cliente precisa ver as mesmas condições comerciais essenciais em ambos.

**Retirar ruído da venda.** A faixa repete as mesmas alegações para animação. O chat animado do template simula um diálogo, e a página promete agendamento no mesmo dia enquanto a FAQ condiciona a disponibilidade. Trocar o espaço por uma orientação concreta como “Envie o modelo, uma foto e o bairro”. Usar animação opcional, respeitar preferência por movimento reduzido e manter legível o conteúdo sem JS. Conferir contraste nos dois temas e ampliação a 200% antes de ampliar o ajuste para todo o site.

**Performance.** A hero analisada usa WebP responsivo, dimensões e prioridade alta. Há um PNG de 1.589.055 bytes no acervo de saída, mas `HeroServico.astro` entrega WebP no picture examinado; não atribuir esse peso ao LCP sem observar transferência. `public/_headers` prevê cache imutável de um ano para arquivos sob nomes fixos em `/images/`; versionar a URL quando trocar uma foto para evitar imagem antiga em dispositivos recorrentes. Não há pontuação de campo verificada nesta auditoria. Medir LCP, INP e CLS no p75, segmentando celular e desktop. [Core Web Vitals](https://web.dev/articles/vitals)

**Autoridade fora do domínio.** A reputação do Maps e a presença de Instagram e diretórios são pontos de partida. Confirmar dados nos diretórios que já aparecem, solicitar crédito editorial a parceiro ou fornecedor somente em trabalho real, e recuperar a matéria original de um eventual reconhecimento antes de citá-lo. O nome de um prêmio em uma regra de redirecionamento não comprova que a empresa o recebeu. Registrar referências que gerem conversas locais. E-E-A-T orienta a avaliação de experiência, competência, reconhecimento e confiança, sem pontuação oficial para a Fix. [Conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)


## 10. Mensuração comercial e protocolo GEO

**Indicador principal:** quantidade de oportunidades qualificadas por período. Para esta operação, contar uma conversa única na qual haja serviço identificável, localização atendida e solicitação concreta de orçamento ou visita. Deduplicar a pessoa e o pedido no controle operacional. Uma visita ao site, um clique e uma citação são etapas distintas. Um pedido pode ter vários serviços; classificá-lo por serviço principal e manter os demais como atributos.

| Fonte | Linha de base e comparação | Decisão que informa |
|---|---|---|
| Search Console | Antes das mudanças, exportar os 28 dias completos anteriores e manter janela de 90 dias para contexto. Separar marca/sem marca, página, consulta, país e dispositivo; impressões, cliques, CTR e canonical escolhida. Conferir as 55 URLs em Indexação/Sitemaps; inspecionar amostra estratificada | Detectar perda por migração ou sobreposição. Usar relatório de IA generativa para impressões quando disponível; os dados já entram no relatório geral. Evitar somá-los novamente. |
| Perfil da Empresa | Registrar Place ID, data, horários, link de agenda, site, categoria e avaliações. Exportar visualizações, interações e chamadas quando disponíveis. Usar UTM estável no link de site em mudança futura autorizada | Distinguir demanda do Maps, busca e site. Cliques em rotas e ligações não provam orçamento fechado. |
| GA4 e WhatsApp | `TrackingScripts.astro` envia `generate_lead` e `whatsapp_click` para o mesmo clique; `contact` para telefone. Depende de interação/idle para carregar a tag. Ads ID vazio; valor fixo de R$ 150 está em ramo condicional inativo | Conferir eventos-chave e importações do Ads antes de alterar. Manter histórico e anotar a quebra de série. Usar `whatsapp_click` como microconversão, ação comercial confirmada como lead. Nenhuma receita presumida por clique. |
| Controle comercial simples | Data, origem informada ou atribuível, página quando conhecida, serviço principal, bairro, qualificado, orçamento enviado, aprovado e valor contratado quando disponível. Manter dados pessoais fora de analytics e do relatório | Medir qualificados, aprovados/qualificados e valor contratado. Origem desconhecida fica como “desconhecida”. Adotar pergunta curta “Como encontrou a Fix?” quando o contato não trouxer origem. |
| Bing Webmaster Tools | Desempenho, indexação e, se houver amostra, AI Performance: páginas citadas, consultas de grounding e tópicos | Comparar visibilidade Bing/Copilot com amostra manual. Contagem de citações não equivale a visitas. |
| Logs e referências de IA | Resumir status por rota e agente validado; no GA4 analisar referências efetivamente recebidas de ChatGPT, Perplexity, Bing/Copilot e outros. Apps podem omitir referência | Medir acesso de bot, visita humana e lead em séries distintas; calcular conversão atribuível apenas onde houver vínculo. |
| Experiência no celular | Search Console/CrUX ou PageSpeed Insights por URL e origem. Quando faltar amostra, guardar a lacuna e repetir três execuções de laboratório no mesmo aparelho/perfil | Verificar no p75 LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1. Uma mediana de laboratório não substitui os dados de campo. |

Comparar os primeiros 28 dias completos após a mudança com os 28 anteriores, serviço a serviço. Anotar feriados, pausas de agenda, campanhas e mudanças simultâneas. Acompanhar semanalmente assuntos de maior demanda e mensalmente a taxa de fechamento. O tráfego pode oscilar sem alterar a qualidade dos pedidos. [Relatório de IA do Search Console](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports?hl=pt-br) · [AI Performance do Bing](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) · [Tópicos no Bing](https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/)

### Protocolo reproduzível para recomendações

1. Fixar um painel inicial de seis perguntas sem o nome Fix: chuveiro, TV, fechadura, disjuntor, lista de reparos e atendimento na Velha Central. Copiar a formulação da matriz e registrar a versão. Rodar a busca de marca separadamente.
2. Fazer duas rodadas em dias distintos por mês, em sessões novas e contexto pt-BR comparável. Cobrir Google tradicional/Maps, AI Overviews, AI Mode, ChatGPT Search, Gemini, Copilot e Perplexity. Registrar interface, modelo quando exposto, busca web ligada/desligada, região informada, data/hora de Blumenau e login/personalização. Não induzir a resposta com o domínio.
3. Guardar consulta exata, empresas apresentadas, links citados, trecho curto pertinente, telefone/horário apresentados e resposta verificável de referência. Registrar “sem resposta generativa” quando não houver o recurso e “indisponível” se houver impedimento de coleta. Não transformar falha de coleta em ausência de menção.
4. Por mecanismo e serviço, registrar **N** de consultas executadas, **G** de respostas generativas válidas e **G/N** de cobertura. Entre as G respostas, calcular **menção** = respostas que nomeiam a Fix/G, **citação** = respostas com link para o domínio/G e **recomendação** = respostas que apresentam a Fix como prestador adequado/G. Separar domínio principal e blog legado. Contar a Fix no máximo uma vez por resposta em cada taxa. Se G = 0, reportar “sem amostra”.
5. Medir **precisão** como fatos corretos/fatos verificáveis apresentados sobre a Fix; pontuar telefone, área, serviço e horário separadamente. Medir **presença relativa** como aparições da Fix/soma de aparições únicas das empresas acompanhadas por resposta. Informar denominadores pequenos e critério fixo dos concorrentes. Validar manualmente a codificação de resultados ambíguos.
6. Repetir o painel depois das mudanças, com mesma amostragem. Reportar menções, visitas com referência e pedidos qualificados em colunas separadas. Com apenas uma observação de AI Overview, a informação válida é a ocorrência; não há estimativa confiável de participação.


## 11. Plano de implementação e critérios de aceite

Cada item é trabalho futuro. P0 = risco imediato de contato ou de mensuração, P1 = melhoria estrutural ou comercial prioritária, P2 = melhoria incremental, P3 = experimento opcional. Complexidade baixa/média/alta é relativa ao projeto. Evidência **comprovada** indica código, observação ou diretriz direta; **fundamentada** indica mecanismo plausível e evidência indireta de benefício; **experimental** exige comparação. Os impactos descritos são esperados.


### Fase 0 — Linha de base e proteção contra regressões

- [ ] **F0.1 — Congelar a amostra antes das correções**
  - Problema e evidência — A auditoria histórica abrange 42 URLs; a saída atual e o sitemap publicado têm 55. Faltam dados de tráfego por serviço.
  - Arquivos e componentes — Sitemap público, dist/, Search Console, Bing Webmaster Tools, Perfil da Empresa e GA4.
  - [ ] Exportar as janelas de 28 e 90 dias e registrar rotas e condições dos testes.
  - [ ] Marcar a data de cada intervenção e guardar um retrato dos eventos-chave já configurados.
  - Prioridade **P0** · Complexidade **baixa** · Evidência **comprovada**.
  - Impacto esperado — Evitar decisões por comparações incompatíveis.
  - Risco — Misturar domínio principal com subdomínio ou sessões de períodos diferentes.
  - Dependências — Acesso de leitura às contas para métricas privadas.
  - Critério de aceite — Planilha ou relatório operacional datado, com denominadores e indicação de dados ausentes.
  - Validação — Reconciliar as 55 rotas com sitemap, registrar cobertura por template e conferir a soma de cliques por página com o total da mesma seleção.

- [ ] **F0.2 — Distinguir clique, pedido e serviço contratado**
  - Problema e evidência — O mesmo clique dispara generate_lead e whatsapp_click. O código não observa a conversa nem a aprovação.
  - Arquivos e componentes — src/components/TrackingScripts.astro, GA4, conversões importadas do Ads e controle comercial.
  - [x] Inventariar dependências dos eventos e escolher um único evento de clique para as análises.
  - [ ] Anotar migração, classificar conversas únicas, ligar origem quando conhecida e usar receita apenas em contratação confirmada.
  - Prioridade **P0** · Complexidade **média** · Evidência **comprovada**.
  - Impacto esperado — Saber quais serviços geram trabalho e proteger a série histórica.
  - Risco — Duplicar conversões, perder histórico ou enviar dados pessoais ao GA4.
  - Dependências — F0.1 e acesso às configurações analíticas.
  - Critério de aceite — Um gesto computa um clique na métrica escolhida. Um clique abandonado gera zero pedidos qualificados. Duas mensagens sobre o mesmo pedido contam uma oportunidade.
  - Validação — Testar link da hero, CTA flutuante, telefone, toque rápido antes de carregar a tag e retorno à página. Conferir DebugView em ambiente de teste e conciliar um período com o registro de conversas.

### Fase 1 — Correções técnicas e comerciais prioritárias

- [ ] **F1.1 — Corrigir o caminho de contratação e conciliar o sábado**
  - Problema e evidência — Link de agendamento do Maps tem 12 dígitos onde o destino do site tem 13. O Maps informa sábado fechado e o site informa 8h–13h.
  - Arquivos e componentes — Cadastro público do Maps, src/data/business.ts, src/pages/contato.astro, rodapé, CTAs e public/llms.txt.
  - [ ] Confirmar com Osmar o destinatário, o regime real do sábado e a existência de recepção presencial. *(Parcial: confirmado que não há atendimento aos sábados; pendente conferência externa do link `554788041306` no Maps e modalidade de recepção no perfil).*
  - [x] Padronizar os campos pertinentes na futura execução e alinhar o nome, a área e a indicação de atendimento domiciliar.
  - Prioridade **P0** · Complexidade **baixa** · Evidência **comprovada**.
  - Impacto esperado — Facilitar contato de quem já escolheu a Fix e evitar expectativas incorretas.
  - Risco — Alterar informação correta de um dos canais ou direcionar o cliente a outro número.
  - Dependências — Confirmação operacional do titular e acesso administrativo para futura edição de perfil.
  - Critério de aceite — Site e Maps abrem a conta comercial correta; horas, sábado e modalidade de atendimento coincidem nas superfícies primárias.
  - Validação — Abrir os caminhos em celular e desktop sem enviar mensagem, conferir o destinatário e consultar a semana expandida no perfil público após propagação.

- [ ] **F1.2 — Corrigir lastmod e testar a migração ponta a ponta**
  - Problema e evidência — O hash da URL determina datas de detalhes. Há 292 regras, algumas com destinos genéricos; no linktree meta e header configurado divergem.
  - Arquivos e componentes — astro.config.mjs, public/_redirects, public/_headers, public/linktree/index.html, public/robots.txt e domínio/subdomínio.
  - [x] Derivar a data de revisão editorial comprovável ou omitir lastmod. Registrar intenção de indexação de cada página especial.
  - [ ] Testar status e canonicals no edge, confrontar com o CSV histórico e dar destinos específicos apenas quando equivalentes.
  - Prioridade **P1** · Complexidade **média** · Evidência **comprovada**.
  - Impacto esperado — Melhorar a confiança nos sinais de rastreamento e preservar entradas antigas úteis.
  - Risco — Remover regra com tráfego ou criar cadeia/laço; troca de host perder consultas antigas.
  - Dependências — F0.1 e relatório de URLs com impressões e links.
  - Critério de aceite — Zero datas fabricadas. Rotas comerciais terminam em 200 indexável; alias esperado faz redirecionamento permanente; uma URL inexistente retorna 404; linktree tem diretivas coerentes.
  - Validação — Rodar GET com registro de status, Location, tipo, X-Robots-Tag e URL final em apex, WWW, HTTP, XML, legados e utilitários. Validar mudança material e página intocada em dois builds de teste.

- [ ] **F1.3 — Restabelecer navegação acessível no celular**
  - Problema e evidência — Menu visualmente fechado expõe links na árvore acessível; rótulo em inglês e sem estado expandido no código. Botão flutuante recobriu uma linha da página de chuveiro.
  - Arquivos e componentes — src/components/Header.astro, WhatsAppFAB.astro, src/layouts/ServicePage.astro e estilos.
  - [x] Usar rótulo em português, estado aria-expanded, associação com o menu e gestão de foco/visibilidade.
  - [x] Manter CTA contextual na primeira tela; ajustar área do flutuante e movimento do chat quando afetar leitura.
  - Prioridade **P1** · Complexidade **média** · Evidência **comprovada**.
  - Impacto esperado — Reduzir fricção no principal caminho móvel de orçamento.
  - Risco — Ocultar o CTA, impedir navegação sem mouse ou aumentar instabilidade visual.
  - Dependências — F0.1 e amostra de telas da home, hub e serviço.
  - Critério de aceite — Menu fechado deixa os links fora da navegação por teclado; menu aberto funciona e retorna foco ao botão ao fechar. CTA acessível e texto integralmente alcançável.
  - Validação — Testar teclado e leitor de tela, 360/390/768 px, zoom de 200%, temas claro/escuro e movimento reduzido; comparar dados de campo quando disponíveis.

### Fase 2 — Arquitetura semântica e consolidação da empresa

- [x] **F2.1 — Reutilizar o cadastro da Fix e conectar páginas e serviços**
  - Problema e evidência — Mesmo ID empresarial já existe, mas a home, o contato, o catálogo e o prestador repetem campos. O contato declara BR e a oferta é local.
  - Arquivos e componentes — src/data/business.ts, src/pages/index.astro, contato.astro, servicos/index.astro, src/layouts/ServicePage.astro e blog/[slug].astro.
  - [x] Centralizar os dados públicos confirmados e reutilizar o mesmo identificador da empresa.
  - [x] Ligar WebPage, WebSite, Service, OfferCatalog e BreadcrumbList conforme a função da página. Usar imagem e pessoa identificada onde houver base editorial.
  - Prioridade **P1** · Complexidade **média** · Evidência **fundamentada**.
  - Impacto esperado — Menor divergência entre dados visíveis e estruturados e manutenção mais simples.
  - Risco — Criar IDs duplicados, perder campos úteis de rich results ou divulgar endereço sem atendimento público.
  - Dependências — F1.1, verificação de perfis e definição da política de endereço.
  - Critério de aceite — Mesmo ID/telefone por empresa; cada serviço canônico tem ID estável e prestador correto; breadcrumb termina na página certa; nenhum rating autorreferencial.
  - Validação — Parsear todo o build, comparar campos com conteúdo visível e testar um exemplar por família no Schema Markup Validator e no Rich Results Test. Tratar recursos não suportados de forma distinta de erro sintático.


### Fase 3 — Conteúdo, SEO local e páginas que geram orçamento

- [ ] **F3.1 — Revisar os quatro serviços prioritários**
  - Problema e evidência — Chuveiro apareceu em AI Overview e TV no Bing. O template já tem CTA, trilha e escopo; promessas genéricas e versões separadas por dispositivo competem por atenção.
  - Arquivos e componentes — Páginas de chuveiro, TV, fechadura e disjuntor em src/pages/, src/layouts/ServicePage.astro e src/data/blogPosts.ts.
  - [x] Escrever para cada serviço uma resposta curta com escopo, condições, fotos úteis, bairro, materiais e fatores de preço.
  - [ ] Ligar o guia apropriado e um caso verificável. Revisar tecnicamente as orientações elétricas antes de publicar. *(Guias já vinculados; caso verificável e revisão técnica final com Osmar pendentes).*
  - Prioridade **P1** · Complexidade **média** · Evidência **fundamentada**.
  - Impacto esperado — Mais conversas iniciadas com as informações de que Osmar precisa para orçar.
  - Risco — Remover trechos já citados, prometer capacidade universal ou empurrar CTA para baixo.
  - Dependências — F0.1, F0.2 e revisão de Osmar.
  - Critério de aceite — Quatro páginas respondem quem atende, onde, o que inclui e quais informações enviar. Mesmo escopo essencial nos dois layouts e mensagem coerente com o serviço.
  - Validação — Comparar HTML e uma leitura em celular; pedir a alguém que encontre o próximo passo sem ajuda; observar 28 dias de consultas e pedidos por página.

- [ ] **F3.2 — Resolver sobreposição de intenção sem perder URLs valiosas**
  - Problema e evidência — As duas torneiras elétricas têm canonical próprio, títulos diferentes e H1 idêntico. As duas fechaduras já se distinguem por instalação física e integração.
  - Arquivos e componentes — src/pages/{eletricista,encanador}/instalacao-de-torneira-eletrica.astro, páginas de fechadura, hubs e links editoriais.
  - [x] Cruzar consulta × página × conversas. Se há demandas distintas, diferenciar H1, escopo e links; se a oferta é uma só, escolher destino pelos dados. *(H1, escopo e links cruzados diferenciados entre circuito elétrico e instalação hidráulica).*
  - [ ] Somente em caso de consolidação, planejar 301 da secundária, atualizar catálogo, sitemap e links. Validar separadamente Sonoff x interruptor genérico.
  - Prioridade **P1** · Complexidade **média** · Evidência **fundamentada**.
  - Impacto esperado — Enviar o cliente ao serviço certo e simplificar manutenção.
  - Risco — Desviar intenção real ou perder histórico e tráfego de cauda longa.
  - Dependências — F0.1 e dados comerciais por serviço.
  - Critério de aceite — Cada consulta principal tem destino e justificativa. Toda URL preservada tem escopo distinto; toda URL consolidada chega à substituta equivalente.
  - Validação — Repetir crawl de links e canonicals, inspecionar URLs no Search Console e comparar páginas e conversões em janelas de 28 dias.

### Fase 4 — Autoridade e diferenciação competitiva

- [ ] **F4.1 — Documentar provas e uniformizar promessas comerciais**
  - Problema e evidência — Quatro depoimentos estáticos repetidos em cinco páginas; nenhuma fonte individual no componente. A nota agregada pública coincide com a faixa. As condições de garantia e agenda divergem entre telas.
  - Arquivos e componentes — src/components/Reviews.astro, Marquee.astro, Hero.astro, src/layouts/ServicePage.astro, contato.astro e /avaliar/.
  - [x] Vincular cada depoimento a registro verificável; confirmar direito de uso, números e condições. *(7 avaliações públicas reais do Google adicionadas em `src/data/reviews.ts` com rotação dinâmica em `Reviews.astro` sem JSON-LD de rating).*
  - [x] Remover textos sem confirmação ou trocar por link para o perfil. Padronizar a garantia real, custos de visita e prazo de resposta conforme o serviço.
  - Prioridade **P1** · Complexidade **baixa** · Evidência **comprovada**.
  - Impacto esperado — Aumentar confiança antes do primeiro contato e reduzir atritos de orçamento.
  - Risco — Desatualização, atribuição incorreta ou exposição de cliente.
  - Dependências — Osmar, documentos operacionais e F1.1. Pode começar junto com a Fase 1.
  - Critério de aceite — Cada afirmação quantitativa publicada tem fonte, responsável e data, ou dá lugar a descrição verificável. Condições coerentes. Nenhuma avaliação inventada.
  - Validação — Revisar cartões individualmente; comparar home, serviço, contato, índice em texto e Maps; validar que o botão de avaliar abre o perfil correto.

- [ ] **F4.2 — Publicar casos locais e consolidar referências externas**
  - Problema e evidência — O site já identifica Técnico Osmar e o resultado de IA citou seu nome. Artigos compartilham imagem e URL de autor genéricas. Há referências em diretórios e material de serviços no projeto.
  - Arquivos e componentes — src/data/blogPosts.ts, src/pages/blog/[slug].astro, acervo de fotos, contato, perfis e parceiros reais.
  - [ ] Selecionar dois atendimentos documentados, um de instalação e um de diagnóstico. Publicar contexto, decisão, resultado, data e autoria com autorização.
  - [ ] Vincular os casos às páginas comerciais e validar cadastros onde a Fix já é encontrada. Priorizar menções genuínas e corrigir dados divergentes.
  - Prioridade **P2** · Complexidade **média** · Evidência **fundamentada**.
  - Impacto esperado — Demonstrar experiência local que não pode ser reproduzida por uma página genérica.
  - Risco — Expor imóveis ou atribuir título/prêmio sem documentação.
  - Dependências — F4.1, acervo original e aceite para publicação.
  - Critério de aceite — Dois casos verificáveis, com foto própria contextualizada ou evidência equivalente, autor e link ao serviço; registrar situação dos perfis prioritários.
  - Validação — Conferir fonte e consentimento internamente, navegação a partir do hub e convergência dos dados públicos. Acompanhar pedidos em que o cliente menciona o caso.

### Fase 5 — Experimentação e acompanhamento

- [ ] **F5.1 — Manter painel de visibilidade e pedidos**
  - Problema e evidência — Uma citação confirmada e uma ocorrência no Bing são uma linha de partida pequena. A frequência por mecanismo é desconhecida.
  - Arquivos e componentes — Matriz da seção 8, protocolo da seção 10, Search Console, Bing Webmaster, GA4 e registro comercial.
  - [ ] Executar o painel em duas rodadas mensais com consultas, idioma e condições documentados.
  - [ ] Apresentar primeiro qualificados e aprovados; depois presença, citações, precisão, acesso e referências por mecanismo.
  - Prioridade **P2** · Complexidade **baixa** · Evidência **experimental para a série de prompts; comprovada para o registro dos eventos observados**.
  - Impacto esperado — Identificar páginas que trazem trabalho e informações comerciais reproduzidas incorretamente.
  - Risco — Amostras pequenas, personalização e atribuição indevida de causalidade.
  - Dependências — F0.1 e F0.2.
  - Critério de aceite — Relatório expõe N, G, fontes, comparadores, lacunas de coleta e mudanças do período. Nenhum dado ausente vira zero.
  - Validação — Reexecutar consultas em sessões novas, revisar a classificação manual de uma amostra e confrontar tendências com conversas reais.

- [ ] **F5.2 — Limitar o investimento em arquivos para agentes e verificar acesso efetivo**
  - Problema e evidência — llms.txt público já existe. Os dois manifestos associam tipos JSON a respostas de texto/HTML. A CDN acrescenta política própria ao robots.
  - Arquivos e componentes — public/llms.txt, public/.well-known/ai-catalog.json, ard.json, BaseHead.astro, robots e logs agregados da CDN.
  - [x] Corrigir ou remover entradas com tipo incompatível; alinhar dados ao cadastro real. Manter a política distinta para busca e treinamento.
  - [ ] Monitorar requisições verificadas e consumo do índice. Só considerar exportações adicionais quando houver consumidor e benefício demonstráveis.
  - Prioridade **P3** · Complexidade **baixa** · Evidência **comprovada para inconsistência de tipo; experimental para benefício de geo**.
  - Impacto esperado — Evitar retrabalho e reduzir inconsistência entre representações.
  - Risco — Interpretar visitas automatizadas como citações ou abrir treinamento inadvertidamente.
  - Dependências — F1.1, F2.1 e acesso aos logs para medir uso.
  - Critério de aceite — Cada entrada descreve o conteúdo realmente entregue, regras de uso documentadas e critérios de continuidade definidos. Sem novo espelho integral por padrão.
  - Validação — Conferir Content-Type e conteúdo dos destinos, testar robots servido e revisar 60 dias de consumo. Manter ou encerrar o experimento conforme custo e uso verificável.


## 12. Testes de regressão e ordem de liberação futura

- [ ] **Antes da implementação** — congelar HTML, destinos de contato e métricas das quatro páginas prioritárias, confirmar as condições comerciais com Osmar e registrar a intenção de cada URL do conjunto antigo. Guardar históricos em ambiente interno, sem conversas identificáveis.
- [x] **Build em cópia de trabalho** — executar o comando de build já previsto no projeto. Para cada URL do XML, exigir arquivo de destino, título e descrição preenchidos, H1, canonical único no host correto, conteúdo principal inicial, links internos existentes e CTA para o número certo. Comparar URLs novas/removidas contra lista intencional. Validar todos os blocos JSON com parser e unicidade dos IDs que representam a mesma empresa.
- [ ] **Semântica** — comparar localidade, nome, contato e horário no HTML, JSON-LD e índice textual. Conferir Service/provider e trilhas, autoria e datas reais. Validar marcação no [Schema Markup Validator](https://validator.schema.org/) e elegibilidade por recurso no [Rich Results Test](https://search.google.com/test/rich-results). Registrar o motivo de qualquer alerta aceito.
- [ ] **HTTP em ambiente que reproduza a borda** — fazer GET com e sem seguimento de redirect, guardar status e Location de cada salto. Amostra mínima: home por HTTP/HTTPS e WWW/apex, contato, um detalhe por categoria, uma URL removida, uma rota inventada, sitemap.xml, sitemap-index.xml, sitemap-0.xml, robots.txt, /avaliar/, /linktree/, llms.txt e os dois manifestos. No host legado, inspecionar a página específica ainda encontrada nas pesquisas. Conferir MIME, canonical, meta robots, X-Robots-Tag e cache. Um HTML de erro devolvido com status 200 exige tratamento.
- [ ] **Conversão e acessibilidade** — percorrer home → hub → serviço → WhatsApp em celular e desktop, verificar a conta e o serviço da mensagem sem enviá-la. Verificar também telefone, CTA fixo, menu, foco, zoom, contraste, preferência por movimento reduzido e funcionamento do conteúdo sem JS. Validar analytics em ambiente de teste, sem gerar leads de produção.
- [ ] **Depois de uma publicação futura autorizada** — repetir as verificações na borda e no perfil público; verificar rastreamento e quedas por página em sete dias, comparar qualificados e conversões em 28 dias. Se um caminho comercial falhar, priorizar a reversão da mudança específica à versão conhecida e retestar antes de avançar de fase.

**Ordem de execução prática.** F0.1 e a checagem de F1.1 podem começar no mesmo dia. Preservar o histórico antes de mudar eventos. A conferência dos depoimentos em F4.1 pode acompanhar a correção dos horários. Só consolidar páginas depois de conhecer consultas e resultados delas. Retomar F5.2 por último.

## 13. Evidência e limites da investigação

| Nível | Aplicação nesta auditoria |
|---|---|
| Comprovada | Divergência de horário e de link no Maps, 55 entradas no sitemap público, estrutura dos 58 HTMLs locais, hash de lastmod, duplo evento de clique, citação da Fix em uma resposta específica, diretriz sobre estrelas. |
| Fundamentada | Mais clareza no escopo e no orçamento, cadastro único, fotos identificáveis e ligações entre casos e serviços devem facilitar a escolha e reduzir inconsistências. Medir o efeito comercial. |
| Experimental | Frequência de recomendação em painéis de prompts, benefício incremental do grafo para citações e uso de índices Markdown por agentes específicos. |
| Não recomendada | Importar nota de terceiros no JSON-LD da própria empresa para obter estrelas; transformar serviço em produto para esse fim; publicar uma página quase igual por bairro; comprar avaliações ou links; abrir todos os bots; produzir llms-full.txt sem demanda identificada. |

A inspeção local foi de leitura sobre o código e o build existente. Não houve novo build na árvore do projeto. Os testes diretos no navegador cobriram páginas e dispositivos amostrais; a verificação exaustiva das 55 URLs ocorreu sobre a saída local. A tentativa de captura HTTP bruta a partir do terminal não conectou ao domínio. O navegador abriu o site, os XMLs, o TXT e o Maps, mas não forneceu um inventário confiável de códigos e headers de cada rota. Faltam distribuição real de status por bot, configuração do painel da CDN, canonicals escolhidas pelos buscadores, CrUX, receita e leads por origem.

A busca direta no Google e no Bing foi observada, assim como uma Visão geral criada por IA e o perfil público da Fix. Não houve rodada controlada separada no AI Mode, ChatGPT Search, Gemini, Copilot ou Perplexity. A seção 10 permite repetir essas medições. A consulta orgânica não simula todos os pontos geográficos de Blumenau. Para concorrentes, os perfis e dados estruturados confirmados constam individualmente na seção 7; não se inferiram notas ou selos onde faltou leitura. Dados do Maps podem mudar. O número abreviado do link de agendamento foi observado, mas sua taxa de falha e o destinatário final no aplicativo não foram confirmados.

A verificação da reputação se limitou à nota e à contagem públicas da Fix, aos quatro cartões no site e às menções externas identificadas. O livro de atendimentos, as autorizações de fotos, as certificações, a quantidade de residências e os tempos de resposta não foram inspecionados. As divergências de condições comerciais pedem validação do titular antes de qualquer alteração. A consulta não mediu impacto causal de SEO ou de GEO.

## 14. Referências técnicas e evidências públicas

Fontes primárias consultadas em 26/11/2026. Os links de busca permitem repetir uma consulta cujo resultado pode variar.

- Regras para estrelas, elegibilidade de negócios locais e hierarquia de tipos. [Review Snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet) · [LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business) · [Schema.org](https://schema.org/HomeAndConstructionBusiness)
- Recursos de IA da Pesquisa, conteúdo e mensuração. [AI features](https://developers.google.com/search/docs/appearance/ai-features) · [Guia de otimização](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=pt-br) · [Relatórios generativos do Search Console](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports?hl=pt-br) · [Conteúdo confiável](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Cadastros, áreas de serviço e avaliações. [Representação da empresa](https://support.google.com/business/answer/3038177) · [Endereço](https://support.google.com/business/answer/2853879) · [Classificação local](https://support.google.com/business/answer/7091) · [Convite a avaliações](https://support.google.com/business/answer/3474122)
- Rastreamento e sinais técnicos. [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) · [Google-Extended](https://developers.google.com/crawling/docs/google-extended) · [OpenAI](https://developers.openai.com/api/docs/bots) · [Anthropic](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) · [Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) · [Cloudflare](https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/)
- Monitoramento e formatos. [Core Web Vitals](https://web.dev/articles/vitals) · [AI Performance / Bing](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) · [Proposta llms.txt](https://llmstxt.org/)
- Evidência primária da Fix. [Home](https://fixblu.com.br/) · [Contato](https://fixblu.com.br/contato/) · [Chuveiro](https://fixblu.com.br/eletricista/instalacao-de-chuveiro/) · [Robots servido](https://fixblu.com.br/robots.txt) · [Índice XML](https://fixblu.com.br/sitemap-index.xml) · [Sitemap de páginas](https://fixblu.com.br/sitemap-0.xml) · [Índice textual](https://fixblu.com.br/llms.txt) · [Perfil da empresa no Maps](https://www.google.com/maps/search/?api=1&query=Fix+Servi%C3%A7os&query_place_id=ChIJTyGA3_ob35QR5Iu8YYSNRIY)

