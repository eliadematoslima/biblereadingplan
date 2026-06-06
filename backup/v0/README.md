# Bible Reading Checklist

Aplicação web simples para acompanhamento de leitura bíblica anual.

## Objetivo

Este projeto foi criado para funcionar como um checklist de leitura bíblica diária, permitindo marcar os dias concluídos ao longo do ano.

Cada dia contém:

* leitura correspondente
* checkbox de conclusão
* mudança visual ao concluir
* salvamento automático local

O foco inicial é:

* simplicidade
* funcionamento offline
* execução local no navegador
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
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── data.js
│   └── storage.js
│
├── backups/
│   └── v0/
│
└── README.md
```

---

# Funcionalidades da V0

* Lista de leituras
* Checkbox por dia
* Marcação visual de concluído
* Texto riscado após conclusão
* Persistência usando LocalStorage
* Organização modular do código

---

# Como Executar

## Opção recomendada

Usar a extensão Live Server no VS Code.

### Passos

1. Instalar a extensão:

   * Live Server

2. Abrir o projeto no VS Code

3. Clicar com botão direito no:

   * index.html

4. Selecionar:

   * Open with Live Server

---

# Salvamento dos Dados

O progresso é salvo localmente no navegador usando:

```javascript
localStorage
```

Isso permite:

* fechar o navegador sem perder progresso
* continuar posteriormente
* usar offline

Observação:

* limpar dados do navegador remove o progresso salvo

---

# Roadmap

## V1

* Adicionar os 365 dias completos
* Melhorar layout
* Adicionar barra de progresso

## V2

* Tema dark
* Busca por livros
* Rolagem automática para próximo dia

## V3

* Transformar em PWA
* Instalação no celular
* Backup/exportação

---

# Objetivos Futuros

Possíveis evoluções:

* sincronização online
* autenticação
* múltiplos planos de leitura
* estatísticas
* versão mobile
* hospedagem online

---

# Status Atual

Versão atual:

```text
v0
```

Status:

```text
Funcional e em desenvolvimento
```
