import { cena3 } from "./cena3.js";

var cena2 = new Phaser.Scene("Cena 2");

var real0;
var nomereal;
var bayern1;
var nomebayern;
var fundo2;
var timer;


cena2.preload = function () {
    //baixando as imagens e áudio que serão usados na cena2
    this.load.image("fundo2", "./assets/fundo2.png");
    this.load.image("real", "./assets/times/real.png");
    this.load.image("bayern", "./assets/times/bayern.png");
    this.load.image("nomebayern", "./assets/times/nomebayern.png");
    this.load.image("nomereal", "./assets/times/nomereal.png");
};

cena2.create = function () {
    //definindo imagem de fundo da cena2
    fundo2 = this.add.image(400, 300, "fundo2");


    //colocando os textos de seleção dos times do lado esquerdo
    real0 = this.add.image(120, 70, "real");
    nomereal = this.add.image(175, 335, "nomereal");

    //colocando os textos de seleção dos times do lado direito
    bayern1 = this.add.image(600, 70, "bayern");
    nomebayern = this.add.image(630, 335, "nomebayern");

    //relógio
    timer = game.time.create(false);
};

cena2.update = function () {};



export {cena2};
