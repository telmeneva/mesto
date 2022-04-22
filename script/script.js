const popup = document.querySelector('.popup');
const edit = document.querySelector('.profile__edit');
const close = popup.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#proff');
let nameArea = document.querySelector('.profile__name');
let jobArea = document.querySelector('.profile__proff');

function openPopupInfo() {
    popup.classList.add('popup_is-opened');
    nameInput.value = nameArea.textContent;
    jobInput.value = jobArea.textContent;
}
function closePopupInfo() {
    popup.classList.remove('popup_is-opened');
}

// const likes = document.getElementsByClassName('element__like');

// function likeActive(e)  {
//     e.target.classList.toggle('element__like_active');
// }

// console.log(likes)
// for(let i = 0; i < likes.length; i++) {
//     const like = likes[i];
//     like.addEventListener('click', likeActive);
// }

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    nameArea.textContent = nameInput.value;
    jobArea.textContent = jobInput.value;
    closePopupInfo();
}

formElement.addEventListener('submit', formSubmitHandler);
edit.addEventListener('click', openPopupInfo);
close.addEventListener('click', closePopupInfo);