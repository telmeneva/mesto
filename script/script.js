const popup = document.querySelector('.popup');
const edit = document.querySelector('.info__edit');
const close = popup.querySelector('.popup__close');

function popupOpenInfo() {
    popup.classList.toggle('popup_is-opened');
}

edit.addEventListener('click', popupOpenInfo);

close.addEventListener('click', popupOpenInfo);

// const likes = document.getElementsByClassName('element__like');

// function likeActive(e)  {
//     e.target.classList.toggle('element__like_active');
// }

// console.log(likes)
// for(let i = 0; i < likes.length; i++) {
//     const like = likes[i];
//     like.addEventListener('click', likeActive);
// }

let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__name')
let jobInput = document.querySelector('.popup__proff')

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    let nameArea = document.querySelector('.info__name');
    let jobArea = document.querySelector('.info__proff');

    nameArea.textContent = nameInput.value;
    jobArea.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);


const save = document.querySelector('.popup__save');

function closePopup() {
    popup.classList.remove('popup_is-opened');
}

save.addEventListener('click', closePopup);