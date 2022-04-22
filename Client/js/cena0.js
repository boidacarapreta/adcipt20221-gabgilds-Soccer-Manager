import { cena1 } from "./cena1.js";

var cena0 = new Phaser.Scene("Cena 0");

cena0.preload = function () {
  this.load.image("fundo", "./assets/1 tela.png");
  this.load.image("botao", "./assets/botao.png")
};

cena0.create = function () {
  var fundo = this.add.image(400, 300, "fundo", 0).setInteractive();
  var botao = this.add.image(400, 400, "botao", 100).setInteractive();

  botao.on(
    "pointerdown",
    function () {
      this.scene.start(cena1);
    },
    this
  );
};

cena0.update = function () {};

export { cena0 };
