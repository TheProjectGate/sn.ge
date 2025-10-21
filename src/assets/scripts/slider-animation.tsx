import { useState, useRef, useEffect, useCallback } from 'react';

interface Slide {
  src: string;
  alt: string;
}

/**
 * Кастомный хук для управления логикой слайдера проектов.
 * @param {Slide[]} slides - Массив оригинальных слайдов.
 * @returns {Object} - Объект со значениями и функциями для управления слайдером.
 */
export function useProjectSlider(slides: Slide[]) {
  // Для создания бесконечного цикла клонируем слайды
  const extendedSlides = [...slides, ...slides, ...slides];
  const originalSlidesCount = slides.length;

  // Устанавливаем начальный индекс на центральный слайд в среднем (оригинальном) блоке
  const [currentIndex, setCurrentIndex] = useState(originalSlidesCount + Math.floor(originalSlidesCount / 2));
  const [offset, setOffset] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Refs для доступа к DOM-элементам
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleInteraction = useCallback(() => {
    setHasInteracted(true);
  }, []);

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isTransitioning) return;
    handleInteraction();
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isTransitioning) return;
    handleInteraction();
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const goToSlide = (e: React.MouseEvent, slideIndex: number) => {
    e.preventDefault();
    handleInteraction();
    setCurrentIndex(originalSlidesCount + slideIndex);
  };

  // Эффект для отслеживания загрузки изображений
  useEffect(() => {
    const imageElements = slideRefs.current.map(a => a?.querySelector('img')).filter((img): img is HTMLImageElement => !!img);
    if (imageElements.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === imageElements.length) {
        setImagesLoaded(true);
      }
    };

    imageElements.forEach(img => {
      if (img.complete) handleImageLoad();
      else img.addEventListener('load', handleImageLoad);
    });

    return () => imageElements.forEach(img => img.removeEventListener('load', handleImageLoad));
  }, []);

  // Эффект для вычисления смещения
  useEffect(() => {
    const calculateAndSetOffset = () => {
      if (!imagesLoaded || !sliderRef.current || !slideRefs.current[currentIndex]) return;

      const sliderWidth = sliderRef.current.clientWidth;
      const activeSlide = slideRefs.current[currentIndex];
      const activeSlideWidth = activeSlide.offsetWidth;
      const activeSlideCenter = activeSlide.offsetLeft + activeSlideWidth / 2;
      const newOffset = sliderWidth / 2 - activeSlideCenter;
      setOffset(newOffset);
    };

    calculateAndSetOffset();
    window.addEventListener('resize', calculateAndSetOffset);
    return () => window.removeEventListener('resize', calculateAndSetOffset);
  }, [currentIndex, imagesLoaded, isTransitioning]);

  // Эффект для "бесшовного" бесконечного цикла
  useEffect(() => {
    if (currentIndex >= originalSlidesCount && currentIndex < originalSlidesCount * 2) return;

    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(prevIndex => (prevIndex % originalSlidesCount) + originalSlidesCount);
      }, 500);

    return () => {
        if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, [currentIndex, originalSlidesCount]);

  // Эффект для возвращения анимации после "сброса"
  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  // Эффект для добавления поддержки свайпов на тач-устройствах
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.targetTouches[0].clientX;
      touchEndX.current = e.targetTouches[0].clientX;
      setIsTransitioning(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX.current = e.targetTouches[0].clientX;
      const moveX = touchEndX.current - touchStartX.current;
      setDragOffset(moveX);
    };

    const handleTouchEnd = () => {
      setIsTransitioning(true);

      const swipeDistance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 50;

      let slideChanged = false;
      if (swipeDistance > minSwipeDistance) {
        setCurrentIndex(prevIndex => prevIndex + 1);
        slideChanged = true;
      } else if (swipeDistance < -minSwipeDistance) {
        setCurrentIndex(prevIndex => prevIndex - 1);
        slideChanged = true;
      }

      if (slideChanged) {
        setHasInteracted(true); // Прямо обновляем состояние при успешном свайпе
      }

      setDragOffset(0);
    };

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);
    slider.addEventListener('touchcancel', handleTouchEnd); // На случай, если касание прервется

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
      slider.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [handleInteraction]);

  return { currentIndex, offset, imagesLoaded, isTransitioning, sliderRef, slideRefs, extendedSlides, goToPrevious, goToNext, goToSlide, dragOffset, hasInteracted };
}