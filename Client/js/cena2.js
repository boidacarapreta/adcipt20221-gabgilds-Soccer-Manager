import { cena3 } from "./cena3.js";


var cena2 = new Phaser.Scene("Cena 2");

var fundo2;
var cronometro;
var passagemTempo;
var fonteTextoCena2 = { font: "bold 35px Mont", fill: "#000000"};
var placar;
var posseBola;
var minutos;
var parteEmSegundos;
var bayern0;
var city1;
var nomebayern0;
var nomecity1;


cena2.preload = function () {
    //baixando as imagens e áudio que serão usados na cena2
    this.load.image("fundo2", "./assets/fundo2.png");
    this.load.image("real", "./assets/times/real.png");
    this.load.image("city", "./assets/times/city.png");
    this.load.image("psg", "./assets/times/psg.png");
    this.load.image("bayern", "./assets/times/bayern.png");
    this.load.image("nomereal", "./assets/times/nomereal.png");
    this.load.image("nomecity", "./assets/times/nomecity.png");
    this.load.image("nomepsg", "./assets/times/nomepsg.png");
    this.load.image("nomebayern", "./assets/times/nomebayern.png");
};

cena2.create = function () {
    //definindo imagem de fundo da cena2
    fundo2 = this.add.image(400, 300, "fundo2");

    /*
    if (contagem0 == 0 && contagem1 == 0) {
        escolhabayern0();
        escolhabayern0();
    }
    */
    
    //colocando um exemplo de partida
    bayern0 = this.add.image(145, 70, "bayern");
    nomebayern0 = this.add.image(175, 335, "nomebayern");
    city1 = this.add.image(565, 70, "city");
    nomecity1 = this.add.image(630, 335, "nomecity");

    /* <--- Cronômetro do jogo ---> */
    //define o tempo inicial
    this.initialTime = 0;
    //adiciona o cronômetro
    cronometro = this.add.text(356, 170, formatarTempo(this.initialTime), fonteTextoCena2);
    // A cada 100 ms chama tempoPassado
    passagemTempo = this.time.addEvent({ delay: 100, callback: tempoPassado, callbackScope: this, loop: true });

    /* <--- Placar do jogo ---> */
    placar = this.add.text(362, 287,"0    0", fonteTextoCena2);

    /* <--- Posse de bola do jogo ---> */
    posseBola = this.add.text(355, 458, "50  50", fonteTextoCena2);
};

function formatarTempo(segundos) {
    // Minutos
    minutos = Math.floor(segundos/60);
    // Segundos
    parteEmSegundos = segundos%60;
    // Adiciona zeros à esquerda para os segundos
    parteEmSegundos = parteEmSegundos.toString().padStart(2,'0');
    // Retorna o tempo formato para a função
    return `${minutos} : ${parteEmSegundos}`;
};

function tempoPassado () {
    this.initialTime += 15; //A cada 100 ms tira 15 segundos do tempo inicial
    cronometro.setText(formatarTempo(this.initialTime)); //Atualiza o relógio
};


cena2.update = function () {
    //Fim da partida
    if (minutos === 2) {
        this.scene.start(cena3);
    }
};



export {cena2};
