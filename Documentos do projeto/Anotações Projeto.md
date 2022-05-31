Shortcuts importantes para o projeto:

'Ctrl + Shift + P' -> Mostra todos os comandos;
'Ctrl + Shift + E' -> Mostra o explorador;
'Ctrl + Shift + G' -> Mostra o controlador de versões;
'Ctrl + "' -> Abrir o terminal.

-------------------------------------------------------------------------------

Enviando o código para o servidor Heroku:

'heroku login -i';
'git remote -v';
'heroku git:remote -a secure-meadow-69283' (caso não tenha um link atrelado ao heroku);
'git push heroku main'.

-------------------------------------------------------------------------------

Fontes dos códigos:

Cronômetro da partida: https://phaser.discourse.group/t/countdown-timer/2471

-------------------------------------------------------------------------------

Essencial para o jogo (até dia 31/05/2022):
1º Fazer o multiplayer.

Melhorias do jogo:
1º Aperfeiçoar sistema de posse de bola e gols*;
2º Botar uma bolhinha do lado do jogador quando fazer gol;
3º Empate;
4º Intervalo do jogo.

Informação do jogo:
- Cada partida dura 28,8 segundos na vida real;
- TempoInicial === 5400 para ter 90 minutos de partida.


*O sistema de gols pode levar em consideração a diferença de força entre os times para determinar a probabilidade de uma goleada.