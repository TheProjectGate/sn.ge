/**
 * Добавляет класс 'visible' к элементу, когда он появляется в области видимости.
 * @param {string} selector - CSS-селектор элемента, который нужно анимировать.
 * @returns {Function} - Функция для очистки слушателя событий.
 */
export function animateOnScroll(selector) {
  const targetElement = document.querySelector(selector);

  if (!targetElement) {
    console.warn(`Элемент для анимации не найден: ${selector}`); // eslint-disable-line no-console
    return () => {}; // Возвращаем пустую функцию для очистки
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Опционально: отключаем наблюдение после первого срабатывания
        observer.unobserve(targetElement);
      }
    });
  }, {
    threshold: 0.3 // Анимация начнется, когда 30% элемента будет видно
  });

    observer.observe(targetElement);

  // Возвращаем функцию, которая удалит слушатель событий
  return () => {
    observer.disconnect();
  };
}

/**
 * Анимирует появление кнопок с задержкой.
 * @param {string} selector1 - CSS-селектор для второй кнопки.
 * @param {string} selector2 - CSS-селектор для третьей кнопки.
 */
export function animateButtons(selector1, selector2) {
    // Задержка перед анимацией второй кнопки
    const timer1 = setTimeout(() => animateOnScroll(selector1), 500);
    // Задержка перед анимацией третьей кнопки
    const timer2 = setTimeout(() => animateOnScroll(selector2), 900);

    // Возвращаем функцию для очистки таймеров
    return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
    };
}