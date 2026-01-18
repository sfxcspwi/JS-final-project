let modal = document.querySelector("#modal");
let backdrop = document.querySelector(".modal__backdrop");
let closeBtn = document.querySelector(".modal__close");
let modalSaveBtn = document.querySelector(".modal__save");
let inputName = document.querySelector(".modal__input")
let userNameOut = document.querySelector("#userName");
let interactiveLink = document.querySelector("#header__interactive-Link")
let submenu = document.querySelector("#interactiveSubmenu");
let ageInput = document.querySelector(".age__check-input")
let ageOut = document.querySelector(".age__check-answer")
let ageCheckBtn = document.querySelector(".age__check-btn")
let numberInput = document.querySelector(".guess-number__input")
let numberOut = document.querySelector(".guess-number__answer")
let numberCheckBtn = document.querySelector(".guess-number__btn")
let rpsBtns = document.querySelectorAll(".rps__btn-user");
let rpsResult = document.querySelector(".rps__result");
let rpsBtnCheck = document.querySelector(".rps__btn-check");
let computerScoreEl = document.querySelector(".computer__stats");
let userScoreEl = document.querySelector(".user__stats");
let calcOperators = document.querySelectorAll(".calc__operator")
let inputPrimary = document.querySelector(".input-primary")
let inputSecondary = document.querySelector(".input-secondary")
let calcResult = document.querySelector(".calc__result")
let calcCalculate = document.querySelector(".calc__operator-calculate")
let timeCalcOutput = document.querySelector(".time-calc__result")
let timeCalcInput = document.querySelector(".time-calc__input")
let timeCalcCheck = document.querySelector(".time-calc__btn")

timeCalcCheck.addEventListener("click", () => {

    totalSeconds = Number(timeCalcInput.value)

    if(totalSeconds < 0)
    {
        timeCalcOutput.textContent = "Введіть дійсне число"
        return;
    }

    days = Math.floor(totalSeconds/86400)
    hours = Math.floor((totalSeconds % 86400)/3600)
    minutes = Math.floor((totalSeconds % 3600)/60)
    seconds = totalSeconds % 60

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    timeCalcOutput.textContent = `${days} дн. ${hours}:${minutes}:${seconds} `
});

calcOperators.forEach(button => 
{
    button.addEventListener("click", () => {
        operators = button.dataset.action;
    });
});

calcCalculate.addEventListener("click", () => {

    if (operators === "plus")
    {
        result = Number(inputPrimary.value) + Number(inputSecondary.value)
    }
    else if (operators === "multiplication")
    {
        result = Number(inputPrimary.value) * Number(inputSecondary.value)
    }
    else if (operators === "minus")
    {
        result = Number(inputPrimary.value) - Number(inputSecondary.value)
    }
    else if (operators === "division")
    {
        if(Number(inputSecondary.value) === 0)
        {
            alert("На нуль ділити не можна!")
            return;
        }

        result = Number(inputPrimary.value) / Number(inputSecondary.value)
    }

    calcResult.textContent = `${result}`
    
});

const choices = ["rock", "scissors", "paper"];
let computerScore = 0;
let userScore = 0;
let playerChoice = ""; 

rpsBtns.forEach(button => 
{
    button.addEventListener("click", () => {
        playerChoice = button.dataset.choice;
    });
});


rpsBtnCheck.addEventListener("click", () => {
    if (playerChoice === "") 
    {
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let winner = "";

    if (playerChoice === computerChoice) 
    {
        winner = "Нічия";
        rpsResult.style.color = "black"
    } 
    else if 
    (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) 
    {
        winner = "Ви виграли раунд!";
        userScore++;
        rpsResult.style.color = "#039900"
    } 
    else 
    {
        winner = "Комп’ютер виграв раунд!";
        rpsResult.style.color = "#990000"
        computerScore++;
    }

    rpsResult.textContent = winner;
    computerScoreEl.textContent = `Комп'ютер - ${computerScore}`;
    userScoreEl.textContent = `Ви - ${userScore}`;
});


numberCheckBtn.addEventListener("click", event => {
    let computerNumber = Math.floor(Math.random() * 10) + 1;
    if( computerNumber === Number(numberInput.value))
    {
        numberOut.textContent = `Вітаю, ви вгадали число! ${computerNumber}`
        numberOut.style.color = "#039900"
    }
    else
    {
        numberOut.textContent = `Ви програли, комп’ютер загадав ${computerNumber}`
        numberOut.style.color = "#990000"
    }
})

ageCheckBtn.addEventListener("click", event => {
    if(Number(ageInput.value) % 4 === 0)
    {
        ageOut.textContent = "Ви народилися у високосний рік!"
        ageOut.style.color = "#039900"
    }
    else
    {
        ageOut.textContent = "Ви народилися не у високосний рік!"
        ageOut.style.color = "#990000"
    }
})



function closeModal() 
{
    modal.classList.remove("is-open");
}
 
backdrop.addEventListener("click", closeModal);

closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") 
    {
      closeModal();
    }
});

modalSaveBtn.addEventListener("click", event => {
    const name = inputName.value
    if (name === "") return; 
    if (name.length > 16)
    {
        alert("Максимальна кількість символів 16!")
        return
    }
    
    userNameOut.textContent = `Вітаємо, ${name}!`;
    closeModal();
});

submenu.style.display = 'none';

interactiveLink.addEventListener('click', event => {
    event.preventDefault(); 

    if (submenu.style.display === 'none') {
        submenu.style.display = 'flex'; 
    } 
    else 
    {
        submenu.style.display = 'none'; 
    }
});


document.addEventListener('click', event => {
    if (!interactiveLink.contains(event.target) && !submenu.contains(event.target)) 
    {
        submenu.style.display = 'none';
    }
});
