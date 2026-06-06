# 📖 Plano de Leitura Bíblica — V5.4

Aplicação web local para acompanhamento de leitura bíblica anual com suporte a múltiplos planos, sincronização por capítulos, tema escuro e persistência automática.

---

# 🚀 Novidades da V5.4

## 🔗 Sincronização Inteligente entre Planos

A maior evolução estrutural do projeto.

Agora o progresso é salvo por capítulo bíblico e não mais por dia.

Exemplo:

```javascript
{
  "Gênesis 1": true,
  "Gênesis 2": true,
  "Mateus 5": true
}
```

Isso permite que:

* 📘 Plano Tradicional
* 📖 Plano Cronológico

compartilhem automaticamente o mesmo progresso.

Ao concluir um capítulo em um plano, ele aparece concluído no outro.

---

## 📚 Estrutura de Leituras Reformulada

Os planos agora utilizam capítulos individuais.

### Antes

```json
[
  "Gênesis 1-3"
]
```

### Agora

```json
[
  "Gênesis 1",
  "Gênesis 2",
  "Gênesis 3"
]
```

Benefícios:

* sincronização simplificada
* progresso real por capítulo
* suporte futuro a progresso parcial
* estatísticas precisas

---

## 🌙 Dark Mode

Novo sistema de tema persistente.

### Modo Claro

* fundo claro
* botão de tema escuro (☾)

### Modo Escuro

* fundo escuro
* botão de tema claro (☀)

O tema escolhido é salvo automaticamente.

---

## 🔄 Reset de Progresso

Novo botão para reiniciar toda a leitura.

Funcionalidades:

* confirmação antes da exclusão
* limpeza segura do progresso
* atualização imediata da interface

---

## 📊 Barra de Progresso Real

A barra agora representa:

### Capítulos da Bíblia concluídos

Base utilizada:

```text
1189 capítulos
```

Exemplo:

```text
532 / 1189 capítulos concluídos
45%
```

---

## 📈 Estatísticas Automáticas

O topo do aplicativo exibe:

```text
365 dias • 1189 capítulos
```

As informações são calculadas automaticamente a partir do JSON carregado.

---

# 🎨 Interface

## Topo Fixo

Inclui:

* alternância de planos
* dark mode
* reset de progresso
* barra de progresso
* estatísticas do plano

Permanece visível durante a rolagem.

---

## Organização por Meses

Leituras distribuídas em:

* Janeiro
* Fevereiro
* Março
* ...
* Dezembro

Exibidas em colunas responsivas.

---

## Conclusão Visual

Quando uma leitura é concluída:

* checkbox marcado
* fundo alterado
* texto riscado
* progresso atualizado

---

# 💾 Persistência

Utiliza:

```text
localStorage
```

São armazenados:

* progresso dos capítulos
* plano selecionado
* tema escolhido

Tudo permanece salvo mesmo após fechar o navegador.

---

# 🧠 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript ES Modules
* LocalStorage

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
├── convert-readings.html
│
└── README.md
```

---

# ▶️ Execução

Recomendado:

```text
Live Server
```

Passos:

1. Abrir projeto no VS Code
2. Instalar Live Server
3. Abrir `index.html`
4. Selecionar "Open with Live Server"

---

# 📱 Compatibilidade

Funciona em:

* Chrome
* Edge
* Firefox
* Safari
* iPhone
* Android

---

# 🔥 Próximas Versões Planejadas

## V5.5

* progresso parcial do dia
* exibição "3/5 capítulos concluídos"

## V5.6

* destaque automático do dia atual
* badge "HOJE"
* scroll automático

## V6

* estatísticas avançadas
* streak de leitura
* metas anuais

## V7

* PWA instalável
* funcionamento offline completo

## Futuro

* sincronização em nuvem
* login opcional
* múltiplos usuários
* backup automático

---

# 🙌 Objetivo do Projeto

Criar uma experiência moderna, agradável e eficiente para leitura bíblica anual, com foco em:

* simplicidade
* organização
* persistência local
* sincronização inteligente
* evolução contínua
