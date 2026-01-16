const modal = document.querySelector("#modal");
const backdrop = document.querySelector(".modal__backdrop");
const closeBtn = document.querySelector(".modal__close");
const modalSaveBtn = document.querySelector(".modal__save");
const inputName = document.querySelector(".modal__input")
const userNameOut = document.querySelector("#userName");
const interactiveLink = document.querySelector("#header__interactive-Link")
const submenu = document.querySelector("#interactiveSubmenu");


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