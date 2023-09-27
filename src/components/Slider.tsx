import React, {useEffect, useRef, useState} from 'react';
import {ReactComponent as Arrow} from "../assets/arrow1.svg";
import {concertCities} from "../consts";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import clsx from "clsx";

export interface SliderProps{
    concertPerformers:string[];
    concertNames:string[];
    concertImages: string[];
    concertCities:string[];
    concertDates:string[];
}
const Slider = ({concertImages, concertPerformers,concertNames, concertCities, concertDates}:SliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentName, setCurrentName] = useState(concertNames[0])
    const [isSwitched, setIsSwitched] = useState(false);
    const sliderRef = useRef(null);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % concertImages.length);
        setIsSwitched(true);
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? concertImages.length - 1 : prevIndex - 1)
    }
    const updateSlider = (newIndex: number) => {
        setCurrentIndex(newIndex);
    };

    const autoSwitchSlides = () => {
        const interval = setInterval(() =>{
            nextSlide();
        }, 6000)
        return () => clearInterval(interval);
    }
    useEffect(() =>{
        const stopAutoSwitch = autoSwitchSlides();


        return () => {
            stopAutoSwitch();
        };
    },[autoSwitchSlides])

    const backgroundImageStyle = {
        backgroundImage: `url(${concertImages[currentIndex]})`,
    };
    return (
        <CSSTransition
            in={isSwitched}
            classNames="fade"
            timeout={2000}
            onEntered={() => setIsSwitched(false)}
            nodeRef={sliderRef}
        >
        <section className={clsx('slider-section',
            {'switched': isSwitched,
            } )} style={backgroundImageStyle} ref={sliderRef}>
                <div className={'section-container'}>
                        <div className={'concert-info'}>
                            <div className={'concert-performer-block'}>
                                <h1 className={'concert-performer concert-double-name'}>{concertPerformers[currentIndex]}</h1>
                                <h1 className={'concert-performer'}>{concertPerformers[currentIndex]}</h1>
                            </div>
                            <div className={'concert-name-block'}>
                                <h1 className={'concert-name concert-double-name2'}>{concertNames[currentIndex]}</h1>
                                <h1 className={'concert-name'}>{concertNames[currentIndex]}</h1>
                            </div>
                        </div>
                        <div className={'city-info'}>
                            <h2>{concertCities[currentIndex]}</h2>
                        </div>
                        <div className={'date-info'}>
                            <h3>{concertDates[currentIndex]}</h3>
                        </div>
                        <div className={'buy-ticket-slider-block'}>
                            <button className={'buy-ticket-slider-button'}>BUY TICKETS</button>
                        </div>
                        <div onClick={prevSlide}>
                            <Arrow
                                className={'slider-arrow-prev'}
                                width={50}
                                height={50}
                            />
                        </div>
                        <div onClick={nextSlide}>
                            <Arrow
                                className={'slider-arrow-next'}
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
        </section>
        </CSSTransition>
    );
};

export default Slider;