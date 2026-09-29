# Skills Locais do Projeto

Este diretório contém as skills instaladas exclusivamente para este projeto (`Reforma Divi FixBlu`), sem qualquer instalação global no seu sistema operacional.

---

## 📁 Estrutura de Diretórios

```text
Reforma Divi FixBlu/
├── .skills/
│   ├── README.md               <-- Este guia explicativo
│   └── claude-seo/             <-- Repositório completo do Claude SEO
│       ├── skills/             <-- 26 skills principais de SEO
│       ├── extensions/         <-- 9 extensões com skills complementares
│       ├── scripts/            <-- 60 scripts Python de análise e crawling
│       ├── agents/             <-- 19 personas e subagentes especialistas
│       ├── schema/             <-- Modelos e schemas JSON-LD
│       ├── data/               <-- Bases de dados determinísticas de SEO
│       ├── claude-seo.cmd      <-- Launcher rápido Windows CMD
│       └── claude-seo.ps1      <-- Launcher rápido PowerShell
│
├── .agents/
│   ├── skills.json             <-- Registro das pastas de skills do projeto
│   └── skills/                 <-- Links diretos para todas as 33 skills descobertas
```

---

## 🚀 Como Funciona no Antigravity / Gemini

Todas as skills já estão ativas e registradas localmente através do sistema de customizações do workspace (`.agents/`). O assistente de IA detecta e carrega automaticamente as instruções de cada skill sob demanda quando você solicitar tarefas de SEO no chat.

### Exemplos de como pedir no chat:
- *"Faça uma auditoria técnica de SEO no nosso site"* -> ativa a skill `seo-audit` ou `seo-technical`.
- *"Analise o conteúdo desta página com foco em E-E-A-T"* -> ativa a skill `seo-content`.
- *"Gere o Schema JSON-LD correto para serviços de reforma em Blumenau"* -> ativa a skill `seo-schema` e `seo-local`.
- *"Como otimizar nosso site para IA (AI Overviews, ChatGPT Search, Perplexity)?"* -> ativa a skill `seo-geo` e `seo-agentic`.
- *"Verifique nosso sitemap e robots.txt"* -> ativa `seo-sitemap` e `seo-technical`.

---

## 🛠️ Lista de Skills Disponíveis (33 no total)

### 1. Hub Central e Auditorias Gerais
- **`seo`**: Orquestrador universal de SEO para qualquer tipo de site ou negócio.
- **`seo-audit`**: Auditoria completa e profunda de todo o domínio com pontuação e plano de ação priorizado.
- **`seo-page`**: Análise cirúrgica e detalhada de uma única URL.
- **`seo-drift`**: Monitoramento de baseline de SEO e comparação de alterações ao longo do tempo.

### 2. SEO Técnico e Estrutura
- **`seo-technical`**: Rastreabilidade, Core Web Vitals (LCP, INP, CLS), canonicals, noindex e limites de rastreadores.
- **`seo-schema`**: Detecção, validação e geração de marcação estruturada (Schema.org / JSON-LD).
- **`seo-sitemap`**: Validação de integridade, descoberta e geração de sitemaps XML.
- **`seo-hreflang`**: Auditoria e implementação de tags hreflang/i18n.

### 3. SEO Local (Perfeito para a FixBlu / Blumenau)
- **`seo-local`**: Perfil de Empresa no Google (GBP), consistência de NAP (Nome, Endereço, Telefone), avaliações e citações locais.
- **`seo-maps`**: Inteligência de busca no Google Maps, geo-grid e mapeamento de raio de concorrentes.

### 4. Conteúdo, Palavras-chave e UX
- **`seo-content`**: Avaliação de profundidade, originalidade, legibilidade e critérios E-E-A-T.
- **`seo-content-brief`**: Geração de pautas completas de conteúdo, palavras-chave e tópicos.
- **`seo-cluster`**: Agrupamento semântico de palavras-chave baseado em SERP e arquitetura de tópicos.
- **`seo-sxo`**: Search Experience Optimization (intenção do usuário, personas e experiência de navegação).
- **`seo-competitor-pages`**: Páginas de comparação e diferenciação competitiva.
- **`seo-images`**: Otimização técnica e visual de imagens para busca.

### 5. IA e Preparação para Agentes (GEO & Agentic)
- **`seo-geo`**: Generative Engine Optimization para AI Overviews do Google, ChatGPT Search e Perplexity.
- **`seo-agentic`**: Prontidão do site para agentes autônomos (llms.txt, Markdown, acessibilidade e WebMCP).

### 6. Estratégia, E-commerce e Integrações
- **`seo-plan`**: Planejamento estratégico de SEO baseado no modelo de negócio.
- **`seo-programmatic`**: Estratégias e arquitetura de SEO programático.
- **`seo-ecommerce`**: SEO para comércio eletrônico e inteligência de marketplaces.
- **`seo-google`**: Integrações com APIs do Google (Search Console, CrUX, PageSpeed, Indexing, GA4).
- **`seo-backlinks`**: Análise de perfil de links, autoridade de domínio e links tóxicos.
- **Extensões**: `seo-bing`, `seo-matomo`, `seo-ahrefs`, `seo-dataforseo`, `seo-firecrawl`, `seo-unlighthouse`, `seo-profound`, `seo-seranking`, `seo-banana`.

---

## 💻 Executando Scripts em Linha de Comando (Opcional)

Se desejar executar os scripts Python diretamente pelo terminal (PowerShell ou Prompt de Comando):

```powershell
# Verificar saúde do ambiente
.\.skills\claude-seo\claude-seo.ps1 doctor

# Executar um script específico
.\.skills\claude-seo\claude-seo.ps1 run parse_html.py <url>
```
