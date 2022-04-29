var cena3 = new Phaser.Scene("Cena 3");

var fundo3;
var parabensbayern0;
var somVitoria;
var soundtrack;
var lewa;

cena3.preload = function () {
    //baixando as imagens e áudio que serão usados na cena3
    this.load.image("fundo3", "./assets/fundo3.png");
    this.load.image("bayern0", "./assets/times/parabens/bayern0.png");
    this.load.audio('somVitoria', './assets/somVitoria.mp3');
    this.load.spritesheet('lewa', 'assets/times/jogadores/lewa.png', { frameWidth: 32, frameHeight: 32 });

};

cena3.create = function () {
    //definindo imagem de fundo da cena3
    fundo3 = this.add.image(400, 300, "fundo3");

    //mostrando o vencedor
    parabensbayern0 = this.add.image(400, 110, "bayern0");

    //PRECISA A ANIMAÇÃO DO VENCEDOR
    lewa = this.physics.add.sprite(400, 300, "lewa");

    this.anims.create({
        key: "vitoria",
        frames: this.anims.generateFrameNumbers("lewa", {
          start: 0,
          end: 4,
        }),
        frameRate: 5,
        repeat: -1,
      });

      lewa.anims.play("vitoria", true)

    //colocando som de vitoria
    //PRECISO PARAR O SOUNDTRACK
    somVitoria = this.sound.add('somVitoria');
    somVitoria.loop = true;
    somVitoria.play();

    le
};

cena3.update = function () {};

export { cena3 };
