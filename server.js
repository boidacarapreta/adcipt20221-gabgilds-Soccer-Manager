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
  socket.on("começarPartida", () => {
    socket.broadcast.emit("começarPartida");
  });
  socket.on("jogarNovamente", () => {
    socket.broadcast.emit("jogarNovamente");
  });
  socket.on("fimDoJogo", () => {
    socket.broadcast.emit("fimDoJogo");
  });

  socket.on("posseBola", (
    //jogo0
    jogo0PosseBola0A, jogo0PosseBola0B, jogo0PosseBola0C, jogo0PosseBola0D, 
    jogo0PosseBola0E, jogo0PosseBola0F, jogo0PosseBola0G, jogo0PosseBola0H, jogo0PosseBola0I, 
    jogo0PosseBola1A, jogo0PosseBola1B, jogo0PosseBola1C, jogo0PosseBola1D, jogo0PosseBola1E, jogo0PosseBola1F, 
    jogo0PosseBola1G, jogo0PosseBola1H, jogo0PosseBola1I, 
    jogo1PosseBola0A, jogo1PosseBola0B, jogo1PosseBola0C, jogo1PosseBola0D, 
    jogo1PosseBola0E, jogo1PosseBola0F, jogo1PosseBola0G, jogo1PosseBola0H, jogo1PosseBola0I, 
    jogo1PosseBola1A, jogo1PosseBola1B, jogo1PosseBola1C, jogo1PosseBola1D, jogo1PosseBola1E, jogo1PosseBola1F, 
    jogo1PosseBola1G, jogo1PosseBola1H, jogo1PosseBola1I, 
    jogo2PosseBola0A, jogo2PosseBola0B, jogo2PosseBola0C, jogo2PosseBola0D, 
    jogo2PosseBola0E, jogo2PosseBola0F, jogo2PosseBola0G, jogo2PosseBola0H, jogo2PosseBola0I, 
    jogo2PosseBola1A, jogo2PosseBola1B, jogo2PosseBola1C, jogo2PosseBola1D, jogo2PosseBola1E, jogo2PosseBola1F, 
    jogo2PosseBola1G, jogo2PosseBola1H, jogo2PosseBola1I,
    jogo3PosseBola0A, jogo3PosseBola0B, jogo3PosseBola0C, jogo3PosseBola0D, 
    jogo3PosseBola0E, jogo3PosseBola0F, jogo3PosseBola0G, jogo3PosseBola0H, jogo3PosseBola0I, 
    jogo3PosseBola1A, jogo3PosseBola1B, jogo3PosseBola1C, jogo3PosseBola1D, jogo3PosseBola1E, jogo3PosseBola1F, 
    jogo3PosseBola1G, jogo3PosseBola1H, jogo3PosseBola1I) => {
    
    console.log("Server recebendo possebola");
    socket.broadcast.emit("posseBola", jogo0PosseBola0A, jogo0PosseBola0B, jogo0PosseBola0C, jogo0PosseBola0D, 
    jogo0PosseBola0E, jogo0PosseBola0F, jogo0PosseBola0G, jogo0PosseBola0H, jogo0PosseBola0I, 
    jogo0PosseBola1A, jogo0PosseBola1B, jogo0PosseBola1C, jogo0PosseBola1D, jogo0PosseBola1E, jogo0PosseBola1F, 
    jogo0PosseBola1G, jogo0PosseBola1H, jogo0PosseBola1I, 
    jogo1PosseBola0A, jogo1PosseBola0B, jogo1PosseBola0C, jogo1PosseBola0D, 
    jogo1PosseBola0E, jogo1PosseBola0F, jogo1PosseBola0G, jogo1PosseBola0H, jogo1PosseBola0I, 
    jogo1PosseBola1A, jogo1PosseBola1B, jogo1PosseBola1C, jogo1PosseBola1D, jogo1PosseBola1E, jogo1PosseBola1F, 
    jogo1PosseBola1G, jogo1PosseBola1H, jogo1PosseBola1I, 
    jogo2PosseBola0A, jogo2PosseBola0B, jogo2PosseBola0C, jogo2PosseBola0D, 
    jogo2PosseBola0E, jogo2PosseBola0F, jogo2PosseBola0G, jogo2PosseBola0H, jogo2PosseBola0I, 
    jogo2PosseBola1A, jogo2PosseBola1B, jogo2PosseBola1C, jogo2PosseBola1D, jogo2PosseBola1E, jogo2PosseBola1F, 
    jogo2PosseBola1G, jogo2PosseBola1H, jogo2PosseBola1I,
    jogo3PosseBola0A, jogo3PosseBola0B, jogo3PosseBola0C, jogo3PosseBola0D, 
    jogo3PosseBola0E, jogo3PosseBola0F, jogo3PosseBola0G, jogo3PosseBola0H, jogo3PosseBola0I, 
    jogo3PosseBola1A, jogo3PosseBola1B, jogo3PosseBola1C, jogo3PosseBola1D, jogo3PosseBola1E, jogo3PosseBola1F, 
    jogo3PosseBola1G, jogo3PosseBola1H, jogo3PosseBola1I);
  });
});

app.use(express.static("./"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
