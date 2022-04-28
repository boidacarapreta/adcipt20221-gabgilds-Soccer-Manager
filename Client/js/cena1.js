//import { disable, enable } from "express/lib/application"; (não sei de onde isso veio, mas se pah é pra conseguir usar o disable.body)

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
var contagem;

/*
function escolhapsg0() {
  disable.body(psg0);
  disable.body(nomepsg0);
  disable.body(bayern0);
  disable.body(nomebayern0);
  disable.body(real0);
  disable.body(nomereal0);
  disable.body(city0);
  disable.body(nomecity0);
}

function escolhabayern0() {
  disable.body(psg0);
  disable.body(nomepsg0);
  disable.body(bayern0);
  disable.body(nomebayern0);
  disable.body(real0);
  disable.body(nomereal0);
  disable.body(city0);
  disable.body(nomecity0);
}

function escolhacity0() {
  disable.body(psg0);
  disable.body(nomepsg0);
  disable.body(bayern0);
  disable.body(nomebayern0);
  disable.body(real0);
  disable.body(nomereal0);
  disable.body(city0);
  disable.body(nomecity0);
}

function escolhareal0() {
  disable.body(psg0);
  disable.body(nomepsg0);
  disable.body(bayern0);
  disable.body(nomebayern0);
  disable.body(real0);
  disable.body(nomereal0);
  disable.body(city0);
  disable.body(nomecity0);
}

function escolhapsg1() {
  disable.body(psg1);
  disable.body(nomepsg1);
  disable.body(bayern1);
  disable.body(nomebayern1);
  disable.body(real1);
  disable.body(nomereal1);
  disable.body(city1);
  disable.body(nomecity1);
}

function escolhabayern1() {
  disable.body(psg1);
  disable.body(nomepsg1);
  disable.body(bayern1);
  disable.body(nomebayern1);
  disable.body(real1);
  disable.body(nomereal1);
  disable.body(city1);
  disable.body(nomecity1);
}

function escolhacity1() {
  disable.body(psg1);
  disable.body(nomepsg1);
  disable.body(bayern1);
  disable.body(nomebayern1);
  disable.body(real1);
  disable.body(nomereal1);
  disable.body(city1);
  disable.body(nomecity1);
}

function escolhareal1() {
  disable.body(psg1);
  disable.body(nomepsg1);
  disable.body(bayern1);
  disable.body(nomebayern1);
  disable.body(real1);
  disable.body(nomereal1);
  disable.body(city1);
  disable.body(nomecity1);
}
*/


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
};

cena1.create = function () { 
    //definindo imagem de fundo da cena1
    fundo1 = this.add.image(400, 300, "fundo1");

    //define e adiciona os botões da cena1
    botao0 = this.add.image(400, 300, "botao0", 100).setInteractive();
    botao1 = this.add.image(280, 70, "botao1").setInteractive();
    botao2 = this.add.image(735, 70, "botao1", 100).setInteractive();

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

    //clique do botão para ir para a próxima cena
    botao0.on(
      "pointerdown",
      function () {
        this.scene.start(cena2);
      },
    this
    );

    /*
    //colocando os dois times que sempre irão aparecer primeiro
    escolhabayern0();
    escolhacity1();

    //fazendo a escolha dos times por meio dos botões
    botao1.on(
      "pointerdown",
      function () {
        if (contagem = 0) {
          escolhabayern0();
          contagem++;
        }

        else if (contagem = 1) {
          escolhacity0();
          contagem++;
        }

        else if (contagem = 2) {
          escolhareal0();
          contagem++;
        }

        else if (contagem = 3) {
          escolhapsg0();
          contagem = 0;
        }
      }
    )
    */

};

cena1.update = function () {
};


export { cena1 };
