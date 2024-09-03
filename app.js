let userscore = 0;
let computerscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");


const genComputerchoice = () => {
const options =["rock", "paper","scissors"] ;
const randIdx= Math.floor(Math.random() * 3);
return options [randIdx];   
};

const drawgame=()=>{
  console.log("game was draw ");
  msg.innerText = "game was draw Play again";

};


const showwin =(userwin) =>{
if(userwin){
  userscore++;
  userscorepara.innerText = userscore; 
  console.log("you Win ");
  msg.innerText = "you win";


} else{
  computerscore++;
computerscorepara.innerText = computerscore; 
  console.log("you Lose");
  msg.innerText = "you lose";

}
};


const playGame = (userchoice ) => {
    console.log("user choice = ", userchoice);
    //generate computer choice 
    const Computerchoice = genComputerchoice();
    console.log(" computer choice =",Computerchoice );
    if(userchoice === Computerchoice){
      //draw game
      drawgame(); 

    }else{
      let userwin = true;
      if( userchoice === "rock") {
        // computer chioce paper , scissors
         userwin = Computerchoice === "paer" ? false : true;
      } else 
       if(userchoice === "paper") {
        // computer chioce rock , scissors
         userwin =  Computerchoice === "scissors"  ? false : true;     
      } else if( userchoice === "scissors") {
        // computer chioce rock , paper 
                userwin = Computerchoice === "Rock" ? false : true;
      }
      showwin(userwin);
    }
     
  }; 


  choices.forEach((choice) => {
   
        choice.addEventListener("click", () => {
         const userchoice= choice.getAttribute("id");
         playGame(userchoice);
    }); 


    
 });
    