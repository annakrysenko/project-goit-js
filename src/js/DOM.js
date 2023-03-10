export const refs = {
  submitBtnSearchEl: document.querySelector('.submit-search-button'),
  formEl: document.querySelector('.form-search'),
  mainHomeEl: document.querySelector('#main-home'),
  inputAnswerParEl: document.querySelector('.input-answer'),

  homeBTN: document.querySelector('.home'),
  libraryCurrentBntEl: document.querySelector('.my-library .current'),
  closeAnswerInputBtnEl: document.querySelector('close-input-answer'),
  answerInputWrapEl: document.querySelector('.input-answer-wrap'),
  // pagination
  pageBtns: document.querySelector('.pagination-list'),
  pageBtnsInput: document.querySelector('.paginatio-input-list'),
  pageBtnsGenres: document.querySelector('.paginatio-genres-list'),

  //galleries
  filmGalleryHomeEl: document.querySelector('.movie-gallery'),
  filmGalleryLibraryEl: document.querySelector('.movie-gallery-library'),

  //modal footer
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-team-backdrop'),

  //Модалка Максима
  modalEl: document.querySelector('.modal'),
  backdropEl: document.querySelector('.backdrop'),
  containerEl: document.querySelector('.modal-container'),
  modalCloseBtn: document.querySelector('.modal__close-btn'),

  //loader spiner
  loaderEl: document.querySelector('.loader'),

  // зміна теми
  themeButtonEl: document.querySelector('.theme'), // Кнопка теми
  themeListEl: document.querySelector('.theme__list'),
  defaultThemeButtonEl: document.querySelector('.reset-theme-btn'), // Кнопка скидання налаштувань користувача
  lightThemeButtonEl: document.querySelector('.light-theme-btn'), //світла тема
  darkThemeButtonEl: document.querySelector('.dark-theme-btn'), // темна тема
  htmlEl: document.documentElement, // HTML root element (корневий елемент)
  themeContainerEl: document.querySelector('.theme-container'),

  // модалка для трейлера
  trailerBackdrop: document.querySelector('.trailer-backdrop'),
  trailerBox: document.querySelector('.trailer-box'),
  trailerBtnClose: document.querySelector('.trailer-btn__close'),
  trailerBtnOpen: document.querySelector('[data-modal-open]'),
  boxIframe: document.querySelector('.box-iframe'),
  pop: document.querySelectorAll('.pop'),

  // пошук по жанрам
  genresListEl: document.querySelector('.genres-list'),
  choiceBtnEl: document.querySelector('.choice-genre '),
  genresBtnsEl: document.querySelectorAll('.btn-genre'),

  //библиотека
  queueBtn: document.querySelector('.button-queue'),
  watchedBtn: document.querySelector('.button-watched'),
  removeBtn: document.querySelector('.button-remove'),
};
