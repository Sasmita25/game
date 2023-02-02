'use strict';

//Selecting elements 

let totalp1=document.getElementById('score--0');
let totalp2=document.getElementById('score--1');
const player0E0=document.querySelector('.player--0');
const player0El=document.querySelector('.player--1');
let currentp1=document.getElementById('current--0');
let currentp2=document.getElementById('current--1');
const diceList=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');

//Setting initial values

totalp1.textContent=0;
totalp2.textContent=0;
diceList.classList.add('hidden');
const scores=[0,0];
let currentscore=0;
let activeplayer=0;
let playing=true;
//Switch player

const switchpl=function(){
  //Method 1
  document.getElementById(`current--${activeplayer}`).textContent=0; 
  activeplayer=activeplayer== 0 ? 1 : 0;
  currentscore=0;
  player0E0.classList.toggle('player--active');
  player0El.classList.toggle('player--active');
  //Method 2
//   if(activeplayer == 0){
//     currentp1.textContent=0;
//     player0E0.classList.remove('player--active');
//   }
//   else{
//     currentp2.textContent=0;
//     player0El.classList.remove('player--active');
//   }
// activeplayer=activeplayer== 0 ? 1 : 0;
// currentscore=0;
// activeplayer == 0 ? player0E0.classList.add('player--active'): player0El.classList.add('player--active');
};
//Rolling the dice

btnroll.addEventListener('click', function() {
 if(playing){
    //Generate random number
    const dice=Math.trunc(Math.random()*6)+1;
    console.log(dice);
    //Display dice based on the random number generated above
    diceList.classList.remove('hidden');
    diceList.src=`dice-${dice}.png`;

    //If dice is 1 switch player
    if(dice !==1){
         //Add value to the current score
        //1st method
        //  if(activeplayer == 0){
        //    currentscore+=dice;
        //    currentp1.textContent=currentscore;
        //  }
        //  else{
        //     currentscore+=dice;
        //    currentp2.textContent=currentscore;
        //  }

        //2nd method
        currentscore+=dice;
        document.getElementById(`current--${activeplayer}`).textContent=currentscore;
    }
    else{
         //Switch the player
          switchpl();
    
    }
  }
});
btnhold.addEventListener('click',function(){
    //Add currentscore of active player to total score  
    if(playing){
    scores[activeplayer]+=currentscore;
    document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];
    //If score >=100 the player wins
    if(scores[activeplayer] >=20){
      playing=false;
      diceList.classList.add('hidden');
      document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
      document.getElementById(`current--${activeplayer}`).textContent=0;
    }
      else{
     //Switch the player
     switchpl();
      }
    }
});
btnnew.addEventListener('click',function(){

  totalp1.textContent=0;
  totalp2.textContent=0;
  diceList.classList.add('hidden');
  document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
  activeplayer=0;
  document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
 currentp1.textContent=0;
 currentp2.textContent=0;
  currentscore=0;
  scores[0]=0;
  scores[1]=0;
 playing=true;


})
