const modal = document.querySelector("#modal");
const backdrop = document.querySelector(".modal__backdrop");
const closeBtn = document.querySelector(".modal__close");
const modalSaveBtn = document.querySelector(".modal__save");
const inputName = document.querySelector(".modal__input")
const userNameOut = document.querySelector("#userName");

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
    userNameOut.textContent = `Вітаємо, ${name}!`;
    closeModal();
});
