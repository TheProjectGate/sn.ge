
import defaultImage from './assets/media/img/canvas-gallery/default-image.jpg';
import galleryImage1 from './assets/media/img/gallery/inflatable-construction/1.jpg';
import galleryImage2 from './assets/media/img/gallery/inflatable-construction/2.jpg';
import galleryImage3 from './assets/media/img/gallery/inflatable-construction/3.jpg';
import galleryImage4 from './assets/media/img/gallery/inflatable-construction/4.jpg';
import galleryImage5 from './assets/media/img/gallery/inflatable-construction/5.jpg';
import galleryImage6 from './assets/media/img/gallery/inflatable-construction/6.jpg';
import galleryImage7 from './assets/media/img/gallery/inflatable-construction/7.jpg';
import galleryImage8 from './assets/media/img/gallery/inflatable-construction/8.jpg';
import galleryImage9 from './assets/media/img/gallery/inflatable-construction/9.jpg';
import galleryImage10 from './assets/media/img/gallery/inflatable-construction/10.jpg';

export interface GalleryImage {
  id: number;
  category: string;
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  // Placeholders for 'inflatable ads'
  { id: 1, category: 'inflatable ads', src: galleryImage1 , alt: 'Inflatable Ad 1' },
  { id: 2, category: 'inflatable ads', src: galleryImage2 , alt: 'Inflatable Ad 2' },
  { id: 3, category: 'inflatable ads', src: galleryImage3 , alt: 'Inflatable Ad 3' },
  { id: 4, category: 'inflatable ads', src: galleryImage4 , alt: 'Inflatable Ad 4' },
  { id: 5, category: 'inflatable ads', src: galleryImage5 , alt: 'Inflatable Ad 5' },
  { id: 6, category: 'inflatable ads', src: galleryImage6 , alt: 'Inflatable Ad 6' },
  { id: 7, category: 'inflatable ads', src: galleryImage7 , alt: 'Inflatable Ad 7' },
  { id: 8, category: 'inflatable ads', src: galleryImage8 , alt: 'Inflatable Ad 8' },
  { id: 9, category: 'inflatable ads', src: galleryImage9 , alt: 'Inflatable Ad 9' },
  { id: 10, category: 'inflatable ads', src: galleryImage10 , alt: 'Inflatable Ad 10' },

  // Placeholders for '3d billboards'
  { id: 11, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 12, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 13, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 14, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 15, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 16, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 17, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 18, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 19, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 20, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 21, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 22, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 23, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 24, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 25, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 26, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 27, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 28, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 29, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },
  { id: 30, category: '3d billboards', src: defaultImage, alt: '3D Billboard 4' },





  // Placeholders for 'bus stops'
  { id: 31, category: 'bus stops', src: defaultImage, alt: 'Bus Stop Ad 1' },
  { id: 32, category: 'bus stops', src: defaultImage, alt: 'Bus Stop Ad 2' },

  // Placeholders for 'EXHIBITIONS'
  { id: 33, category: 'EXHIBITIONS', src: defaultImage, alt: 'Exhibition 1' },
  { id: 34, category: 'EXHIBITIONS', src: defaultImage, alt: 'Exhibition 2' },

  // Placeholders for 'FACADE DESIGN'
  { id: 35, category: 'FACADE DESIGN', src: defaultImage, alt: 'Facade Design 1' },
  { id: 36, category: 'FACADE DESIGN', src: defaultImage, alt: 'Facade Design 2' },

  // Placeholders for '3D CONSTRUCIONS'
  { id: 37, category: '3D CONSTRUCIONS', src: defaultImage, alt: '3D Construction 1' },
  { id: 38, category: '3D CONSTRUCIONS', src: defaultImage, alt: '3D Construction 2' },
  { id: 39, category: '3D CONSTRUCIONS', src: defaultImage, alt: '3D Construction 3' },
  { id: 40, category: '3D CONSTRUCIONS', src: defaultImage, alt: '3D Construction 4' },
  { id: 41, category: '3D CONSTRUCIONS', src: defaultImage, alt: '3D Construction 1' },
  { id: 42, category: '3D CONSTRUCIONS', src: defaultImage, alt: '3D Construction 2' },
  { id: 43, category: '3D CONSTRUCIONS', src: defaultImage, alt: '3D Construction 3' },
  { id: 44, category: '3D CONSTRUCIONS', src: defaultImage, alt: '3D Construction 4' },
];

export const categories = [
    'all',
    'inflatable ads',
    '3d billboards',
    'bus stops',
    'EXHIBITIONS',
    'FACADE DESIGN',
    '3D CONSTRUCIONS',
];
