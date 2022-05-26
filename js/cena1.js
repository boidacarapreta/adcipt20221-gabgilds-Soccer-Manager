import { cena2 } from "./cena2.js";

var cena1 = new Phaser.Scene("Cena 1");

//variáveis gerais da cena1
var contadorPartidas = 0;
var textoContadorPartidas0;
var textoContadorPartidas1;
var soundtrack;
var ice_servers = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};
var localConnection;
var remoteConnection;
var midias;
const audio = document.querySelector("audio");
var botaoTelaCheia;
var teclaF;

//variáveis da cena de escolher os clubes
var fundo1;
var botao0;
var botao1;
var botao2;

var real0;
var city0;
var bayern0;
var psg0;
var nomebayern0;
var nomecity0;
var nomepsg0;
var nomereal0;
var real1;
var city1;
var bayern1;
var psg1;
var nomebayern1;
var nomecity1;
var nomepsg1;
var nomereal1;
var somMouse;

var contagemClube0 = 0;
var contagemClube1 = 0;

//variáveis da cena do jogo acontecendo
var fundo2;
var textoCronometro;
var passagemTempo;
var fonteTexto0 = { font: "bold 35px Mont", fill: "#000000" };
var fonteTexto1 = { font: "bold 28px Arial", fill: "#FFFFFF" };
var fonteTexto2 = { font: "bold 28px Mont", fill: "#000000" };
var textoPlacar;
var textoPosseBola;
var posseBola0;
var posseBola1;
var minutos;
var parteEmSegundos;
var bayern0;
var city1;
var nomebayern0;
var nomecity1;
var tempoInicial;
var time;
var chanceGol;
var gols0 = 0;
var gols1 = 0;
var segundos;
var contagem0 = 0;
var jogador;

//variáveis e funções para o funcionamento da partida
var statusBayern = { atk: 92, mid: 85, def: 81, ovr: 84 };
var statusPsg = { atk: 89, mid: 83, def: 85, ovr: 86 };
var statusCity = { atk: 85, mid: 85, def: 86, ovr: 85 };
var statusReal = { atk: 84, mid: 85, def: 83, ovr: 84 };
var clube0Escolhido;
var clube1Escolhido;
var forçaBayern0;
var forçaPsg0;
var forçaCity0;
var forçaReal0;
var forçaBayern1;
var forçaPsg1;
var forçaCity1;
var forçaReal1;

//variáveis da cena do fim de jogo
var fundo3;
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
var botaoJogarDeNovo;

