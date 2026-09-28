# 🎯 Plano Estratégico de Google Ads para os Próximos Meses
**Empresa:** Fix Serviços (FixBlu) — Blumenau/SC  
**Fonte de Dados:** Relatórios Oficiais de Desempenho do Google Ads (2015 a 2026)  
**Elaborado para:** Osmar Gonçalves e Vera  

---

## 1. Auditoria e Diagnóstico Crítico dos Dados Históricos

Ao analisar todos os relatórios da pasta `Google Ads`, identificamos conquistas importantes, mas também **grandes vazamentos de orçamento** que precisam ser corrigidos imediatamente para que cada real investido se transforme em clientes lucrativos:

### ⚠️ As 4 Falhas Críticas Encontradas nas Campanhas Anteriores

1.  **Dreno Financeiro na "Smart Campaign" de Fechadura Digital:**
    *   A campanha *“Fechadura Digital - AdWords Smart Campaign”* consumiu **R$ 1.923,62** (mais de 56% de todo o valor investido na história da conta!).
    *   Teve 5.746 cliques com CTR baixo (2,38%) e CPC de apenas R$ 0,33.
    *   *Por que foi um erro?* Campanhas "Smart" (Inteligentes) do Google distribuem anúncios em aplicativos de celular, joguinhos e sites de terceiros da Rede de Display. A imensa maioria dos cliques foi de pessoas comprando fechaduras online ou jogando no celular e clicando por engano, e **não** de pessoas em Blumenau procurando um técnico para furar a porta e instalar.
2.  **Cliques Desperdiçados em Buscas "Faça Você Mesmo" (DIY):**
    *   No `Relatório de termos de pesquisa.csv`, encontramos centenas de impressões e cliques pagos em termos como:
        *   `como instalar interruptor com tomada`
        *   `o que fazer quando disjuntor cai`
        *   `como trocar disjuntor de 40 amperes`
        *   `como saber se o disjuntor queimou sem multímetro`
        *   `tabela de preço do eletricista` / `quanto é a hora de um eletricista`
    *   O Google cobrou para mostrar o site para quem estava procurando **tutoriais no YouTube** ou para outros eletricistas pesquisando preços de concorrentes!
3.  **Cegueira de Rastreamento (0% de Conversões Registradas):**
    *   O relatório mostra `Taxa de conversão: 0,00%` e `Conversões: 0,00`.
    *   O Google Ads **não estava configurado** para registrar quando alguém clica no botão do WhatsApp ou no número de telefone.
    *   *Consequência gravíssima:* Sem o registro de conversão, o robô do Google não aprende quais palavras trazem clientes reais e continua gastando dinheiro nas palavras erradas.
4.  **Anúncios Rodando de Madrugada (Desalinhamento de Horários):**
    *   O relatório `Dia_e_hora(Hora).csv` registrou **mais de 36.000 impressões à meia-noite (00:00)** e outras dezenas de milhares entre 01:00 e 05:00 da manhã.
    *   A FixBlu atende em horário comercial (08:00 às 18:00). Anúncios rodando de madrugada gastam cota diária com buscas aleatórias antes mesmo do dia útil começar.

---

## 2. A Estratégia de Ouro: Como Reestruturar os Anúncios

Com a velocidade do novo site e a clareza dos serviços mais lucrativos (TV e Fechadura) e de alta rotação (R$ 150,00 para tomadas, disjuntores e chuveiro), dividiremos as campanhas em **3 frentes estratégicas** na **Rede de Pesquisa do Google** (nada de rede de display ou parceiros de pesquisa dispersos):

```
                                  ESTRUTURA DE CAMPANHAS GOOGLE ADS (FIXBLU)
                                                      │
         ┌────────────────────────────────────────────┼────────────────────────────────────────┐
         │                                            │                                        │
  CAMPANHA 1: ALTO TÍQUETE                  CAMPANHA 2: GIRO RÁPIDO                   CAMPANHA 3: OCEANO AZUL
  (TV & Fechadura Digital)                  (Pequenos Reparos R$ 150)                 (Cadeiras de Escritório)
  ─────────────────────────                 ─────────────────────────                 ────────────────────────
  • Foco: Lucro Alto e Margem               • Foco: Visita Mínima & Rota Rápida       • Foco: B2B & Home-Office
  • Tíquete Médio: R$ 200 - R$ 450          • Tíquete: R$ 150 + adicionais            • Tíquete: R$ 150 - R$ 350
  • Palavras: "Instalador Fechadura",       • Palavras: "Eletricista Blumenau",       • Palavras: "Conserto Cadeira
    "Instalação de TV Parede/Painel"          "Trocar Disjuntor", "Troca Tomada"        Escritório Blumenau", "Pistão"
```

