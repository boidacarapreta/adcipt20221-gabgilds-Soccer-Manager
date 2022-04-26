import { cena3 } from "./cena3.js";

var cena2 = new Phaser.Scene("Cena 2");

var real0;
var nomereal;
var bayern1;
var nomebayern;
var fundo2;
var cronometro;
var passagemTempo;
var fonteTextoCena2 = { font: "35px Arial", fill: "#000000"};
var placar;
var posseBola;
var minutos;
var parteEmSegundos;


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


    /* <--- Cronômetro do jogo ---> */
    //define o tempo inicial
    this.initialTime = 5400;
    //adiciona o cronômetro
    cronometro = this.add.text(347, 165, formatarTempo(this.initialTime), fonteTextoCena2);
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
    this.initialTime -= 15; //A cada 100 ms tira 15 segundos do tempo inicial
    cronometro.setText(formatarTempo(this.initialTime)); //Atualiza o relógio
};

cena2.update = function () {};



export {cena2};