//funções da cena de escolher os clubes
function escolhapsg0() {
  psg0.setVisible(true);
  nomepsg0.setVisible(true);
  bayern0.setVisible(false);
  nomebayern0.setVisible(false);
  real0.setVisible(false);
  nomereal0.setVisible(false);
  city0.setVisible(false);
  nomecity0.setVisible(false);
  clube0Escolhido = forçaPsg0;
}
function escolhabayern0() {
  psg0.setVisible(false);
  nomepsg0.setVisible(false);
  bayern0.setVisible(true);
  nomebayern0.setVisible(true);
  real0.setVisible(false);
  nomereal0.setVisible(false);
  city0.setVisible(false);
  nomecity0.setVisible(false);
  clube0Escolhido = forçaBayern0;
}
function escolhacity0() {
  psg0.setVisible(false);
  nomepsg0.setVisible(false);
  bayern0.setVisible(false);
  nomebayern0.setVisible(false);
  real0.setVisible(false);
  nomereal0.setVisible(false);
  city0.setVisible(true);
  nomecity0.setVisible(true);
  clube0Escolhido = forçaCity0;
}
function escolhareal0() {
  psg0.setVisible(false);
  nomepsg0.setVisible(false);
  bayern0.setVisible(false);
  nomebayern0.setVisible(false);
  real0.setVisible(true);
  nomereal0.setVisible(true);
  city0.setVisible(false);
  nomecity0.setVisible(false);
  clube0Escolhido = forçaReal0;
}
function escolhapsg1() {
  psg1.setVisible(true);
  nomepsg1.setVisible(true);
  bayern1.setVisible(false);
  nomebayern1.setVisible(false);
  real1.setVisible(false);
  nomereal1.setVisible(false);
  city1.setVisible(false);
  nomecity1.setVisible(false);
  clube1Escolhido = forçaPsg1;
}
function escolhabayern1() {
  psg1.setVisible(false);
  nomepsg1.setVisible(false);
  bayern1.setVisible(true);
  nomebayern1.setVisible(true);
  real1.setVisible(false);
  nomereal1.setVisible(false);
  city1.setVisible(false);
  nomecity1.setVisible(false);
  clube1Escolhido = forçaBayern1;
}
function escolhacity1() {
  psg1.setVisible(false);
  nomepsg1.setVisible(false);
  bayern1.setVisible(false);
  nomebayern1.setVisible(false);
  real1.setVisible(false);
  nomereal1.setVisible(false);
  city1.setVisible(true);
  nomecity1.setVisible(true);
  clube1Escolhido = forçaCity1;
}
function escolhareal1() {
  psg1.setVisible(false);
  nomepsg1.setVisible(false);
  bayern1.setVisible(false);
  nomebayern1.setVisible(false);
  real1.setVisible(true);
  nomereal1.setVisible(true);
  city1.setVisible(false);
  nomecity1.setVisible(false);
  clube1Escolhido = forçaReal1;
}

//função para retirar todos os clubes da tela
function retirarTodosClubes() {
  psg0.setVisible(false);
  nomepsg0.setVisible(false);
  bayern0.setVisible(false);
  nomebayern0.setVisible(false);
  real0.setVisible(false);
  nomereal0.setVisible(false);
  city0.setVisible(false);
  nomecity0.setVisible(false);
  psg1.setVisible(false);
  nomepsg1.setVisible(false);
  bayern1.setVisible(false);
  nomebayern1.setVisible(false);
  real1.setVisible(false);
  nomereal1.setVisible(false);
  city1.setVisible(false);
  nomecity1.setVisible(false);
}

//função para definir os clubes que aparecem por padrão
function escolhaClubePadrao() {
  escolhabayern0();
  escolhacity1();
}

//funções para mostrar as telas do jogo
function aparecerFundo1() {
  fundo1.setVisible(true);
  fundo2.setVisible(false);
  fundo3.setVisible(false);

  textoCronometro.setVisible(false);
  textoPlacar.setVisible(false);
  textoPosseBola.setVisible(false);

  botaoSim.setVisible(false);
  botaoNao.setVisible(false);
  botaoJogarDeNovo.setVisible(false);
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
}
function aparecerFundo2() {
  fundo1.setVisible(false);
  fundo2.setVisible(true);

  botao0.setVisible(false);
  botao1.setVisible(false);
  botao2.setVisible(false);

  textoCronometro.setVisible(true);
  textoPlacar.setVisible(true);
  textoPosseBola.setVisible(true);

  //iniciando o cronometro
  //define o tempo inicial
  tempoInicial = 0;
  passagemTempo = time.addEvent({
    delay: 80,
    callback: function () {
      tempoInicial += 15; //A cada 50 ms adiciona 15 segundos do tempo inicial
      textoCronometro.setText(formatarTempo(tempoInicial));
    },
    callbackScope: this,
    loop: true,
  });
}

