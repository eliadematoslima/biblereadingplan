📖 Plano de Leitura Bíblica — V5.2

Aplicação web local para acompanhamento de leitura bíblica anual com arquitetura avançada de sincronização por capítulos.

🚀 Grande Evolução da V5.2

A V5.2 introduz a maior mudança estrutural do projeto:

✅ Progresso sincronizado por capítulo

Agora o sistema não salva mais:

dias concluídos

E sim:

capítulos bíblicos concluídos

Isso permite sincronização automática entre:

📘 Plano Tradicional
📖 Plano Cronológico
🧠 Nova Arquitetura
Antes

O progresso era salvo assim:

{
  "1": true,
  "2": true
}

Representando:

dias concluídos
Agora

O progresso é salvo assim:

{
  "Gênesis 1": true,
  "Gênesis 2": true,
  "Mateus 5": true
}

Representando:

capítulos individuais lidos
🔄 Sincronização Inteligente

Agora:

Exemplo
Plano Tradicional
Gênesis 1
Gênesis 2
Gênesis 3

Se marcados como concluídos:

✅ automaticamente o plano cronológico refletirá isso

Porque os capítulos são compartilhados entre os planos.

📚 JSONs Reformulados

Os arquivos JSON agora utilizam capítulos individuais.

Antes
"readings": [
  "Gênesis 1-3"
]
Agora
"readings": [
  "Gênesis 1",
  "Gênesis 2",
  "Gênesis 3"
]
📊 Barra de Progresso Real

A barra de progresso agora mede:

capítulos da Bíblia

Em vez de:

dias concluídos
Total considerado
1189 capítulos
Exemplo
530 / 1189 capítulos concluídos
44%
🎨 Recursos Mantidos

A V5.2 mantém todas funcionalidades anteriores:

✅ topo fixo
✅ barra de progresso
✅ organização mensal
✅ alternância de planos
✅ layout responsivo
✅ persistência local
✅ funcionamento offline

🧠 Tecnologias
HTML5
CSS3
JavaScript ES Modules
LocalStorage

Sem frameworks externos.

📁 Estrutura Atual do Projeto
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
💾 Persistência

O progresso continua sendo salvo automaticamente usando:

localStorage

Agora utilizando:

progresso global por capítulos
sincronização automática entre planos
▶️ Como Executar
Recomendado

Utilizar:

Live Server

no VS Code.

Passos
Abrir projeto no VS Code
Instalar extensão Live Server
Abrir:
index.html
Selecionar:
Open with Live Server
📱 Compatibilidade

Funciona em:

Chrome
Edge
Safari
Firefox
iPhone
Android