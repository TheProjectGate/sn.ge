import React, { useState, useEffect, cloneElement, ReactElement } from 'react';
import Navigation from '../navigation/Navigation';
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  show_header?: boolean;
}

interface StickyFilters {
  show: boolean;
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
  getCategoryCount: (category: string) => number;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, show_header = true }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [stickyFilters, setStickyFilters] = useState<StickyFilters | null>(null);
  const [isGalleryPage, setIsGalleryPage] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Clone children with sticky filters callback
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return cloneElement(child as ReactElement<any>, {
        onStickyFiltersChange: setStickyFilters,
        onPageTypeChange: setIsGalleryPage,
      });
    }
    return child;
  });

  return (
    <div className="wrapper">
      <Navigation 
        isScrolled={isScrolled} 
        isGalleryPage={isGalleryPage}
        stickyFilters={stickyFilters || undefined} 
      />
      {show_header && <Header />}
      {childrenWithProps}
      <Footer />
    </div>
  );
};

export default MainLayout;