function aparecerFundo3() {
  fundo2.setVisible(false);
  fundo3.setVisible(true);

  textoCronometro.setVisible(false);
  textoPlacar.setVisible(false);
  textoPosseBola.setVisible(false);

  botaoSim.setVisible(true);
  botaoNao.setVisible(true);
  botaoJogarDeNovo.setVisible(true);

  //toca o som da tela de vitória, retira todas as informações do clube e o soundtrack
  somVencedor.play();
  soundtrack.pause();
  retirarTodosClubes();

  //definindo o resultado da partida
  if (clube0Escolhido > clube1Escolhido) {
    clube0vencendo();
  } else if (clube0Escolhido < clube1Escolhido) {
    clube1vencendo();
  } else if (clube0Escolhido === clube1Escolhido) {
    clube0vencendo();
  }

  //resetando o tempo do cronômetro do jogo
  tempoInicial = undefined;

  //resetando a posse de bola e o placar
  posseBola0 = 50;
  posseBola1 = 50;
  gols0 = 0;
  gols1 = 0;

  console.log("psg0: " + forçaPsg0);
  console.log("bayern0: " + forçaBayern0);
  console.log("city0: " + forçaCity0);
  console.log("real0: " + forçaReal0);
  console.log("psg1: " + forçaPsg1);
  console.log("bayern1: " + forçaBayern1);
  console.log("city1: " + forçaCity1);
  console.log("real1: " + forçaReal1);
  console.log("-----");
}

//função quando clica em jogar novamente
function aparecerFundo1Novamente() {
  //definindo a força dos clubes de novo para definir o resultado da nova partida
  definindoForçaClubes();

  fundo1.setVisible(true);
  fundo2.setVisible(false);
  fundo3.setVisible(false);

  textoCronometro.setVisible(false);
  textoPlacar.setVisible(false);
  textoPosseBola.setVisible(false);

  botaoSim.setVisible(false);
  botaoNao.setVisible(false);
  botaoJogarDeNovo.setVisible(false);
  muller.setVisible(false);
  neymar.setVisible(false);
  benzema.setVisible(false);
  deBruyne.setVisible(false);

  botao0.setVisible(true);
  botao1.setVisible(true);
  botao2.setVisible(true);

  parabensPsg0.setVisible(false);
  parabensBayern0.setVisible(false);
  parabensCity0.setVisible(false);
  parabensReal0.setVisible(false);
  parabensPsg1.setVisible(false);
  parabensBayern1.setVisible(false);
  parabensCity1.setVisible(false);
  parabensReal1.setVisible(false);

  //colocando o soundtrack novamente e tirando a música de vitória
  somVencedor.pause();
  soundtrack.play();

  escolhaClubePadrao();

  //adicionando valor no contador de partidas
  contadorPartidas++;
  textoContadorPartidas1.setText(contadorPartidas);
}

function clube0vencendo() {
  //aqui vai ser o decorrer da partida que no final o clube da esquerda vai ganhar, com aleatoriedades
  if (clube0Escolhido === forçaPsg0) {
    parabensPsg0.setVisible(true);
    neymar.setVisible(true);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube0Escolhido === forçaBayern0) {
    parabensBayern0.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(true);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube0Escolhido === forçaCity0) {
    parabensCity0.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(true);
    benzema.setVisible(false);
  } else if (clube0Escolhido === forçaReal0) {
    parabensReal0.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(true);
  }
  console.log(clube0Escolhido);
}

function clube1vencendo() {
  //aqui vai ser o decorrer da partida que no final o clube da direita vai ganhar, com aleatoriedades
  if (clube1Escolhido === forçaPsg1) {
    parabensPsg1.setVisible(true);
    neymar.setVisible(true);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube1Escolhido === forçaBayern1) {
    parabensBayern1.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(true);
    deBruyne.setVisible(false);
    benzema.setVisible(false);
  } else if (clube1Escolhido === forçaCity1) {
    parabensCity1.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(true);
    benzema.setVisible(false);
  } else if (clube1Escolhido === forçaReal1) {
    parabensReal1.setVisible(true);
    neymar.setVisible(false);
    muller.setVisible(false);
    deBruyne.setVisible(false);
    benzema.setVisible(true);
  }
}

