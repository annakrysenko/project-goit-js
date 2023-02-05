import { refs } from '../DOM';

refs.themeListEl.classList.add('hidden');

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
  if (!inLocalStorageTheme()) {
    //
  }
  refs.themeButtonEl.addEventListener('click', onClickThemeBtn);
  function onClickThemeBtn() {
    refs.themeListEl.classList.toggle('hidden');
    // refs.themeButtonEl.removeEventListener('click', onClickThemeBtn);

    refs.themeListEl.addEventListener('click', e => {
      if (e.target.classList.contains('light-theme-btn')) {
        removeAllCurrent();

        changeOnLightTheme(e);
        listenerOsThemeOff;
        // changeTheme();
      } else if (e.target.classList.contains('dark-theme-btn')) {
        removeAllCurrent();
        changeOnDarkTheme(e);
        listenerOsThemeOff;
        // changeTheme();
      } else if (e.target.classList.contains('reset-theme-btn')) {
        removeAllCurrent();

        setOsTheme();
      }
    });
  }
}
function removeAllCurrent() {
  refs.lightThemeButtonEl.classList.remove('current-theme');
  refs.darkThemeButtonEl.classList.remove('current-theme');
  refs.defaultThemeButtonEl.classList.remove('current-theme');
}

function changeOnLightTheme(e) {
  refs.htmlEl.classList.remove('light', 'dark');
  refs.htmlEl.classList.add('light');

  refs.lightThemeButtonEl.classList.add('current-theme');

  localStorage.setItem('user-theme', 'light');
}
function changeOnDarkTheme() {
  refs.htmlEl.classList.remove('light', 'dark');
  refs.htmlEl.classList.add('dark');

  refs.darkThemeButtonEl.classList.add('current-theme');

  localStorage.setItem('user-theme', 'dark');
}

function setThemeClass() {
  if (inLocalStorageTheme()) {
    refs.htmlEl.classList.add(inLocalStorageTheme());
    if (inLocalStorageTheme() === 'light') {
      refs.lightThemeButtonEl.classList.add('current-theme');
    } else if (inLocalStorageTheme() === 'dark') {
      refs.darkThemeButtonEl.classList.add('current-theme');
    }
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

  refs.defaultThemeButtonEl.classList.add('current-theme');
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
