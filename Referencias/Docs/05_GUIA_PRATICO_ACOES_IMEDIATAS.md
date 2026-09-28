# 🚀 Guia Prático: Ações Imediatas (Hoje / Amanhã Cedo)
**Fix Serviços (FixBlu)** — Blumenau/SC  
**Meta:** 
1. Estancar imediatamente o desperdício de dinheiro com cliques "Faça Você Mesmo" (DIY) e curiosos no Google Ads.
2. Ativar e validar o rastreamento automático de conversões (WhatsApp e Telefone).

---

## PARTE 1: Bloquear Cliques Desperdiçados no Google Ads (Agora)

Abaixo está a **Lista Mestra de Palavras-Chave Negativas** em *Correspondência Ampla Negativa*. Quando você adiciona essas palavras, se alguém pesquisar qualquer frase que contenha uma delas (ex: *"como trocar disjuntor"*, *"tabela de preço eletricista"* ou *"onde comprar fechadura"*), o seu anúncio **NÃO** será exibido, economizando seu dinheiro.

### 📋 Lista Pronta para Copiar e Colar:

```text
como
como fazer
como trocar
como ligar
como instalar
tutorial
tutoriais
passo a passo
video
youtube
esquema
diagrama
sem multimetro
o que fazer
porque
por que
defeito
estragou
consertar sozinho
fazer sozinho
faça você mesmo
diy
dicas
dica
curso
cursos
senai
apostila
pdf
gratis
gratuito
aula
aulas
aprenda
aprender
vaga
vagas
emprego
salario
quanto ganha
trabalhe conosco
tabela de preco
tabela de precos
quanto custa a hora
quanto cobrar
valor da hora
sindicato
shopee
mercado livre
loja
comprar
onde comprar
preco de
magazine luiza
casas bahia
reclame aqui
placa
display
tela quebrada
conserto de tv
conserto de placa
ar condicionado
split
refrigeracao
geladeira
maquina de lavar
lavadora
microondas
florianopolis
joinville
itajai
curitiba
navegantes
balneario camboriu
```

---

### 🖱️ Passo a Passo: Onde colar no Google Ads (Leva 2 minutos)

1.  Acesse sua conta no [Google Ads](https://ads.google.com).
2.  No menu superior ou lateral esquerdo, clique em **Campanhas** (ou acesse a campanha ativa `"Pesquisa - Serviços Elétricos - Blumenau"`).
3.  No submenu interno, vá em **Palavras-chave** ➔ **Palavras-chave negativas** (ícone de sinal de menos `-`).
4.  Clique no botão azul com sinal de mais (**`+`**).
5.  Selecione a opção:
    *   **"Adicionar palavras-chave negativas ou criar nova lista"**.
    *   Escolha aplicar à **Campanha** (ou crie uma **Lista de Palavras Negativas a Nível de Conta**).
6.  **Cole o bloco de texto acima** na caixa em branco.
7.  Clique em **Salvar**.

> ✅ **Pronto!** A partir deste segundo, você não gasta mais 1 centavo com curiosos procurando manuais ou tutoriais.

---

### ⏱️ Ajuste Adicional de Emergência: Bloquear Cliques de Madrugada

Para evitar que seu saldo acabe antes do horário comercial começar:

1.  No Google Ads, entre na campanha `"Pesquisa - Serviços Elétricos - Blumenau"`.
2.  No menu lateral da campanha, clique em **Programação de anúncios** (ou *Ad schedule*).
3.  Clique no ícone do lápis para editar.
4.  Defina o horário de exibição:
    *   **Segunda a Sexta:** das **07:30 às 18:30**
    *   **Sábado:** das **08:00 às 13:00**
    *   **Domingo:** Nenhum horário adicionado (desativado).
5.  Clique em **Salvar**.

---

## PARTE 2: Rastreamento de Conversões (WhatsApp e Telefone)

### 1. O que nós já implementamos no código do site hoje:
Atualizamos o arquivo [src/components/TrackingScripts.astro](file:///j:/Arquivos%20Osmar/Reforma%20Divi%20FixBlu/src/components/TrackingScripts.astro) com um ouvinte inteligente global de cliques.

Agora, **sempre que qualquer visitante clicar em:**
*   Botão flutuante do WhatsApp (no canto inferior direito);
*   Botões "Solicitar Orçamento" ou "Chamar no WhatsApp" das páginas;
*   Qualquer link telefônico direto (`tel:...`);

O site dispara automaticamente para o **Google Analytics 4 (GA4)** os seguintes eventos oficiais:
*   `generate_lead` (Evento padrão de Geração de Contato do Google)
*   `whatsapp_click` (Evento personalizado de clique no WhatsApp)

---

### 2. Onde marcar como conversão no Google Analytics 4 (GA4)

Para que o GA4 contabilize esses cliques como **metas concluídas**:

1.  Acesse o [Google Analytics](https://analytics.google.com) na propriedade **FixBlu** (`G-SXJ6BKB1KM`).
2.  Clique na engrenagem no canto inferior esquerdo (**Administrador**).
3.  Na coluna do meio, clique em **Eventos** (ou *Exibição de dados ➔ Eventos*).
4.  Localize os eventos `generate_lead` e `whatsapp_click` na lista.
5.  Ative a chavinha azul: **"Marcar como conversão"** (no GA4 mais recente chama-se *"Marcar como evento principal"*).
    *(Nota: Se o site foi publicado hoje e ainda não recebeu cliques, você pode clicar no botão "Criar evento" ou simplesmente aguardar você mesmo clicar no botão de WhatsApp para o evento aparecer na lista em tempo real).*

---

### 3. Como importar essa conversão para o Google Ads (Para a IA do Google aprender)

Depois de marcar a conversão no GA4:

1.  No painel do Google Ads, vá em **Metas** ➔ **Conversões** ➔ **Resumo**.
2.  Clique no botão azul **+ Nova ação de conversão**.
3.  Selecione a 4ª opção: **Importar** (Importar do Google Analytics 4).
4.  Escolha **Propriedade da Web** e clique em **Continuar**.
5.  Selecione a conversão `generate_lead` / `whatsapp_click` e clique em **Importar e continuar**.

---

### 4. (Opcional) Rastreamento Direto com a Tag do Google Ads (`AW-XXXXXX`)

Se você preferir que o Google Ads receba o disparo direto sem depender do GA4:
1.  Basta nos informar o seu código de conversão do Google Ads (que começa com `AW-`, encontrado em *Metas ➔ Conversões ➔ Detalhes da Tag*).
2.  Nós colocamos esse código no `TrackingScripts.astro` em 1 minuto!

---

> 🎯 **Resultado Imediato:**
> *   O seu dinheiro para de vazar para tutoriais e pesquisas inúteis;
> *   Os anúncios só gastam dinheiro nos horários que a Vera e o Osmar podem atender;
> *   O Google Ads passa a identificar exatamente quais palavras trazem mensagens no WhatsApp!
