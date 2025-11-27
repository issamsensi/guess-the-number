let min = 1;
let max = 100;
let iterat = 0;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
let guess = document.getElementById("guess");
let answer = document.getElementById("answer");
let userInput;
let statu = true;

function game(stat, ges){
    iterat = 0;
    random = Math.floor(Math.random() * 100) + 1;
    statu = stat;
    guess.textContent = ges;
}

guess.onclick = function(){
    if(statu){
        iterat++;
        userInput = Number(document.getElementById("number").value);
        document.getElementById("number").value = "";
        if(userInput < min || userInput > max){
            answer.innerText = `you should enter a number between 1 and 100!`
        }
        else if(userInput === random){
            answer.innerHTML = `Congratulations! you win in ${iterat} attempts.<br>
            click restart to play again!
            `;
            game(false, "restart");
        }else if(userInput > random){
            answer.innerText = `your number is bigger!`
        }else if(userInput < random){
            answer.innerText = `your number is smaller!`
        }else{
            answer.innerText = `you should enter a number!`
        }
    }else{
        game(true, "guess")
        answer.innerText = `a new game has started!`;
        document.getElementById("number").value = "";
    }
    
}