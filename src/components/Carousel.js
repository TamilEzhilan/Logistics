import React, { useState, useEffect } from 'react';
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { src: Image1, alt: 'Slide 1' },
        { src: Image2, alt: 'Slide 2' },
        { src: Image3, alt: 'Slide 3' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="carousel">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel-item ${currentSlide === index ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.src})` }}
                >
                    <img src={slide.src} alt={slide.alt} style={{ display: 'none' }} />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
