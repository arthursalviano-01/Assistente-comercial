import { useState, useRef, useEffect } from "react";

// ============================================================
// BASE DE CONHECIMENTO DELRIO — MANUAL COMPLETO EMBUTIDO
// ============================================================
const KB = {

  "abertura": {
    keywords: ["abertura", "abrir venda", "recepcionar", "receber cliente", "boas vindas", "primeiro contato", "linha de abertura", "script abertura"],
    title: "🌟 Passo 1 — Abertura da Venda",
    content: `**PASSO 1: ABERTURA DA VENDA**

O objetivo é criar conexão genuína ANTES de falar em venda. Sem isso, a cliente não confia e a venda tende a falhar.

**Use "Linhas de Abertura"** — observações alheias à venda:
• Elogio a um acessório
• Comentário sobre o clima ou cidade
• ❌ Evite: política, futebol, credo

**Posicionamento físico:**
• Vá até o cliente — não atenda na porta
• Posicione-se lateralmente (você não é barreira)
• Contato visual desde a entrada
• Nunca toque nas pessoas sem convite

---

**SCRIPTS PRONTOS:**

📍 **Cliente novo:**
"Olá! Bom dia/tarde, seja bem-vinda! Me chamo _______, que bom receber sua visita hoje! Como você se chama?"

🔁 **Cliente recorrente:**
"Olá! Bom dia/tarde, seja bem-vinda, sentimos sua falta, que bom te receber hoje! Aceita um café ou água?"

💬 **Digital (WhatsApp):**
"Olá! Bom dia/tarde, [nome], que bom receber seu contato hoje! 😊"

---
⚠️ **NUNCA diga:** "Posso ajudar?" ou "Quer uma ajuda?" — transmite passividade!`
  },

  "sondagem": {
    keywords: ["sondagem", "perguntas abertas", "persona", "perfil cliente", "consumidora", "revendedora", "empreendedora", "renda extra", "passo 2", "descobrir cliente", "mini tour"],
    title: "🔍 Passo 2 — Sondagem",
    content: `**PASSO 2: SONDAGEM**
#conhecer #entender #mapear #potencialidade

Use sempre **perguntas abertas** (impossível responder só sim/não).
Pergunta-chave: **"Como posso te ajudar hoje?"**

---

**4 PERFIS DE CLIENTE:**

👤 **Consumidora Final**
Quer consumir, não tem consultora ou veio por curiosidade.

💰 **Busca Renda Extra**
Trabalha em outro emprego, quer complementar a renda. Vende online ou no trabalho.

🏪 **Revendedora**
Já vende outras marcas, porta a porta, tem experiência.

🚀 **Empreendedora**
Tem loja própria, rede de consultoras, atua digital + presencial. Maior ticket médio.

---

**SCRIPTS:**

📍 **Novo cliente:**
1. "O que a traz hoje em nossa loja?"
2. Convide para mini tour pela loja
3. **Prova social:** "A DelRio é uma marca brasileira com 60 anos de estrada na moda íntima, nascida no Ceará. Fabricamos para Calvin Klein, Adidas, Aramis — somos o maior fabricante de moda íntima do Brasil. Conhecia nossa história?"

🔁 **Cliente recorrente:**
1. "O que a traz em nossa loja hoje?"
2. "Quais itens precisam de reposição?"
3. "Houve procura por produto que você não tinha?"
4. "Como foi seu último mês de venda?"
5. "Qual margem de lucro conseguiu?"

⚠️ **SONDE O QUE IMPEDE SUA CLIENTE RECORRENTE DE DECOLAR NAS VENDAS!**`
  },

  "solucao": {
    keywords: ["solucionar", "solução", "passo 3", "modelo de negócio", "apresentar produto", "empreender", "kit inicial", "mix", "best seller"],
    title: "💡 Passo 3 — Solucionar a Vida do Cliente",
    content: `**PASSO 3: SOLUCIONAR A VIDA DO CLIENTE**
#Vender #demonstrar #empreender

**Lembre-se:** Não vendemos moda íntima — **vendemos um modelo de negócio** que transforma a vida de mulheres!

---

**ARGUMENTOS FORTES DELRIO:**
✅ Maior fabricante de moda íntima do Brasil
✅ Fabricamos para Calvin Klein, Adidas, Aramis
✅ 60 anos de história, matéria-prima própria
✅ Consultoras lucram até **80% de margem** (vs 30% em cosméticos)
✅ Tecnologias como seamless, tecidos altamente tecnológicos

---

**SCRIPTS:**

📍 **Nova cliente:**
1. "Quais produtos e tamanhos você gostaria de conhecer?"
2. "Com apenas **R$ 1.000,00** você abre seu cadastro e começa a lucrar!"
3. "80% das consultoras começaram pelo consumo próprio — se encantaram e melhoraram a renda!"
4. "Posso criar um kit inicial ideal para você começar? Se precisar, trocamos até 30% dos produtos."

🔁 **Cliente recorrente:**
1. "Vamos repor seu estoque dos mais vendidos do mês anterior?"
2. "Próximo mês temos [data comemorativa] — se prepare para arrebentar de vender!"
3. "Qual ferramenta tem usado mais? WhatsApp, Instagram, catálogo digital?"

---
💡 **Dica:** Garanta que o kit tenha best-sellers dos 3 gêneros + 1 produto de alta margem!`
  },

  "objecoes": {
    keywords: ["objeção", "objeções", "não tenho dinheiro", "medo de vender", "outra marca", "passo 4", "não quero", "caro", "estoque parado", "dificuldade"],
    title: "🛡️ Passo 4 — Lidar com Objeções",
    content: `**PASSO 4: LIDAR COM OBJEÇÕES**
#Empatia #Confiança #Argumentação

Objeção ≠ "Não definitivo". É uma oportunidade de esclarecimento!

**Método:** Ouça → Empatia → Argumento → Solução → Confirme

---

**SCRIPTS PRONTOS:**

💬 **"Não tenho dinheiro para investir."**
"Entendo! Muitas consultoras começaram com pouco e foram crescendo com os lucros. Que tal montarmos um kit dentro do valor que você se sente confortável?"

💬 **"Tenho medo de não conseguir vender."**
"Esse medo é muito comum no início! Muitas começaram vendendo só para amigas e família, e construíram uma base sólida. Vamos montar um mix fácil de vender e muito procurado."

💬 **"Já trabalho com outra marca."**
"Ótimo, você já conhece o mercado! A DelRio pode diversificar seu portfólio — nossa margem de 80% está muito acima da média. Muitas revendedoras percebem excelente aceitação!"

💬 **"Tive dificuldade em vender o mês passado."**
"Entendo, [nome]. Vamos rever o mix de produtos para ajustar ao seu público. Posso te ajudar com estratégias no WhatsApp e Instagram também!"

💬 **"Os preços estão altos."**
"Nossos produtos têm excelente custo-benefício pela qualidade e alto valor percebido. Vamos focar nos itens com maior margem e melhor aceitação no mercado?"

💬 **"Ainda tenho estoque parado."**
"Isso acontece! Que tal planejarmos ações promocionais ou kits para girar esse estoque? Posso sugerir combinações para liquidar e abrir espaço para novidades."

---
⚠️ **Nunca contradiga diretamente a cliente! Conduza sempre de forma positiva.**`
  },

  "fechamento": {
    keywords: ["fechamento", "fechar venda", "passo 5", "decisão", "confirmar", "cadastro", "registrar", "celebrar"],
    title: "🎯 Passo 5 — Fechamento da Venda",
    content: `**PASSO 5: FECHAMENTO DA VENDA**
#Decisão #Confirmação #Celebração

O fechamento deve ser **natural** — consequência de um bom atendimento, nunca pressão!

---

**4 PASSOS DO FECHAMENTO:**

1️⃣ **Resumo dos Benefícios**
Reforce os pontos que mais chamaram atenção da cliente.

2️⃣ **Confirmação**
"Ficou alguma dúvida? Está confortável com sua escolha?"

3️⃣ **Convite à Ação**
• "Posso registrar seu cadastro agora?"
• "Você prefere o kit inicial ou selecionar os produtos você mesma?"
• "Vamos fechar com PIX para garantir os 10% de desconto?"

4️⃣ **Celebração**
Demonstre entusiasmo genuíno pela decisão dela!
"Tenho certeza que será um sucesso! Vamos juntas construir algo incrível! 🌟"

---

**PROCESSO NA LOJA:**
• Acompanhe a cliente até o caixa
• Enquanto o caixa processa, reforce a carreira comercial
• Após pagamento, ofereça-se para carregar a sacola
• Acompanhe até a porta
• Faça "Confirmações e Convites" na saída

---
⚠️ Mostre o produto com as **duas mãos** — passa valor e cuidado!
⚠️ Incentive a cliente a **tocar e testar** — aumenta o desejo de posse!`
  },

  "posvenda": {
    keywords: ["pós venda", "pós-venda", "fidelização", "acompanhamento", "passo 6", "follow up", "mensagem agradecimento", "retenção"],
    title: "💌 Passo 6 — Pós-Venda",
    content: `**PASSO 6: PÓS-VENDA**
#Fidelização #Acompanhamento #Relacionamento

O atendimento não termina com a venda — é aí que começa a relação duradoura!

---

**4 PASSOS DO PÓS-VENDA:**

1️⃣ **Agradeça** — mensagem personalizada no mesmo dia
2️⃣ **Acompanhe** — contato após alguns dias para saber se está tudo certo
3️⃣ **Seja Proativa** — ofereça suporte, novidades e promoções
4️⃣ **Engaje** — convide para eventos, grupos, treinamentos

---

**SCRIPTS:**

📍 **Nova cliente:**
• "Olá! Estou entrando em contato para saber como está indo sua experiência com a DelRio. Precisa de alguma ajuda? Estou aqui para te apoiar!"
• "Que bom falar! Vi que você começou com o kit inicial. Como estão as vendas? Posso te ajudar com alguma estratégia?"

🔁 **Cliente recorrente:**
• "Olá! Como foram as vendas do último mix que montamos? Quer ajustar algo para o próximo mês?"
• "Queria te parabenizar pelo desempenho incrível! Pensou em explorar mais vendas online? Posso ajudar!"
• "O [data comemorativa] está chegando. Vamos montar um mix estratégico para aumentar suas vendas?"

---
💡 **Dica:** Utilize os primeiros 15 min do dia para pós-venda — mensagem de agradecimento e acompanhamento das consultoras!`
  },

  "kpis": {
    keywords: ["kpi", "indicadores", "métricas", "faturamento", "tmc", "tma", "pa", "ticket médio", "cadastros", "ativos", "inativos", "reativados", "conversão", "positivação", "evolução"],
    title: "📊 KPIs — Indicadores de Performance",
    content: `**KPIs DELRIO — INDICADORES QUE IMPORTAM**

**1. FATURAMENTO**
Valor total das vendas no período.
💡 Dica: Promoções em produtos de alto valor + acompanhamento diário para ajustes rápidos.

**2. EVOLUÇÃO FINANCEIRA**
Crescimento vs período anterior.
💡 Dica: Analise sazonalidades e planeje ações nos meses fracos.

**3. EVOLUÇÃO FÍSICA**
Quantidade de itens vendidos vs período anterior.
💡 Dica: Combos promocionais incentivam volume por cliente.

**4. TMC — Ticket Médio por Cliente**
Valor médio gasto por cada cliente.
💡 Dica: Descontos progressivos para compras acima de determinado valor.

**5. TMA — Ticket Médio por Atendimento**
Faturamento médio por atendimento.
💡 Dica: Estimule a equipe a oferecer produtos de maior valor em cada atendimento.

**6. PA — Peças por Atendimento**
Quantidade média de itens por atendimento.
💡 Dica: Treine para sugerir itens complementares (cross-sell).

**7. REATIVADOS**
Clientes inativos que voltaram a comprar.
💡 Dica: Promoções personalizadas com descontos exclusivos para inativos.

**8. ATIVOS**
Clientes com pelo menos uma compra no período.
💡 Dica: Contato regular com novidades e programas de fidelidade.

**9. CADASTROS**
Novos clientes registrados.
💡 Dica: Benefícios imediatos no cadastro — desconto na 1ª compra ou brindes.

**10. ITENS**
Meta em peças físicas.
💡 Dica: Campanhas internas com prêmios por volume.

**11. CONVERSÃO DE CARTEIRA**
% de clientes da carteira que compraram.
💡 Dica: Identifique quem não comprou e envie ofertas personalizadas.

**12. POSITIVAÇÃO DE BASE**
% de clientes ativos que compraram (Compraram ÷ Ativos).
💡 Dica: Relacionamento constante por WhatsApp e ligações!`
  },

  "carteira": {
    keywords: ["carteira", "gestão de carteira", "inativo", "ativo", "extintos", "redistribuição", "120 dias", "90 dias", "cliente inativo", "reativação"],
    title: "👥 Gestão de Carteira de Clientes",
    content: `**GESTÃO DE CARTEIRA DELRIO**

**CLASSIFICAÇÃO DE CLIENTES:**
✅ **Ativo:** até 90 dias sem compra
⚠️ **Inativo:** a partir do 91º dia (pode receber contato digital)
🔴 **Extintos:** acima de 10 meses inativos (removidos da carteira, acessados pelo CRM)

---

**REGRAS COMPULSÓRIAS:**

📌 **Acima de 120 dias sem compra:** Redistribuição automática e uniforme entre a equipe

📌 **Férias/ausência até 30 dias:** Carteira dividida igualmente entre a equipe

📌 **Licença médica/substituição:** Carteira integral para novo vendedor

📌 **Novos cadastros:** Vão para o vendedor mais novo (forma carteira mais rapidamente, meta = 100k/mês)

📌 **Intervenção gerencial:** Gerente pode solicitar desmembramento ou migração a qualquer momento

📌 **Acima de 120 dias:** Clientes redistribuídos uniformemente de forma automática

---

**ATUAÇÃO POR ESTÁGIO:**
• **Cliente novo (0-30 dias):** Ligue para acompanhar resultado e giro
• **Ativo em risco:** Contato proativo com proposta personalizada
• **Inativo (91-120 dias):** Oferta especial de reativação
• **Inativo (120+ dias):** Redistribuição + abordagem de novo vendedor

---
⚠️ **Carteira é da empresa, não do vendedor!**
Objetivo: maximizar positivações e mitigar inativação.`
  },

  "comissao": {
    keywords: ["comissão", "comissionamento", "meta", "faixa", "percentual", "salário", "ganhos", "remuneração", "bônus", "fator coletivo"],
    title: "💰 Comissionamento",
    content: `**MODELO DE COMISSIONAMENTO DELRIO**

**COMISSÃO DO VENDEDOR (por % da meta):**

| Faixa | Resultado | Comissão |
|-------|-----------|----------|
| Faixa 1 | 0 ~ 99,9% | 0,5% |
| Faixa 2 | 100 ~ 109,99% | 1,0% |
| Faixa 3 | 110 ~ 119,99% | 1,1% |
| Faixa 4 | 120 ~ 129,99% | 1,2% |
| Faixa 5 | Acima de 130% | 1,4% |

🌟 **FATOR COLETIVO: +0,2%**
Se a LOJA atingir 100% da meta, TODOS os vendedores ganham +0,2% extras.

**Exemplo:** Vendedor na faixa 1 + loja bateu meta = 0,5% + 0,2% = **0,7%**
**Exemplo:** Vendedor na faixa 4 + loja bateu meta = 1,2% + 0,2% = **1,4%**

---

**COMISSÃO DO GERENTE:**

| Faixa | Resultado | Comissão |
|-------|-----------|----------|
| Faixa 1 | 0 ~ 99,9% | 0,5% |
| Faixa 2 | 100 ~ 109,99% | 1,2% |
| Faixa 3 | 110 ~ 119,99% | 1,3% |
| Faixa 4 | 120 ~ 129,99% | 1,4% |
| Faixa 5 | Acima de 130% | 1,6% |

---

**REGRAS DE META:**
• Meta da loja dividida igualmente entre vendedores
• Novos contratados: -25% nos primeiros 3 meses (curva de aprendizado)
• Férias: carteira redistribuída = meta redistribuída`
  },

  "pagamento": {
    keywords: ["pagamento", "pix", "cartão", "dinheiro", "parcelamento", "desconto", "link de pagamento", "parcelas", "crédito", "débito", "meios de pagamento"],
    title: "💳 Política de Pagamento e Parcelamento",
    content: `**MEIOS DE PAGAMENTO ACEITOS:**
• 💵 Dinheiro
• 📱 PIX
• 🏦 Depósito em conta corrente
• 💳 Cartão crédito/débito: Mastercard, Visa, Elo
• 🔗 Link de pagamento (até 6x)

---

**DESCONTO À VISTA: 10%**
Para pagamentos com PIX, Débito ou Dinheiro.

---

**PARCELAMENTO NO CRÉDITO:**

| Valor da Compra | Parcelas |
|----------------|----------|
| Até R$ 250,00 | 1x (à vista) |
| R$ 251 ~ R$ 399 | 2x |
| R$ 400 ~ R$ 499 | 3x |
| R$ 500 ~ R$ 599 | 4x |
| R$ 600 ~ R$ 699 | 5x |
| Acima de R$ 700 | até 6x |

---

**LINK DE PAGAMENTO (online):**
Gerado pelo LINX — informe à cliente:
• Nome no cartão
• Número do cartão
• Data de validade
• Código de segurança

---
🚨 **PROIBIDO:** PIX em conta pessoal de colaboradores!
Todos os pagamentos exclusivamente nos canais oficiais.`
  },

  "troca": {
    keywords: ["troca", "devolução", "política de troca", "prazo", "30%", "45 dias", "defeito", "nota fiscal", "sem uso"],
    title: "🔄 Política de Trocas e Devoluções",
    content: `**POLÍTICA DE TROCAS DELRIO**

**REGRAS GERAIS:**
✅ Trocas em qualquer dia da semana
✅ Limite: até **30%** dos itens comprados no mês da NF
✅ Prazo: até o **último dia útil do mês seguinte** à compra
✅ Obrigatório apresentar **nota fiscal**

---

**NÃO ACEITAMOS TROCA DE:**
❌ Peças com evidência de uso
❌ Modeladores e calças modeladoras
❌ Lingerie branca (exceto se for kit)
❌ Peças sem etiqueta
❌ Embalagem danificada/rasurada
❌ Produtos de saldo, outlet ou 2ª qualidade
❌ Lançamentos com menos de **30 dias** de venda (conveniência)

---

**REGRAS FINANCEIRAS:**
• Crédito = valor líquido pago (conforme NF)
• Novo item mais barato = gera **crédito por 45 dias**
• Novo item mais caro = cliente paga a **diferença**
• Mesma referência (cor/tamanho) = sem ajuste financeiro

---

**PRODUTO COM DEFEITO:**
Troca garantida por lei!
→ Abrir "Chamado de Defeito" + foto/vídeo + separar em quarentena

---

**FLUXO OPERACIONAL:**
1. Validar NF e prazo (45 dias)
2. Verificar se está dentro dos 30%
3. Inspecionar o item
4. Classificar: conveniência ou defeito
5. Calcular valores
6. Concluir (trocar, cobrar diferença ou recusar com motivo registrado)`
  },

  "frete": {
    keywords: ["frete", "entrega", "envio", "sedex", "logística", "grátis", "frete grátis", "transportadora", "prazo entrega"],
    title: "🚚 Política de Frete e Entrega",
    content: `**POLÍTICA DE FRETE DELRIO**

**FRETE GRÁTIS POR REGIÃO:**

| Região | Valor mínimo | Limite |
|--------|-------------|--------|
| Nordeste | R$ 1.200,00 | 5% do pedido |
| Sudeste | R$ 1.500,00 | 5% do pedido |
| Sul | R$ 1.800,00 | 5% do pedido |
| Centro-Oeste | R$ 1.800,00 | 5% do pedido |
| Norte | R$ 2.000,00 | 5% do pedido |

⚠️ **Regra do teto:** Se o frete ultrapassar 5% do pedido, a diferença fica por conta do cliente.

---

**OPÇÃO EXPRESS:**
Cliente pode escolher SEDEX ou Express — paga o acréscimo em relação ao padrão (ou valor integral se não houver isenção).

**FORNECEDORES:**
• Metropolitano: Uber Entregas, Loggi, parceiros locais
• Televendas: Datafrete, J&T, JadLog, Azul Log

---

**REGRAS DE ENTREGA:**
• Atraso → registrar reclamação na transportadora
• Prazo de resposta: até 10 dias úteis
• Mercadoria extraviada → reembolso de 100% em até 15 dias
• Após postagem: não alterar endereço, forma de entrega ou complemento

---
🚨 **PROIBIDO:**
❌ Frete grátis fora da política
❌ Pagamento de frete em conta de colaboradores
❌ Frete grátis acima do percentual permitido`
  },

  "preparacao": {
    keywords: ["preparação", "abertura loja", "reunião de bom dia", "lounge", "vitrine", "visual", "limpeza", "organização", "antes de abrir"],
    title: "🏪 Preparação Diária da Loja",
    content: `**PREPARAÇÃO DIÁRIA DA LOJA**
"Todo bom artista faz uma preparação impecável para seu show."

**A preparação tem 2 frentes:** Pessoas + Processos = Resultado

---

**1. PESSOAS — Reunião de Bom Dia:**
• Alinhar metas do dia, promoções e novidades
• Conferir postura e aparência (maquiagem, cabelo, higiene)
• Reforçar: sorriso, empatia, disposição
• Reconhecer e celebrar resultados do dia anterior

---

**2. PROCESSOS — Organização Física:**
• Loja limpa, bem iluminada e organizada
• Checar Lounge: TV, água, café, Rádio DelRio, fragrância, biscoitos, açúcar, adoçante
• Produtos expostos de forma acessível e atraente
• Vitrine limpa e produzida conforme trade marketing
• Novidades nas zonas quentes
• Manequins e displays atualizados (novas coleções/promoções)

---

**ANÁLISE E PLANEJAMENTO:**
• 15 min no início: pós-venda (mensagens de agradecimento)
• Ligar para clientes novos (15 dias) para acompanhar
• Verificar disponibilidade de todos os tamanhos
• Reposições para evitar braços/casulos vazios
• Testar promoções e caixas antes de abrir

---

**REVISÃO FINAL:**
✅ "Passeio pela loja" simulando ser cliente
✅ Testar Rádio DelRio, TV, iluminação, fragrância (borrifar 2x ao dia)
✅ Verificar materiais: catálogos, flyers, brindes
✅ Confirmar sistema de pagamento operacional
✅ Equipe posicionada no salão (sem agrupamentos!)`
  },

  "vm": {
    keywords: ["visual merchandising", "vm", "exposição", "colmeia", "braço", "vitrine", "manequim", "organização produto", "layout", "sinalização", "aroma", "som rádio"],
    title: "🎨 Visual Merchandising",
    content: `**VISUAL MERCHANDISING DELRIO**
"A loja é um vendedor silencioso."

O cliente faz 3 perguntas ao entrar: "Isso é bonito?" "Isso é para mim?" "Vale a pena?"

---

**ORGANIZAÇÃO POR ZONA:**

🔴 **Entrada (hot points):** Lançamentos — trocar semanalmente
📦 **Sequência de parede:**
1. Linha Basics
2. Shapewear (camisetas em cima, modeladores/calcinhas embaixo)
3. Fitness
4. Outwear
5. Kids
6. Noite
7. **Fundo (próximo ao caixa):** Saldo (por tipo, degradê de cor, com preço)

---

**REGRAS DE EXPOSIÇÃO:**
• Organize por família → cor (círculo cromático) → tamanho de manequim
• Máx. 12 a 24 peças por braço frontal
• Máx. 48 peças nos tubos laterais
• Distância entre peças: 0,5 cm (um dedo)
• Colmeias: organizar verticalmente (caixas / bolsas)
• Gavetas: espelho do que está exposto, organizadas por modelo e tamanho

---

**LOUNGE DA REVENDEDORA:**
• Sem peças, caixas ou obstrução
• Garrafa térmica ou cafeteira
• Sachês de açúcar e adoçante
• Snacks e copos descartáveis

---

**AROMA:** Aplicar Aroma DelRio **3x ao dia** (exclusivo para ambientação — não usar no chão!)

**SOM:** Rádio DelRio no Spotify, ligar às 8h, manter até o fechamento. Não substituir por outras playlists!

---

**VITRINE:**
• Trocar os produtos toda **sexta/sábado** conforme orientação do Checklist Fácil
• Vidraças sempre limpas, sem adesivos de campanhas antigas`
  },

  "dosndonts": {
    keywords: ["inegociável", "proibido", "não pode", "regra", "do's", "dont's", "condutas", "advertência"],
    title: "⛔ Inegociáveis e Regras de Conduta",
    content: `**INEGOCIÁVEIS DELRIO — DO's e DON'Ts**

❌ **PROIBIDO:**
1. Terceirizar descontos e benefícios sem autorização
2. Postergar vendas em benefício próprio
3. Informar dados incorretos sobre funcionamento da loja
4. Receber PIX em conta pessoal
5. Produto sair da loja sem conferência do fiscal/gerente/caixa (livro protocolo)
6. Usar cadastro de consultora em benefício de terceiros
7. Discussão/atrito no salão de vendas (especialmente com cliente presente)
8. Usar patrimônio da loja para fins pessoais
9. Produto sair sem NF (reservas via sistema, duração de 48h)
10. Transações comerciais entre colaboradores no horário de expediente
11. Infrações de ponto (geram advertência por escrito)
12. Burlar férias no período concedido
13. Férias em novembro e dezembro (VETADO)
14. Dois vendedores em férias simultâneas (máx. 1 por mês)

---

**REGRAS DE PONTO:**
• Registrar entrada E saída obrigatoriamente
• Intervalo: mínimo 01:10 / máximo 01:50
• Descanso entre jornadas: mínimo 11 horas
• Limite de horas extras: 02:00/dia (só em extrema necessidade)
• Atestados: aceitos em até 48h, com CRM/CRO válidos, não rasurados`
  },

  "ritos": {
    keywords: ["reunião", "rito", "alinhamento", "bom dia", "semanal", "mensal", "quinzenal", "fca", "fatos causas ações", "feedback", "pauta"],
    title: "📅 Ritos de Gestão",
    content: `**RITOS DE GESTÃO DELRIO**

---

**1. ALINHAMENTO DIÁRIO DE LOJA (15-20 min)**
Conduzido pelo gerente de loja, todos os dias.

Pauta:
1. Bom dia coletivo (clima positivo)
2. Dinâmica/brincadeira rápida
3. Leitura dos resultados D-1 (KPIs)
4. Reconhecimento dos destaques positivos
5. Avisos corporativos (campanhas, lançamentos)
6. Desafio do dia + metas de venda, positivação, cadastros
7. Finalização motivacional

---

**2. ALINHAMENTO SEMANAL/MENSAL (±40 min)**
Gerentes de loja + Gerente Comercial
Toda segunda-feira à tarde.

Pauta:
1. Cumprimentos iniciais
2. Ranking de faturamento por desvio
3. Overview do resultado regional
4. Benchmark (melhor resultado da semana)
5. FCA do maior desvio negativo
6. Avisos gerais (VM, RH, campanhas)
7. Espaço para contribuições
8. Encerramento e próximas ações

**Reunião mensal adicional:** Análise de carteira, progressão ativos/inativos, % conversão, evolução financeira das famílias promocionadas.

---

**3. FCA — Fatos, Causas e Ações**
Método obrigatório em todas as reuniões gerenciais:
• **Fatos:** análise objetiva dos indicadores
• **Causas:** por que os resultados foram positivos ou negativos
• **Ações:** corretivas ou de reforço com responsáveis e prazos

Registrar em planilha online para gestão do conhecimento.

---

**4. FOLLOW-UP TOP 10 CLIENTES**
Semanalmente, gerente acompanha os 10 melhores clientes:
1. Cumprimento cordial
2. Sondagem de desempenho de venda
3. Sondagem de necessidades comerciais
4. Sondagem de qualidade do atendimento
5. Convite à loja
6. Sugestão de ações para taxa de sucesso`
  },

  "estoque": {
    keywords: ["estoque", "armazenamento", "fifo", "organização estoque", "etiqueta", "sku", "referência", "gaveta", "reposição"],
    title: "📦 Organização e Armazenamento de Estoque",
    content: `**ORGANIZAÇÃO DE ESTOQUE DELRIO**

**ORDEM DE SEPARAÇÃO:**
1. **Linha de produto:** Basics, Fitness, Outwear, Shapewear, Noite
2. **Categoria:** cueca, calcinha, sutiã, legging, top, camisola...
3. **Referência** (SKU/modelo)
4. **Tamanho** (grade)

---

**IDENTIFICAÇÃO VISUAL:**
• Etiquetas à mostra, voltadas para frente
• Caixas/prateleiras com etiqueta de endereço (Linha | Categoria | Referência | Tamanho)
• Nunca misturar referências ou tamanhos diferentes na mesma caixa

---

**PADRÕES DE ARMAZENAGEM:**
✅ Limpo, seco e arejado — longe do chão e alto tráfego
✅ Produtos dobrados e empilhados uniformemente
✅ Regra **FIFO** — primeiro que entra, primeiro que sai
✅ Não amassar embalagens nem danificar etiquetas

---

**PRODUTOS SEM ETIQUETA:**
Recolher imediatamente para etiquetagem — evitar constrangimento na frente do cliente!

---

**PREÇOS:**
Consultar pelo sistema:
• Bipando o código de barras
• Digitando a referência do produto
• Digitando o código SKU`
  },

  "delrio": {
    keywords: ["delrio", "história", "empresa", "fundação", "missão", "visão", "valores", "jeito delrio", "fundador", "carlos pereira", "fortaleza", "1963", "seamless"],
    title: "🏢 DelRio — Quem Somos",
    content: `**A HISTÓRIA DELRIO**

Fundada em **1963**, em **Fortaleza (CE)** por **Carlos Pereira**, inspirado pela força de sua mãe, **Dona Tereza**, que costurava sutiãs em casa para sustentar a família.

Hoje: **Maior fabricante de moda íntima do Brasil.**

Fabricamos para: **Calvin Klein, Adidas, Aramis** e outras grandes marcas.

Tecnologias: **seamless**, tecidos altamente tecnológicos, matéria-prima própria.

---

**MISSÃO:** Surpreender a todos com excelência.
**VISÃO:** Ser referência mundial em produto, inovação e serviço.
**PROPÓSITO:** Inspirar a viver com confiança, empoderando pessoas de forma sustentável.

---

**VALORES:**
• Gente
• Ética
• Foco no Cliente
• Empoderamento
• Inovação
• Sustentabilidade
• Compromisso com Resultado

---

**O JEITO DELRIO:**
Margem de lucro para consultoras: até **80%** (vs 30% em cosméticos).
80% das consultoras começaram pelo consumo próprio.

**"Vamos com a DelRio, vamos com tudo!"** 💜`
  },

  "default": {
    keywords: [],
    title: "🌟 Central de Conhecimento DelRio",
    content: `Olá, equipe DelRio! Sou a **Central de Conhecimento** treinada com o Manual de Operações da DelRio. 💜

Posso te ajudar com:

🌟 **Vendas**
• Passo 1 — Abertura e conexão com cliente
• Passo 2 — Sondagem e perfis de cliente
• Passo 3 — Solução e modelo de negócio
• Passo 4 — Como lidar com objeções
• Passo 5 — Fechamento da venda
• Passo 6 — Pós-venda e fidelização

📊 **Gestão**
• KPIs e indicadores de performance
• Ritos de gestão (reuniões, FCA)
• Gestão de carteira de clientes
• Comissionamento e metas

🏪 **Operações**
• Preparação diária da loja
• Visual merchandising
• Estoque e organização
• Política de trocas e devoluções
• Meios de pagamento e parcelamento
• Frete e entrega

📋 **Regras**
• Inegociáveis e condutas
• Gestão de férias e ponto

Pergunte qualquer coisa! 💪`
  }
};

