import { cena4 } from "./cena4.js";
import { cena1 } from "./cena1.js";

var cena3 = new Phaser.Scene("Cena 3");

var fundo3;
var parabensbayern0;
var somVitoria;
var soundtrack;
var muller;
var botaoSim;
var botaoNao;
var botaoJogarDeNovo;

cena3.preload = function () {
    //baixando as imagens e áudio que serão usados na cena3
    this.load.image("fundo3", "./assets/fundo3.png");
    this.load.image("bayern0", "./assets/times/parabens/bayern0.png");
    this.load.audio('somVitoria', './assets/somVitoria.mp3');
    this.load.spritesheet('muller', 'assets/times/jogadores/muller.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image("botaoJogarDeNovo", "./assets/texto/botaoJogarDeNovo.png");
    this.load.image("botaoSim", "./assets/texto/botaoSim.png");
    this.load.image("botaoNao", "./assets/texto/botaoNao.png");
};

cena3.create = function () {
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
};

cena3.update = function () {};

export { cena3 };
