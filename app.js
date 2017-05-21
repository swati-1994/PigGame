/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer,gamePlaying;



init();

scores=[0,0];
roundScores=0;
activePlayer=0;

// dice=Math.floor(Math.random()*6)+1;
// document.querySelector('#current-'+activePlayer).textContent=  dice ;
// var x= document.querySelector('#score-0').textContent;
document.querySelector('.dice').style.display='none';


document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click',function () {

    if (gamePlaying) {

        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // var diceDOM = document.querySelector('.dice');

        document.getElementById('dice-1').style.display='block';
        document.getElementById('dice-2').style.display='block';
        // diceDOM.style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-1').src = 'dice-' + dice2 + '.png';

        // if (dice == 6 && lastDice == 6) {
        //
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     personSecond();
        // }

        if (dice1 !== 1 && dice2 !==1) {
            roundScores += dice1+dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;

        }
        else {
            personSecond();
            // activePlayer===0? activePlayer=1:activePlayer=0;
            // roundScores=0;
            // document.getElementById('current-0').textContent='0';
            // document.getElementById('current-1').textContent='0';
            //
            //
            // document.querySelector('.player-0-panel ').classList.toggle('active');
            // document.querySelector('.player-1-panel ').classList.toggle('active');
            //
            // document.querySelector('.dice').style.display='none';
        }
        // lastDice=dice;
    }



})


document.querySelector('.btn-hold').addEventListener('click',function () {
if(gamePlaying) {
    scores[activePlayer] += roundScores;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input=document.querySelector('.final-score').value;
var winningScore;
    if(input){

         winningScore=input;
    }
    else{
        winningScore=10;
    }

    if (scores[activePlayer] >= winningScore) {
        console.log("heyy");
        gamePlaying = false;

        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying=false;
    }

    else {
        personSecond();
    }

}

})

document.querySelector('.btn-new').addEventListener('click',init);

function personSecond() {

    activePlayer===0? activePlayer=1:activePlayer=0;
    roundScores=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';


    document.querySelector('.player-0-panel ').classList.toggle('active');
    document.querySelector('.player-1-panel ').classList.toggle('active');

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';

}

function  init() {

    gamePlaying=true;

    scores=[0,0];
    roundScores=0;
    activePlayer=0;

// dice=Math.floor(Math.random()*6)+1;
// document.querySelector('#current-'+activePlayer).textContent=  dice ;
// var x= document.querySelector('#score-0').textContent;
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';


    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.querySelector('.player-0-panel ').classList.remove('active');
    document.querySelector('.player-1-panel ').classList.remove('active');
    document.querySelector('.player-0-panel ').classList.add('active');
    // document.querySelector('.player-1-panel ').classList.add('active');

    document.querySelector('.player-0-panel ').classList.remove('winner');
    document.querySelector('.player-1-panel ').classList.remove('winer');
}