---

## 3. Detalhamento das 3 Campanhas Recomendadas

### Campanha 1: Serviços Mais Lucrativos (Alto Tíquete)
*   **Objetivo:** Captar clientes com alto poder aquisitivo que acabaram de comprar uma TV nova ou uma fechadura digital e exigem um profissional de confiança.
*   **Grupo 1 — Fechadura Digital Blumenau:**
    *   *Palavras-chave (Correspondência de Frase e Exata):*
        *   `"instalação de fechadura digital"`
        *   `"instalador de fechadura digital blumenau"`
        *   `"instalar fechadura eletronica blumenau"`
        *   `"fechadura digital intelbras instalação"`
        *   `[instalação fechadura digital blumenau]`
    *   *Página de Destino (URL):* `https://fixblu.com.br/marido-de-aluguel/instalacao-de-fechadura-digital/`
    *   *Diferencial no Anúncio:* "Instalação Perfeita sem Danificar sua Porta • Técnico Formado SENAI com NR10 • Agende pelo WhatsApp".

*   **Grupo 2 — Instalação de TV e Suportes de Parede / Painel:**
    *   *Palavras-chave:*
        *   `"instalação de tv blumenau"`
        *   `"instalador de tv parede"`
        *   `"instalar suporte de tv blumenau"`
        *   `"instalação de tv em painel"`
        *   `[instalador de tv em blumenau]`
    *   *Página de Destino (URL):* `https://fixblu.com.br/marido-de-aluguel/instalacao-de-tv-em-blumenau/`
    *   *Diferencial no Anúncio:* "Sua TV Segura e Nivelada • Instalação em Alvenaria, Painel e Drywall • Cabos Ocultos e Acabamento Limpo".

---

### Campanha 2: Volume & Rota Express (Visita Mínima R$ 150,00)
*   **Objetivo:** Preencher a agenda do Osmar com serviços de 30 a 60 minutos onde o cliente tem urgência (disjuntor que desarma, tomada queimada, chuveiro frio, torneira vazando).
*   **Grupo 1 — Elétrica Rápida & Urgência:**
    *   *Palavras-chave:*
        *   `"eletricista blumenau"`
        *   `"eletricista residencial blumenau"`
        *   `"troca de disjuntor blumenau"`
        *   `"trocar tomada blumenau"`
        *   `"troca de chuveiro blumenau"`
        *   `"chuveiro queimado blumenau"`
    *   *Página de Destino:* Páginas específicas (`/eletricista/troca-de-disjuntor/`, `/eletricista/troca-de-tomada/`, `/eletricista/instalacao-de-chuveiro/`).
    *   *Estratégia Comercial da Vera:* Oferecer a revisão preventiva de outros pontos elétricos da casa na mesma visita de R$ 150,00.

*   **Grupo 2 — Encanamento & Reparos Rápidos:**
    *   *Palavras-chave:*
        *   `"encanador blumenau"`
        *   `"conserto descarga blumenau"`
        *   `"troca de sifão blumenau"`
        *   `"reparo valvula hydra blumenau"`
    *   *Página de Destino:* `/encanador/` e páginas específicas.

---

### Campanha 3: B2B / Home Office — Conserto de Cadeiras de Escritório
*   **Objetivo:** Explorar o enorme volume orgânico detectado (mais de 6.500 impressões) onde quase ninguém anuncia em Blumenau.
*   *Palavras-chave:*
    *   `"conserto de cadeira de escritório blumenau"`
    *   `"manutenção de cadeiras de escritório"`
    *   `"troca de pistão cadeira escritório"`
    *   `"troca de rodinhas cadeira escritório"`
