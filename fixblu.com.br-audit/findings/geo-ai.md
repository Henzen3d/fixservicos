# Relatório Especialista: AI Search Readiness (GEO & Agentic SEO)

**Alvo:** https://fixblu.com.br  
**Pontuação do Pilar:** 86 / 100 (Peso: 10%)

---

## 1. Contexto: O que é GEO (Generative Engine Optimization)?

Com a evolução dos mecanismos de pesquisa que utilizam inteligência artificial (Google AI Overviews, ChatGPT Search, Perplexity e Microsoft Copilot), a forma como a FixBlu é citada depende de dados estruturados em texto plano, clareza factual e ausência de bloqueios em robôs de IA.

---

## 2. Destaque Positivo: Implementação do `llms.txt`

A FixBlu já possui um arquivo [`https://fixblu.com.br/llms.txt`](https://fixblu.com.br/llms.txt) ativo e bem estruturado na raiz do domínio. Isso coloca o site à frente da esmagadora maioria dos concorrentes de prestação de serviços no Brasil.

### Por que o `llms.txt` é um trunfo:
- Permite que robôs e agentes inteligentes (LLMs) leiam a empresa inteira em poucos milissegundos sem precisar parsear layouts complexos.
- Especifica explicitamente:
  - Nome do técnico responsável (Osmar Gonçalves).
  - Formação SENAI e 4 Normas Regulamentadoras (NR10, NR18, NR33, NR35).
  - Telefone e WhatsApp oficiais.
  - Lista completa de serviços disponíveis com URLs canônicas.

### Correção Necessária no `llms.txt`:
No bloco de encanamento (linha 45), o arquivo cita:
`- [Instalação Aquecedor a Gás](https://fixblu.com.br/encanador/instalacao-aquecedor-a-gas/): Instalação de aquecedores a gás de passagem.`
Essa URL atualmente retorna um redirecionamento 301 para `/encanador/`.  
**Ação:** Atualizar para direcionar para uma página 200 OK ou apontar para a categoria principal `/encanador/` para manter a integridade dos links fornecidos aos modelos de linguagem.

---

## 3. Acesso aos Rastreadores de IA no `robots.txt`

Para que o site apareça com frequência nos resumos do ChatGPT Search e Claude Search, recomenda-se adicionar permissões explícitas no `robots.txt`:

```text
User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

*(Nota: `OAI-SearchBot` é o robô responsável pelas citações em tempo real do ChatGPT Search, diferente do `GPTBot` que é utilizado para treinamento de modelos).*
