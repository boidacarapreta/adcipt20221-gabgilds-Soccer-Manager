Informações importantes para o projeto:

'Ctrl + Shift + P' -> Mostra todos os comandos;
'Ctrl + Shift + E' -> Mostra o explorador;
'Ctrl + Shift + G' -> Mostra o controlador de versões;
'Ctrl + "' -> Abrir o terminal.

chrome://inspect -> Analisar as informações da rede no Google Chrome.

Para ter o servidor local basta colocar 'this.socket = io()'.

-------------------------------------------------------------------------------

Enviando o código para o servidor Heroku:


'heroku login -i';
'heroku create'
'git remote -v'; //Ver se tem o main registrado
'heroku git:remote -a secure-meadow-69283' (caso não tenha um link atrelado ao heroku);
'git push heroku main'.

-------------------------------------------------------------------------------

Fontes dos códigos:

Cronômetro da partida: https://phaser.discourse.group/t/countdown-timer/2471

(LER) Multiplayer do jogo: https://hannahrobot.com/2020/12/04/build-among-us-live-multiplayer-phaser-3-socket/

-------------------------------------------------------------------------------

Melhorias do jogo:
1ºSala de espera para jogadores em excesso e desconectar quando jogo acabar.
2º Aperfeiçoar sistema de posse de bola e gols*;
3º Botar uma bolhinha do lado do jogador quando fazer gol;
4º Empate;
5º Intervalo do jogo;

Informação do jogo:
- Cada partida dura 28,8 segundos na vida real;
- TempoInicial === 5400 para ter 90 minutos de partida.


*O sistema de gols pode levar em consideração a diferença de força entre os times para determinar a probabilidade de uma goleada.