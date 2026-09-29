# Relatório Especialista: Qualidade de Conteúdo & E-E-A-T

**Alvo:** https://fixblu.com.br  
**Pontuação do Pilar:** 88 / 100 (Peso: 23%)

---

## 1. Avaliação de E-E-A-T (Experiência, Especialidade, Autoridade e Confiabilidade)

O Google valoriza profundamente critérios E-E-A-T em sites de serviços locais residenciais (onde o cliente coloca um profissional dentro de sua casa, exigindo máxima segurança e confiança).

### Pontos Fortes Notáveis do FixBlu:
1. **Credenciais Técnicas Reais:**
   - Técnico Osmar Gonçalves possui formação pelo **SENAI** (Técnico em Edificações).
   - Certificações de segurança de alto nível: **NR10** (Segurança em Instalações Elétricas), **NR18** (Construção Civil), **NR33** (Espaços Confinados) e **NR35** (Trabalho em Altura).
   - Mais de 20 anos de experiência real em manutenção residencial e predial em Blumenau.
2. **Prova Social Hiperlocal:**
   - Depoimentos reais citam bairros autênticos de Blumenau: *Victor Konder, Vila Nova, Centro e Itoupava Norte*.
   - Avaliação destacada de 5 estrelas no Google com link direto para consulta de idoneidade.
   - Mais de 15.000 residências atendidas.
3. **Transparência e Contato:**
   - Endereço físico completo informado com sala comercial (`Rua Germano Beduschi, 101 – Sala 102`).
   - Telefone com DDD local (47) 98804-1306.

### Oportunidades de Melhoria para Elevar a Autoridade:
- **Badge / Box de Autoridade do Profissional nas Páginas de Serviços:**
  Atualmente, os detalhes de formação no SENAI e certificações NR10 constam de forma resumida ou apenas no `llms.txt`. Inserir um card visual elegante:  
  *“Executado por Osmar Gonçalves — Técnico em Edificações SENAI | Certificado NR10 (Segurança Elétrica)”* com selo/foto transmite imensa tranquilidade tanto para o usuário quanto para os avaliadores de qualidade do Google.

---

## 2. Profundidade de Conteúdo e Risco de Thin Content

- **Volume de Palavras por Página:**
  - Categorias principais (`/eletricista/`, `/marido-de-aluguel/`, `/encanador/`): Médias entre 1.100 e 1.900 palavras. Excelente profundidade para SEO local.
  - Páginas de serviços específicos (`/eletricista/instalacao-de-chuveiro/`, etc.): Médias entre 400 e 600 palavras.
- **Estrutura Informativa das Páginas de Serviços:**
  - Explicação do problema (por que contratar um profissional).
  - Checklist "O que está incluso" (transparência de escopo).
  - Marcas atendidas (ex: Lorenzetti, Hydra, Fame, Corona, Sintex).
  - Como funciona o atendimento passo a passo (1, 2, 3).
  - Garantia de serviço (90 dias).

---

## 3. Duplicação de Marcação nos Templates (Mobile vs Desktop)

Nas páginas de serviço estruturadas com `ServicePage.astro`, há dois blocos de HTML:
- `<div class="sm:hidden space-y-5">` (conteúdo adaptado para celular)
- `<div class="hidden sm:block">` (conteúdo completo para desktop)

Embora faça sentido visualmente, isso faz com que o robô do Google leia duas listas de "O que está incluso" e textos similares na mesma página, inflando o DOM e criando micro-duplicações de conteúdo.

**Recomendação Técnica:** Reestruturar os componentes para renderizar o conteúdo uma única vez, utilizando utilitários do Tailwind (como `text-sm sm:text-base`, `grid-cols-1 sm:grid-cols-3`) para variar a apresentação visual sem clonar o texto no HTML.
