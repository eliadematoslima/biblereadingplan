# Bible Reading Checklist

Aplicação web local para acompanhamento de leitura bíblica anual com checklist interativo e barra de progresso dinâmica.

---

# Objetivo

Este projeto foi desenvolvido para auxiliar no acompanhamento de leitura bíblica diária ao longo de todo o ano.

A aplicação permite:

* visualizar leituras diárias
* acompanhar progresso anual
* marcar leituras concluídas
* salvar automaticamente o progresso
* navegar por meses
* utilizar completamente offline

O foco do projeto é:

* simplicidade
* organização
* performance
* experiência moderna
* modularização
* facilidade de expansão futura

---

# Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript Vanilla (ES Modules)
* LocalStorage

---

# Estrutura do Projeto

```text id="y80hmb"
bible-checklist/
│
├── index.html
│
├── data/
│   └── reading-plan.json
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── storage.js
│   └── generate-plan.js
│
├── backups/
│   ├── v0/
│   ├── v1/
│   ├── v2/
│   └── v3/
│
└── README.md
```

---

# Funcionalidades da V3

## Plano Bíblico Completo

A aplicação contém:

* 365 dias
* 1189 capítulos
* ordem tradicional da Bíblia
* distribuição automática balanceada

---

## Organização por Meses

As leituras são agrupadas visualmente por mês:

```text id="vsc74j"
Janeiro
Fevereiro
Março
...
Dezembro
```

Com layout:

* 3 colunas no desktop
* 2 colunas no tablet
* 1 coluna no mobile

---

## Barra de Progresso Dinâmica

O topo da aplicação possui:

* progresso anual
* percentual concluído
* barra visual animada

Exemplo:

```text id="l7h6oj"
42 / 365 dias concluídos
11%
```

A barra é atualizada automaticamente ao marcar ou desmarcar leituras.

---

## Cabeçalho Fixo

A barra de progresso e o título permanecem fixos no topo da página durante a rolagem.

Isso melhora:

* navegação
* visualização do progresso
* experiência de uso

---

## Datas Reais

As leituras utilizam datas reais:

```text id="fd4m1n"
01/01
02/01
03/01
...
31/12
```

---

## Compactação Inteligente de Capítulos

As leituras são exibidas em formato compacto:

```text id="6lwrz8"
Gênesis 1-4
```

em vez de:

```text id="g1qynv"
Gênesis 1 • Gênesis 2 • Gênesis 3 • Gênesis 4
```

---

## Checklist Interativo

Cada leitura possui:

* checkbox
* mudança visual ao concluir
* texto riscado
* destaque visual
* persistência automática

---

## Salvamento Local

O progresso é salvo usando:

```javascript id="kqeq5h"
localStorage
```

Isso permite:

* fechar o navegador
* desligar o computador
* continuar posteriormente

Sem perder progresso.

---

# Layout Responsivo

## Desktop

* 3 colunas

## Tablet

* 2 colunas

## Mobile

* 1 coluna

---

# Como Executar

## Recomendado

Utilizar:

* VS Code
* extensão Live Server

---

## Passos

1. Abrir o projeto no VS Code

2. Clicar com botão direito em:

```text id="5n10r9"
index.html
```

3. Selecionar:

```text id="uwrwxu"
Open with Live Server
```

---

# Gerador Automático de Plano

Arquivo:

```text id="itfjlwm"
js/generate-plan.js
```

Responsável por:

* gerar os 365 dias
* distribuir capítulos automaticamente
* criar JSON do plano bíblico

---

# Roadmap

## V4

* destaque automático do dia atual
* scroll automático até o dia atual
* animações suaves

---

## V5

* tema dark
* estatísticas
* filtros
* busca por livro

---

## V6

* exportar/importar progresso
* backup automático

---

## Futuro

* PWA
* instalação mobile
* sincronização online
* múltiplos planos de leitura
* múltiplos usuários

---

# Status Atual

Versão:

```text id="7gk5dw"
v3
```

Status:

```text id="6knf9m"
Funcional, responsivo, modularizado e com progresso dinâmico
```
