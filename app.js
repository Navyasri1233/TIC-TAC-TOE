let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newgame=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turnO=true;//player1,player2
let count=0;
let iswinner=false;

const winPattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const resetGame=()=>
{
  turnO=true;
  iswinner=false;
  enableboxes();
  msgContainer.classList.add("hide");
  count=0;
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
      if(turnO){//player1
        box.innerText="X";
        box.style.color="red";
        turnO=false;
        count++;
      }
      else//player2
      {
      box.innerText="O"
      turnO=true;
      count++;
      }
      box.disabled= true; 
      checkWinner();
    })
});


const disableboxes=()=>
{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes=()=>
{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}
const showWinner = (winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
    iswinner=true;
}

const checkWinner=()=>{
    for(pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText

        if(pos1!="" && pos2!=""&& pos3!=""){
            if(pos1===pos2&&pos2==pos3){
                showWinner(pos1);
            }
        }
    }
    Drawgame(count);

};
const Drawgame=(count)=>{
    if(count===9 && !iswinner){
        msg.innerText=`it is a draw game`;
        msgContainer.classList.remove("hide");
        disableboxes();

    }
}


newgame.addEventListener("click", resetGame);
resetBtn.addEventListener( "click", resetGame);
