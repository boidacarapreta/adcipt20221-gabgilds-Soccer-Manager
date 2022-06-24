const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origins: ["https://soccermanager.ifsc.cloud", "https://*.gitpod.io"]
  },
});const PORT = process.env.PORT || 3000;
var jogadores = {
  primeiro: undefined,
  segundo: undefined,
};

// Disparar evento quando jogador entrar na partida
io.on("connection", function (socket) {
  if (jogadores.primeiro === undefined) {
    jogadores.primeiro = socket.id;
  } else if (jogadores.segundo === undefined) {
    jogadores.segundo = socket.id;
  }
  io.emit("jogadores", jogadores);
  console.log("+Lista de jogadores: %s", jogadores);

  // Sinalização de áudio: oferta
  socket.on("offer", (socketId, description) => {
    socket.to(socketId).emit("offer", socket.id, description);
  });

  // Sinalização de áudio: atendimento da oferta
  socket.on("answer", (socketId, description) => {
    socket.to(socketId).emit("answer", description);
  });

  // Sinalização de áudio: envio dos candidatos de caminho
  socket.on("candidate", (socketId, signal) => {
    socket.to(socketId).emit("candidate", signal);
  });

  // Disparar evento quando jogador sair da partida
  socket.on("disconnect", function () {
    if (jogadores.primeiro === socket.id) {
      jogadores.primeiro = undefined;
    }
    if (jogadores.segundo === socket.id) {
      jogadores.segundo = undefined;
    }
    io.emit("jogadores", jogadores);
    console.log("-Lista de jogadores: %s", jogadores);
  });

  socket.on("estadoDoJogador", function (estado) {
    socket.broadcast.emit("desenharOutroJogador", estado);
  });

  //Servidor recebendo a variável para enviar para os jogadores
  socket.on("contagemClube0", (contagemClube0) => {
    socket.broadcast.emit("contagemClube0", contagemClube0);
  });

  socket.on("contagemClube1", (contagemClube1) => {
    socket.broadcast.emit("contagemClube1", contagemClube1);
  });

  //Servidor recebendo a informação de quando começar, acabar e repetir a partida
  socket.on("comecarPartida", () => {
    socket.broadcast.emit("comecarPartida");
  });
  socket.on("fimDaPartida", () => {
    socket.broadcast.emit("fimDaPartida");
  });
  socket.on("jogarNovamente", () => {
    socket.broadcast.emit("jogarNovamente");
  });
  socket.on("fimDoJogo", () => {
    socket.broadcast.emit("fimDoJogo");
  });
  //Servidor recebendo os valores da posse de bola
  socket.on("posseBola", (posseBola0, posseBola1) => {
    socket.broadcast.emit("posseBola", posseBola0, posseBola1);
  });
  //Servidor recebendo os valores dos gols
  socket.on("gols", (gols0, gols1) => {
    socket.broadcast.emit("gols", gols0, gols1);
  })
  //Servidor recebendo o valor do tempo do jogo
  socket.on("tempoInicial", (tempoInicial) => {
    socket.broadcast.emit("tempoInicial", tempoInicial);
  })
  //Servidor recebendo o valor de contagem da partida
  socket.on("contadorPartidas", (contadorPartidas) => {
    socket.broadcast.emit("contadorPartidas", contadorPartidas);
  });  
});

app.use(express.static("./"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
