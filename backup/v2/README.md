# Bible Reading Checklist

Aplicação web local para acompanhamento de leitura bíblica anual.

---

# Objetivo

Este projeto foi desenvolvido para funcionar como um checklist de leitura bíblica diária ao longo de 365 dias.

O usuário pode:

* visualizar a leitura do dia
* marcar dias concluídos
* acompanhar progresso localmente
* continuar a leitura posteriormente

O foco principal do projeto é:

* simplicidade
* uso offline
* armazenamento local
* performance
* organização modular do código

---

# Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript Vanilla (ES Modules)
* LocalStorage

---

# Estrutura do Projeto

```text
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
│   └── v1/
│
└── README.md
```

---

# Funcionalidades da V1

## Checklist diário

Cada dia possui:

* checkbox de conclusão
* leitura correspondente
* persistência automática

---

## Persistência Local

O progresso é salvo usando:

```javascript
localStorage
```

O usuário pode:

* fechar o navegador
* desligar o computador
* continuar posteriormente

Sem perder o progresso.

---

## Plano Bíblico Completo

O sistema possui:

* 365 dias
* 1189 capítulos
* ordem tradicional da Bíblia
* distribuição balanceada automática

---

## Datas Reais

Os dias são exibidos no formato:

```text
01/01
02/01
03/01
```

até:

```text
31/12
```

---

## Compactação Inteligente

As leituras são exibidas em formato compacto:

```text
Gênesis 1-4
```

em vez de:

```text
Gênesis 1 • Gênesis 2 • Gênesis 3 • Gênesis 4
```

---

## Feedback Visual

Ao concluir uma leitura:

* checkbox é marcado
* linha muda de cor
* texto fica riscado

---

# Como Executar

## Recomendado

Usar VS Code com a extensão:

* Live Server

---

## Passos

1. Abrir o projeto no VS Code

2. Clicar com botão direito em:

```text
index.html
```

3. Selecionar:

```text
Open with Live Server
```

---

# Gerador de Plano

O projeto inclui um gerador automático de plano bíblico.

Arquivo:

```text
js/generate-plan.js
```

Responsável por:

* gerar os 365 dias
* distribuir capítulos automaticamente
* exportar JSON do plano

---

# Roadmap

## V2

* barra de progresso
* destaque automático do dia atual
* rolagem automática
* tema dark

---

## V3

* filtros por livro
* busca
* estatísticas
* exportar/importar progresso

---

## V4

* PWA
* instalação no celular
* modo offline avançado

---

## Futuro

* sincronização online
* múltiplos planos de leitura
* autenticação
* backup em nuvem

---

# Status Atual

Versão:

```text
v1
```

Status:

```text
Funcional e em evolução
```
