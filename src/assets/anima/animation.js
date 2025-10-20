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
        // Добавляем класс, когда элемент в поле зрения
        entry.target.classList.add("visible");
      } else {
        // Убираем класс, когда элемент уходит из поля зрения
        entry.target.classList.remove("visible");
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
 * Плавно анимирует элемент в зависимости от прогресса прокрутки внутри вьюпорта.
 * @param {string} selector - CSS-селектор элемента для анимации.
 * @returns {Function} - Функция для очистки слушателя.
 */
export function animateOnScrollProgress(selector) {
  const targetElement = document.querySelector(selector);

  if (!targetElement) {
    console.warn(`Элемент для плавной анимации не найден: ${selector}`); // eslint-disable-line no-console
    return () => {};
  }

  const handleScroll = () => {
    const rect = targetElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Вычисляем прогресс (от 0 до 1)
    // 0 = верх элемента у нижнего края экрана
    // 1 = низ элемента у верхнего края экрана
    let progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);

    // Ускоряем анимацию, умножая прогресс на коэффициент.
    // 1.5 = на 50% быстрее. Можете изменить это значение.
    progress *= 1.5;

    // Ограничиваем значение в диапазоне [0, 1]
    const clampedProgress = Math.max(0, Math.min(1, progress));

    targetElement.style.setProperty('--scroll-progress', clampedProgress);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Вызываем один раз для начальной позиции

  return () => {
    window.removeEventListener('scroll', handleScroll);
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