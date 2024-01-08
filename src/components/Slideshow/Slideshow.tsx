import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slideshow.scss';

interface Slide {
  id: number;
  imageUrl: string;
  category: string;
  date: string;
  title: string;
  content: string;
}

const ImageSlider: React.FC = () => {
  const images: Slide[] = [
    {
      id: 1,
      imageUrl: 'https://live.staticflickr.com/65535/50242715027_d4782382a1_b.jpg',
      category: 'Vacations',
      date: '08.08.2021',
      title: 'Some title 1',
      content: 'Skrócony opis posta 1',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1498078675142-85259d452c6b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFuJTIwZnJvbSUyMGFib3ZlfGVufDB8fDB8fHww',
      category: 'Beach',
      date: '18.12.2019',
      title: 'Some title 2',
      content: 'Skrócony opis posta 2',
    },
    {
      id: 3,
      imageUrl: 'https://e0.pxfuel.com/wallpapers/1022/49/desktop-wallpaper-dark-winter-dark-winter.jpg',
      category: 'Winter',
      date: '31.01.2018',
      title: 'Some title 3',
      content: 'Skrócony opis posta 3',
    },
    {
      id: 4,
      imageUrl: 'https://pbs.twimg.com/media/FVTgEKcWAAIFlxC.jpg',
      category: 'Cars',
      date: '11.08.2011',
      title: 'Some title 4',
      content: 'Dłuższy tekst będzie się zawijał tylko w ramach trzeciej kolumny, data pozostaje na swoim miejscu',
    },
  ];

  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const changeSlide = (index: number) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    beforeChange: (prev: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div className="image-slider">
      <Slider {...settings} ref={sliderRef} initialSlide={currentSlide}>
        {images.map((slide) => (
          <div key={slide.id} className="slide">
            <div style={{ position: 'relative' }}>
              <img
                src={slide.imageUrl}
                alt={`Slide ${slide.id}`}
                className='slide__image'
              />
              

              <div className="slide__overlay">
                <div className="slide__overlay__category">{slide.category}</div>
                <div className="slide__overlay__title">{slide.title}</div>
                <div className="slide__overlay__info">
                  <div className="slide__overlay__info-date">{slide.date}</div>
                  <div className="slide__overlay__info-dash"></div>
                  <div className="slide__overlay__info-content">{slide.content}</div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>

      <div className="indicators-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`${currentSlide === index ? 'active' : ''}`}
            onClick={() => changeSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
