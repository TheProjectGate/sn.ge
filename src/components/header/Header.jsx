import React, { useEffect } from 'react';
import './Header.css';
// Импортируем видео, чтобы Vite мог его обработать
import headerVideo from '../../assets/media/video/1.mp4';

function Header() {
  useEffect(() => {
    // Находим элемент с текстом
    const sliderText = document.querySelector('.slider--text');

    // Добавляем класс 'visible' сразу при загрузке компонента,
    // чтобы запустить анимацию
    if (sliderText) {
      sliderText.classList.add('visible');
    }
  }, []);

  return (
    <header>
      <div className="slider--container">
        {/* Используем импортированную переменную в src */}
        <video src={headerVideo} type="video/mp4" autoPlay loop muted playsInline></video>
        <div className="slider--text">
          <span className="header-text-1"><h1>just <u>imagine…</u></h1></span>
          <h1 className="header-text-2">and we’ll go<br />further.</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;