let userscore=0;
let compscore=0;
let msg= document.querySelector("#msg");
const choices= document.querySelectorAll(".choice");
let userscorenum = document.querySelector("#user-score");
let compscorenum = document.querySelector("#comp-score");

const gencompchoice=()=>{
   const option=["rock","paper","scissor"];
   const idx= Math.floor(Math.random() * 3);
return option[idx];
}

const drawgame = ()=>{
    msg.innerText="game draw";
    msg.style.backgroundColor = "#081b31";
    
}
 const showwinner = (userwin)=>{
      if (userwin) {
        userscore++;
        userscorenum.innerText= userscore;
        msg.innerText="you win!"
        msg.style.backgroundColor="orangered"

      }
      else{
        compscore++;
        compscorenum.innerText= compscore;
        msg.innerText="you lose."
        msg.style.backgroundColor="green"

      }
 }
const playgame=(userchoice)=>{
   const compchoice = gencompchoice();
   if (userchoice===compchoice) {
     drawgame();
   }
   else{
     let userwin=true;
     if (userchoice==="rock") {
      userwin = compchoice==="paper"?false : true;
     }
     else if (userchoice==="paper") {
       userwin= compchoice==="scissor"?false:true; 
     }
     else{
        userwin= compchoice==="rock"?false:true;
     }
    showwinner(userwin);
   }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    }); 
});