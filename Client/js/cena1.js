/*
<- AVISO PAROQUIAL ->
O código está cheio de comentários por conta da mudança que faremos posteriormente no jogo, 
onde a cena 2 e a cena 3 terão os códigos englobados em uma cena só, para que as variáveis 
estejam todas juntas, sem precisar puxar variáveis de uma cena para outra.

Ass.: Gabriel 
*/

import { cena2 } from "./cena2.js";

var cena1 = new Phaser.Scene("Cena 1");

//variáveis da cena de escolher os times
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

var contagem0 = 0;
var contagem1 = 0;

//funções da cena de escolher os times
function escolhapsg0() {
  psg0.setVisible(true);
  nomepsg0.setVisible(true);
  bayern0.setVisible(false);
  nomebayern0.setVisible(false);
  real0.setVisible(false);
  nomereal0.setVisible(false);
  city0.setVisible(false);
  nomecity0.setVisible(false);
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
}


//variáveis da cena do jogo
var fundo2;
var cronometro;
var passagemTempo;
var fonteTextoCena2 = { font: "bold 35px Mont", fill: "#000000"};
var placar;
var posseBola;
var minutos;
var parteEmSegundos;
var bayern0;
var city1;
var nomebayern0;
var nomecity1;


//variáveis da cena do fim de jogo
var fundo3;
var parabensbayern0;
var somVitoria;
var soundtrack;
var muller;
var botaoSim;
var botaoNao;
var botaoJogarDeNovo;