*   *Página de Destino:* `https://fixblu.com.br/marido-de-aluguel/conserto-cadeira-giratoria-de-escritorio/`
*   *Vantagem:* A FixBlu pode atender tanto a pessoa física em casa quanto lotes de 5 a 20 cadeiras em empresas e escritórios de contabilidade/advocacia.

---

## 4. Lista Obrigatória de Palavras-Chave Negativas

Para nunca mais gastar centavos ou reais com curiosos, esta lista de termos negativos deve ser aplicada a **nível de conta**:

```
# Termos DIY / Tutoriais
como, como fazer, tutorial, passo a passo, video, youtube, esquema, faça você mesmo, aprenda, curso, apostila, grátis, pdf

# Termos de Outros Eletricistas / Empregos
vagas, emprego, salário, curso de eletricista, senai curso, tabela de preço, sindicato, quanto ganha

# Termos de Compra de Peças / Eletrônica
onde comprar, shopee, mercado livre, casas bahia, magazine luiza, reclame aqui, esquema eletrico, placa de tv, tela quebrada de tv, display queimado, conserto de tv (se for placa interna)

# Cidades Fora do Raio de Atendimento Sem Taxa
florianopolis, joinville, itajai, balneario camboriu, curitiba, sao paulo (a menos que o cliente pague deslocamento especial)
```

---

## 5. Configurações Técnicas Indispensáveis

1.  **Programação de Anúncios (Ad Scheduling):**
    *   Segunda a Sexta-feira: **07:30 às 18:30**
    *   Sábado: **08:00 às 13:00**
    *   Domingo e Madrugadas: **Pausado** (evita torrar orçamento fora do expediente da Vera e do Osmar).
2.  **Segmentação Geográfica Rigorosa:**
    *   Selecionar: *Cidade de Blumenau (incluindo todos os bairros)*.
    *   Opção de presença: Escolher *"Presença: pessoas que estão ou costumam estar no seu local"* (e NÃO "interesse", para não exibir para pessoas de outros estados).
3.  **Instalação da Tag de Conversão (GTM / GA4):**
    *   Criar um evento de conversão: `click_whatsapp_contato` e `click_telefone_chamada`.
    *   Assim, quando o visitante clicar no botão verde do WhatsApp no site novo, o Google Ads saberá que aquela busca gerou um lead real!
4.  **Extensões de Anúncio (Recursos Obrigatórios):**
    *   **Recurso de Chamada:** Telefone fixo / celular com botão direto "Ligar Agora" no smartphone.
    *   **Recursos de Frase de Destaque:** "10 Anos de Tradição", "Técnico Formado pelo SENAI", "Atendimento com Nota Fiscal", "Visita Rápida em Blumenau".
    *   **Recursos de Snippet Estruturado:** "Serviços: Fechaduras Digitais, TV na Parede, Disjuntores, Chuveiros, Descargas".
    *   **Recursos de Local:** Vincular a conta do Google Ads ao perfil da empresa no Google Meu Negócio.

---

## 6. Proposta de Orçamento e Retorno Esperado (Simulação 90 Dias)

| Métrica | Cenário Conservador | Cenário Moderado (Recomendado) |
| :--- | :---: | :---: |
| **Investimento Diário** | R$ 15,00 / dia | **R$ 25,00 / dia** |
| **Investimento Mensal (Seg-Sáb)** | ~ R$ 390,00 / mês | **~ R$ 650,00 / mês** |
| **Cliques Mensais Qualificados** | ~ 220 cliques | **~ 380 cliques** |
| **Contatos Estimados no WhatsApp (15% a 20%)** | 33 a 44 contatos | **57 a 76 contatos** |
| **Serviços Fechados (Conversão da Vera 50%)** | 16 a 22 serviços | **28 a 38 serviços** |
| **Receita Média Estimada (R$ 150 a R$ 300)** | R$ 3.200 a R$ 4.500 | **R$ 5.800 a R$ 8.500** |
| **ROI / Retorno sobre Investimento** | **8x a 11x o valor investido** | **9x a 13x o valor investido** |

> 📌 **Conclusão:** Apenas **2 ou 3 instalações de fechadura digital** ou **4 visitas rápidas de R$ 150** no mês já pagam com folga todo o investimento em anúncios, gerando lucro líquido e novos clientes para a carteira de longo prazo da FixBlu!
