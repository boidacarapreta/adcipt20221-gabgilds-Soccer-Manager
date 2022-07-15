var cena1 = new Phaser.Scene("Cena 1");

//Variáveis para o multiplayer
var socket;
var ice_servers = {
  iceServers: [{urls: "stun:stun.l.google.com:19302"}],
};
var localConnection;
var remoteConnection;
var midias;
const audio = document.querySelector("audio");
//Variáveis gerais do jogo
var soundtrack;
var botaoTelaCheia;
var teclaF;
var contadorVencedor0 = 0;
var contadorVencedor1 = 0;
var textoContadorVencedor0;
var textoContadorVencedor1;
//Variáveis de escolher a sala
var fundo1;
var fundo2;
var sala;
var botaoSala1;
var botaoSala2;
var botaoSala3;
var botaoSala4;
var botaoSala5;
//Variáveis da cena de escolher os clubes
var fundo3;
var botao0;
var botao1;
var botao2;
var real0;
var city0;
var bayern0;
var psg0;
var nomeBayern0;
var nomeCity0;
var nomePsg0;
var nomeReal0;
var real1;
var city1;
var bayern1;
var psg1;
var nomeBayern1;
var nomeCity1;
var nomePsg1;
var nomeReal1;
var somMouse;
var contagemClube0 = 0;
var contagemClube1 = 0;
var bayernEscudo0;
var cityEscudo0;
var psgEscudo0;
var realEscudo0;
var bayernEscudo1;
var cityEscudo1;
var psgEscudo1;
var realEscudo1;
var textoSala1;
var textoSala2;
var textoSala3;
var textoSala4;
var textoSala5;
//Variáveis da cena do jogo acontecendo
var fundo4;
var textoCronometro;
var passagemTempo;
var fonteTexto0 = {font: "bold 35px Mont", fill: "#000000"};
var fonteTexto1 = { font: "bold 24px Mont", fill: "#000000" };
var fonteTexto2 = { font: "bold 24px Mont", fill: "#0000FF" };
var fonteTexto3 = { font: "bold 24px Mont", fill: "#FF0000" };
var textoPlacar;
var textoPosseBola;
var posseBola0 = 50;
var posseBola1 = 50;
var minutos;
var parteEmSegundos;
var tempoInicial;
var time;
var chanceGol;
var gols0 = 0;
var gols1 = 0;
//Variáveis para a posse de bola
var contagem0 = 0;
var jogador;
var tipoDeJogo;
//Variáveis e funções para o funcionamento da partida
var statusBayern = {atk: 92, mid: 85, def: 81, ovr: 84};
var statusPsg = {atk: 89, mid: 83, def: 85, ovr: 86};
var statusCity = {atk: 85, mid: 85, def: 86, ovr: 85};
var statusReal = {atk: 84, mid: 85, def: 83, ovr: 84};
var clube0Escolhido;
var clube1Escolhido;
var forçaClube0Escolhido;
var forçaClube1Escolhido;
var forçaBayern0;
var forçaPsg0;
var forçaCity0;
var forçaReal0;
var forçaBayern1;
var forçaPsg1;
var forçaCity1;
var forçaReal1;
//Variáveis da cena do fim de jogo
var fundo5;
var parabensBayern0;
var parabensCity0;
var parabensPsg0;
var parabensReal0;
var parabensBayern1;
var parabensCity1;
var parabensPsg1;
var parabensReal1;
var somVencedor;
var muller;
var deBruyne;
var benzema;
var neymar;
var botaoSim;
var botaoNao;
var textoJogarDeNovo;
//Funções da cena de escolher os clubes
function escolhaBayern0() {
  psg0.setVisible(false);
  nomePsg0.setVisible(false);
  bayern0.setVisible(true);
  nomeBayern0.setVisible(true);
  real0.setVisible(false);
  nomeReal0.setVisible(false);
  city0.setVisible(false);
  nomeCity0.setVisible(false);
  bayernEscudo0.setVisible(true);
  cityEscudo0.setVisible(false);
  realEscudo0.setVisible(false);
  psgEscudo0.setVisible(false);
  clube0Escolhido = "bayern";
  if (jogador === 1) {
    forçaClube0Escolhido = forçaBayern0;
  } 
}
function escolhaPsg0() {
  psg0.setVisible(true);
  nomePsg0.setVisible(true);
  bayern0.setVisible(false);
  nomeBayern0.setVisible(false);
  real0.setVisible(false);
  nomeReal0.setVisible(false);
  city0.setVisible(false);
  nomeCity0.setVisible(false);
  bayernEscudo0.setVisible(false);
  cityEscudo0.setVisible(false);
  realEscudo0.setVisible(false);
  psgEscudo0.setVisible(true);
  clube0Escolhido = "psg";
  if (jogador === 1) {
    forçaClube0Escolhido = forçaPsg0;
  }   
}
function escolhaCity0() {
  psg0.setVisible(false);
  nomePsg0.setVisible(false);
  bayern0.setVisible(false);
  nomeBayern0.setVisible(false);
  real0.setVisible(false);
  nomeReal0.setVisible(false);
  city0.setVisible(true);
  nomeCity0.setVisible(true);
  bayernEscudo0.setVisible(false);
  cityEscudo0.setVisible(true);
  realEscudo0.setVisible(false);
  psgEscudo0.setVisible(false);
  clube0Escolhido = "city";
  if (jogador === 1) {
    forçaClube0Escolhido = forçaCity0;
  } 
}
function escolhaReal0() {
  psg0.setVisible(false);
  nomePsg0.setVisible(false);
  bayern0.setVisible(false);
  nomeBayern0.setVisible(false);
  real0.setVisible(true);
  nomeReal0.setVisible(true);
  city0.setVisible(false);
  nomeCity0.setVisible(false);
  bayernEscudo0.setVisible(false);
  cityEscudo0.setVisible(false);
  realEscudo0.setVisible(true);
  psgEscudo0.setVisible(false);
  clube0Escolhido = "real";
  if (jogador === 1) {
    forçaClube0Escolhido = forçaReal0;
  }   
}
function escolhaPsg1() {
  psg1.setVisible(true);
  nomePsg1.setVisible(true);
  bayern1.setVisible(false);
  nomeBayern1.setVisible(false);
  real1.setVisible(false);
  nomeReal1.setVisible(false);
  city1.setVisible(false);
  nomeCity1.setVisible(false);
  bayernEscudo1.setVisible(false);
  cityEscudo1.setVisible(false);
  realEscudo1.setVisible(false);
  psgEscudo1.setVisible(true);
  clube1Escolhido = "psg";
  if (jogador === 1) {
    forçaClube1Escolhido = forçaPsg1;
  } 
}
function escolhaBayern1() {
  psg1.setVisible(false);
  nomePsg1.setVisible(false);
  bayern1.setVisible(true);
  nomeBayern1.setVisible(true);
  real1.setVisible(false);
  nomeReal1.setVisible(false);
  city1.setVisible(false);
  nomeCity1.setVisible(false);
  bayernEscudo1.setVisible(true);
  cityEscudo1.setVisible(false);
  realEscudo1.setVisible(false);
  psgEscudo1.setVisible(false);
  clube1Escolhido = "bayern";
  if (jogador === 1) {
    forçaClube1Escolhido = forçaBayern1;
  }
}
function escolhaCity1() {
  psg1.setVisible(false);
  nomePsg1.setVisible(false);
  bayern1.setVisible(false);
  nomeBayern1.setVisible(false);
  real1.setVisible(false);
  nomeReal1.setVisible(false);
  city1.setVisible(true);
  nomeCity1.setVisible(true);
  bayernEscudo1.setVisible(false);
  cityEscudo1.setVisible(true);
  realEscudo1.setVisible(false);
  psgEscudo1.setVisible(false);
  clube1Escolhido = "city";
  if (jogador === 1) {
    forçaClube1Escolhido = forçaCity1;
  }
}
function escolhaReal1() {
  psg1.setVisible(false);
  nomePsg1.setVisible(false);
  bayern1.setVisible(false);
  nomeBayern1.setVisible(false);
  real1.setVisible(true);
  nomeReal1.setVisible(true);
  city1.setVisible(false);
  nomeCity1.setVisible(false);
  bayernEscudo1.setVisible(false);
  cityEscudo1.setVisible(false);
  realEscudo1.setVisible(true);
  psgEscudo1.setVisible(false);
  clube1Escolhido = "real";
  if (jogador === 1) {
    forçaClube1Escolhido = forçaReal1;
  } 
}
//Função para retirar todos os nomes dos clubes da tela
function retirarTodosNomesClubes() {
  psg0.setVisible(false);
  nomePsg0.setVisible(false);
  bayern0.setVisible(false);
  nomeBayern0.setVisible(false);
  real0.setVisible(false);
  nomeReal0.setVisible(false);
  city0.setVisible(false);
  nomeCity0.setVisible(false);
  psg1.setVisible(false);
  nomePsg1.setVisible(false);
  bayern1.setVisible(false);
  nomeBayern1.setVisible(false);
  real1.setVisible(false);
  nomeReal1.setVisible(false);
  city1.setVisible(false);
  nomeCity1.setVisible(false);
  bayernEscudo0.setVisible(false);
  bayernEscudo1.setVisible(false);
  psgEscudo0.setVisible(false);
  psgEscudo1.setVisible(false);
  cityEscudo0.setVisible(false);
  cityEscudo1.setVisible(false);
  realEscudo0.setVisible(false);
  realEscudo1.setVisible(false);  
}
//Função para deixar a tela preta
function apagarTela() {
  fundo5.setVisible(false);
  textoCronometro.setVisible(false);
  textoPlacar.setVisible(false);
  textoPosseBola.setVisible(false);
  botaoSim.setVisible(false);
  botaoNao.setVisible(false);
  textoJogarDeNovo.setVisible(false);
  muller.setVisible(false);
  neymar.setVisible(false);
  benzema.setVisible(false);
  deBruyne.setVisible(false);
  parabensBayern0.setVisible(false);
  parabensBayern1.setVisible(false);
  parabensCity0.setVisible(false);
  parabensCity1.setVisible(false);
  parabensPsg0.setVisible(false);
  parabensPsg1.setVisible(false);
  parabensReal0.setVisible(false);
  parabensReal1.setVisible(false);
  textoSala1.setVisible(false);
  textoSala2.setVisible(false);
  textoSala3.setVisible(false);
  textoSala4.setVisible(false);
  textoSala5.setVisible(false);
  retirarTodosNomesClubes();
  botaoTelaCheia.setVisible(false);
  textoContadorVencedor0.setVisible(false);
  textoContadorVencedor1.setVisible(false);
  soundtrack.pause();
  somVencedor.pause();
}
//Função para definir os clubes que aparecem por padrão
function escolhaClubePadrao() {
  escolhaBayern0();
  escolhaCity1();
}
//Função para atualizar o texto do placar do jogo
function atualizarTextoPlacar() {
  textoPlacar.setText(gols0 + "  x  " + gols1);
}
//Função para atualizar o texto do contador de partidas ganhas
function atualizarContadorVencedor0() {
  contadorVencedor0++;
  textoContadorVencedor0.setText(contadorVencedor0);
}
function atualizarContadorVencedor1() {
  contadorVencedor1++;
  textoContadorVencedor1.setText(contadorVencedor1);
}
//Funções para mostrar as telas do jogo
//Escolhendo as salas
function aparecerFundo1() {
  fundo1.setVisible(true);
}
//Esperando o outro jogador
function aparecerFundo2() {
  fundo1.setVisible(false);
  fundo2.setVisible(true);
  botaoSala1.setVisible(false);
  botaoSala2.setVisible(false);
  botaoSala3.setVisible(false);
  botaoSala4.setVisible(false);
  botaoSala5.setVisible(false);
}
//Escolhendo os clubes
function aparecerFundo3() {
  fundo2.setVisible(false);
  fundo3.setVisible(true);
  botaoTelaCheia.setVisible(true);
  textoContadorVencedor0.setVisible(true);
  textoContadorVencedor1.setVisible(true);
  //Colocando o botão de cada player para escolher os seus respectivos clubes
  if (jogador === 1) {
    botao1.setVisible(true);
    botao0.setVisible(true);
    //Definindo a força dos clubes e enviando para o player 2
    definirForçaClubes();
  } else if (jogador === 2) {
    botao2.setVisible(true);
  }
  //Colocando os clubes padrão para escolher os clubes
  escolhaClubePadrao();
}
//Jogo acontecendo
function aparecerFundo4() {
  fundo3.setVisible(false);
  fundo4.setVisible(true);
  botao0.setVisible(false);
  botao1.setVisible(false);
  botao2.setVisible(false);
  textoCronometro.setVisible(true);
  textoPlacar.setVisible(true);
  textoPosseBola.setVisible(true);
  //<--- Iniciando o cronômetro --->
  //Define o tempo inicial
  tempoInicial = 0;
  if (jogador === 1) {
    passagemTempo = time.addEvent({
      delay: 80, //delay padrão = "delay: 80,"
      callback: function () {
        //A cada x ms (delay) adiciona 15 segundos do tempo inicial
        tempoInicial += 15; 
        textoCronometro.setText(formatarTempo(tempoInicial));
        //Sicronizando o tempo do jogo
        socket.emit("tempoInicial", sala, tempoInicial);
          //Fim da partida (90 minutos de jogo = 5400)
          if (tempoInicial === 5400) {
            aparecerFundo5();          
          }
          //Atualização da posse de bola
          if (tempoInicial % 495 === 0) {
            atualizarPosseBola();
          }
          //Atualização e criação dos valores do placar do jogo pelo jogador 1
          if (tempoInicial % 120 === 0) {
            //Possibilidade de ocorrer um gol
            chanceGol = Phaser.Math.Between(0, 20); 
            //Se o gol ocorrer, atualiza o placar
            if (chanceGol === 1) {
              atualizarPlacar();
            }
            //Se não tiver ocorrido nenhum gol durante a partida
            if (tempoInicial === 4800 && gols0 === 0 && gols1 === 0) {
              if (forçaClube0Escolhido > forçaClube1Escolhido) {
                gols0++;
                //Enviando valores gols para o player 2
                socket.emit("gols", sala, gols0, gols1);
                //Atualiza os valores do placar
                atualizarTextoPlacar();
              } else if (forçaClube0Escolhido < forçaClube1Escolhido) {
                gols1++;
                socket.emit("gols", sala, gols0, gols1);
                atualizarTextoPlacar();
              } else if (forçaClube0Escolhido === forçaClube1Escolhido) {
                gols0++;
                socket.emit("gols", sala, gols0, gols1);
                atualizarTextoPlacar();
              }
            }
          }
      },
      callbackScope: this,
      loop: true,
    });
  }
  //Aleatoriedade para definir o tipo de jogo que vai ocorrer, uma goleada, jogo pegado, virada
  tipoDeJogo = Phaser.Math.Between(0, 10);
}
function aparecerFundo5() {
  fundo4.setVisible(false);
  fundo5.setVisible(true);
  textoCronometro.setVisible(false);
  textoPlacar.setVisible(false);
  textoPosseBola.setVisible(false);
  textoJogarDeNovo.setVisible(true);
  if (jogador === 1) {
    //Coloca os botões específicos para cada player
    botaoSim.setVisible(true);
    botaoNao.setVisible(true);
    //Envia a mensagem para o player 2 finalizar a partida
    socket.emit("fimDaPartida", sala);
    //Definindo o resultado da partida
    if (gols0 > gols1) {
      clube0Vencendo();
      //Envia a mensagem para o player 2 mostrar o vencendo da partida
      socket.emit("clube0Vencendo", sala, contadorVencedor0);
    } else if (gols0 < gols1) {
      clube1Vencendo();
      socket.emit("clube1Vencendo", sala, contadorVencedor1);
    } else if (gols0 === gols1) {
      //Por enquanto não tem empate
      clube0Vencendo();
      socket.emit("clube0Vencendo", sala, contadorVencedor1);
    }
  }
  //Toca o som da tela de vitória, retira todas as informações do clube e o soundtrack
  somVencedor.play();
  soundtrack.pause();
  retirarTodosNomesClubes();
  //<--- Resetando as variáveis necessárias e o tempo para conseguir rejogar --->
  //Evita que tenha 2 ou mais cronômetros funcionando simultaneamente
  time.removeEvent(passagemTempo);
  posseBola0 = 50;
  posseBola1 = 50;
  textoPosseBola.setText(posseBola0 + "% | " + posseBola1 + "%"); //Atualiza os valores de posse de bola inciais
  gols0 = 0;
  gols1 = 0;
  atualizarTextoPlacar(); 
  contagem0 = 0;
}
//Função quando clica em jogar novamente
function aparecerFundo3Novamente() {
  //Coloca as imagens corretas
  fundo3.setVisible(true);
  fundo5.setVisible(false);
  textoCronometro.setVisible(false);
  textoPlacar.setVisible(false);
  textoPosseBola.setVisible(false);
  botaoSim.setVisible(false);
  botaoNao.setVisible(false);
  textoJogarDeNovo.setVisible(false);
  muller.setVisible(false);
  neymar.setVisible(false);
  benzema.setVisible(false);
  deBruyne.setVisible(false);
  parabensPsg0.setVisible(false);
  parabensBayern0.setVisible(false);
  parabensCity0.setVisible(false);
  parabensReal0.setVisible(false);
  parabensPsg1.setVisible(false);
  parabensBayern1.setVisible(false);
  parabensCity1.setVisible(false);
  parabensReal1.setVisible(false);
  //Colocando a soundtrack correta
  somVencedor.pause();
  soundtrack.play();
  if (jogador === 1) {
    botao0.setVisible(true);
    botao1.setVisible(true);
    //Definindo a força dos clubes de novo para definir o resultado da nova partida
    definirForçaClubes();
  } else if (jogador === 2) {
    botao2.setVisible(true);
  }
  //Coloca os clubes que aparecem primeiro para serem escolhidos
  escolhaClubePadrao();
}
//Aqui vai ser o decorrer da partida que no final o clube da esquerda vai ganhar, com aleatoriedades
function clube0Vencendo() {
  if (jogador === 1) {
    atualizarContadorVencedor0();
  }
  if (clube0Escolhido === "psg") {
    parabensPsg0.setVisible(true);
    neymar.setVisible(true);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube0Escolhido === "bayern") {
    parabensBayern0.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(true);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube0Escolhido === "city") {
    parabensCity0.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(true);
    benzema.setVisible(false);
  } else if (clube0Escolhido === "real") {
    parabensReal0.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(true);
  }
}
//Decorrer da partida que no final o clube da direita vai ganhar, com aleatoriedades
function clube1Vencendo() {
  if (jogador === 1) {
    atualizarContadorVencedor1();
  }
  if (clube1Escolhido === "psg") {
    parabensPsg1.setVisible(true);
    neymar.setVisible(true);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube1Escolhido === "bayern") {
    parabensBayern1.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(true);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube1Escolhido === "city") {
    parabensCity1.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(true);
    benzema.setVisible(false);
  } else if (clube1Escolhido === "real") {
    parabensReal1.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(true);
  }
}
//Definindo os valores que serão usados na partida para decidir o vencedor, adicionado a um valor aleatório
function definirForçaClubes() {
  forçaBayern0 = statusBayern.atk + Phaser.Math.Between(0, 10);
  forçaPsg0 = statusPsg.atk + Phaser.Math.Between(0, 10);
  forçaCity0 = statusCity.atk + Phaser.Math.Between(0, 10);
  forçaReal0 = statusReal.atk + Phaser.Math.Between(0, 10);
  forçaBayern1 = statusBayern.atk + Phaser.Math.Between(0, 10);
  forçaPsg1 = statusPsg.atk + Phaser.Math.Between(0, 10);
  forçaCity1 = statusCity.atk + Phaser.Math.Between(0, 10);
  forçaReal1 = statusReal.atk + Phaser.Math.Between(0, 10);
}
//Função para o cronômetro funcionar
function formatarTempo(segundos) {
  //Minutos
  minutos = Math.floor(segundos / 60);
  //Segundos
  parteEmSegundos = segundos % 60;
  //Adiciona zeros à esquerda para os segundos
  parteEmSegundos = parteEmSegundos.toString().padStart(2, "0");
  //Retorna o tempo formato para a função
  return `${minutos} : ${parteEmSegundos}`;
}
function atualizarPosseBola() {
  //Determina os valores de posse de bola dos clubes, fazendo com que quanto mais o jogo passa, menos varia a posse de bola
  if (jogador === 1) {
    if (contagem0 < 3) {
      posseBola0 = Phaser.Math.Between(35, 65);
      posseBola1 = 100 - posseBola0;
      textoPosseBola.setText(posseBola0 + "% | " + posseBola1 + "%"); //Atualiza os valores de posse de bola
    } else if (2 < contagem0 < 6) {
      posseBola0 = Phaser.Math.Between(45, 55);
      posseBola1 = 100 - posseBola0;
      textoPosseBola.setText(posseBola0 + "% | " + posseBola1 + "%"); 
    } else if (contagem0 > 5) {
      posseBola0 = Phaser.Math.Between(47, 53);
      posseBola1 = 100 - posseBola0;
      textoPosseBola.setText(posseBola0 + "% | " + posseBola1 + "%"); 
    }
    contagem0++;
    //Envia as variáveis de posse de bola do player 1
    socket.emit("posseBola", sala, posseBola0, posseBola1);
  }
} 
function atualizarPlacar() {
  //Se o clube0 for mais forte
  if (forçaClube0Escolhido > forçaClube1Escolhido) { 
    //Vitória fácil do clube vencedor
    if (tipoDeJogo > 2) {
      if (gols0 < 2) {
        gols0++;
        socket.emit("gols", sala, gols0, gols1);
        //Atualiza os valores do placar
        atualizarTextoPlacar();
      }
    }
    //Zebra
    if (tipoDeJogo === 0) {
      if (gols1 < 2) {
        gols1++;
        socket.emit("gols", sala, gols0, gols1);
        atualizarTextoPlacar();
      }
    }
    //Goleada do clube vencedor
    if (tipoDeJogo === 1) {
      if (gols0 < 5) {
        gols0++;
        socket.emit("gols", sala, gols0, gols1);
        atualizarTextoPlacar();
      }
    }
    //Vitória no final do jogo
    if (tipoDeJogo === 2) {
      //Não precisa fazer nada, o código já está feito no evento "passagemTempo"
    }
  } else if (forçaClube0Escolhido < forçaClube1Escolhido) {
    //Vitória tranquila do clube vencedor
    if (tipoDeJogo > 2) {
      if (gols1 < 2) {
        gols1++;
        socket.emit("gols", sala, gols0, gols1);
        atualizarTextoPlacar();
      }
    }
    //Zebra
    if (tipoDeJogo === 0) {
      if (gols0 < 2) {
        gols0++;
        socket.emit("gols", sala, gols0, gols1);
        atualizarTextoPlacar();
      }
    }
    //Goleada do clube vencedor
    if (tipoDeJogo === 1) {
      if (gols1 < 5) {
        gols1++;
        atualizarTextoPlacar();
      }
    }
    //Vitória no final do jogo
    if (tipoDeJogo === 2) {
      //Não precisa fazer nada, o código já está feito no cena1.update
    }
    //Se tiver um empate nas forças, por enquanto o clube0 ganha
  } else if (forçaClube0Escolhido === forçaClube1Escolhido) { 
    //Vitória tranquila do clube vencedor
    if (tipoDeJogo > 2) {
      if (gols0 < 2) {
        gols0++;
        socket.emit("gols", sala, gols0, gols1);
        atualizarTextoPlacar();
      }
    }
    //Zebra
    if (tipoDeJogo === 0) {
      if (gols1 < 2) {
        gols1++;
        socket.emit("gols", sala, gols0, gols1);
        atualizarTextoPlacar();
      }
    }
    //Goleada do clube vencedor
    if (tipoDeJogo === 1) {
      if (gols0 < 5) {
        gols0++;
        socket.emit("gols", sala, gols0, gols1);
        atualizarTextoPlacar();
      }
    }
    //Vitória no final do jogo
    if (tipoDeJogo === 2) {
      //Não precisa fazer nada, o código já está feito no cena1.update
    }
  }
}
cena1.preload = function () {
  //Carregando as imagens gerais que serão usados na cena1
  this.load.audio("soundtrack", "./assets/soundtrack.mp3");
  this.load.spritesheet("botaoTelaCheia", "./assets/botaoTelaCheia.png", {
    frameWidth: 50,
    frameHeight: 50,
  });
  //Carregando as imagens que serão usadas na cena de escolhendo a sala
  this.load.image("fundo1", "./assets/fundo1.png");
  this.load.image("fundo2", "./assets/fundo2.png"); //pedir para o Gilds um novo fundo
  this.load.image("botaoSala1", "./assets/botaoSala1.png");
  this.load.image("botaoSala2", "./assets/botaoSala2.png");
  this.load.image("botaoSala3", "./assets/botaoSala3.png");
  this.load.image("botaoSala4", "./assets/botaoSala4.png");
  this.load.image("botaoSala5", "./assets/botaoSala5.png");  
  this.load.image("textoSala1", "./assets/textoSala1.png");  
  this.load.image("textoSala2", "./assets/textoSala2.png");
  this.load.image("textoSala3", "./assets/textoSala3.png");
  this.load.image("textoSala4", "./assets/textoSala4.png");
  this.load.image("textoSala5", "./assets/textoSala5.png"); 
  //Carregando as imagens e áudio que serão usados na cena de escolhendo os clubes
  this.load.image("fundo3", "./assets/fundo3.png");
  this.load.image("botao0", "./assets/botao0.png");
  this.load.image("real", "./assets/clubes/real.png");
  this.load.image("city", "./assets/clubes/city.png");
  this.load.image("psg", "./assets/clubes/psg.png");
  this.load.image("bayern", "./assets/clubes/bayern.png");
  this.load.image("botao1", "./assets/botao1.png");
  this.load.image("nomeReal", "./assets/clubes/nomeReal.png");
  this.load.image("nomeCity", "./assets/clubes/nomeCity.png");
  this.load.image("nomePsg", "./assets/clubes/nomePsg.png");
  this.load.image("nomeBayern", "./assets/clubes/nomeBayern.png");
  this.load.audio("somMouse", "./assets/somMouse.mp3");
  this.load.image("bayernEscudo", "./assets/clubes/bayernEscudo.png");
  this.load.image("cityEscudo", "./assets/clubes/cityEscudo.png");
  this.load.image("psgEscudo", "./assets/clubes/psgEscudo.png");
  this.load.image("realEscudo", "./assets/clubes/realEscudo.png");
  //Carregando as imagens e áudio que serão usados na cena do jogo
  this.load.image("fundo4", "./assets/fundo4.png");
  //Carregando as imagens e áudio que serão usados na cena de fim do jogo
  this.load.image("fundo5", "./assets/fundo5.png");
  this.load.image("bayern0", "./assets/clubes/parabens/bayern0.png");
  this.load.image("bayern1", "./assets/clubes/parabens/bayern1.png");
  this.load.image("city0", "./assets/clubes/parabens/city0.png");
  this.load.image("city1", "./assets/clubes/parabens/city1.png");
  this.load.image("psg0", "./assets/clubes/parabens/psg0.png");
  this.load.image("psg1", "./assets/clubes/parabens/psg1.png");
  this.load.image("real0", "./assets/clubes/parabens/real0.png");
  this.load.image("real1", "./assets/clubes/parabens/real1.png");
  this.load.audio("somVencedor", "./assets/somVencedor.mp3");
  this.load.spritesheet("muller", "./assets/clubes/jogadores/muller.png", {
    frameWidth: 200,
    frameHeight: 200,
  });
  this.load.spritesheet("neymar", "./assets/clubes/jogadores/neymar.png", {
    frameWidth: 200,
    frameHeight: 200,
  });
  this.load.spritesheet("deBruyne", "./assets/clubes/jogadores/deBruyne.png", {
    frameWidth: 200,
    frameHeight: 200,
  });
  this.load.spritesheet("benzema", "./assets/clubes/jogadores/benzema.png", {
    frameWidth: 200,
    frameHeight: 200,
  });
  this.load.image("textoJogarDeNovo", "./assets/texto/textoJogarDeNovo.png");
  this.load.image("botaoSim", "./assets/texto/botaoSim.png");
  this.load.image("botaoNao", "./assets/texto/botaoNao.png");
};
cena1.create = function () {
  //Deixando a variável tempo utilizável para o cena1
  time = this.time;
  //Adicionando a musica no jogo
  soundtrack = this.sound.add("soundtrack");
  soundtrack.loop = true;
  soundtrack.play();
  //Definindo as imagens de fundo das cenas do jogo
  fundo1 = this.add.image(400, 300, "fundo1").setVisible(false);
  fundo2 = this.add.image(400, 300, "fundo2").setVisible(false);
  fundo3 = this.add.image(400, 300, "fundo3").setVisible(false);
  fundo4 = this.add.image(400, 300, "fundo4").setVisible(false);
  fundo5 = this.add.image(400, 300, "fundo5").setVisible(false);
  //<--- Cena de escolhendo os clubes --->
  //Define e adiciona os botões da cena1
  botao0 = this.add
    .image(400, 300, "botao0")
    .setInteractive()
    .setVisible(false);
  botao1 = this.add.image(280, 80, "botao1").setInteractive().setVisible(false);
  botao2 = this.add.image(730, 82, "botao1").setInteractive().setVisible(false);
  //Adicionando os textos de seleção dos clubes do lado esquerdo
  real0 = this.add.image(160, 80, "real").setVisible(false);
  city0 = this.add.image(160, 83, "city").setVisible(false);
  psg0 = this.add.image(160, 82, "psg").setVisible(false);
  bayern0 = this.add.image(174, 84, "bayern").setVisible(false);
  nomeBayern0 = this.add.image(150, 335, "nomeBayern").setVisible(false);
  nomeCity0 = this.add.image(152, 335, "nomeCity").setVisible(false);
  nomePsg0 = this.add.image(149, 338, "nomePsg").setVisible(false);
  nomeReal0 = this.add.image(146, 334, "nomeReal").setVisible(false);
  //Adicionando os textos de seleção dos clubes do lado direito
  real1 = this.add.image(610, 80, "real").setVisible(false);
  city1 = this.add.image(610, 83, "city").setVisible(false);
  psg1 = this.add.image(610, 82, "psg").setVisible(false);
  bayern1 = this.add.image(625, 84, "bayern").setVisible(false);
  nomeBayern1 = this.add.image(598, 335, "nomeBayern").setVisible(false);
  nomeCity1 = this.add.image(600, 335, "nomeCity").setVisible(false);
  nomePsg1 = this.add.image(597, 338, "nomePsg").setVisible(false);
  nomeReal1 = this.add.image(594, 334, "nomeReal").setVisible(false);
  //Adicionando os escudos dos clubes
  bayernEscudo0 = this.add.image(70, 80, "bayernEscudo").setVisible(false);
  cityEscudo0 = this.add.image(70, 82, "cityEscudo").setVisible(false);
  psgEscudo0 = this.add.image(70, 82, "psgEscudo").setVisible(false);
  realEscudo0 = this.add.image(70, 82, "realEscudo").setVisible(false);
  bayernEscudo1 = this.add.image(520, 82, "bayernEscudo").setVisible(false);
  cityEscudo1 = this.add.image(520, 82, "cityEscudo").setVisible(false);
  psgEscudo1 = this.add.image(520, 82, "psgEscudo").setVisible(false);
  realEscudo1 = this.add.image(520, 82, "realEscudo").setVisible(false);
  //Adicionando os textos de vitórias de cada clube
  parabensBayern0 = this.add.image(400, 95, "bayern0").setVisible(false);
  parabensBayern1 = this.add.image(400, 95, "bayern1").setVisible(false);
  parabensCity0 = this.add.image(400, 95, "city0").setVisible(false);
  parabensCity1 = this.add.image(400, 95, "city1").setVisible(false);
  parabensPsg0 = this.add.image(400, 95, "psg0").setVisible(false);
  parabensPsg1 = this.add.image(400, 95, "psg1").setVisible(false);
  parabensReal0 = this.add.image(400, 95, "real0").setVisible(false);
  parabensReal1 = this.add.image(400, 95, "real1").setVisible(false);
  //Adicionando o som do mouse para sair clicar nos botões
  somMouse = this.sound.add("somMouse");
  //Adicionando os contadores de partidas ganhas de cada player
  textoContadorVencedor0 = this.add
    .text(625, 565, contadorVencedor0, fonteTexto2)
    .setVisible(false);
  textoContadorVencedor1 = this.add
    .text(753, 565, contadorVencedor1, fonteTexto3)
    .setVisible(false);
  //Botão de ativar/desativar tela cheia
  botaoTelaCheia = this.add
    .image(40, 600 - 38, "botaoTelaCheia", 0)
    .setOrigin(1, 0)
    .setScale(0.7)
    .setInteractive()
    .setScrollFactor(0);
  botaoTelaCheia.on(
    "pointerup",
    function () {
      //Som do click no botão
      somMouse.play();
      if (this.scale.isFullscreen) {
        botaoTelaCheia.setFrame(0);
        this.scale.stopFullscreen();
      } else {
        botaoTelaCheia.setFrame(1);
        this.scale.startFullscreen();
      }
    },
    this
  );
  //Tecla "F" ativa/desativa tela cheia
  teclaF = this.input.keyboard.addKey("F");
  teclaF.on(
    "down",
    function () {
      if (this.scale.isFullscreen) {
        botaoTelaCheia.setFrame(0);
        this.scale.stopFullscreen();
      } else {
        botaoTelaCheia.setFrame(1);
        this.scale.startFullscreen();
      }
    },
    this
  );
  //<--- Cena do jogo acontecendo --->
  //Adiciona o cronômetro
  textoCronometro = this.add
    .text(351, 187, formatarTempo(this.tempoInicial), fonteTexto0)
    .setVisible(false);
  //Adiciona o placar
  textoPlacar = this.add
    .text(356, 325, gols0 + "  x  " + gols1, fonteTexto0)
    .setVisible(false);
  //Adiciona o texto da posse de bola
  textoPosseBola = this.add
    .text(343, 473, posseBola0 + "% | " + posseBola1 + "%", fonteTexto1)
    .setVisible(false);
  //<--- Cena do fim do jogo --->
  //Botões para jogar novamente
  botaoSim = this.add
    .image(300, 580, "botaoSim")
    .setInteractive()
    .setVisible(false);
  botaoNao = this.add
    .image(358, 580, "botaoNao")
    .setInteractive()
    .setVisible(false);
  textoJogarDeNovo = this.add
    .image(180, 580, "textoJogarDeNovo")
    .setVisible(false);
  //Animação dos vencedores
  muller = this.physics.add.sprite(600, 450, "muller").setVisible(false);
  neymar = this.physics.add.sprite(600, 450, "neymar").setVisible(false);
  deBruyne = this.physics.add.sprite(600, 450, "deBruyne").setVisible(false);
  benzema = this.physics.add.sprite(600, 450, "benzema").setVisible(false);
  this.anims.create({
    key: "vitoriaMuller",
    frames: this.anims.generateFrameNumbers("muller", {
      start: 0,
      end: 4,
    }),
    frameRate: 5,
    repeat: -1,
  });
  this.anims.create({
    key: "vitoriaNeymar",
    frames: this.anims.generateFrameNumbers("neymar", {
      start: 0,
      end: 4,
    }),
    frameRate: 5,
    repeat: -1,
  });
  this.anims.create({
    key: "vitoriaDeBruyne",
    frames: this.anims.generateFrameNumbers("deBruyne", {
      start: 0,
      end: 4,
    }),
    frameRate: 5,
    repeat: -1,
  });
  this.anims.create({
    key: "vitoriaBenzema",
    frames: this.anims.generateFrameNumbers("benzema", {
      start: 0,
      end: 4,
    }),
    frameRate: 5,
    repeat: -1,
  });
  //Ativando as animações
  muller.anims.play("vitoriaMuller", true);
  deBruyne.anims.play("vitoriaDeBruyne", true);
  benzema.anims.play("vitoriaBenzema", true);
  neymar.anims.play("vitoriaNeymar", true);
  //Adicionando o som final
  somVencedor = this.sound.add("somVencedor");
  somVencedor.loop = true;
  //Mostra no início apenas a tela de escolha de salas
  aparecerFundo1();

  //Conectar ao servidor do Heroku via socket.io (WebSocket). Link do Heroku: "https://secure-meadow-69283.herokuapp.com/"
  socket = io("https://secure-meadow-69283.herokuapp.com/");

  //Criando e colocando os botões para escolher a sala
  botaoSala1 = this.add.image(80, 300, "botaoSala1").setInteractive();
  botaoSala2 = this.add.image(240, 300, "botaoSala2").setInteractive();
  botaoSala3 = this.add.image(400, 300, "botaoSala3").setInteractive();
  botaoSala4 = this.add.image(560, 300, "botaoSala4").setInteractive();
  botaoSala5 = this.add.image(720, 300, "botaoSala5").setInteractive();
  //Criando as indicações sobre qual sala foi escolhida
  textoSala1 = this.add.image(71, 28, "textoSala1").setVisible(false);
  textoSala2 = this.add.image(71, 28, "textoSala2").setVisible(false);
  textoSala3 = this.add.image(71, 28, "textoSala3").setVisible(false);
  textoSala4 = this.add.image(71, 28, "textoSala4").setVisible(false);
  textoSala5 = this.add.image(71, 28, "textoSala5").setVisible(false);
  //Quando clicar em cada botão, vai para uma sala específica
  botaoSala1.on("pointerdown", function () {
    somMouse.play();
    sala = 1;
    socket.emit("entrarNaSala", sala);
    aparecerFundo2();
    textoSala1.setVisible(true);
  });
  botaoSala2.on("pointerdown", function () {
    somMouse.play();
    sala = 2;
    socket.emit("entrarNaSala", sala);
    aparecerFundo2();
    textoSala2.setVisible(true);
  });
  botaoSala3.on("pointerdown", function () {
    somMouse.play();
    sala = 3;
    socket.emit("entrarNaSala", sala);
    aparecerFundo2();
    textoSala3.setVisible(true);
  });
  botaoSala4.on("pointerdown", function () {
    somMouse.play();
    sala = 4;
    socket.emit("entrarNaSala", sala);
    aparecerFundo2();
    textoSala4.setVisible(true);
  });
  botaoSala5.on("pointerdown", function () {
    somMouse.play();
    sala = 5;
    socket.emit("entrarNaSala", sala);
    aparecerFundo2();
    textoSala5.setVisible(true);
  });

  //Defindo os players e a comunicação
  socket.on("jogadores", function (jogadores) {
    //Dispara evento quando player entrar na partida
    if (jogadores.primeiro === socket.id) {
      //Define o primeiro player
      jogador = 1;
      //Estabelece a comunicação
      navigator.mediaDevices
        .getUserMedia({ video: false, audio: true })
        .then((stream) => {
          midias = stream;
        })
        .catch((error) => console.log(error));
    } else if (jogadores.segundo === socket.id) {
      //Define o segundo player
      jogador = 2;
      //Muda a tela do segundo player quando se conecta
      aparecerFundo3();
      //Envia a mensagem para o primeiro player mudar a tela também
      socket.emit("escolhaClubes", sala);
      //Conectando a comunicação dos players
      navigator.mediaDevices
        .getUserMedia({ video: false, audio: true })
        .then((stream) => {
          midias = stream;
          localConnection = new RTCPeerConnection(ice_servers);
          midias
            .getTracks()
            .forEach((track) => localConnection.addTrack(track, midias));
          localConnection.onicecandidate = ({ candidate }) => {
            candidate &&
              socket.emit("candidate", sala, jogadores.primeiro, candidate);
          };
          console.log(midias);
          localConnection.ontrack = ({ streams: [midias] }) => {
            audio.srcObject = midias;
          };
          localConnection
            .createOffer()
            .then((offer) => localConnection.setLocalDescription(offer))
            .then(() => {
              socket.emit(
                "offer",
                sala,
                jogadores.primeiro,
                localConnection.localDescription
              );
            });
        })
        .catch((error) => console.log(error));
    }
    //Player 1 comanda o jogo e envia os valores para o outro player apresentar
    if (jogador === 1) {
      //Sicronizando as escolhas dos clubes da direita
      socket.on("contagemClube1", (contagemClube1) => {
        if (contagemClube1 === 0) {
          escolhaBayern1();
        } else if (contagemClube1 === 1) {
          escolhaReal1();
        } else if (contagemClube1 === 2) {
          escolhaCity1();
        } else if (contagemClube1 === 3) {
          escolhaPsg1();
        }
      });
      //Sicronizando as telas quando o segundo jogador é conectado
      socket.on("escolhaClubes", () => {
        aparecerFundo3();
      });
      //Mostra os players conectados
      //console.log(jogadores);
      //Player 1 cria o jogo e envia para o outro player apresentar
    } else if (jogador === 2) {
      //Sicronizando as escolhas dos clubes da esquerda
      socket.on("contagemClube0", (contagemClube0) => {
        if (contagemClube0 === 0) {
          escolhaBayern0();
        } else if (contagemClube0 === 1) {
          escolhaReal0();
        } else if (contagemClube0 === 2) {
          escolhaCity0();
        } else if (contagemClube0 === 3) {
          escolhaPsg0();
        }
      });
      //Recebendo o comunicado do player 1 para começar a partida
      socket.on("comecarPartida", () => {
        aparecerFundo4();
      });
      socket.on("fimDaPartida", () => {
        aparecerFundo5();
      });
      //Recebendo o comunicado do player 1 para rejogar a partida
      socket.on("jogarNovamente", () => {
        aparecerFundo3Novamente();
      });
      //Recebendo o comunicado do player 1 para acabar com a partida
      socket.on("fimDoJogo", () => {
        apagarTela();
      });
      //Atualizando os valores de gols e posse de bola gerados pelo player 1
      socket.on("gols", (gols0, gols1) => {
        textoPlacar.setText(gols0 + "  x  " + gols1);
      });
      socket.on("posseBola", (posseBola0, posseBola1) => {
        textoPosseBola.setText(posseBola0 + "% | " + posseBola1 + "%");
      });
      //Sicronizando o cronômetro do jogo
      socket.on("tempoInicial", (tempoInicial) => {
        textoCronometro.setText(formatarTempo(tempoInicial));
      });
      //Sicronizando o vencedor da partida
      socket.on("clube0Vencendo", (contadorVencedor0) => {
        clube0Vencendo();
        textoContadorVencedor0.setText(contadorVencedor0);
      });
      socket.on("clube1Vencendo", (contadorVencedor1) => {
        clube1Vencendo();
        textoContadorVencedor1.setText(contadorVencedor1);
      });
    }
  });
  //Recebendo as informações para estabelecer a comunicação
  socket.on("offer", (socketId, description) => {
    remoteConnection = new RTCPeerConnection(ice_servers);
    midias
      .getTracks()
      .forEach((track) => remoteConnection.addTrack(track, midias));
    remoteConnection.onicecandidate = ({ candidate }) => {
      candidate && socket.emit("candidate", sala, socketId, candidate);
    };
    remoteConnection.ontrack = ({ streams: [midias] }) => {
      audio.srcObject = midias;
    };
    remoteConnection
      .setRemoteDescription(description)
      .then(() => remoteConnection.createAnswer())
      .then((answer) => remoteConnection.setLocalDescription(answer))
      .then(() => {
        socket.emit(
          "answer",
          sala,
          socketId,
          remoteConnection.localDescription
        );
      });
  });
  socket.on("answer", (description) => {
    localConnection.setRemoteDescription(description);
  });
  socket.on("candidate", (candidate) => {
    const conn = localConnection || remoteConnection;
    conn.addIceCandidate(new RTCIceCandidate(candidate));
  });
  //Fazendo a escolha dos clubes da esquerda por meio dos botões
  botao1.on("pointerdown", function () {
    //Som de click do mouse
    somMouse.play();
    //Escolhando os clubes
    switch (contagemClube0) {
      case 0:
        escolhaBayern0();
        break;

      case 1:
        escolhaReal0();
        break;

      case 2:
        escolhaCity0();
        break;

      case 3:
        escolhaPsg0();
        break;
    }
    //Envia o clube escolhido para o player 2
    socket.emit("contagemClube0", sala, contagemClube0);
    contagemClube0++;
    contagemClube0 = contagemClube0 % 4;
  });
  //Fazendo a escolha dos clubes da direita por meio dos botões
  botao2.on("pointerdown", function () {
    somMouse.play();
    //Escolhando os clubes
    switch (contagemClube1) {
      case 0:
        escolhaBayern1();
        break;

      case 1:
        escolhaReal1();
        break;

      case 2:
        escolhaCity1();
        break;

      case 3:
        escolhaPsg1();
        break;
    }
    //Envia o clube escolhido para o player 1
    socket.emit("contagemClube1", sala, contagemClube1);
    contagemClube1++;
    contagemClube1 = contagemClube1 % 4;
  });
  //Adicionando os botões de sim e não de jogar novamente
  botaoSim.on(
    "pointerdown",
    function () {
      somMouse.play();
      //Volta para escolher os clubes para jogar a partida novamente
      aparecerFundo3Novamente();
      //Envia o comunicado para o player 2 jogar novamente
      socket.emit("jogarNovamente", sala);
    },
    this
  );
  botaoNao.on(
    "pointerdown",
    function () {
      somMouse.play();
      //Finaliza o jogo
      apagarTela();
      //Envia o comunicado para o player 2 encerrar a partida
      socket.emit("fimDoJogo", sala);
    },
    this
  );
  //Clique do botão para ir para a próxima tela
  botao0.on(
    "pointerdown",
    function () {
      somMouse.play();
      //Inicia a partida
      aparecerFundo4();
      socket.emit("comecarPartida", sala);
    },
    this
  );
};
cena1.update = function () {};
export { cena1 };