const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origins: ["https://soccermanager.ifsc.cloud", "https://*.gitpod.io"],
  },
});
const PORT = process.env.PORT || 3000;

//Disparar evento quando jogador entrar na partida
io.on("connection", function (socket) {
  //Aguardar pelo jogador enviar o nome da sala
  socket.on("entrarNaSala", (sala) => {
    socket.join(sala);
    var jogadores = {};
    if (io.sockets.adapter.rooms.get(sala).size === 1) {
      //Jogador 1
      jogadores = {
        primeiro: socket.id,
        segundo: undefined,
      };
    } else if (io.sockets.adapter.rooms.get(sala).size === 2) {
      //Jogador 2
      let [primeiro] = io.sockets.adapter.rooms.get(sala);
      jogadores = {
        primeiro: primeiro,
        segundo: socket.id,
      };
    }
    console.log("Sala %s: %s", sala, jogadores);
    //Envia a todos a lista atual de jogadores (mesmo incompleta)
    io.to(sala).emit("jogadores", jogadores);
  });

  //Sinalização de áudio: oferta
  socket.on("offer", (sala, description) => {
    socket.broadcast.to(sala).emit("offer", socket.id, description);
  });

  //Sinalização de áudio: atendimento da oferta
  socket.on("answer", (sala, description) => {
    socket.broadcast.to(sala).emit("answer", description);
  });

  //Sinalização de áudio: envio dos candidatos de caminho
  socket.on("candidate", (sala, signal) => {
    socket.broadcast.to(sala).emit("candidate", signal);
  });

  //Servidor recebendo e enviando a variável para enviar para os jogadores
  socket.on("contagemClube0", (sala, contagemClube0) => {
    socket.broadcast.to(sala).emit("contagemClube0", contagemClube0);
  });

  socket.on("contagemClube1", (sala, contagemClube1) => {
    socket.broadcast.to(sala).emit("contagemClube1", contagemClube1);
  });

  //Servidor recebendo e enviando a informação de quando mudar a tela do primeiro player
  socket.on("escolhaClubes", (sala) => {
    socket.broadcast.to(sala).emit("escolhaClubes");
  });
  //Servidor recebendo e enviando a informação de quando começar, acabar e repetir a partida
  socket.on("comecarPartida", (sala) => {
    socket.broadcast.to(sala).emit("comecarPartida");
  });
  socket.on("fimDaPartida", (sala) => {
    socket.broadcast.to(sala).emit("fimDaPartida");
  });
  socket.on("jogarNovamente", (sala) => {
    socket.broadcast.to(sala).emit("jogarNovamente");
  });
  socket.on("fimDoJogo", (sala) => {
    socket.broadcast.to(sala).emit("fimDoJogo");
  });
  //Servidor recebendo e enviando os valores da posse de bola
  socket.on("posseBola", (sala, posseBola0, posseBola1) => {
    socket.broadcast.to(sala).emit("posseBola", posseBola0, posseBola1);
  });
  //Servidor recebendo e enviando os valores dos gols
  socket.on("gols", (sala, gols0, gols1) => {
    socket.broadcast.to(sala).emit("gols", gols0, gols1);
  });
  //Servidor recebendo e enviando o valor do tempo do jogo
  socket.on("tempoInicial", (sala, tempoInicial) => {
    socket.broadcast.to(sala).emit("tempoInicial", tempoInicial);
  });
  //Servidor recebendo e enviando o valor de contagem da partida
  socket.on("contadorPartidas", (sala, contadorPartidas) => {
    socket.broadcast.to(sala).emit("contadorPartidas", contadorPartidas);
  });
  //Servidor recebendo e enviando o valor das forças dos clubes
  socket.on("forçaBayern0", (sala, forçaBayern0) => {
    socket.broadcast.to(sala).emit("forçaBayern0", forçaBayern0);
  });
  socket.on("forçaPsg0", (sala, forçaPsg0) => {
    socket.broadcast.to(sala).emit("forçaPsg0", forçaPsg0);
  });
  socket.on("forçaCity0", (sala, forçaCity0) => {
    socket.broadcast.to(sala).emit("forçaCity0", forçaCity0);
  });
  socket.on("forçaReal0", (sala, forçaReal0) => {
    socket.broadcast.to(sala).emit("forçaReal0", forçaReal0);
  });
  socket.on("forçaPsg1", (sala, forçaPsg1) => {
    socket.broadcast.to(sala).emit("forçaPsg1", forçaPsg1);
  });
  socket.on("forçaBayern1", (sala, forçaBayern1) => {
    socket.broadcast.to(sala).emit("forçaBayern1", forçaBayern1);
  });
  socket.on("forçaCity1", (sala, forçaCity1) => {
    socket.broadcast.to(sala).emit("forçaCity1", forçaCity1);
  });
  socket.on("forçaReal1", (sala, forçaReal1) => {
    socket.broadcast.to(sala).emit("forçaReal1", forçaReal1);
  });
});

app.use(express.static("./"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
