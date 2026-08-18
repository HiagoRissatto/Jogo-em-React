🎮 Jogo de Sobrevivência

Projeto desenvolvido em React + TypeScript com o objetivo de criar um jogo de sobrevivência baseado em turnos.

Durante a partida, o jogador precisa administrar seus recursos e escolher suas ações estrategicamente para conseguir sobreviver e alcançar a condição de vitória.

🕹️ Como funciona

O jogador inicia a partida com:

* ❤️ Vida: 100
* ⚡ Energia: 100
* 🍖 Comida: 5
* 🧰 Recursos: 0

Durante o jogo, é possível realizar quatro ações:

🍖 Comer

Consome uma unidade de comida e recupera parte da vida do jogador.

💤 Descansar

Recupera vida e energia, respeitando o limite máximo de 100.

🔨 Trabalhar

Consome energia e aumenta a quantidade de recursos do jogador.

🧭 Explorar

Gera um evento aleatório que pode:

* encontrar comida;
* encontrar recursos;
* causar perda de vida;
* causar perda de energia;
* ou não gerar nenhum acontecimento.

🔄 Sistema de ações

O jogador pode realizar até duas ações antes de precisar explorar.

Após duas ações, Comer, Descansar e Trabalhar ficam temporariamente bloqueados.

O jogador precisa realizar uma exploração para liberar novamente as demais ações.

🛠️ Tecnologias

* React
* TypeScript
* Bootstrap
* CSS Modules
* Vite

🧠 Conceitos praticados

O projeto foi criado principalmente para praticar conceitos fundamentais do React, incluindo:

* Componentes
* Props
* useState
* Gerenciamento de estado
* Eventos
* Renderização da interface
* Comunicação entre componentes
* Tipagem com TypeScript

Durante o desenvolvimento também serão utilizados:

* useEffect
* useCallback
* localStorage

📂 Estrutura

src/
├── components/
│   ├── eat/
│   ├── exploration/
│   ├── sleeping/
│   ├── status/
│   └── work/
├── css/
├── App.tsx
└── main.tsx

🚧 Em desenvolvimento

O projeto ainda está sendo desenvolvido.

Atualmente estão sendo implementados recursos como:

* histórico das ações;
* condição de vitória;
* condição de derrota;
* nova partida;
* persistência da partida com localStorage;
* utilização de useEffect;
* utilização de useCallback.

🏆 Objetivo

O objetivo do jogador é administrar corretamente seus recursos e atingir 50 recursos antes que sua vida ou energia chegue a zero.

⸻

Projeto desenvolvido como atividade prática de React + TypeScript.