function getAnswer(question) {
  const q = question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (const [, entry] of Object.entries(KB)) {
    if (entry.keywords.some(k => q.includes(k.normalize("NFD").replace(/[\u0300-\u036f]/g, "")))) {
      return { title: entry.title, content: entry.content };
    }
  }
  return { title: KB.default.title, content: KB.default.content };
}

const TOPICS = [
  { label: "🌟 6 Passos de Venda", msg: "Me explique os 6 passos do atendimento DelRio" },
  { label: "🛡️ Objeções", msg: "Como lidar com objeções dos clientes?" },
  { label: "📊 KPIs", msg: "Quais são os KPIs da DelRio?" },
  { label: "👥 Carteira", msg: "Como funciona a gestão de carteira de clientes?" },
  { label: "💳 Pagamentos", msg: "Quais são as formas de pagamento e parcelamento?" },
  { label: "🔄 Trocas", msg: "Qual é a política de trocas da DelRio?" },
  { label: "🚚 Frete", msg: "Qual a política de frete da DelRio?" },
  { label: "💰 Comissão", msg: "Como funciona o comissionamento?" },
  { label: "🎨 Visual", msg: "Como deve ser o visual merchandising da loja?" },
  { label: "🏢 DelRio", msg: "Me fale sobre a história da DelRio" },
];

