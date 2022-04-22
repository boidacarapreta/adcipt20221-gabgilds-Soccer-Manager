var cena1 = new Phaser.Scene("Cena 1");

cena1.preload = function () {
    this.load.image("escolha", "./assets/escolhendo time.png");
};

cena1.create = function () {
    var button = this.add.image(400, 300, "escolha", 0).setInteractive();
};

cena1.update = function () {};

export { cena1 };
