const popup = document.querySelector(".popup_type_edit-profile");
const editButton = document.querySelector(".profile__edit");
const closeButton = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#proff");
const nameArea = document.querySelector(".profile__name");
const jobArea = document.querySelector(".profile__proff");
const addCard = document.querySelector(".profile__add");
const popupCard = document.querySelector(".popup_type_add-card");
const closeCardPopup = document.querySelector(".popup__close_type_add-card");
const popupImages = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const namePopupImage = document.querySelector(".popup__place");
const closeImagesPopup = document.querySelector(".popup__close_type_image");
const cardContainer = document.querySelector(".elements");
const placeInput = document.querySelector("#place");
const imageInput = document.querySelector("#image");
const formCard = document.querySelector(".popup__form_type_add-card");
const cardTemplate = document.querySelector("#cardTemplate").content;

function openPopup(popupElement) {
  popupElement.classList.add("popup_is-opened");
}
function closePopup(popupElement) {
  popupElement.classList.remove("popup_is-opened");
}

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

editButton.addEventListener("click", function () {
  nameInput.value = nameArea.textContent;
  jobInput.value = jobArea.textContent;
  openPopup(popup);
});

closeButton.addEventListener("click", function () {
  closePopup(popup);
});

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
  nameArea.textContent = nameInput.value;
  jobArea.textContent = jobInput.value;
  closePopup(popup);
});

addCard.addEventListener("click", function () {
  openPopup(popupCard);
});

closeCardPopup.addEventListener("click", function () {
  closePopup(popupCard);
});

closeImagesPopup.addEventListener("click", function () {
  closePopup(popupImages);
});

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

// Генерация карточки
const generateCard = (cardInfo) => {
  const newCard = cardTemplate.cloneNode(true);
  const nameCard = newCard.querySelector(".element__name");
  const imageCard = newCard.querySelector(".element__image");
  nameCard.textContent = cardInfo.place;
  imageCard.src = cardInfo.image;
  imageCard.alt = cardInfo.place;
  closePopup(popupCard);

  const deliteButton = newCard.querySelector(".element__delite");
  deliteButton.addEventListener("click", handleDeliteCard);

  const likeButton = newCard.querySelector(".element__like");
  likeButton.addEventListener("click", handlerLikeCard);

  const cardElement = newCard.querySelector(".element__image");

  cardElement.addEventListener("click", function (evt) {
    popupImage.src = evt.target.src;
    const text =
      evt.target.parentElement.querySelector(".element__name").innerText;
    popupImage.alt = text;
    namePopupImage.innerText = text;
    openPopup(popupImages);
  });

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
