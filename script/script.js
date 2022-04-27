const popup = document.querySelector(".popup");
const edit = document.querySelector(".profile__edit");
const close = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#proff");
let nameArea = document.querySelector(".profile__name");
let jobArea = document.querySelector(".profile__proff");
const addCard = document.querySelector(".profile__add");
const popupCard = document.querySelector("#card");
const closePopup = document.querySelector("#closePopupCard");
const popupImages = document.querySelector(".popup-images");
const popupImage = document.querySelector(".popup-images__image");
const namePopupImage = document.querySelector(".popup-images__place");
const closeImages = document.querySelector(".popup-images__close");
const cardContainer = document.querySelector(".elements");
const placeInput = document.querySelector("#place");
const imageInput = document.querySelector("#image");
const formCard = document.querySelector("#formCard");
const cardTemplate = document.querySelector("#cardTemplate").content;
function openPopupInfo() {
  popup.classList.add("popup_is-opened");
  nameInput.value = nameArea.textContent;
  jobInput.value = jobArea.textContent;
}
function closePopupInfo() {
  popup.classList.remove("popup_is-opened");
}

function openPopupCard() {
  popupCard.classList.add("popup_is-opened");
}
function closePopupCard() {
  popupCard.classList.remove("popup_is-opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameArea.textContent = nameInput.value;
  jobArea.textContent = jobInput.value;
  closePopupInfo();
}
function closePopupImages() {
  popupImages.classList.remove("popup-images_is-opened");
}
closeImages.addEventListener("click", closePopupImages);
formElement.addEventListener("submit", formSubmitHandler);
edit.addEventListener("click", openPopupInfo);
close.addEventListener("click", closePopupInfo);
addCard.addEventListener("click", openPopupCard);
closePopup.addEventListener("click", closePopupCard);

const initialCards = [
  {
    place: "Архыз",
    image:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    place: "Челябинская область",
    image:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    place: "Иваново",
    image:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    place: "Камчатка",
    image:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    place: "Холмогорский район",
    image:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    place: "Байкал",
    image:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const handleSubmitAddFormCard = (evt) => {
  evt.preventDefault();
  renderCard({ place: placeInput.value, image: imageInput.value });

  placeInput.value = "";
  imageInput.value = "";
  closePopupCard();
};

const handleDeliteCard = (evt) => {
  evt.target.closest(".element").remove();
};

const handlerLikeCard = (evt) => {
  evt.target.closest(".element__like").classList.toggle("element__like_active");
};

function openPopupImages(evt) {
  popupImages.classList.add("popup-images_is-opened");
  popupImage.src = evt.target.src;
  console.log(evt.target)
  namePopupImage.innerText = evt.target.parentElement.querySelector('.element__name').innerText;
}
// Генерация карточки
const generateCard = (cardInfo) => {
  const newCard = cardTemplate.cloneNode(true);
  const nameCard = newCard.querySelector(".element__name");
  const imageCard = newCard.querySelector(".element__image");
  nameCard.textContent = cardInfo.place;
  imageCard.src = cardInfo.image;

  const deliteButton = newCard.querySelector(".element__delite");
  deliteButton.addEventListener("click", handleDeliteCard);

  const likeButton = newCard.querySelector(".element__like");
  likeButton.addEventListener("click", handlerLikeCard);

  const cardElement = newCard.querySelector(".element__image");

  cardElement.addEventListener("click", openPopupImages);

  return newCard;
};
// Рендер карточек
const renderCard = (cardInfo) => {
  cardContainer.prepend(generateCard(cardInfo));
};

initialCards.forEach((cardInfo) => {
  renderCard(cardInfo);
});

formCard.addEventListener("submit", handleSubmitAddFormCard);
