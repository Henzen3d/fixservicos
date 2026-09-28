# 📊 Diagnóstico Aprofundado de SEO — Google Search Console (16 Meses)
**Empresa:** Fix Serviços (FixBlu) — Blumenau/SC  
**Período Analisado:** Últimos 16 meses (Maio/2025 a Setembro/2026)  
**Fonte de Dados:** Relatórios Oficiais do Google Search Console (`Páginas.csv`, `Consultas.csv`, `Dispositivos.csv`, `Gráfico.csv`)  
**Elaborado para:** Osmar Gonçalves (Técnico Responsável) e Vera (Controladoria & Atendimento)

---

## 1. Visão Geral dos Resultados Orgânicos

Durante os 16 meses analisados no antigo site em WordPress, a presença orgânica da FixBlu gerou os seguintes números consolidados:

*   **Total de Impressões Orgânicas:** 114.459 vezes o site foi exibido no Google
*   **Total de Cliques Orgânicos:** 1.858 visitas qualificadas
*   **CTR Médio Global:** 1,62%
*   **Comportamento por Dispositivo:**
    *   📱 **Smartphones:** 1.148 cliques (61,8% do tráfego) | 68.863 impressões | CTR: 1,67% | Posição Média: **8,43**
    *   💻 **Computadores:** 703 cliques (37,8% do tráfego) | 45.253 impressões | CTR: 1,55% | Posição Média: 20,87
    *   📱 **Tablets:** 7 cliques | 343 impressões | CTR: 2,04% | Posição Média: 16,16

> 💡 **Primeiro Ponto Estratégico:** Mais de 60% dos cliques vêm de celular e com posição média muito melhor (8,4 vs 20,8 no desktop). A recente migração para o **novo site em Astro/HTML ultra leve** foi um passo fundamental, pois sites móveis ultra-rápidos aumentam a retenção do usuário e o índice Core Web Vitals do Google.

---

## 2. Radiografia das Páginas Mais Acessadas (Top Páginas)

Analisando o arquivo `Páginas.csv`, descobrimos a verdadeira distribuição do interesse dos usuários em Blumenau:

| Página | Cliques | Impressões | CTR | Posição Média | Diagnóstico & Oportunidade |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **1. `/` (Home)** | 703 | 38.121 | 1,84% | 6,77 | Principal porta de entrada para buscas genéricas ("marido de aluguel blumenau", "eletricista blumenau"). |
| **2. `/marido-de-aluguel/conserto-cadeira-giratoria-de-escritorio/`** | **216** | **6.549** | **3,30%** | **24,10** | 🔥 **Maior Revelação do GSC!** Mesmo estando na 2ª página do Google, gerou mais de 200 cliques. Há uma carência absurda desse serviço em Blumenau e região! |
| **3. `/encanador/`** | 161 | 15.064 | 1,07% | 14,35 | Alto volume de busca, mas CTR baixo. Se subir para a primeira página (top 3), pode dobrar os chamados. |
| **4. `/eletricista/`** | 122 | 21.287 | 0,57% | 18,91 | O maior volume de impressões de categoria (21 mil!), porém CTR muito baixo (0,57%) por estar na posição média 18. |
| **5. `/marido-de-aluguel/instalacao-de-coifa/`** | 99 | 2.449 | 4,04% | 16,87 | CTR excelente (4%), mostrando alta taxa de interesse de quem compra cooktop/coifa em Blumenau. |
| **6. `/marido-de-aluguel/instalacao-de-fechadura-digital/`** | **84** | **5.633** | **1,49%** | **19,61** | ⭐ **Serviço Lucrativo!** 5,6 mil pessoas viram no Google. Posição 19. Subindo para o Top 5, o faturamento com fechaduras explodirá. |
| **7. `/marido-de-aluguel/instalacao-de-tv-em-blumenau/`** | **76** | **2.945** | **2,58%** | **8,15** | ⭐ **Serviço Lucrativo!** Já está na 1ª página (8,15). Precisa avançar para as posições 1 a 3 para capturar 20% a 30% dos cliques. |
| **8. `/eletricista/consertar-a-iluminacao-da-piscina/`** | 61 | 2.324 | 2,62% | 14,31 | Serviço de nicho com excelente tíquete e pouca concorrência especializada. |
| **9. `/marido-de-aluguel/instalacao-de-persiana/`** | 49 | 1.522 | 3,22% | 16,41 | Serviço rápido com boa conversão. |
| **10. `/eletricista/instalacao-de-chuveiro/`** | 38 | 2.005 | 1,90% | 12,12 | Típico serviço de visita rápida (R$ 150,00). |
| **11. `/marido-de-aluguel/instalacao-secadora-de-roupas-de-parede/`** | 34 | 1.935 | 1,76% | 13,16 | Instalação residencial padrão. |
| **12. `/marido-de-aluguel/fixacao-de-varao-de-cortina/`** | 24 | 877 | 2,74% | 17,04 | Serviço rápido e casadinho com quadros/espelhos. |
| **13. `/casa-inteligente/`** | 16 | 598 | 2,68% | 14,36 | Mercado em expansão (Sonoff, Alexa, automação residencial). |
| **14. `/encanador/reparo-valvula-descarga-hydra-docol/`** | 14 | 2.404 | 0,58% | 13,68 | Serviço técnico qualificado com pouca gente disposta a consertar. |
| **15. `/eletricista/troca-de-disjuntor/`** | 4 | 533 | 0,75% | 18,59 | Visita rápida R$ 150,00 com potencial inexplorado. |
| **16. `/eletricista/troca-de-tomada/`** | 3 | 489 | 0,61% | 19,34 | Visita rápida R$ 150,00 com potencial inexplorado. |

