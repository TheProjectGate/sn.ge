import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { galleryImages, categories, GalleryImage } from '../../gallery-data';
import Lightbox from '../gallery/Lightbox';
import '../../assets/styles/GalleryPage.scss';

const IMAGES_PER_PAGE = 12;

interface GalleryPageProps {
  onStickyFiltersChange?: (stickyFilters: {
    show: boolean;
    categories: string[];
    activeFilter: string;
    onFilterChange: (category: string) => void;
    getCategoryCount: (category: string) => number;
  } | null) => void;
  onPageTypeChange?: (isGallery: boolean) => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onStickyFiltersChange, onPageTypeChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get('category') || 'all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [displayedCount, setDisplayedCount] = useState(IMAGES_PER_PAGE);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [areFiltersSticky, setAreFiltersSticky] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const itemObserverRef = useRef<IntersectionObserver | null>(null);
  const filtersRef = useRef<HTMLDivElement | null>(null);
  const filterObserverRef = useRef<IntersectionObserver | null>(null);

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  const displayedImages = filteredImages.slice(0, displayedCount);
  const hasMore = displayedCount < filteredImages.length;

  const handleFilterChange = useCallback((category: string) => {
    setFilter(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  }, [setSearchParams]);

  // Count images per category
  const getCategoryCount = useCallback((category: string) => {
    if (category === 'all') return galleryImages.length;
    return galleryImages.filter(img => img.category === category).length;
  }, []);

  // Reset displayed count when filter changes
  useEffect(() => {
    setDisplayedCount(IMAGES_PER_PAGE);
    setVisibleItems(new Set());
  }, [filter]);

  // Infinite scroll observer
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setDisplayedCount(prev => Math.min(prev + IMAGES_PER_PAGE, filteredImages.length));
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, filteredImages.length]);

  // Observer for fade-in animation on scroll
  useEffect(() => {
    if (itemObserverRef.current) {
      itemObserverRef.current.disconnect();
    }

    itemObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => {
              return new Set(prev).add(index);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const items = document.querySelectorAll('.image-item');
    items.forEach((item) => {
      itemObserverRef.current?.observe(item);
    });

    return () => {
      if (itemObserverRef.current) {
        itemObserverRef.current.disconnect();
      }
    };
  }, [displayedImages.length, filter]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  }, [selectedImageIndex, filteredImages.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  }, [selectedImageIndex]);

  // Observer for sticky filters
  useEffect(() => {
    if (filterObserverRef.current) {
      filterObserverRef.current.disconnect();
    }

    filterObserverRef.current = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        setAreFiltersSticky(!isVisible);
      },
      { 
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px' // Offset for nav height
      }
    );

    if (filtersRef.current) {
      filterObserverRef.current.observe(filtersRef.current);
    }

    return () => {
      if (filterObserverRef.current) {
        filterObserverRef.current.disconnect();
      }
    };
  }, []);

  // Notify parent component about sticky filters state
  useEffect(() => {
    if (onStickyFiltersChange) {
      onStickyFiltersChange({
        show: areFiltersSticky,
        categories,
        activeFilter: filter,
        onFilterChange: handleFilterChange,
        getCategoryCount
      });
    }
  }, [areFiltersSticky, filter, onStickyFiltersChange, handleFilterChange, getCategoryCount]);

  // Set page type on mount
  useEffect(() => {
    if (onPageTypeChange) {
      onPageTypeChange(true);
    }
    
    return () => {
      if (onPageTypeChange) {
        onPageTypeChange(false);
      }
    };
  }, [onPageTypeChange]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (onStickyFiltersChange) {
        onStickyFiltersChange(null);
      }
    };
  }, [onStickyFiltersChange]);

  return (
    <div className="gallery-page">
      <div className="filter-buttons" ref={filtersRef}>
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => handleFilterChange(category)} 
            className={filter === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="image-grid">
        {displayedImages.map((image, index) => {
          const isFirstOfCategory = filter === 'all' && (index === 0 || image.category !== displayedImages[index - 1].category);
          
          return (
            <React.Fragment key={image.id}>
              {isFirstOfCategory && (
                <div className="category-separator">
                  <h2>{image.category}</h2>
                </div>
              )}
              <div 
                className={`image-item ${visibleItems.has(index) ? 'visible' : ''}`}
                onClick={() => setSelectedImageIndex(index)}
                data-index={index}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <svg className="view-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M11 8V14M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {hasMore && (
        <div ref={loadMoreRef} className="load-more-trigger">
          <div className="loader"></div>
        </div>
      )}

      {selectedImageIndex !== null && (
        <Lightbox 
          src={filteredImages[selectedImageIndex].src} 
          alt={filteredImages[selectedImageIndex].alt} 
          onClose={() => setSelectedImageIndex(null)}
          onNext={selectedImageIndex < filteredImages.length - 1 ? handleNext : undefined}
          onPrev={selectedImageIndex > 0 ? handlePrev : undefined}
          currentIndex={selectedImageIndex}
          totalImages={filteredImages.length}
        />
      )}
    </div>
  );
};

export default GalleryPage;
