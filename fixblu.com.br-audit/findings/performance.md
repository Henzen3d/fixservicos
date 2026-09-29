# Relatório Especialista: Performance & Core Web Vitals (CWV)

**Alvo:** https://fixblu.com.br  
**Pontuação do Pilar:** 90 / 100 (Peso: 10%)

---

## 1. Avaliação de Arquitetura e Velocidade de Carregamento

- **Stack Tecnológica:** Astro v6 + TailwindCSS v4 + Cloudflare Pages.
- **Modelo de Renderização:** Static Site Generation (SSG). O HTML é pré-compilado e distribuído em edge nodes mundiais (no Brasil: nós de São Paulo - GRU e Rio de Janeiro - GIG).
- **Tempo de Resposta Inicial (TTFB):** Médias abaixo de 50ms na rede Cloudflare com cache HIT.

---

## 2. Core Web Vitals (LCP, INP, CLS)

### LCP (Largest Contentful Paint) - Estimativa: ~1.2s (Excelente)
- **Elemento LCP:** A imagem de fundo da seção Hero ou o título principal `<h1>`.
- **Pontos de Otimização:**
  - O desktop utiliza `/images/hero-bg.png` (formato PNG tradicional não comprimido). A conversão para **WebP** ou **AVIF** reduz o tamanho do arquivo em até 70%, acelerando ainda mais a primeira pintura rica de conteúdo.
  - Recomenda-se adicionar o atributo `fetchpriority="high"` na tag `<img>` principal do Hero para que o navegador priorize seu download antes de outros scripts e estilos secundários.

### INP (Interaction to Next Paint) - Estimativa: < 30ms (Perfeito)
- O site não carrega frameworks pesados no cliente (sem React, Vue ou Angular client-side bundles desnecessários).
- Todo o JavaScript é nativo, assíncrono e leve (gerenciador de tema claro/escuro e toggle do menu mobile).
- Não há bloqueio da thread principal (Main Thread), garantindo resposta tátil imediata aos cliques.

### CLS (Cumulative Layout Shift) - Estimativa: < 0.02 (Estável)
- O layout utiliza classes de altura fixa ou min-height nos blocos de destaque.
- **Ponto de Ajuste:** O logo no Header (`https://res.cloudinary.com/linktreebr/image/upload/v1590748016/logo_fix_yqodsj.png`) não possui atributos explícitos `width` e `height` definidos na tag HTML. Definir `width="150" height="32"` impede qualquer microdeslocamento durante a renderização inicial.

---

## 3. Terceiros e Rastreamento (Google Tag / GA4)

- O script de medição (`gtag.js` com ID `G-SXJ6BKB1KM`) é carregado de forma assíncrona (`async`), sem travar o carregamento do conteúdo visual.
- Eventos de clique para conversão no WhatsApp (`wa.me`) e chamada telefônica (`tel:`) estão configurados com `transport_type: 'beacon'`, permitindo que o navegador despache o evento sem retardar o redirecionamento do usuário.
