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
let drawScore = document.querySelector(".draw")
let calcOperators = document.querySelectorAll(".calc__operator")
let inputPrimary = document.querySelector(".input-primary")
let inputSecondary = document.querySelector(".input-secondary")
let calcResult = document.querySelector(".calc__result")
let calcCalculate = document.querySelector(".calc__operator-calculate")
let timeCalcOutput = document.querySelector(".time-calc__result")
let timeCalcInput = document.querySelector(".time-calc__input")
let timeCalcCheck = document.querySelector(".time-calc__btn")
let footballField = document.querySelector(".football__field");
let footballBall = document.querySelector(".football__ball");
let bgstnumberInputs = document.querySelectorAll(".bgstnumber__input")
let bgstnumberOutput = document.querySelector(".bgstnumber__result")
let swicthMode = document.querySelector(".switch__mode")
let imgTeam = document.querySelector(".team-mmbr__img");
let nameTeam = document.querySelector(".team-mmbr__name");
let infoTeam = document.querySelector(".team-mmbr__info");
let btnsTeam = document.querySelectorAll(".team-mmbr__btn");
let indicators = document.querySelectorAll(".slider__indicator");
let scientistInfo = document.querySelectorAll(".scientist__info");
let scientistButtons = document.querySelectorAll(".scientist__btn");
let gamesType = document.querySelectorAll(".header__submenu-link")
let sections = document.querySelectorAll("section[data-category]");
let footerBtn = document.querySelector(".footer__email-btn")
let footerInput = document.querySelector(".footer__email-input")
let footerModal = document.querySelector(".footer-modal")
let footerBtnClose = document.querySelector(".footer-modal__close")
let footerBackdrop = document.querySelector(".footer-modal__backdrop")
let dinoStartBtn = document.querySelector(".dino__btn")
let dinoBg = document.querySelector(".dino__bg")
let dinoCactus = document.querySelector(".dino__cactus")
let dino = document.querySelector(".dino")

let cactusX = dinoBg.offsetWidth;
let bgX = 0;
let speed = 5;
let isRunning = false;
let isJumping = false;
let jumpHeight = 200; 
let jumpSpeed = 5; 
let dinoBottom = 37;
let jumpUp = true;

function moveGame() 
{
    if (!isRunning) return;

    cactusX -= speed;
    dinoCactus.style.transform = `translateX(${cactusX}px)`;

    bgX -= speed;
    dinoBg.style.backgroundPosition = `${bgX}px -50px`;


    if (isJumping) 
    {
        if (jumpUp)
        {
            dinoBottom += jumpSpeed;
            if (dinoBottom >= jumpHeight) jumpUp = false;
        } 
        else 
        {
            dinoBottom -= jumpSpeed;
            if (dinoBottom <= 37) 
            {
                dinoBottom = 37;
                isJumping = false;
                jumpUp = true;
            }
        }

        dino.style.bottom = dinoBottom + "px";
    }

    let dinoRect = dino.getBoundingClientRect();
    let cactusRect = dinoCactus.getBoundingClientRect();

    if 
    (
        dinoRect.left < cactusRect.right &&
        dinoRect.right > cactusRect.left &&
        dinoRect.bottom > cactusRect.top
    ) 
    {
        alert("Ви програли!");
        dinoStartBtn.textContent = "Почати";
        isRunning = false;
        cactusX = dinoBg.offsetWidth;
        dinoCactus.style.transform = `translateX(${cactusX}px)`;
        return;
    }

    if (cactusX < -50) 
    {
        cactusX = dinoBg.offsetWidth + Math.random() * 300;
    }

    requestAnimationFrame(moveGame);

}


dinoStartBtn.addEventListener("click", () => 
{
    isRunning = !isRunning;
    if (isRunning) 
    {
        moveGame();
        dinoStartBtn.textContent = "Зупинити";
    } 
    else 
    {
        dinoStartBtn.textContent = "Почати";
    }
});


document.addEventListener("keydown", event => {
    if (event.code === "Space") 
    {
        event.preventDefault(); 
        if (!isJumping && isRunning) 
        {
            isJumping = true;
        }
    }
});


footerBtn.addEventListener("click", btn =>
{
    if(footerInput.value !== "")
    {
        footerModal.classList.remove("is-hidden")
    }
})

function closeFooterModal() 
{
    footerModal.classList.add("is-hidden");
}

footerBackdrop.addEventListener("click", closeFooterModal);

footerBtnClose.addEventListener("click", closeFooterModal);

document.addEventListener("keydown", event => {
    if(event.key === "Escape") 
    {
      closeFooterModal();
    }
});

