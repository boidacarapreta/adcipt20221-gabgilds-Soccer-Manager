import { cena1 } from "./cena1.js";

var cena0 = new Phaser.Scene("cena0");

cena0.preload = function () {
  //baixando as imagens e áudio que serão usados na cena0
  this.load.image("fundo0", "./assets/fundo0.png");
  this.load.image("botao0", "./assets/botao0.png");
  this.load.audio('soundtrack', './assets/soundtrack.mp3');
};

var soundtrack;

cena0.create = function () {
  //define imagem de fundo
  var fundo0 = this.add.image(400, 300, "fundo0", 0);
  
  //define o botão
  var botao0 = this.add.image(400, 300, "botao0", 100).setInteractive();
  
  //colocando a musica no jogo
  soundtrack = this.sound.add('soundtrack');
  soundtrack.loop = true;
  soundtrack.play();

  //clique do botão para ir para a próxima cena
  botao0.on(
    "pointerdown",
    function () {
      this.scene.start(cena1);
    },
    this
  );
};

cena0.update = function () {};

export { cena0 };
