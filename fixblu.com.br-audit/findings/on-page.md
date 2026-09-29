# Relatório Especialista: On-Page SEO

**Alvo:** https://fixblu.com.br  
**Pontuação do Pilar:** 81 / 100 (Peso: 20%)

---

## 1. Análise de Title Tags e Meta Descriptions

### Título da Página Inicial (Homepage)
- **Título Atual:** `Fix Serviços - Marido de Aluguel Blumenau` (41 caracteres)
- **Diagnóstico:** Título conciso, dentro dos limites do Google (máx ~60 caracteres), porém focado apenas em "Marido de Aluguel", subestimando a busca por "Eletricista" e "Encanador" que possuem alto volume e valor de ticket.
- **Sugestão Otimizada:**  
  `Eletricista, Encanador e Marido de Aluguel em Blumenau | Fix Serviços` (68 caracteres - altamente relevante para as 3 palavras-chave centrais de intenção local).

### Meta Description da Página Inicial
- **Descrição Atual:** `Eletricista e Marido de Aluguel Blumenau, pequenos reparos, instalações e manutenções. Serviços especializados e rápidos para Blumenau. 🔨` (138 caracteres)
- **Diagnóstico:** Excelente comprimento (ideal entre 130-155 caracteres), possui palavra-chave local e chamada à ação persuasiva.

### Amostragem de Páginas de Serviços

| URL | Title Tag | Meta Description | Avaliação |
|---|---|---|---|
| `/eletricista/` | `⚡ Eletricista Blumenau - Fix Serviços` (37 car.) | `Eletricista em Blumenau especializado em reparo elétrico...` (139 car.) | Excelente foco local e CTA |
| `/encanador/` | `💦Encanador Blumenau - Fix Serviços` (35 car.) | `Encanador para Blumenau residencial, comercial e predial...` (135 car.) | Claro e focado |
| `/marido-de-aluguel/` | `Marido de Aluguel Blumenau - Fix Serviços` (41 car.) | `⚡ Contrate nosso Marido de Aluguel e surpreenda-se...` (141 car.) | Ótimo apelo transacional |
| `/eletricista/instalacao-de-chuveiro/` | `Instalação de Chuveiro Elétrico em Blumenau \| Fix Serviços` (59 car.) | `Instalação de chuveiro elétrico profissional em Blumenau...` (148 car.) | Perfeito comprimento e intenção |
| `/politica-de-privacidade/` | `🔒 Política de privacidade - Fix Serviços` (41 car.) | `🔒 Protegemos seus dados e cuidamos dos serviços para você!` (59 car.) | Muito curta (oportunidade de expansão) |

---

## 2. Estrutura de Cabeçalhos (Headings Hierarchy)

### ⚠️ Problema Crítico na Homepage: Duas tags `<h1>` simultâneas no DOM
No componente `src/components/Hero.astro`, existem dois blocos de código separados para Mobile e Desktop:
1. Bloco Desktop (`hidden sm:flex`):
   ```html
   <h1 class="text-6xl font-extrabold text-white ...">
     Marido de Aluguel <br> em Blumenau
   </h1>
   ```
2. Bloco Mobile (`sm:hidden`):
   ```html
   <h1 class="text-[42px] font-extrabold text-text-main ...">
     Marido de <br>Aluguel em <br><span>Blumenau</span>
   </h1>
   ```

**Impacto:** Mesmo que o CSS oculte visualmente um dos elementos, os rastreadores web (Googlebot, Bingbot, crawlers de IA) processam o documento HTML bruto e identificam duas tags `<h1>` principais concorrentes.

**Correção Recomendada:** Unificar em uma única tag `<h1>` com classes responsivas:
```html
<h1 class="text-[42px] sm:text-6xl font-extrabold tracking-tight font-display leading-[1.1] sm:leading-tight">
  Marido de Aluguel em <span class="text-brand-green">Blumenau</span>
</h1>
```

### Hierarquia de Subtítulos nas Páginas Internas
- Páginas de serviços adotam corretamente `<h1>{h1} em Blumenau</h1>`.
- Atenção para seções internas onde um `<h2>` é seguido imediatamente por `<h4>` (por exemplo, na grade de cards de serviços onde o título do card é `<h4>`). Recomenda-se utilizar `<h3>` para respeitar a árvore de acessibilidade e semântica.

---

## 3. URLs e Links Canônicos

- **Presença de Canonical:** 100% das páginas analisadas contêm a tag `<link rel="canonical" href="...">` apontando para sua própria URL canônica segura (HTTPS) com barra final (`/`).
- **Arquitetura de Silo:** A organização das pastas (`/eletricista/servico-x/`, `/encanador/servico-y/`) ajuda os motores de busca a compreender a relação temática entre serviços e categorias mães.
