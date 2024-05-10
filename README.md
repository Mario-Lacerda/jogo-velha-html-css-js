# jogo-velha-html-css-js
Criando seu Próprio Jogo da Velha com HTML e Javascript

O jogo da velha é um jogo clássico que pode ser jogado por duas pessoas. O objetivo do jogo é alinhar três símbolos (X ou O) em uma linha, coluna ou diagonal. Neste tutorial, você aprenderá a criar seu próprio jogo da velha usando HTML, CSS e Javascript.

**HTML**

Primeiro, crie um arquivo HTML e adicione o seguinte código:

```plaintext
<!DOCTYPE html>
<html>
<head>
  <title>Jogo da Velha</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Jogo da Velha</h1>
  <div id="tabuleiro"></div>
  <script src="script.js"></script>
</body>
</html>
```

Este código cria uma estrutura básica para o jogo da velha. O elemento `<h1>` define o título do jogo, o elemento `link` carrega o arquivo CSS e o elemento `div` com o ID "tabuleiro" será usado para exibir o tabuleiro do jogo.

**CSS**

Agora, crie um arquivo CSS e adicione o seguinte código:

css

```css
body {
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

#tabuleiro {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: 0 auto;
}

.linha {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.celula {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  font-size: 50px;
  text-align: center;
  line-height: 100px;
}

.vencedor {
  background-color: green;
}
```

Este código define os estilos para o jogo da velha. Ele centraliza o título, cria um tabuleiro com três linhas e três colunas, e define os estilos para as células e para a célula vencedora.

**Javascript**

Agora, crie um arquivo Javascript e adicione o seguinte código:

```javascript
const tabuleiro = document.getElementById("tabuleiro");

// Cria o tabuleiro do jogo
for (let i = 0; i < 3; i++) {
  const linha = document.createElement("div");
  linha.classList.add("linha");
  for (let j = 0; j < 3; j++) {
    const celula = document.createElement("div");
    celula.classList.add("celula");
    linha.appendChild(celula);
  }
  tabuleiro.appendChild(linha);
}

// Adiciona os eventos de clique às células
const celulas = document.querySelectorAll(".celula");
for (let celula of celulas) {
  celula.addEventListener("click", function() {
    // Verifica se a célula já foi clicada
    if (celula.innerHTML !== "") {
      return;
    }

    // Adiciona o símbolo do jogador atual à célula
    celula.innerHTML = vezJogador;

    // Verifica se o jogador atual venceu
    if (verificaVencedor()) {
      alert("Jogador " + vezJogador + " venceu!");
      return;
    }

    // Troca o jogador atual
    vezJogador = vezJogador === "X" ? "O" : "X";
  });
}

// Variável para controlar o jogador atual
let vezJogador = "X";

// Função para verificar se o jogador atual venceu
function verificaVencedor() {
  // Verifica as linhas
  for (let i = 0; i < 3; i++) {
    const linha = document.querySelectorAll(".linha")[i];
    const celulasLinha = linha.querySelectorAll(".celula");
    if (celulasLinha[0].innerHTML === celulasLinha[1].innerHTML && celulasLinha[1].innerHTML === celulasLinha[2].innerHTML && celulasLinha[0].innerHTML !== "") {
      marcaVencedor(celulasLinha);
      return true;
    }
  }

  // Verifica as colunas
  for (let i = 0; i < 3; i++) {
    const celulasColuna = document.querySelectorAll(".celula");
    if (celulasColuna[i].innerHTML === celulasColuna[i + 3].innerHTML && celulasColuna[i + 3].innerHTML === celulasColuna[i + 6].innerHTML && celulasColuna[i].innerHTML !== "") {
      marcaVencedor(celulasColuna);
      return true;
    }
  }

  // Verifica as diagonais
  const diagonal1 = [document.querySelectorAll(".celula")[0], document.querySelectorAll(".celula")[4], document.querySelectorAll(".celula")[8]];
  const diagonal2 = [document.querySelectorAll(".celula")[2], document.querySelectorAll(".celula")[4], document.querySelectorAll(".celula")[6]];
  if (diagonal1[0].innerHTML === diagonal1[1].innerHTML && diagonal1[1].innerHTML === diagonal1[2].innerHTML && diagonal1[0].innerHTML !== "" || diagonal2[0].innerHTML === diagonal2[1].innerHTML && diagonal2[1].innerHTML === diagonal2[2].innerHTML && diagonal2[0].innerHTML !== "") {
    marcaVencedor(diagonal1);
    return true;
  }

  // Se nenhuma condição de vitória for atendida, retorna falso
  return false;
}

// Função para marcar as células vencedoras
function marcaVencedor(celulas) {
  for (let celula of celulas) {
    celula.classList.add("vencedor");
  }
}
```

Este código cria o tabuleiro do jogo, adiciona os eventos de clique às células e verifica se o jogador atual venceu.

**Como Jogar**

Para jogar o jogo, basta clicar nas células do tabuleiro. O jogador atual será alternado entre "X" e "O" a cada clique. O jogo termina quando um jogador alinha três símbolos em uma linha, coluna ou diagonal, ou quando todas as células forem preenchidas.

**Conclusão**

Aqui foi criado o jogo da velha simples usando HTML, CSS e Javascript. Você pode personalizar o jogo adicionando sons ou até mesmo permitindo que dois jogadores joguem online.
