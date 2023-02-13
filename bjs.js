
let cards=[]
let sum=0
let ingame=false
let hasblackjack=false
message=""
let player=
{
    name : "Dhruv",
    chips : 150
}

let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")

playerEl.textContent= player.name+" : $ "+player.chips


function getrandomcard()
{
    let temp=Math.floor(Math.random()*13)+1
    if(temp==1)
    temp=11
    else if(temp>10)
    temp=10
    else{}
    return temp;
}
function startgame()
{
    sum=0
    ingame=true
    cards=[]
    newcard()
    newcard()
}

function rendergame()
{
   
    
        if(sum<21)
        {
            message=("do you want to pick up another card")
        }
        else if(sum===21)
        {
            message=("congradulations you have gotten a blackjack")
            hasblackjack=true
        }
        else
        {
        message=("oh! you have gone over 21!! Your are out of the game :(")
        ingame=false
        }
        console.log(message)
        messageEl.textContent=message
        sumEl.textContent="sum: "+ sum
        cardsEl.textContent="cards: "
        for(let i=0;i<cards.length;i++)
        cardsEl.textContent+=cards[i]+" |  "
    
}
function newcard()
{
    if(ingame==true&&sum!=21)
    {
        if(cards.length<3)
        message=("drawing first two cards from deck...")
        else
        message=("drawing a new card from the deck")
        messageEl.textContent=message
        let card=getrandomcard()
        sum+=card
        cards.push(card)
        rendergame()
    }
}