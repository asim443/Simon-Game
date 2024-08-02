let totalSequence=["green","red","blue","yellow"];  //for total colors
let gameSequence=[];    //for sequence of games that are randomly generated.
let userSequence=[];    //user that inputs the value
let started=false;     //it tells that whether the game is start or not.
let level=0;            //to count total scores.
let highLevel=0;     //to count highest score of a single person.
let h3=document.querySelector("h3");             //selection of some elements
let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let box4=document.querySelector(".box4");
document.addEventListener("keypress",()=>{          //press any key to start functionality
    if(started==false)
    {
        console.log("game is started");
        started=true;
        levelUp();                  //level up function calling
    }
});
//it is used to flash the box based upon the argument
function flashUp(btn)
{
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },200);
}
//it handles the functionality of level up and also generates the random
// colors .
function levelUp()
{
    userSequence=[];
    level++;
    h3.innerText=`Level ${level}`;
    let random=Math.floor(Math.random()*4);
    let color=totalSequence[random];
    gameSequence.push(color);
    console.log(gameSequence);
    if(color=="green")
    {
        flashUp(box1);
    }
    else if(color=="red")
    {
        flashUp(box2);
    }
    else if(color=="blue")
    {
        flashUp(box3);
    }
    else if(color=="yellow")
    {
        flashUp(box4);
    }
}
//it checks the answer whether it is correct or not.
function checkAns(lvl)
{
    if(gameSequence[lvl-1]===userSequence[lvl-1])
    {
        if(userSequence.length==gameSequence.length)
        {
            setTimeout(() => {
                levelUp();
            }, 500);
        }
    }
    else
    {
        h3.innerHTML=`Game over!Your score is<b> ${level}</b> <br> Press any key to continue.`;   
        document.querySelector("body").style.backgroundColor="red";

        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
    
}
//it tells us that which button is pressed.
function btnPress(){
    let btn=this;
    flashUp(btn);
    let usercolor=btn.getAttribute("id");
    userSequence.push(usercolor);
    checkAns(userSequence.length-1);
}
//selection of all boxes.
let allboxes=document.querySelectorAll(".box");
//looping over the all boxes and then calling btn press.
for(sub of allboxes){
    sub.addEventListener("click",btnPress);
}
//it is used to reset the overall game
function reset()
{
    started=false;
    gameSequence=[];
    userSequence=[];
    if(level>=highLevel)
    {
        highLevel=level;
    }
    console.log("highest score", highLevel);
    level=0;
}