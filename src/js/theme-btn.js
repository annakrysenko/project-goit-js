// const themeBtn = document.querySelector('.toggleThemeBtn');
// const mainTheme = document.querySelector('#main-home');
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme === 'dark') {
//   mainTheme.classList.add('toggle-theme');
// }

// themeBtn.addEventListener('click', onThemeBtn);

// function onThemeBtn() {
//   mainTheme.classList.toggle('toggle-theme');
//   let theme = 'white';
//   if (mainTheme.classList.contains('toggle-theme')) {
//     theme = 'dark';
//   }
//   localStorage.setItem('theme', theme);
// }

document.querySelector('.toggleThemeBtn').addEventListener('click', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.querySelector('.toggleThemeBtn span').textContent = 'dark_mode';
    } else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.toggleThemeBtn span').textContent = 'wb_sunny';
    }
  } catch (err) {}
}
addDarkClassToHTML();