---

## 3. Análise Detalhada dos Serviços Mais Lucrativos vs Rápidos

### A. Serviços Mais Lucrativos (Alto Tíquete: TV e Fechadura Digital)

1.  **Instalação de TV / Suporte de TV / Painel:**
    *   *Consultas Reais Encontradas:*
        *   `instalacao de suporte de tv blumenau` — 159 impressões, **Posição 11.2** (quase na 1ª página, 0 cliques!)
        *   `instalacao de tv em blumenau` — 151 impressões, **Posição 10.6** (na borda da 1ª página, 0 cliques!)
        *   `instalador de tv perto de mim` — 16 impressões, Posição 21
        *   `instalador de painel de tv` — 32 impressões, Posição 21
    *   *O que fazer:* Essas palavras estão na posição 10 a 11. O usuário vê os 10 primeiros resultados da página 1 e quase não vai para a página 2. Uma leve otimização no novo site (colocando `H1: Instalação de TV e Suporte de Parede em Blumenau`, títulos claros com meta tag e schema estruturado de serviço) fará a FixBlu subir para as posições 1 a 4. Isso colocará de 50 a 100 orçamentos de TV por ano apenas de orgânico.

2.  **Instalação de Fechadura Digital:**
    *   *Consultas Reais Encontradas:*
        *   `instalador de fechadura digital` — 373 impressões, Posição 14.4
        *   `instalador fechadura digital` — 300 impressões, Posição 21.7
        *   `instalação de fechadura digital preço` — **225 impressões**, Posição 14.7 (intenção de contratação imediata!)
        *   `fechadura digital em blumenau` — 157 impressões, 3 cliques, Posição 7.08 (1ª página!)
        *   `instalacao de fechadura digital blumenau` — 152 impressões, Posição 8.48
        *   `fechadura eletronica blumenau` — 92 impressões, Posição 7.77
    *   *O que fazer:* Há mais de 1.300 buscas de alta intenção esperando para serem capturadas. O Osmar tem diferencial imenso aqui: instalação em portas de madeira, pivotantes, vidro e ferro, com acabamento perfeito sem danificar a porta do cliente.

### B. O Fenômeno Inesperado: Conserto de Cadeiras de Escritório
*   Foi a **segunda página mais acessada do site** com **216 cliques** e mais de 6.500 impressões.
*   Consultas como:
    *   `conserto de cadeiras de escritório` (362 imp, 11 cliques, pos 8.33)
    *   `conserto cadeira escritorio perto de mim` (93 imp, 5 cliques, CTR 5,38%)
    *   `troca de pistão a gás`, `troca de rodízio`, `manutenção de cadeira presidente/gamer`.
*   *Oportunidade Comercial:* Escritórios de contabilidade, advocacia, clínicas e pessoas que trabalham home office em Blumenau têm cadeiras de R$ 800 a R$ 3.000 cujo pistão afunda ou rodinhas quebram. Se o Osmar prestar o conserto ou troca de componentes, é um serviço limpo, rápido, com margem excelente ou pacote de manutenção preventiva para empresas.

