Enviando o código para o servidor Heroku:

'heroku login -i';
'git remote -v';
'heroku git:remote -a secure-meadow-69283' (caso não tenha um link atrelado ao heroku);
'git push heroku main'.

--------------------------------------------------------------------------------------------------

Fontes dos códigos:

Cronômetro da partida: https://phaser.discourse.group/t/countdown-timer/2471

--------------------------------------------------------------------------------------------------

Essencial para o jogo (até dia 31/05/2022):
1º Fazer o multiplayer;
2º Cronômetro acelera cada vez que se repete a partida.

Melhorias do jogo:
1º Aperfeiçoar sistema de posse de bola e gols*;
2º Botar uma bolhinha do lado do jogador quando fazer gol;
3º Empate;
4º Intervalo do jogo (difícil);
5º Contador de partidas resetar quando chega a 100.

Informação do jogo:
- Cada partida dura 28,8 segundos na vida real;
- TempoInicial === 5400 para ter 90 minutos de partida.


*O sistema de gols pode levar em consideração a diferença de força entre os times para determinar a probabilidade de uma goleada.