//definindo os valores que serão usados na partida para decidir o vencedor, adicionado a um valor aleatório
function definindoForçaClubes() {
  forçaBayern0 = statusBayern.atk + Phaser.Math.Between(0, 10);
  forçaPsg0 = statusPsg.atk + Phaser.Math.Between(0, 10);
  forçaCity0 = statusCity.atk + Phaser.Math.Between(0, 10);
  forçaReal0 = statusReal.atk + Phaser.Math.Between(0, 10);
  forçaBayern1 = statusBayern.atk + Phaser.Math.Between(0, 10);
  forçaPsg1 = statusPsg.atk + Phaser.Math.Between(0, 10);
  forçaCity1 = statusCity.atk + Phaser.Math.Between(0, 10);
  forçaReal1 = statusReal.atk + Phaser.Math.Between(0, 10);
}

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
  //determina os valores de posse de bola dos clubes, fazendo com que quanto mais o jogo passa, menos varia a posse de bola
  if (contagem0 < 2) {
    posseBola0 = Phaser.Math.Between(20, 80);
    posseBola1 = 100 - posseBola0;
    textoPosseBola.setText(posseBola0 + "%  " + posseBola1 + "%"); //Atualiza os valores de posse de bola
  } else if (1 < contagem0 < 5) {
    posseBola0 = Phaser.Math.Between(45, 55);
    posseBola1 = 100 - posseBola0;
    textoPosseBola.setText(posseBola0 + "%  " + posseBola1 + "%"); //Atualiza os valores de posse de bola
  } else if (contagem > 5) {
    posseBola0 = Phaser.Math.Between(47, 53);
    posseBola1 = 100 - posseBola0;
    textoPosseBola.setText(posseBola0 + "%  " + posseBola1 + "%"); //Atualiza os valores de posse de bola
  }
  contagem0++;
}

function atualizarPlacar() {
  if (clube0Escolhido > clube1Escolhido) {
    //se o clube0 for ganhar
    gols0++;
    textoPlacar.setText(gols0 + "     " + gols1); //Atualiza os valores do placar
    if (gols0 > 3) {
      gols1++;
      textoPlacar.setText(gols0 + "     " + gols1);
    }
  } else if (clube0Escolhido < clube1Escolhido) {
    //se o clube1 for ganhar
    gols1++;
    textoPlacar.setText(gols0 + "     " + gols1);
    if (gols1 > 3) {
      gols0++;
      textoPlacar.setText(gols0 + "     " + gols1);
    }
  } else if (clube0Escolhido === clube1Escolhido) {
    //se tiver um empate nas forças, por enquanto o clube0 ganha
    gols0++;
    textoPlacar.setText(gols0 + "     " + gols1);
    if (gols0 < 4) {
      gols1++;
      textoPlacar.setText(gols0 + "     " + gols1);
    }
  }
}

cena1.preload = function () {
  //carregando as imagens gerais que serão usados na cena1
  this.load.image(
    "textoContadorPartidas",
    "./assets/texto/textoContadorPartidas.png"
  );
  this.load.audio("soundtrack", "./assets/soundtrack.mp3");
  this.load.image("botaoTelaCheia", "./assets/botaoTelaCheia.png");

  //carregando as imagens e áudio que serão usados na cena de escolhendo os clubes
  this.load.image("fundo1", "./assets/fundo1.png");
  this.load.image("botao0", "./assets/botao0.png");
  this.load.image("real", "./assets/clubes/real.png");
  this.load.image("city", "./assets/clubes/city.png");
  this.load.image("psg", "./assets/clubes/psg.png");
  this.load.image("bayern", "./assets/clubes/bayern.png");
  this.load.image("botao1", "./assets/botao1.png");
  this.load.image("nomereal", "./assets/clubes/nomereal.png");
  this.load.image("nomecity", "./assets/clubes/nomecity.png");
  this.load.image("nomepsg", "./assets/clubes/nomepsg.png");
  this.load.image("nomebayern", "./assets/clubes/nomebayern.png");
  this.load.audio("somMouse", "./assets/somMouse.mp3");

  //carregando as imagens e áudio que serão usados na cena do jogo
  this.load.image("fundo2", "./assets/fundo2.png");

  //carregando as imagens e áudio que serão usados na cena de fim do jogo
  this.load.image("fundo3", "./assets/fundo3.png");

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

  this.load.image("botaoJogarDeNovo", "./assets/texto/botaoJogarDeNovo.png");
  this.load.image("botaoSim", "./assets/texto/botaoSim.png");
  this.load.image("botaoNao", "./assets/texto/botaoNao.png");
};