gamesType.forEach(link => 
{
    link.addEventListener("click", event => {

        let category = link.dataset.type;

        sections.forEach(sec => {
            if(sec.dataset.category === category) 
            {
                sec.style.display = "block"; 
            }
            else 
            {
                sec.style.display = "none"; 
            }
        });
    });
})

let scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

scientists.forEach((s, i) => {
    scientistInfo[i].textContent = `${s.name} ${s.surname} (${s.born}–${s.dead})`;
});

renderScientists(scientists);

scientistButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        clearScientistHighlight();

        let key = btn.dataset.info;
        if(key && action[key]) {
            renderScientists(action[key](scientists));
        }
    });
});

function renderScientists(filteredScientists) {
    scientistInfo.forEach((s, i) => {
        if (filteredScientists[i]) 
        {
            s.textContent = `${filteredScientists[i].name} ${filteredScientists[i].surname} (${filteredScientists[i].born}–${filteredScientists[i].dead})`;
            s.classList.remove("scientist__hidden");
        } 
        else 
        {
            s.classList.add("scientist__hidden");
        }
    });
}

function highlightScientist(index) 
{
    scientistInfo.forEach(element => element.classList.remove("scientist__highlight"));
    if (scientistInfo[index]) 
    {
        scientistInfo[index].classList.add("scientist__highlight");
    }
}

function clearScientistHighlight() 
{
    scientistInfo.forEach(element =>
        element.classList.remove("scientist__highlight")
    );
}

let action = {
    bornInNineteenCentury: arr => 
    {
        clearScientistHighlight();

        arr.forEach((s, i) => {
            if (s.born >= 1801 && s.born <= 1900) {
                scientistInfo[i].classList.add("scientist__highlight");
            }
        });

        return arr; 
    },
    sortByAlpha: arr => [...arr].sort((a, b) => a.surname.localeCompare(b.surname)),
    sortLife: arr => [...arr].sort((a, b) => (b.dead - b.born) - (a.dead - a.born)),
    surnameC: arr => {
    clearScientistHighlight();

    arr.forEach((s, i) => {
        if (s.surname.startsWith("C")) {
            scientistInfo[i].classList.add("scientist__highlight");
        }
    });

        return arr; 
    },

    removeNameA: arr => arr.filter(s => !s.name.startsWith("A")),
    sameFirstLetter: arr => {
        clearScientistHighlight();

            arr.forEach((s, i) => {
                if (s.name[0] === s.surname[0]) {
                    scientistInfo[i].classList.add("scientist__highlight");
                }
            });

        return arr;
    },
    
    einsteinYear: arr => { 
        let einstein = arr.find(s => s.name === "Albert" && s.surname === "Einstein"); 
        alert(`Albert Einstein народився у ${einstein.born} році`); 
        return arr; 
    },
    
    longestLife: arr => {
    let latestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].born > arr[latestIndex].born) 
        {
            latestIndex = i;
        }
    }

    highlightScientist(latestIndex);
    return arr;
    },

    minMaxLife: arr => 
    {
        let longestIndex = 0;
        let shortestIndex = 0;

        for (let i = 1; i < arr.length; i++) 
            {
            if (
                arr[i].dead - arr[i].born >
                arr[longestIndex].dead - arr[longestIndex].born
            ) {
                longestIndex = i;
            }

            if (
                arr[i].dead - arr[i].born <
                arr[shortestIndex].dead - arr[shortestIndex].born
            ) {
                shortestIndex = i;
            }
        }

        scientistInfo.forEach(el =>
            el.classList.remove("scientist__highlight")
        );

        scientistInfo[longestIndex].classList.add("scientist__highlight");
        scientistInfo[shortestIndex].classList.add("scientist__highlight");

        return arr;
    }
};

let team = 
[
    {
        img: "/img/me.jpg",
        name: "Чугуївець Станіслав",
        info: "Team лідер"
    },

    {
        img: "/img/lupiian.jpg",
        name: "Лупій Анастасія",
        info: "Найкращий викладач"
    },
    {
        img: "/img/chatgpt.png",
        name: "ChatGpt",
        info: "Права рука"
    },
    {
        img: "/img/spotify.png",
        name: "Spotify",
        info: "Музика, Ліва рука"
    },
];

let currentIndex = 0;

updateMember();
btnsTeam[0].style.opacity = 0;

function updateIndicators() 
{
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle(
            "slider__indicator--active",
            index === currentIndex 
        );
    });
}

function updateMember() 
{
    imgTeam.src = team[currentIndex].img;
    nameTeam.textContent = team[currentIndex].name;
    infoTeam.textContent = team[currentIndex].info;
    updateIndicators();
}

