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
