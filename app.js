let playerScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

compScorePara=document.querySelector("#comp-score");
userScorePara=document.querySelector("#player-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const number= Math.floor(Math.random() * 3);
    return options[number];
}
const drawGame=(userChoice)=>{
    console.log("Draw")
    msg.innerText=`Match Draw 🤝 You and Computer both have chosen ${userChoice}`;
    msg.style.backgroundColor="blue";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true)
    {
        playerScore++;
        userScorePara.innerText=playerScore;

        msg.innerText=`You Won 🏆 ${userChoice} beats ${compChoice}`; 
        msg.style.backgroundColor="green";


    }else{
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText=`You Lost 😕 ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    
    if(compChoice===userChoice){
        drawGame(userChoice);

    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper,secissor
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,secissor
            userWin=compChoice==="rock"?false:true;

        }else{
            userWin=compChoice==="scissor"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})