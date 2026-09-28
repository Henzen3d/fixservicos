# ⚡ Fix Serviços — Modernização WordPress/Divi para Astro & Cloudflare Pages

> **Case de Sucesso de Engenharia Web Assistida por IA (AI-Assisted Engineering)**  
> Migração completa de um site legado em WordPress com tema pesado (Divi) para uma arquitetura estática ultrarrápida, segura e de custo zero de infraestrutura com **Astro**, **Tailwind CSS v4** e **Cloudflare Pages**, com **100% do SEO preservado**.

[![Astro](https://img.shields.io/badge/Astro-6.2-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![AI Assisted](https://img.shields.io/badge/AI--Assisted-Google_Antigravity-8E75FF?style=for-the-badge&logo=openai&logoColor=white)](#-desenvolvimento-assistido-por-ia)
[![SEO Protected](https://img.shields.io/badge/SEO-100%25_Preservado-10B981?style=for-the-badge&logo=google&logoColor=white)](#-preservação-de-seo-sem-perda-de-tráfego)

---

## 🎯 Visão Geral do Projeto

A **Fix Serviços** ([fixblu.com.br](https://fixblu.com.br)) é uma empresa de serviços e manutenção residencial/comercial sediada em Blumenau/SC (Eletricista, Encanador, Marido de Aluguel e Casa Inteligente). 

O site anterior operava sobre **WordPress com o construtor Divi**, apresentando os gargalos clássicos que impactam negócios locais:
- Carregamento lento em conexões móveis (onde está **96% do público real** do cliente).
- Constante necessidade de atualização de temas, plugins do WordPress e banco de dados MySQL para evitar vulnerabilidades e quebras repentinas.
- Código redundante, bloqueios de renderização e perda de posições orgânicas no Google.

Este projeto realizou a **reformulação completa da stack**, reconstruindo a plataforma do zero em arquitetura **Jamstack / Static Site Generation (SSG)** com foco em velocidade extrema, conversão via WhatsApp e zero manutenção técnica.

---

## 📊 Antes vs. Depois: O Impacto da Modernização

| Métrica / Aspecto | WordPress + Divi (Legado) | Astro + Cloudflare Pages (Atual) | Ganho Real |
| :--- | :--- | :--- | :--- |
| **Tempo de Carregamento (Mobile)** | ~3.8s a 5.2s | **< 0.6s instantâneo** | **85%+ mais rápido** |
| **Geração de Páginas** | Dinâmica via PHP/MySQL (servidor) | **42 páginas estáticas pré-compiladas** | Zero tempo de processamento |
| **Manutenção & Estabilidade** | Atualização contínua de plugins e temas | **Zero plugins, zero banco de dados** | **Zero dor de cabeça** |
| **Segurança** | Superfície vulnerável a ataques e injeção SQL | **Código 100% estático (HTML/CSS)** | **Imune a ataques comuns** |
| **Custo de Hospedagem** | Mensalidade de hospedagem cPanel/VPS | **R$ 0,00 / mês** (Cloudflare Pages Free Tier) | **Economia financeira direta** |
| **Deploy & CI/CD** | FTP / backups manuais volumosos | **Git automático com edge CDN mundial** | Deploy em segundos a cada push |

---

## 🛠️ Stack Tecnológica & Decisões de Arquitetura

* **Framework Principal**: [Astro v6](https://astro.build/) — Renderização estática com *Zero JavaScript* por padrão, entregando puro HTML/CSS otimizado.
* **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) com design system customizado, tipografia calibrada, tokens de alto contraste e **Dark Mode nativo** com transições de tela (*View Transitions API*).
* **Infraestrutura**: [Cloudflare Pages](https://pages.cloudflare.com/) — Distribuição global em mais de 300 data centers, proteção DDoS e latência mínima em Santa Catarina e em todo o Brasil.
* **Métricas & Rastreamento**: Google Analytics 4 (`gtag.js`) injetado no `<head>` com execução assíncrona que não bloqueia a renderização.
* **Conversão Mobile**: Header dinâmico, WhatsApp FAB flutuante e formulários/links com mensagens pré-formatadas para cada tipo de reparo solicitado.

---

## 🔍 Preservação de SEO sem Perda de Tráfego

Ao migrar um site com anos de autoridade no Google, o maior risco é a perda de indexação. Esta modernização aplicou um rigoroso processo de auditoria de SEO:

1. **Mapeamento 1:1 de 42 URLs**: Todas as rotas de serviços existentes no WordPress foram replicadas exatamente com as mesmas slugs.
2. **Meta Tags & Headings**: Titles, Meta Descriptions e tags `H1`/`H2` foram auditados e preservados a partir do inventário técnico do site original.
3. **Redirecionamentos 301 Globais**: Criação de `_redirects` no Cloudflare Pages para tratar URLs legadas de categorias e rotas descontinuadas sem gerar páginas de erro 404.
4. **Schema.org Estruturado**: Marcação semântica JSON-LD injetada em todas as páginas para negócios locais (`LocalBusiness` e `Service`), informando cidade atendida, telefone oficial, horários de atendimento e catálogo de serviços.
5. **Sitemaps & Robots**: Geração automatizada de `sitemap-index.xml`, `sitemap-0.xml` e regras limpas no `robots.txt`.
6. **IA & LLMs**: Inclusão de `llms.txt` na raiz para indexação direta e contextualizada por assistentes de IA (ChatGPT, Gemini, Perplexity).

---

## 🤖 Desenvolvimento Assistido por IA (AI-Assisted Workflow)

Este projeto foi acelerado e refinado através de **Engenharia de Software Assistida por Inteligência Artificial**:

* **Auditoria de Código Legado**: Processamento inteligente de planilhas de rastreamento (Screaming Frog / SEO masters) para estruturação instantânea de rotas e metadados.
* **Componentização Atômica**: Geração de componentes reutilizáveis (`ServicePage.astro`, `Reviews.astro`, `GlobalCTA.astro`, `Header.astro`), eliminando repetição de código (DRY).
* **Validação em Tempo Real**: Testes de build automatizados, garantia de conformidade com padrões modernos da web e verificação rigorosa de links quebrados.

> *"A união de experiência técnica em desenvolvimento com o suporte de IA generativa permite entregar em dias o que antes levava semanas, com qualidade de código superior, performance cirúrgica e total segurança para o negócio."*

---

## 📂 Estrutura do Repositório

```text
├── public/                     # Arquivos estáticos servidos diretamente na raiz
│   ├── _redirects              # Regras de redirecionamento 301 para o Cloudflare
│   ├── robots.txt              # Configurações de indexação para buscadores
│   ├── llms.txt                # Contexto estruturado para agentes de IA
│   ├── favicon.svg             # Identidade visual
│   ├── avaliar/                # Redirecionador para reviews no Google Meu Negócio
│   ├── linktree/               # Página de links para bio de redes sociais
│   └── images/                 # Imagens otimizadas para mobile e desktop
├── src/
│   ├── components/             # Componentes modulares (Header, Footer, CTA, Reviews, Analytics)
│   ├── layouts/                # Templates principais (MainLayout, ServicePage)
│   ├── pages/                  # 42 rotas estáticas estruturadas
│   │   ├── eletricista/        # Páginas individuais de serviços elétricos
│   │   ├── encanador/          # Páginas de hidráulica e encanamento
│   │   ├── marido-de-aluguel/  # Serviços gerais e instalações
│   │   ├── casa-inteligente/   # Automação residencial
│   │   ├── contato.astro       # Formulário e dados de atendimento
│   │   └── politica-de-privacidade.astro
│   └── styles/
│       └── global.css          # Design System com Tailwind CSS v4 e Dark Mode
└── astro.config.mjs            # Configuração do Astro, Sitemap e integrações Vite
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
* Node.js `>= 22.12.0`
* Gerenciador de pacotes `npm`

### Instalação e Execução
```bash
# 1. Clone o repositório
git clone https://github.com/Henzen3d/fixblu.git

# 2. Acesse a pasta do projeto
cd fixblu

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
# Acesse em seu navegador: http://localhost:4321

# 5. Para compilar a versão final de produção
npm run build
```

---

## 📬 Quer modernizar o seu site WordPress para Astro?

Se você tem um site institucional, e-commerce ou landing page em WordPress que:
- ❌ Demora para carregar no celular;
- ❌ Vive dando dor de cabeça com plugins desatualizados ou quebrando após atualizações;
- ❌ Custa caro na hospedagem mensal;
- ❌ Perde posições no Google por causa de lentidão (Core Web Vitals);

Eu realizo a **migração completa e segura para Astro & Cloudflare Pages**, garantindo **zero perda de SEO**, velocidade máxima e custo quase zero de infraestrutura.

👉 **Vamos conversar sobre o seu projeto:**
* **Responsável Técnico / Dev**: Osmar Gonçalves
* **LinkedIn**: [linkedin.com/in/osmargf](https://www.linkedin.com/in/osmargf/)
* **GitHub**: [@Henzen3d](https://github.com/Henzen3d)
