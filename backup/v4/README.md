# 📖 Plano de Leitura Bíblica — V4

Aplicação web local para acompanhamento de leitura bíblica anual com suporte a:

- Plano Tradicional
- Plano Cronológico
- Salvamento automático do progresso
- Barra de progresso dinâmica
- Layout por meses
- Alternância de planos
- Interface responsiva
- Persistência local via LocalStorage

---

# ✅ Novidades da V4

## 📚 Plano Cronológico Completo

Implementado plano cronológico real incluindo:

- Pentateuco cronológico
- Jó no período patriarcal
- Juízes e Rute sincronizados
- Reino Unido
- Salmos contextualizados
- Profetas históricos
- Reino dividido
- Exílio babilônico
- Evangelhos harmonizados
- Igreja primitiva cronológica
- Cartas paulinas em contexto histórico
- Apocalipse

---

## 🔄 Alternância entre planos

Botão superior permite alternar instantaneamente entre:

- 📘 Plano Tradicional
- 📖 Plano Cronológico

Cada plano possui:
- progresso independente
- salvamento separado
- persistência automática

---

## 📊 Barra de Progresso

Topo fixo contendo:

- progresso visual
- percentual concluído
- total de dias concluídos

Atualização automática ao marcar leituras.

---

## 🗂️ Organização por Meses

Interface organizada em:
- colunas responsivas
- meses separados visualmente
- melhor navegação anual

---

## 🎨 Melhorias Visuais

### Novo topo fixo
- barra sticky
- sombra suave
- navegação mais confortável

### Botão dinâmico
- azul = tradicional
- roxo = cronológico

### Estatísticas do plano
Exibição automática de:
- total de dias
- total de capítulos

---

# 🧠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES Modules
- LocalStorage

Sem dependências externas.

---

# 📁 Estrutura do Projeto

```text
project/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   └── storage.js
│
├── data/
│   ├── traditional-plan.json
│   └── chronological-plan.json
│
├── generate-plan.html
├── generate-chronological.html
│
└── README.md
````

---

# 💾 Salvamento do Progresso

O progresso é salvo automaticamente no navegador utilizando:

```text
localStorage
```

Mesmo fechando o navegador:

* os dias marcados permanecem
* o plano selecionado permanece

---

# ▶️ Como Executar

## Método recomendado

Usar extensão:

```text
Live Server
```

no VS Code.

---

## Passos

1. Abrir o projeto no VS Code
2. Instalar extensão Live Server
3. Clicar com botão direito em:

```text
index.html
```

4. Selecionar:

```text
Open with Live Server
```

---

# 📱 Compatibilidade

Funciona em:

* Chrome
* Edge
* Safari
* Firefox
* iPhone
* Android

---

# 🚀 Próximas Versões Planejadas

## V5

* destaque automático do dia atual
* scroll automático
* badge “HOJE”

## V6

* dark mode
* streak de leitura
* estatísticas avançadas

## V7

* PWA instalável
* funcionamento offline completo

## Futuro

* sincronização online
* backup em nuvem
* múltiplos usuários

---

# 🙌 Objetivo do Projeto

Criar uma experiência moderna, agradável e organizada para leitura bíblica anual, mantendo:

* simplicidade
* velocidade
* funcionamento offline
* independência de servidores externos.

```