const INITIAL_QUICK = [
  { l: "🌟 Abertura de venda", m: "Como fazer a abertura da venda?" },
  { l: "🛡️ Lidar com objeções", m: "Como lidar com objeções dos clientes?" },
  { l: "📊 KPIs principais", m: "Quais são os KPIs da DelRio?" },
  { l: "💳 Formas de pagamento", m: "Quais são as formas de pagamento e parcelamento?" },
];

function getQuicks(msg) {
  const m = msg.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (m.includes("passo") || m.includes("abertura") || m.includes("atendimento")) return [
    { l: "Sondagem", m: "Como fazer a sondagem do cliente?" },
    { l: "Solução", m: "Como apresentar a solução e o modelo de negócio?" },
    { l: "Objeções", m: "Como lidar com objeções?" },
    { l: "Fechamento", m: "Como fazer o fechamento da venda?" },
  ];
  if (m.includes("kpi") || m.includes("indicador") || m.includes("meta") || m.includes("resultado")) return [
    { l: "Comissionamento", m: "Como funciona o comissionamento?" },
    { l: "Ritos de gestão", m: "Como são os ritos de gestão?" },
    { l: "Carteira de clientes", m: "Como funciona a gestão de carteira?" },
    { l: "Reunião diária", m: "Como conduzir a reunião de bom dia?" },
  ];
  if (m.includes("pagamento") || m.includes("pix") || m.includes("cartao") || m.includes("parcela")) return [
    { l: "Política de trocas", m: "Qual é a política de trocas?" },
    { l: "Frete e entrega", m: "Como funciona o frete?" },
    { l: "Cancelamento", m: "Como funciona o cancelamento de venda?" },
    { l: "Comissão", m: "Como funciona o comissionamento?" },
  ];
  if (m.includes("objecao") || m.includes("nao quero") || m.includes("medo") || m.includes("caro")) return [
    { l: "Fechamento", m: "Como fazer o fechamento da venda?" },
    { l: "Pós-venda", m: "Como fazer o pós-venda?" },
    { l: "Argumentos DelRio", m: "Quais são os argumentos fortes da DelRio?" },
    { l: "Scripts prontos", m: "Me dê scripts de venda prontos" },
  ];
  return INITIAL_QUICK;
}

