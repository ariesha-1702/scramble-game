window.onload=function()
{
const msg=document.querySelector('.msg');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');
let play=false;
let newWords="";
let randWords="";
let swords=['apple','mango','grapes','pineapple','litchi','orange','strawberry','peach','banana','watermelon','melon','kiwi','pear'];

const createNewWords = () => {
    let ranNum=Math.floor(Math.random()*swords.length);
    let newTempSwords=swords[ranNum];
    return newTempSwords;
}

const scrambleWords=(arr)=>{
    for (let i = arr.length-1; i > 0; i--){
        let temp = arr[i];
        let j=Math.floor(Math.random()*(i+1));
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML="Check";
        guess.classList.toggle('hidden');
        newWords=createNewWords();
        randWords=scrambleWords(newWords.split("")).join("");
        msg.innerHTML=`Puzzle out the fruit : ${randWords}`;
    }else{
        let tempWord=guess.value;
        if(newWords===tempWord){
            play=false;
            msg.innerHTML=`Well played!!`;
            btn.innerHTML="Start Again";
            guess.classList.toggle('hidden');
            guess.value="";
        }
        else{
            msg.innerHTML=`OOPS! Its wrong!! Guess again : ${randWords}`;

        }
    }
})
}
