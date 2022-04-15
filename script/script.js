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

// Находим форму в DOM
let formElement = document.querySelector('.popup__form')
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name')
let jobInput = document.querySelector('.popup__proff')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей

    let nameArea = document.querySelector('.info__name');
    let jobArea = document.querySelector('.info__proff');

    // Вставьте новые значения с помощью textContent
    nameArea.textContent = nameInput.value;
    jobArea.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


const save = document.querySelector('.popup__save');

function closePopup() {
    popup.classList.remove('popup_is-opened');
}

save.addEventListener('click', closePopup);