import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const id = location.hash.substring(1); // Получаем id без '#'
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Если мы переходим на главную страницу с хэшем, нам нужна задержка
    if (location.pathname === '/' && location.hash) {
      setTimeout(scrollToHash, 100);
    }
  }, [location.pathname, location.hash]); // Зависим от pathname и hash

  return null; // Этот компонент ничего не рендерит
}

export default ScrollToAnchor;