cena1.create = function () {
  //definindo a força dos clubes para definir o resultado da partida
  definindoForçaClubes();

  //deixando a variável tempo utilizável para o cena1
  time = this.time;

  //colocando a musica no jogo
  soundtrack = this.sound.add("soundtrack");
  soundtrack.loop = true;
  soundtrack.play();

  //definindo as imagens de fundo da cena de escolhendo os clubes, da partida e do fim do jogo
  fundo1 = this.add.image(400, 300, "fundo1");
  fundo2 = this.add.image(400, 300, "fundo2");
  fundo3 = this.add.image(400, 300, "fundo3");

  // <------ Cena de escolhendo os clubes ------->

  //define e adiciona os botões da cena1
  botao0 = this.add.image(400, 300, "botao0").setInteractive();
  botao1 = this.add.image(280, 70, "botao1").setInteractive();
  botao2 = this.add.image(735, 70, "botao1").setInteractive();

  //colocando os textos de seleção dos clubes do lado esquerdo
  real0 = this.add.image(110, 70, "real");
  city0 = this.add.image(100, 70, "city");
  psg0 = this.add.image(94, 70, "psg");
  bayern0 = this.add.image(145, 70, "bayern");
  nomebayern0 = this.add.image(173, 335, "nomebayern");
  nomecity0 = this.add.image(175, 335, "nomecity");
  nomepsg0 = this.add.image(175, 335, "nomepsg");
  nomereal0 = this.add.image(170, 335, "nomereal");

  //colocando os textos de seleção dos clubes do lado direito
  real1 = this.add.image(566, 70, "real");
  city1 = this.add.image(553, 70, "city");
  psg1 = this.add.image(552, 70, "psg");
  bayern1 = this.add.image(600, 70, "bayern");
  nomebayern1 = this.add.image(628, 335, "nomebayern");
  nomecity1 = this.add.image(630, 335, "nomecity");
  nomepsg1 = this.add.image(629, 335, "nomepsg");
  nomereal1 = this.add.image(625, 335, "nomereal");

  //colocando os textos de vitórias de cada clube
  parabensBayern0 = this.add.image(400, 105, "bayern0");
  parabensBayern1 = this.add.image(400, 105, "bayern1");
  parabensCity0 = this.add.image(400, 105, "city0");
  parabensCity1 = this.add.image(400, 105, "city1");
  parabensPsg0 = this.add.image(400, 100, "psg0");
  parabensPsg1 = this.add.image(400, 100, "psg1");
  parabensReal0 = this.add.image(400, 100, "real0");
  parabensReal1 = this.add.image(400, 100, "real1");

  //colocando o som do mouse para sair clicar nos botões
  somMouse = this.sound.add("somMouse");

  //colocando o contador de partidas jogadas
  textoContadorPartidas0 = this.add.image(630, 580, "textoContadorPartidas");
  textoContadorPartidas1 = this.add.text(732, 564, "0", fonteTexto1);

  // Botão de ativar/desativar tela cheia
  botaoTelaCheia = this.add
    .image(55, 600 - 55, "botaoTelaCheia", 0)
    .setOrigin(1, 0)
    .setInteractive()
    .setScrollFactor(0);

  botaoTelaCheia.on(
    "pointerup",
    function () {
      if (this.scale.isFullscreen) {
        this.scale.stopFullscreen();
      } else {
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

  // <------------------------------------------------------------------------------------------------------------------------------->
  // Conectar no servidor via WebSocket
  /*
  this.socket = io("wss://stormy-beach-26933.herokuapp.com");

  // Disparar evento quando jogador entrar na partida
  var self = this;
  var physics = this.physics;
  var cameras = this.cameras;
  var time = this.time;
  var socket = this.socket;

  this.socket.on("jogadores", function (jogadores) {
    if (jogadores.primeiro === self.socket.id) {
      // Define jogador como o primeiro
      jogador = 1;

      navigator.mediaDevices
        .getUserMedia({ video: false, audio: true })
        .then((stream) => {
          midias = stream;
        })
        .catch((error) => console.log(error));
    } else if (jogadores.segundo === self.socket.id) {
      // Define jogador como o segundo
      jogador = 2;

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
              socket.emit("candidate", jogadores.primeiro, candidate);
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
                jogadores.primeiro,
                localConnection.localDescription
              );
            });
        })
        .catch((error) => console.log(error));
    }

    // Os dois jogadores precisam estar conectados para o jogo começar
    console.log(jogadores);
  });

  this.socket.on("offer", (socketId, description) => {
    remoteConnection = new RTCPeerConnection(ice_servers);
    midias
      .getTracks()
      .forEach((track) => remoteConnection.addTrack(track, midias));
    remoteConnection.onicecandidate = ({ candidate }) => {
      candidate && socket.emit("candidate", socketId, candidate);
    };
    remoteConnection.ontrack = ({ streams: [midias] }) => {
      audio.srcObject = midias;
    };
    remoteConnection
      .setRemoteDescription(description)
      .then(() => remoteConnection.createAnswer())
      .then((answer) => remoteConnection.setLocalDescription(answer))
      .then(() => {
        socket.emit("answer", socketId, remoteConnection.localDescription);
      });
  });

  socket.on("answer", (description) => {
    localConnection.setRemoteDescription(description);
  });

  socket.on("candidate", (candidate) => {
    const conn = localConnection || remoteConnection;
    conn.addIceCandidate(new RTCIceCandidate(candidate));
  });

  // VOU PRECISAR DESSA LÓGICA DE CÓDIGO PARA ENVIAR A ESCOLHA DE CADA JOGADOR PARA O OUTRO
  this.socket.on("desenharOutroJogador", ({ frame, x, y }) => {
    if (jogador === 1) {
      player2.setFrame(frame);
      player2.x = x;
      player2.y = y;
    } else if (jogador === 2) {
      player1.setFrame(frame);
      player1.x = x;
      player1.y = y;
    }
  });

  // <------------------------------------------------------------------------------------------------------------------------------->
  */
  //fazendo a escolha dos clubes da esquerda por meio dos botões
  botao1.on("pointerdown", function () {
    //som de click do mouse
    somMouse.play();

    switch (contagemClube0) {
      case 0:
        escolhabayern0();
        break;

      case 1:
        escolhareal0();
        break;

      case 2:
        escolhacity0();
        break;

      case 3:
        escolhapsg0();
        break;
    }
    contagemClube0++;
    contagemClube0 = contagemClube0 % 4;
  });

  //fazendo a escolha dos clubes da direita por meio dos botões
  botao2.on("pointerdown", function () {
    //som de click do mouse
    somMouse.play();

    switch (contagemClube1) {
      case 0:
        escolhabayern1();
        break;

      case 1:
        escolhareal1();
        break;

      case 2:
        escolhacity1();
        break;

      case 3:
        escolhapsg1();
        break;
    }
    contagemClube1++;
    contagemClube1 = contagemClube1 % 4;
  });

  // <------ Cena do jogo acontecendo ------->
  //    |Cronômetro do jogo|

  //adiciona o cronômetro
  textoCronometro = this.add.text(
    356,
    170,
    formatarTempo(this.tempoInicial),
    fonteTexto0
  );

  //     |Placar do jogo|
  textoPlacar = this.add.text(360, 287, gols0 + "     " + gols1, fonteTexto0);

  //     |Posse de bola do jogo|
  textoPosseBola = this.add.text(342, 462, "50%  50%", fonteTexto2);

  // <------ Cena do fim do jogo ------->

  //botões para jogar novamente
  botaoSim = this.add.image(360, 580, "botaoSim").setInteractive();
  botaoNao = this.add.image(440, 580, "botaoNao").setInteractive();
  botaoJogarDeNovo = this.add.image(180, 580, "botaoJogarDeNovo");

  //animação dos vencedores (2 bonecos para cada clube) -> Ineficiente mas funcional

  muller = this.physics.add.sprite(600, 450, "muller");
  neymar = this.physics.add.sprite(600, 450, "neymar");
  deBruyne = this.physics.add.sprite(600, 450, "deBruyne");
  benzema = this.physics.add.sprite(600, 450, "benzema");

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

  muller.anims.play("vitoriaMuller", true);
  deBruyne.anims.play("vitoriaDeBruyne", true);
  benzema.anims.play("vitoriaBenzema", true);
  neymar.anims.play("vitoriaNeymar", true);

  //colocando o som final
  somVencedor = this.sound.add("somVencedor");
  somVencedor.loop = true;

  //adicionando os botões de sim e não de jogar novamente
  botaoSim.on(
    "pointerdown",
    function () {
      //volta para escolher os clubes para jogar a partida novamente
      aparecerFundo1Novamente();
    },
    this
  );

  botaoNao.on(
    "pointerdown",
    function () {
      //finaliza o jogo
      this.scene.start(cena2);
      somVencedor.pause();
    },
    this
  );

  //clique do botão para ir para a próxima tela
  botao0.on(
    "pointerdown",
    function () {
      //inicia a cena e o cronometro
      aparecerFundo2();
    },
    this
  );

  //mostra no início apenas a tela de escolha de clubes
  aparecerFundo1();

  //colocando os dois clubes que sempre irão aparecer primeiro
  escolhaClubePadrao();
};

cena1.update = function () {
  //Fim da partida
  if (minutos === 90) {
    aparecerFundo3();
  }
  //atualização da posse de bola
  if (
    minutos === 10 ||
    minutos === 20 ||
    minutos === 30 ||
    minutos === 40 ||
    minutos === 50 ||
    minutos === 60 ||
    minutos === 70 ||
    minutos === 80
  ) {
    atualizarPosseBola();
  }
  //atualização do placar do jogo
  if (
    minutos === 10 ||
    minutos === 20 ||
    minutos === 30 ||
    minutos === 40 ||
    minutos === 50 ||
    minutos === 60 ||
    minutos === 70 ||
    minutos === 80 ||
    minutos === 85
  ) {
    chanceGol = Phaser.Math.Between(0, 50); //A ideia é que é improvável que ocorra um gol
    console.log("chanceGol:" + chanceGol);
    //se o gol ocorrer, atualiza o placar
    if (chanceGol === 1) {
      atualizarPlacar();
    }
    //se não tiver ocorrido nenhum gol
    if (minutos === 85 && gols0 === 0 && gols1 === 0) {
      if (clube0Escolhido > clube1Escolhido) {
        gols0++;
        textoPlacar.setText(gols0 + "     " + gols1); //Atualiza os valores do placar
      } else if (clube0Escolhido < clube1Escolhido) {
        gols1++;
        textoPlacar.setText(gols0 + "     " + gols1); //Atualiza os valores do placar
      } else if (clube0Escolhido === clube1Escolhido) {
        gols0++;
        textoPlacar.setText(gols0 + "     " + gols1); //Atualiza os valores do placar
      }
    }
  }
};

export { cena1 };
