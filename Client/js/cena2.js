var cena2 = new Phaser.Scene("Cena 2");

cena2.preload = function () {
    //baixando as imagens e áudio que serão usados na cena2
    this.load.image("fundo2", "./assets/fundo2.png");
};

cena2.create = function () {
    //definindo imagem de fundo da cena2
    var fundo2 = this.add.image(400, 300, "fundo2");
};

cena2.update = function () {};

export { cena2 };