cena1.preload = function () {
    //carregando as imagens e áudio que serão usados na cena de escolhendo os times
    this.load.image("fundo1", "./assets/fundo1.png");
    this.load.image("botao0", "./assets/botao0.png");
    this.load.image("real", "./assets/times/real.png");
    this.load.image("city", "./assets/times/city.png");
    this.load.image("psg", "./assets/times/psg.png");
    this.load.image("bayern", "./assets/times/bayern.png");
    this.load.image("botao1", "./assets/botao1.png");
    this.load.image("nomereal", "./assets/times/nomereal.png");
    this.load.image("nomecity", "./assets/times/nomecity.png");
    this.load.image("nomepsg", "./assets/times/nomepsg.png");
    this.load.image("nomebayern", "./assets/times/nomebayern.png");
    this.load.audio('somMouse', './assets/somMouse.mp3');

    //carregando as imagens e áudio que serão usados na cena do jogo
    this.load.image("fundo2", "./assets/fundo2.png");

    //carregando as imagens e áudio que serão usados na cena de fim do jogo
    this.load.image("fundo3", "./assets/fundo3.png");
    this.load.image("bayern0", "./assets/times/parabens/bayern0.png");
    this.load.audio('somVitoria', './assets/somVitoria.mp3');
    this.load.spritesheet('muller', 'assets/times/jogadores/muller.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image("botaoJogarDeNovo", "./assets/texto/botaoJogarDeNovo.png");
    this.load.image("botaoSim", "./assets/texto/botaoSim.png");
    this.load.image("botaoNao", "./assets/texto/botaoNao.png");
};

cena1.create = function () { 
    // <------ Cena de escolhendo os times ------->

    // definindo imagem de fundo da cena de escolhendo os times
    fundo1 = this.add.image(400, 300, "fundo1");
    fundo1.setVisible(true);

    //define e adiciona os botões da cena1
    botao0 = this.add.image(400, 300, "botao0", 100).setInteractive();
    botao1 = this.add.image(280, 70, "botao1").setInteractive();
    botao2 = this.add.image(735, 70, "botao1").setInteractive();

    //colocando os textos de seleção dos times do lado esquerdo
    real0 = this.add.image(120, 70, "real");
    city0 = this.add.image(110, 70, "city");
    psg0 = this.add.image(100, 70, "psg");
    bayern0 = this.add.image(145, 70, "bayern");
    nomebayern0 = this.add.image(175, 335, "nomebayern");
    nomecity0 = this.add.image(175, 335, "nomecity");
    nomepsg0 = this.add.image(175, 335, "nomepsg");
    nomereal0 = this.add.image(175, 335, "nomereal");

    //colocando os textos de seleção dos times do lado direito
    real1 = this.add.image(575, 70, "real");
    city1 = this.add.image(565, 70, "city");
    psg1 = this.add.image(555, 70, "psg");
    bayern1 = this.add.image(600, 70, "bayern");
    nomebayern1 = this.add.image(630, 335, "nomebayern");
    nomecity1 = this.add.image(630, 335, "nomecity");
    nomepsg1 = this.add.image(630, 335, "nomepsg");
    nomereal1 = this.add.image(630, 335, "nomereal");

    //colocando o som do mouse
    somMouse = this.sound.add('somMouse');

    //clique do botão para ir para a próxima cena
    botao0.on(
      "pointerdown",
      function () {
        this.scene.start(cena2);
      },
    this
    );

    //colocando os dois times que sempre irão aparecer primeiro
    escolhabayern0();
    escolhacity1();
    
    //fazendo a escolha dos times da esquerda por meio dos botões
    botao1.on(
      "pointerdown",
      function () {
        //som de click do mouse
        somMouse.play();

          switch (contagem0)
          {
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
          contagem0++;
          contagem0 = contagem0 % 4;
        }
      )

    //fazendo a escolha dos times da direita por meio dos botões
    botao2.on(
    "pointerdown",
    function () {
      //som de click do mouse
      somMouse.play();

        switch (contagem1)
        {
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
        contagem1++;
        contagem1 = contagem1 % 4;
      }
    )

    /* <------ Cena do jogo acontecendo ------->
    //definindo imagem de fundo da cena2
    //fundo2 = this.add.image(400, 300, "fundo2");

    /*
    if (contagem0 == 0 && contagem1 == 0) {
        escolhabayern0();
        escolhabayern0();
    }
    /
    
    //colocando um exemplo de partida
    bayern0 = this.add.image(145, 70, "bayern");
    nomebayern0 = this.add.image(175, 335, "nomebayern");
    city1 = this.add.image(565, 70, "city");
    nomecity1 = this.add.image(630, 335, "nomecity");

    // Cronômetro do jogo 
    //define o tempo inicial
    this.initialTime = 0;
    //adiciona o cronômetro
    cronometro = this.add.text(356, 170, formatarTempo(this.initialTime), fonteTextoCena2);
    // A cada 100 ms chama tempoPassado
    passagemTempo = this.time.addEvent({ delay: 100, callback: tempoPassado, callbackScope: this, loop: true });

    // Placar do jogo 
    placar = this.add.text(362, 287,"0    0", fonteTextoCena2);

    // Posse de bola do jogo 
    posseBola = this.add.text(355, 458, "50  50", fonteTextoCena2);  



    
    // <------ Cena do fim do jogo ------->
    //definindo imagem de fundo da cena3
    fundo3 = this.add.image(400, 300, "fundo3");

    //botões para jogar novamente
    botaoSim = this.add.image(380, 580, "botaoSim").setInteractive();
    botaoNao = this.add.image(470, 580, "botaoNao").setInteractive();
    botaoJogarDeNovo = this.add.image(200, 580, "botaoJogarDeNovo");

    botaoSim.on(
      "pointerdown",
      function () {
        this.scene.start(cena1);
        somVitoria.pause();
      },
      this
    );

    botaoNao.on(
      "pointerdown",
      function () {
        this.scene.start(cena4);
        somVitoria.pause();
      },
      this
    );

    //mostrando o vencedor
    parabensbayern0 = this.add.image(400, 120, "bayern0");

    //animação do vencedor
    muller = this.physics.add.sprite(400, 60, "muller");

    this.anims.create({
        key: "vitoria",
        frames: this.anims.generateFrameNumbers("muller", {
          start: 0,
          end: 4,
        }),
        frameRate: 5,
        repeat: -1,
      });

      muller.anims.play("vitoria", true)

    //colocando som de vitoria
    //PRECISA PARAR O SOUNDTRACK
    somVitoria = this.sound.add('somVitoria');
    somVitoria.loop = true;
    somVitoria.play();
    */
};

/*
function formatarTempo(segundos) {
  // Minutos
  minutos = Math.floor(segundos/60);
  // Segundos
  parteEmSegundos = segundos%60;
  // Adiciona zeros à esquerda para os segundos
  parteEmSegundos = parteEmSegundos.toString().padStart(2,'0');
  // Retorna o tempo formato para a função
  return `${minutos} : ${parteEmSegundos}`;
};

function tempoPassado () {
  this.initialTime += 15; //A cada 100 ms tira 15 segundos do tempo inicial
  cronometro.setText(formatarTempo(this.initialTime)); //Atualiza o relógio
};
*/

cena1.update = function () {
  //Fim da partida
  if (minutos === 2) {
    this.scene.start(cena3);
  }
};

export { cena1 };
