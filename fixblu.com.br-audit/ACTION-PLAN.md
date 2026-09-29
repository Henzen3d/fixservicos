# Plano de Ação Priorizado de SEO — Fix Serviços (fixblu.com.br)

Este plano de ação organiza todas as recomendações identificadas na auditoria completa de SEO, ordenadas por criticidade, impacto esperado e esforço de implementação.

---

## 🔴 Prioridade Crítica (Fazer Imediatamente)

### 1. Eliminar a Duplicação da Tag `<h1>` na Página Inicial
- **Arquivo a modificar:** `src/components/Hero.astro`
- **Problema:** Existem duas tags `<h1>` renderizadas no DOM simultaneamente (uma no bloco desktop e outra no bloco mobile).
- **Ação:** Unificar em uma única tag `<h1>` utilizando classes responsivas do Tailwind:
  ```html
  <h1 class="text-[42px] sm:text-6xl font-extrabold tracking-tight font-display leading-[1.1] sm:leading-tight">
    Marido de Aluguel em <span class="text-brand-green">Blumenau</span>
  </h1>
  ```
- **Impacto:** Alto (elimina canibalização semântica e perda de relevância no Googlebot).
- **Esforço:** 20 minutos.

### 2. Corrigir Sintaxe e Diretivas no `robots.txt`
- **Arquivo a modificar:** `robots.txt`
- **Problemas:** Presença de sintaxe não padronizada (`Allow: */`), regras legadas de WordPress (`/wp-admin/`, `/wp-content/`) e referência a `sitemap.xml` que redireciona via 301.
- **Ação:** Atualizar o arquivo para:
  ```text
  User-agent: *
  Allow: /

  Sitemap: https://fixblu.com.br/sitemap-index.xml

  # Permissão para rastreadores de inteligência artificial
  User-agent: OAI-SearchBot
  Allow: /

  User-agent: Claude-SearchBot
  Allow: /

  User-agent: PerplexityBot
  Allow: /
  ```
- **Impacto:** Alto (garante indexação limpa e inclusão no ChatGPT Search).
- **Esforço:** 10 minutos.

---

## 🟠 Prioridade Alta (Implementar na Primeira Semana)

### 3. Implementar Schema `BreadcrumbList` em Todas as Páginas de Serviços
- **Arquivo a modificar:** `src/layouts/ServicePage.astro`
- **Problema:** A navegação em trilha (breadcrumb) já existe visualmente, mas o Google não exibe Rich Snippet por falta de marcação estruturada.
- **Ação:** Adicionar bloco JSON-LD com `BreadcrumbList` refletindo a hierarquia `Início > [Categoria] > [Serviço]`.
- **Impacto:** Alto (aumenta CTR na página de resultados do Google).
- **Esforço:** 30 minutos.

### 4. Adicionar Schema `AggregateRating` e `Review` na Página Inicial
- **Arquivo a modificar:** `src/components/BaseHead.astro` ou na prop de schema da Home.
- **Problema:** O site tem 5 estrelas e 4 depoimentos reais exibidos, mas não os declara no Schema.org.
- **Ação:** Declarar as avaliações no JSON-LD do tipo `LocalBusiness`.
- **Impacto:** Alto (habilita estrelas de avaliação nos resultados do Google).
- **Esforço:** 30 minutos.

### 5. Atualizar Link com Redirecionamento 301 no `llms.txt`
- **Arquivo a modificar:** `llms.txt`
- **Problema:** Cita `/encanador/instalacao-aquecedor-a-gas/` que redireciona para `/encanador/`.
- **Ação:** Corrigir para apontar diretamente para a URL final 200 OK.
- **Impacto:** Médio (integridade dos dados de IA).
- **Esforço:** 5 minutos.

---

## 🟡 Prioridade Média (Implementar em até 30 Dias)

### 6. Otimizar Imagem Principal do Hero para Formato WebP/AVIF
- **Arquivo a modificar:** `src/components/Hero.astro` e pasta `public/images/`
- **Ação:** Converter `hero-bg.png` para WebP/AVIF e adicionar atributo `fetchpriority="high"`.
- **Impacto:** Médio (melhora métrica LCP do Core Web Vitals).
- **Esforço:** 20 minutos.

### 7. Declarar Dimensões Explícitas na Imagem do Logo
- **Arquivo a modificar:** `src/components/Header.astro`
- **Ação:** Adicionar `width="150" height="32"` na tag `<img>` do logo.
- **Impacto:** Médio (elimina potencial Cumulative Layout Shift - CLS).
- **Esforço:** 5 minutos.

### 8. Enriquecer o Title da Página Inicial com Serviços-Chave
- **Arquivo a modificar:** `src/pages/index.astro`
- **Sugestão:**  
  De: `Fix Serviços - Marido de Aluguel Blumenau`  
  Para: `Eletricista, Encanador e Marido de Aluguel em Blumenau | Fix Serviços`
- **Impacto:** Médio/Alto (captura tráfego para termos com alto volume de busca).
- **Esforço:** 5 minutos.

---

## 🟢 Prioridade Baixa / Melhorias Contínuas (Backlog)

### 9. Mini-Box de Autoridade do Técnico Osmar nas Páginas de Serviços
- Inserir um card compacto destacando formação SENAI e NR10 em cada serviço para reforçar autoridade e confiança.

### 10. Normalizar Hierarquia de Cabeçalhos (H2 -> H3 ao invés de H2 -> H4)
- Na seção "O que fazemos" da home, ajustar tags de títulos para manter a ordem estrita.

### 11. Páginas de Serviços com Foco em Bairros Específicos
- Criar páginas ou menções direcionadas para grandes bairros de Blumenau (ex: Garcia, Itoupava Central, Velha).