// Format message text
function Msg({ role, text, title }) {
  const isAI = role === "ai";
  const lines = text.split("\n").map((line, i) => {
    if (line.startsWith("| ")) {
      return null;
    }
    const html = line
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/✅/g, "<span style='color:#22c55e'>✅</span>")
      .replace(/❌/g, "<span style='color:#ef4444'>❌</span>")
      .replace(/⚠️/g, "<span>⚠️</span>")
      .replace(/🚨/g, "<span>🚨</span>");
    return <p key={i} style={{ margin: line === "" ? "5px 0" : "1px 0", minHeight: line === "" ? "6px" : "auto" }} dangerouslySetInnerHTML={{ __html: html }} />;
  }).filter(Boolean);

  // Parse tables
  const tableLines = text.split("\n").filter(l => l.startsWith("|"));
  const hasTable = tableLines.length > 0;

  return (
    <div style={{ display: "flex", gap: 10, flexDirection: isAI ? "row" : "row-reverse", animation: "fadeUp .3s ease both" }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", flexShrink: 0, alignSelf: "flex-end", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, background: isAI ? "linear-gradient(135deg,#5B2D8E,#3A1B5E)" : "#1e293b", boxShadow: isAI ? "0 2px 8px rgba(91,45,142,.35)" : "none" }}>
        {isAI ? "💜" : "👤"}
      </div>
      <div style={{ maxWidth: "82%", padding: "13px 17px", borderRadius: 18, fontSize: 13.5, lineHeight: 1.75, ...(isAI ? { background: "white", border: "1px solid rgba(91,45,142,.15)", borderBottomLeftRadius: 4, color: "#0f172a", boxShadow: "0 2px 12px rgba(0,0,0,.06)" } : { background: "linear-gradient(135deg,#5B2D8E,#3A1B5E)", borderBottomRightRadius: 4, color: "white", boxShadow: "0 4px 16px rgba(91,45,142,.4)" }) }}>
        {title && isAI && <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, color: "#5B2D8E", borderBottom: "1px solid rgba(91,45,142,.15)", paddingBottom: 7 }}>{title}</div>}
        {lines}
        {hasTable && (
          <div style={{ overflowX: "auto", marginTop: 8 }}>
            <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 12 }}>
              {tableLines.map((row, ri) => {
                if (row.includes("---")) return null;
                const cells = row.split("|").filter(c => c.trim());
                const isHeader = ri === 0;
                return (
                  <tr key={ri} style={{ background: isHeader ? "rgba(91,45,142,.08)" : (ri % 2 === 0 ? "transparent" : "rgba(0,0,0,.02)") }}>
                    {cells.map((cell, ci) => (
                      <td key={ci} style={{ padding: "5px 10px", border: "1px solid rgba(91,45,142,.15)", fontWeight: isHeader ? 600 : 400, color: isHeader ? "#5B2D8E" : "#0f172a" }}>{cell.trim()}</td>
                    ))}
                  </tr>
                );
              })}
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, background: "linear-gradient(135deg,#5B2D8E,#3A1B5E)" }}>💜</div>
      <div style={{ background: "white", border: "1px solid rgba(91,45,142,.15)", borderRadius: 18, borderBottomLeftRadius: 4, padding: "14px 18px", display: "flex", gap: 5 }}>
        {[0, .2, .4].map((d, i) => <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#D8C4F0", animation: `bounce 1.2s ${d}s infinite` }} />)}
      </div>
    </div>
  );
}

