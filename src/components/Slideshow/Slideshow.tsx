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
      imageUrl:
        'https://images.pexels.com/photos/753994/pexels-photo-753994.jpeg?cs=srgb&dl=pexels-rakicevic-nenad-753994.jpg&fm=jpg',
      category: 'Category 1',
      date: '8 VIII 2013',
      title: 'Some title 1',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores fugit nisi quisquam. Dolor dolorum adipisci, velit aperiam consequuntur ut quibusdam tenetur eius placeat doloremque facilis quos numquam recusandae nisi maiores!',
    },
    {
      id: 2,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/08/28/11/27/space-911785_1280.jpg',
      category: 'Category 2',
      date: '18 XII 2019',
      title: 'Some title 2',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores fugit nisi quisquam. Dolor dolorum adipisci, velit aperiam consequuntur ut quibusdam tenetur eius placeat doloremque facilis quos numquam recusandae nisi maiores!',
    },
    {
      id: 3,
      imageUrl:
        'https://pxwall.com/wp-content/uploads/2019/04/4K-Dark-HD-Background.jpg',
      category: 'Category 3',
      date: '31 I 2018',
      title: 'Some title 3',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores fugit nisi quisquam. Dolor dolorum adipisci, velit aperiam consequuntur ut quibusdam tenetur eius placeat doloremque facilis quos numquam recusandae nisi maiores!',
    },
    {
      id: 4,
      imageUrl:
        'https://pxwall.com/wp-content/uploads/2019/04/4K-Dark-1080p-Wallpapers.jpg',
      category: 'Category 4',
      date: '11 VIII 2021',
      title: 'Some title 4',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores fugit nisi quisquam. Dolor dolorum adipisci, velit aperiam consequuntur ut quibusdam tenetur eius placeat doloremque facilis quos numquam recusandae nisi maiores!',
    },
  ];

  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: true,
    useCSS: true,
    beforeChange: (prev: number, next: number) => setCurrentSlide(next),
  };

  const changeSlide = (index: number) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="image-slider">
      <Slider {...settings} ref={sliderRef} initialSlide={currentSlide}>
        {images.map((slide) => (
          <div key={slide.id}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
              }}
            >
              <div className="container">
                <div className="slide__overlay">
                  <div className="slide__overlay__category">
                    {slide.category}
                  </div>
                  <div className="slide__overlay__title">{slide.title}</div>
                  <div className="slide__overlay__date">{slide.date}</div>
                  <div className="slide__overlay__text">{slide.content}</div>
                </div>

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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
