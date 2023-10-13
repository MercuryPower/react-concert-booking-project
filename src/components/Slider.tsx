import React, {useCallback, useEffect, useState} from 'react';
import {ReactComponent as Arrow} from "../assets/svg/arrow1.svg";
import clsx from "clsx";
import {motion} from 'framer-motion'
import {useInView} from "react-intersection-observer";
import ModalWindow from "./ModalWindow";
import {ConcertInfo} from "../data";
export interface SliderProps{
    // concertPerformers:string[];
    // concertNames:string[];
    // concertImages: string[];
    // concertCities:string[];
    // concertDates:string[];
    concertData: ConcertInfo[];
}




const Slider =({concertData}:SliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSwitched, setIsSwitched] = useState(false);
    const [isHoveredSlide, setIsHoveredSlide] = useState(false);
    const [show, setShow] = useState(false)
    const {ref, inView} = useInView();

    function handleShow() {
        setShow(!show)
    }
    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? 3 : prevIndex - 1
        );
    };



    useEffect(() =>{
        let interval: NodeJS.Timer;
        if (!isHoveredSlide && inView) {
            interval = setInterval(() => {
                nextSlide();
            }, 7000);
        }
        return () => {
            clearInterval(interval);
        };
},[inView, isHoveredSlide, nextSlide])

    const sectionStyle = {
        backgroundImage: `url(${concertData[currentIndex].concerts[currentIndex].poster || ''})`,
    };

    const textAnimation = {
        hidden:{
            opacity:0
        },
        visible: (custom: number) => ({
            opacity:1,
            transition: {delay: custom * 0.5}
        })
    }

    return (
        <>
            <motion.section
                key={currentIndex}
                variants={textAnimation}
                initial={'hidden'}
                custom={0.5}
                transition={{duration:0.5}}
                animate={'visible'}
                className={clsx('slider-section', {
                    'switched': isSwitched
                })}
                style={sectionStyle}
                ref={ref}
                onMouseEnter={() => setIsHoveredSlide(isHoveredSlide => !isHoveredSlide)}
                onMouseLeave={() => setIsHoveredSlide(isHoveredSlide => !isHoveredSlide)}
            >
                <div className={'section-container'}>
                    <div className={'concert-info'}>
                        <div className={'concert-performer-block'}>
                            <h1 className={'concert-performer concert-double-name'}>{concertData[currentIndex].artist}</h1>
                            <motion.h1 custom={1} variants={textAnimation} className={'concert-performer'}>{concertData[currentIndex].artist}</motion.h1>
                        </div>
                        <div className={'concert-name-block'}>
                            <h1 className={'concert-name concert-double-name2'}>{concertData[currentIndex].concertName}</h1>
                            <motion.h1 custom={1} variants={textAnimation} className={'concert-name'}>{concertData[currentIndex].concertName}</motion.h1>
                        </div>
                    </div>
                    <div className={'city-info'}>
                        <motion.h2 custom={2} variants={textAnimation}>{concertData[currentIndex].concerts[currentIndex].city}</motion.h2>
                    </div>
                    <div className={'date-info'}>
                        <motion.h3 custom={2} variants={textAnimation}>{concertData[currentIndex].concerts[currentIndex].date}</motion.h3>
                    </div>
                    <div className={'buy-ticket-slider-block'}>
                        <motion.button custom={3} variants={textAnimation} className={'buy-ticket-slider-button'} onClick={handleShow}>BUY TICKETS</motion.button>
                    </div>
                    <motion.div custom={2} variants={textAnimation} onClick={prevSlide}>
                        <Arrow
                            className={'slider-arrow-prev'}
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <motion.div custom={2} variants={textAnimation} onClick={nextSlide}>
                        <Arrow
                            className={'slider-arrow-next'}
                            width={50}
                            height={50}
                        />
                    </motion.div>
                </div>
            </motion.section>
            <ModalWindow show={show} onClose={handleShow}>
                Content of the modal goes here.
            </ModalWindow>
        </>
    );
};

export default Slider;