//  Switch Case //

let player="rock";
let computer="scissors";

switch (player){
    case computer:
        console.log("Tie!!!");
        break;
    case "rock":
        if (computer === "scissors"){
            console.log("Player Wins");
        }
        else{
            console.log("Computuer Wins!!!");
        }
        break;
    default:
        console.log("No Tie!!!");
}

// Ternary Operators //
let me="rock";
let comp="scissors";
let result=me === comp? "Tie" :me === "rock" && comp === "paper"? "computer wins" : me==="scissors" && comp==="rock"? "computer wins":"player wins";
console.log(result)