// Получаем ссылку на элемент заголовка
const heading = document.getElementById('heading');

// Получаем ссылку на кнопку
const clickButton = document.getElementById('clickButton') as HTMLButtonElement;

// Добавляем обработчик события клика на кнопку
clickButton.addEventListener('click', () => {
  heading.textContent = 'Button was clicked!';
});