btnsTeam[1].addEventListener("click", () => {
    if (currentIndex < team.length - 1) {
        currentIndex++;
        updateMember();
    }

    
    if (currentIndex >= team.length - 1) 
    {
        btnsTeam[1].style.opacity = 0;
    } 
    else 
    {
        btnsTeam[1].style.opacity = 1;
    }

    btnsTeam[0].style.opacity = 1;
});

btnsTeam[0].addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateMember();
    }

    if (currentIndex <= 0) 
    {
        btnsTeam[0].style.opacity = 0;
    } 
    else 
    {
        btnsTeam[0].style.opacity = 1;
    }
    
    btnsTeam[1].style.opacity = 1;
});

swicthMode.addEventListener("click", event =>
{
    if(swicthMode.src.includes("switch__day"))
    {
        swicthMode.src = "/svg/switch__night.svg"
    }
    else 
    {
        swicthMode.src = "/svg/switch__day.svg"
    }
})

bgstnumberInputs.forEach( input => 
{
    input.addEventListener("input", event => {
        let values = []

        bgstnumberInputs.forEach( inp => 
        {
            if(inp.value !== 0)
            {
                values.push(Number(inp.value))
            }
        })

        if(values.length>0)
        {
            let max = Math.max(...values)
            bgstnumberOutput.textContent = `Найбільше число яке ви ввели - ${max}`
        }
        else
        {
            bgstnumberOutput.textContent = `Найбільше число яке ви ввели - none`
        }
    })
});

footballField.addEventListener("click", event => {
    let fieldRect = footballField.getBoundingClientRect();
    let ballRect = footballBall.getBoundingClientRect();  

    let x = event.clientX - fieldRect.left - ballRect.width / 2;
    let y = event.clientY - fieldRect.top - ballRect.height / 2;  

    x = Math.max(0, Math.min(x, fieldRect.width - ballRect.width)); 
    y = Math.max(0, Math.min(y, fieldRect.height - ballRect.height));

    footballBall.style.left = `${x}px`;
    footballBall.style.top = `${y}px`;
});


timeCalcCheck.addEventListener("click", () => {

    if(isNaN(timeCalcInput.value))
    {
        alert("Введіть число!")
        return;
    }

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
    else if(operators === "multiplication")
    {
        result = Number(inputPrimary.value) * Number(inputSecondary.value)
    }
    else if(operators === "minus")
    {
        result = Number(inputPrimary.value) - Number(inputSecondary.value)
    }
    else if(operators === "division")
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

let choices = ["Камінь", "Ножиці", "Папір"];
let computerScore = 0;
let userScore = 0;
let draw = 0;
let playerChoice = ""; 

rpsBtns.forEach(button => 
{
    button.addEventListener("click", () => {
        playerChoice = button.dataset.choice;
    });
});


rpsBtnCheck.addEventListener("click", () => {
    if(playerChoice === "") 
    {
        return;
    }
    
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let winner = "";
    rpsBtnCheck.textContent = `${computerChoice}`

    if(playerChoice === computerChoice) 
    {
        winner = "Нічия";
        draw++
        rpsResult.style.color = "black"
    } 
    else if 
    (
        (playerChoice === "Камінь" && computerChoice === "Ножиці") ||
        (playerChoice === "Ножиці" && computerChoice === "Папір") ||
        (playerChoice === "Папір" && computerChoice === "Камінь")
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
    drawScore.textContent = `Нічия - ${draw}`
});


numberCheckBtn.addEventListener("click", event => {
    let computerNumber = Math.floor(Math.random() * 10) + 1;

    if(isNaN(numberInput.value))
    {
        alert("Введіть число!")
        return;
    }

    if(computerNumber === Number(numberInput.value))
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

    if(isNaN(ageInput.value))
    {
        alert("Введіть число!")
        return;
    }

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
    if(event.key === "Escape") 
    {
      closeModal();
    }
});

modalSaveBtn.addEventListener("click", event => {
    let name = inputName.value
    if(name === "") return; 
    if(name.length > 16)
    {
        alert("Максимальна кількість символів 16!")
        return
    }
    
    userNameOut.textContent = `Вітаємо, ${name}!`;
    closeModal();
});

submenu.style.display = "none";

interactiveLink.addEventListener("click", event => {

    event.preventDefault(); 

    if(submenu.style.display === "none") {
        submenu.style.display = "flex"; 
    } 
    else 
    {
        submenu.style.display = "none"; 
    }
});


document.addEventListener("click", event => {
    if(!interactiveLink.contains(event.target) && !submenu.contains(event.target)) 
    {
        submenu.style.display = "none";
    }
});
