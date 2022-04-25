import { cena2 } from "./cena2.js";

var cena1 = new Phaser.Scene("Cena 1");

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
    var fundo1 = this.add.image(400, 300, "fundo1");

    //define o botão
    var botao0 = this.add.image(400, 300, "botao0", 100).setInteractive();

    //colocando os textos de seleção dos times do lado esquerdo
    var real0 = this.add.image(120, 70, "real");
    var city0 = this.add.image(110, 70, "city");
    var psg0 = this.add.image(100, 70, "psg");
    var bayern0 = this.add.image(155, 70, "bayern");
    var bayern0 = this.add.image(300, 200, "nomebayern");
    //colocando os textos de seleção dos times do lado direito
    var real1 = this.add.image(575, 70, "real");
    var city1 = this.add.image(565, 70, "city");
    var psg1 = this.add.image(555, 70, "psg");
    var bayern1 = this.add.image(610, 70, "bayern");

    //clique do botão para ir para a próxima cena
    botao0.on(
      "pointerdown",
      function () {
        this.scene.start(cena2);
      },
    this
    );
};

cena1.update = function () {};

export { cena1 };
