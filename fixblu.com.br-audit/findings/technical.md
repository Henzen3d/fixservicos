# Relatório Especialista: SEO Técnico

**Alvo:** https://fixblu.com.br  
**Pontuação do Pilar:** 84 / 100 (Peso: 22%)

---

## 1. Rastreabilidade e Arquitetura de Crawling

### Status do robots.txt
- **Localização:** `https://fixblu.com.br/robots.txt`
- **Conteúdo atual analisado:**
  ```text
  User-agent: *
  Disallow: /cgi-bin/
  Disallow: /wp-content/plugins/
  Disallow: /wp-admin/
  Disallow: /readme.html
  Disallow: /refer/ 

  Allow: */avaliar/
  Allow: */

  Sitemap: https://fixblu.com.br/sitemap-index.xml
  Sitemap: https://fixblu.com.br/sitemap.xml
  ```

#### Problemas Detectados:
1. **Sintaxe Não Padrão:** As linhas `Allow: */avaliar/` e `Allow: */` utilizam um asterisco antes da barra. No padrão Robots Exclusion Protocol (RFC 9309), caminhos começam diretamente com `/`. Motores de busca mais rígidos podem desconsiderar essa linha ou tratá-la como erro sintático.
2. **Referência a Sitemap com Redirecionamento 301:** A linha `Sitemap: https://fixblu.com.br/sitemap.xml` aponta para uma URL que retorna código HTTP 301 para `/sitemap-index.xml`. Apenas sitemaps com status 200 OK devem constar no robots.txt.
3. **Resíduos de WordPress em Projeto Astro:** O site é atualmente estático gerado por Astro e hospedado no Cloudflare Pages. Caminhos como `/wp-content/plugins/`, `/wp-admin/` e `/readme.html` não existem mais na infraestrutura.
4. **Ausência de Diretivas para Bots de IA:** Robôs como `OAI-SearchBot` (busca do ChatGPT), `Claude-SearchBot` e `PerplexityBot` não possuem regras explícitas.

#### Recomendação de Correção para robots.txt:
```text
User-agent: *
Allow: /

# Sitemap Canônico
Sitemap: https://fixblu.com.br/sitemap-index.xml

# Permissão para Mecanismos de Busca Generativa (IA)
User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

---

## 2. Estrutura e Cobertura do Sitemap XML

- **Arquivo principal:** `https://fixblu.com.br/sitemap-index.xml` (Status 200 OK)
- **Sub-sitemap:** `https://fixblu.com.br/sitemap-0.xml` (Status 200 OK, 42 URLs cadastradas)
- **Status das URLs no Sitemap:** Todas as 42 URLs retornam HTTP 200 OK.
- **Detecção de URLs obsoletas:** A rota desativada `/encanador/instalacao-aquecedor-a-gas/` foi corretamente excluída do sitemap após receber 301 para `/encanador/`.
- **Ponto de Atenção:** A data `lastmod` está gerada de forma global e uniforme para todas as páginas (`2026-09-28T23:13:49.570Z`), gerada pelo helper `lastmod: new Date()` do Astro no momento do build. Para sites com atualizações frequentes, o ideal é alimentar a data com o commit do Git de cada página específica para evitar que o Google considere os sinais de data artificiais.

---

## 3. Redirecionamentos e Integridade HTTP

- **Servidor:** Cloudflare Pages
- **HTTP Version:** HTTP/1.1, HTTP/2 e HTTP/3 (QUIC) suportados nativamente (`alt-svc: h3=":443"`).
- **SSL/TLS:** Ativo, certificado válido, força HTTPS.
- **Arquivo `_redirects`:** Muito bem configurado, garantindo que antigas URLs de silos aninhados do WordPress (`/servicos/eletricista/*` -> `/eletricista/`) preservem link equity e não gerem erros 404 para o usuário ou robôs.

---

## 4. Cabeçalhos de Segurança HTTP

| Cabeçalho | Status Atual | Recomendação |
|---|---|---|
| `x-content-type-options` | `nosniff` (Presente) | Mantém proteção contra MIME sniffing |
| `referrer-policy` | `strict-origin-when-cross-origin` (Presente) | Protege privacidade do usuário |
| `Strict-Transport-Security` (HSTS) | Ausente | Ativar HSTS no Cloudflare com `max-age=31536000; includeSubDomains` |
| `Content-Security-Policy` (CSP) | Ausente | Implementar política básica de CSP |
| `Permissions-Policy` | Ausente | Desabilitar recursos não utilizados (ex: microfone, geolocalização ativa) |
