import { cena2 } from "./cena2.js";

var cena1 = new Phaser.Scene("Cena 1");

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



cena1.preload = function () {
    //baixando as imagens e áudio que serão usados na cena1
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
};

cena1.create = function () { 
    //definindo imagem de fundo da cena1
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
};

cena1.update = function () {};

export { cena1 };
