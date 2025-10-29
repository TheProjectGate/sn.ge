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

/**
 * Анимирует счетчик чисел от 0 до целевого значения и круговую рамку
 * при появлении элемента в области видимости. Анимация запускается один раз.
 * @param {string} selector - CSS-селектор для контейнера счетчика (элемент с рамкой).
 */
export function animateCounterAndBorder(selector) {
  const counters = document.querySelectorAll(selector);

  if (counters.length === 0) {
    console.warn(`Элементы для анимации счетчика не найдены: ${selector}`); // eslint-disable-line no-console
    return () => {};
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counterElement = entry.target;
        const numberElement = counterElement.querySelector('h1');

        if (!numberElement) {
          console.warn(`Элемент с числом (h1) не найден внутри:`, counterElement); // eslint-disable-line no-console
          obs.unobserve(counterElement);
          return;
        }

        const targetValue = parseInt(numberElement.innerText, 10);
        const duration = 2000; // 2 секунды
        let startTime = null;

        // 1. Функция для обновления CSS-переменной для рамки
        const animateBorder = (progress) => {
          const angle = progress * 360;
          counterElement.style.setProperty('--border-fill-angle', `${angle}deg`);
        };

        // 2. Анимация числа
        const animateNumber = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const currentProgress = Math.min(progress / duration, 1);
          const currentValue = Math.floor(currentProgress * targetValue);

          numberElement.innerText = currentValue;
          
          // Одновременно анимируем рамку, передавая текущий прогресс
          animateBorder(currentProgress);
          
          if (currentProgress < 1) {
            requestAnimationFrame(animateNumber);
          } else {
            numberElement.innerText = targetValue; // Убедимся, что в конце точное значение
            counterElement.style.setProperty('--border-fill-angle', '360deg'); // Убедимся, что рамка полностью заполнена
          }
        };

        requestAnimationFrame(animateNumber);
        obs.unobserve(counterElement); // Отписываемся, чтобы анимация не повторялась
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));

  return () => observer.disconnect();
}

/**
 * Добавляет класс 'visible' к элементу, когда он появляется в области видимости, и делает это только один раз.
 * @param {string} selector - CSS-селектор элемента, который нужно анимировать.
 * @returns {Function} - Функция для очистки слушателя событий.
 */
export function animateOnScrollOnce(selector) {
  const targetElement = document.querySelector(selector);

  if (!targetElement) {
    console.warn(`Элемент для одноразовой анимации не найден: ${selector}`); // eslint-disable-line no-console
    return () => {};
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target); // Отписываемся после первого срабатывания
      }
    });
  }, {
    threshold: 0.3 // Анимация начнется, когда 30% элемента будет видно
  });

  observer.observe(targetElement);

  // Возвращаем функцию, которая удалит слушатель событий
  return () => observer.disconnect();
}