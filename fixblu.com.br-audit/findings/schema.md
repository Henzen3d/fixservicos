# Relatório Especialista: Schema & Dados Estruturados

**Alvo:** https://fixblu.com.br  
**Pontuação do Pilar:** 78 / 100 (Peso: 10%)

---

## 1. Schemas Atualmente Implementados

### Página Inicial (`/`)
Implementa `LocalBusiness` via JSON-LD no componente `src/components/BaseHead.astro`:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Fix Serviços",
  "description": "Eletricista e Marido de Aluguel Blumenau...",
  "url": "https://fixblu.com.br",
  "telephone": "+55-47-98804-1306",
  "image": "https://fixblu.com.br/og-fixblu.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Germano Beduschi, 101 – Sala 102",
    "addressLocality": "Blumenau",
    "addressRegion": "SC",
    "postalCode": "89066-020",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-26.9194",
    "longitude": "-49.0661"
  },
  "areaServed": {
    "@type": "City",
    "name": "Blumenau"
  },
  "priceRange": "$$",
  "openingHoursSpecification": [...]
}
```

### Páginas de Serviços
Implementam `@type: "Service"` com referência ao prestador (`provider: LocalBusiness`).

---

## 2. Lacunas e Oportunidades Críticas

### 1. Ausência de `BreadcrumbList` Schema
O site possui navegação em migalhas de pão (breadcrumbs) implementada visualmente em todas as páginas de serviços:
`Home / Eletricista / Instalação de Chuveiro`

Porém, falta a marcação correspondente em JSON-LD. A presença do `BreadcrumbList` é o que permite ao Google exibir a hierarquia de URLs no lugar de links crus nos resultados de pesquisa.

**Código a Implementar:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://fixblu.com.br/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Eletricista",
      "item": "https://fixblu.com.br/eletricista/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Instalação de Chuveiro",
      "item": "https://fixblu.com.br/eletricista/instalacao-de-chuveiro/"
    }
  ]
}
```

### 2. Ausência de `AggregateRating` e `Review`
O site exibe publicamente na Home:  
*“Avaliação do Google: 5/5 — Média 5 estrelas no Google”* acompanhado de 4 depoimentos nominais de clientes.

No entanto, o JSON-LD **não declara** essas avaliações estruturadas. Incluir o objeto `aggregateRating` qualifica a empresa para a exibição de estrelas douradas de avaliação nos snippets de busca.

**Exemplo Recomendado para a Home:**
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": "48",
  "bestRating": "5",
  "worstRating": "1"
},
"review": [
  {
    "@type": "Review",
    "author": { "@type": "Person", "name": "Ricardo Silva" },
    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    "reviewBody": "O serviço de eletricista foi excelente. Chegou no horário, resolveu o curto-circuito rápido e deixou tudo limpo."
  }
]
```

### 3. Oportunidade de FAQPage Schema
Páginas como `/contato/` e páginas de serviços que respondem dúvidas comuns podem incorporar o schema `FAQPage`, ampliando o espaço ocupado na SERP com perguntas e respostas sanfonadas.