### C. Pequenos Serviços Rápidos (Visita Mínima R$ 150,00 — Tomadas, Disjuntores, Chuveiro, Sifão)
*   As pessoas em Blumenau pesquisam muito por:
    *   `eletricista blumenau` (4.607 imp, pos 5.31)
    *   `encanador blumenau` (5.440 imp, pos 5.2)
    *   `marido de aluguel blumenau` (2.543 imp, pos 2.96)
    *   `troca de chuveiro blumenau` (231 imp, pos 17.58)
    *   `instalador de chuveiro` (487 imp, pos 19.41)
    *   `troca de disjuntor` (26 imp, pos 24.35)
*   *Estratégia:* Criar o conceito de **"Visita Produtiva / Rota Express"**. Quando o cliente chama para trocar um disjuntor ou uma tomada (R$ 150,00), a Vera (atendimento) orienta: *"A nossa visita técnica padrão inclui até 1 hora de serviço. Se tiver mais alguma tomada com folga, lâmpada queimada ou torneira pingando na casa, o Osmar já resolve tudo na mesma visita pelo mesmo valor ou com valor complementar promocional!"*. O cliente fica encantado e o ticket sobe sem custo extra de deslocamento.

---

## 4. Oportunidades "Striking Distance" (Quase no Topo do Google)

No vocabulário de SEO, chamamos de *Striking Distance* palavras-chave que estão entre as posições **4 e 15** do Google com alto volume de impressões. Uma melhoria cirúrgica de conteúdo as empurra para as posições 1, 2 e 3, gerando uma explosão de cliques:

1.  **`dps blumenau`** (302 impressões, Posição 7.46, 0 cliques) — O Osmar já tem página dedicada a DPS! Melhorar a chamada de ação.
2.  **`fechadura digital em blumenau`** (157 impressões, Posição 7.08)
3.  **`instalacao de fechadura digital blumenau`** (152 impressões, Posição 8.48)
4.  **`instalacao de suporte de tv blumenau`** (159 impressões, Posição 11.22)
5.  **`instalacao de tv em blumenau`** (151 impressões, Posição 10.64)
6.  **`encanador blumenau 24h` / emergencial** (396 impressões, Posição 6.37)
7.  **`conserto de cadeiras de escritório`** (362 impressões, Posição 8.33)
8.  **`faz tudo blumenau`** (304 impressões, Posição 2.28 — já no topo!)

---

## 5. Plano de Ação Prático para o Novo Site HTML / Astro

Com o novo site publicado em HTML/Astro, as barreiras de velocidade do WordPress (plugins lentos, banco de dados pesado) foram superadas. Para converter essa agilidade técnica em novos clientes:

1.  **Indexação e Redirecionamentos 301 Limpos:**
    *   Garantir que todos os links mapeados na `Matriz de Migração SEO` redirecionem sem erros 404 para as páginas equivalentes no novo site.
    *   Submeter o novo `sitemap-index.xml` imediatamente no Google Search Console para forçar o rastreamento das novas páginas ultra-rápidas.
2.  **Otimização dos Meta Titles e Descriptions com Foco em Conversão (WhatsApp):**
    *   *Exemplo Atual:* "Instalação de TV Blumenau - Fix Serviços"
    *   *Exemplo Otimizado:* "Instalação de TV e Painel em Blumenau \| FixBlu (47) 98804-1306"
    *   Adicionar o telefone/WhatsApp e gatilho de agilidade já no snippet do Google para aumentar o CTR.
3.  **Dados Estruturados Schema.org (`LocalBusiness`, `Service`, `FAQPage`):**
    *   Garantir que cada página de serviço possua o Schema JSON-LD com os dados locais de Blumenau, área de cobertura e perguntas frequentes. O Google exibe rich snippets (estrelas e perguntas no resultado da busca), dobrando a taxa de cliques.
4.  **Integração com Perfil da Empresa no Google (Google Meu Negócio):**
    *   O site novo deve linkar diretamente para as avaliações do Google Meu Negócio, e a ficha do Google Meu Negócio deve apontar para as páginas de serviços específicas (`/marido-de-aluguel/instalacao-de-tv-em-blumenau/`, `/marido-de-aluguel/instalacao-de-fechadura-digital/`, etc.).
