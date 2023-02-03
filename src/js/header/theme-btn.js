import { refs } from '../DOM';

function inLocalStorageTheme() {
  return localStorage.getItem('user-theme');
} // Отримаємо збережену тему

window.addEventListener('load', windowLoad); // Чекаємо, що вся сторінка прогрузилась

function windowLoad() {
  setThemeClass(); // Дивиться чи є в локал стореджі брережена тема, якщо не - системна тема

  if (!inLocalStorageTheme()) {
    // якщо локал сторедж пустий
    listenerOsThemeOn();
  }
  if (refs.homeBTN.classList.contains('current')) {
    refs.themeButtonEl.addEventListener('click', () => {
      listenerOsThemeOff();
      changeTheme();
    });
    refs.resetThemeButtonEl.addEventListener('click', () => {
      listenerOsThemeOn();
      setOsTheme();
    });
  }
}

function listenerOsThemeOn() {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (inLocalStorageTheme() === null) {
        setOsTheme();
      }
    });
}

function listenerOsThemeOff() {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .removeEventListener('change', setOsTheme);
}

function changeTheme() {
  let currentTheme = refs.htmlEl.classList.contains('light') ? 'light' : 'dark';
  let newTheme;

  if (currentTheme === 'light') {
    newTheme = 'dark';
  } else if (currentTheme === 'dark') {
    newTheme = 'light';
  }

  refs.htmlEl.classList.remove(currentTheme);
  refs.htmlEl.classList.add(newTheme);

  localStorage.setItem('user-theme', newTheme);
  refs.resetThemeButtonEl.classList.add('active');
}

function setThemeClass() {
  if (inLocalStorageTheme()) {
    refs.htmlEl.classList.add(inLocalStorageTheme());
    refs.resetThemeButtonEl.classList.add('active');
  } else {
    setOsTheme();
  }
}

function setOsTheme() {
  localStorage.removeItem('user-theme');

  let userThemeOS = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'; // Отримуємо тему операційної системи

  refs.htmlEl.classList.remove('light', 'dark');

  refs.htmlEl.classList.add(userThemeOS);

  refs.homeBTN.classList.contains('current')
    ? refs.resetThemeButtonEl.classList.remove('active')
    : null;
}