export default function DelRioBot() {
  const [msgs, setMsgs] = useState([{ role: "ai", text: "Olá, equipe DelRio! 💜\n\nSou a **Central de Conhecimento** treinada com o Manual de Operações da DelRio. Estou aqui para ajudar você a **vender mais e melhor**!\n\nPosso responder sobre os 6 passos do atendimento, KPIs, scripts de venda, objeções, política de trocas, frete, comissionamento e muito mais.\n\nO que você quer saber hoje? 💪", title: "💜 Central de Conhecimento DelRio" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [quicks, setQuicks] = useState(INITIAL_QUICK);
  const endRef = useRef(null);
  const taRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, loading]);

  const send = (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput("");
    if (taRef.current) taRef.current.style.height = "auto";

    setMsgs(m => [...m, { role: "user", text: msg }]);
    setLoading(true);

    setTimeout(() => {
      const answer = getAnswer(msg);
      setMsgs(m => [...m, { role: "ai", title: answer.title, text: answer.content }]);
      setQuicks(getQuicks(msg));
      setLoading(false);
    }, 500 + Math.random() * 300);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes bounce{0%,60%,100%{transform:translateY(0);background:#D8C4F0}30%{transform:translateY(-6px);background:#5B2D8E}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        .chip:hover{background:#5B2D8E!important;color:white!important;border-color:#5B2D8E!important}
        .qbtn:hover{background:#5B2D8E!important;color:white!important;border-color:#5B2D8E!important}
        .send:hover{transform:scale(1.08)!important}
        textarea:focus{border-color:#5B2D8E!important;box-shadow:0 0 0 3px rgba(91,45,142,.12)!important}
        ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-thumb{background:#D8C4F0;border-radius:4px}
      `}</style>

      <div style={{ width: "100%", maxWidth: 520, height: "100vh", display: "flex", flexDirection: "column", background: "#f8fafc", boxShadow: "0 0 60px rgba(91,45,142,.15)" }}>

        {/* Header */}
        <div style={{ background: "linear-gradient(135deg,#5B2D8E,#3A1B5E)", padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
          <div style={{ width: 46, height: 46, borderRadius: "50%", background: "rgba(255,255,255,.18)", border: "2px solid rgba(240,192,64,.6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>💜</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: "white", letterSpacing: ".01em" }}>Central de Conhecimento</div>
            <div style={{ fontSize: 10.5, color: "rgba(255,255,255,.7)", letterSpacing: ".04em", display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F0C040", display: "inline-block", animation: "pulse 2s infinite" }} />
              DelRio — Maior fabricante de moda íntima do Brasil
            </div>
          </div>
          <div style={{ background: "#F0C040", borderRadius: 8, padding: "4px 10px", fontSize: 11, color: "#3A1B5E", fontWeight: 700 }}>DelRio</div>
        </div>

        {/* Topics bar */}
        <div style={{ background: "white", borderBottom: "1px solid rgba(91,45,142,.12)", padding: "10px 14px", display: "flex", gap: 8, overflowX: "auto", flexShrink: 0, scrollbarWidth: "none" }}>
          {TOPICS.map(t => (
            <button key={t.label} className="chip" onClick={() => send(t.msg)} style={{ flexShrink: 0, padding: "5px 12px", borderRadius: 20, border: "1px solid rgba(91,45,142,.25)", background: "white", color: "#5B2D8E", fontSize: 11, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "inherit", transition: "all .2s" }}>{t.label}</button>
          ))}
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14, background: "#f8fafc" }}>
          {msgs.map((m, i) => <Msg key={i} role={m.role} text={m.text} title={m.title} />)}
          {loading && <Typing />}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <div style={{ background: "white", borderTop: "1px solid rgba(91,45,142,.12)", padding: "12px 14px 18px", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 7, overflowX: "auto", marginBottom: 10, scrollbarWidth: "none", paddingBottom: 2 }}>
            {quicks.map(q => (
              <button key={q.l} className="qbtn" onClick={() => send(q.m)} style={{ flexShrink: 0, padding: "6px 12px", borderRadius: 16, border: "1px solid rgba(91,45,142,.25)", background: "white", color: "#5B2D8E", fontSize: 11.5, cursor: "pointer", fontFamily: "inherit", fontWeight: 600, transition: "all .2s", whiteSpace: "nowrap" }}>{q.l}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
            <textarea ref={taRef} value={input}
              onChange={e => { setInput(e.target.value); e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px"; }}
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Pergunte sobre vendas, scripts, KPIs, trocas, comissão..."
              rows={1}
              style={{ flex: 1, border: "1.5px solid rgba(91,45,142,.25)", borderRadius: 24, padding: "11px 18px", fontFamily: "inherit", fontSize: 13.5, color: "#0f172a", background: "white", resize: "none", outline: "none", lineHeight: 1.5, maxHeight: 100, transition: "all .2s" }}
            />
            <button className="send" onClick={() => send()} style={{ width: 44, height: 44, borderRadius: "50%", border: "none", background: "linear-gradient(135deg,#5B2D8E,#3A1B5E)", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 14px rgba(91,45,142,.4)", transition: "all .2s" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
