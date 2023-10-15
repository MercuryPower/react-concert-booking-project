import React, {useCallback, useEffect, useState} from 'react';
import clsx from "clsx";
import {motion} from 'framer-motion'
import {useInView} from "react-intersection-observer";
import ModalWindow from "../ModalWindow";
import {ConcertInfo} from "../../data";
import SliderArrows from "./SliderArrows";
import BuyTicketButtonSlider from "./BuyTicketButtonSlider";
export interface SliderProps{
    concertData: ConcertInfo[];
}

const Slider =({concertData}:SliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSwitched ] = useState(false);
    const [isHoveredSlide, setIsHoveredSlide] = useState(false);
    const [show, setShow] = useState(false)
    const {ref, inView} = useInView();
    const cityAnimationLimit = 3;
    const slidesLimit = 6;

    function handleShow() {
        setShow(!show)
    }
    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesLimit);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slidesLimit - 1 : prevIndex - 1
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
        backgroundImage: `url(${concertData[currentIndex]?.concerts[0]?.poster || ''})`,
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
                onMouseEnter={() => setIsHoveredSlide( true)}
                onMouseLeave={() => setIsHoveredSlide(false)}
            >
                <div className={'section-container'}>
                    <div className={'concert-info'}>
                        <div className={'concert-performer-block'}>
                            <h1 className={'concert-performer concert-double-name'}>
                                {concertData[currentIndex].artist}
                            </h1>
                            <motion.h1 custom={1} variants={textAnimation} className={'concert-performer'}>
                                {concertData[currentIndex].artist}
                            </motion.h1>
                        </div>
                        <div className={'concert-name-block'}>
                            <h1 className={'concert-name concert-double-name2'}>
                                {concertData[currentIndex].concertName || ''}
                            </h1>
                            <motion.h1 custom={1} variants={textAnimation} className={'concert-name'}>
                                {concertData[currentIndex].concertName || ''}
                            </motion.h1>
                        </div>
                    </div>
                    <div className={'city-info'}>
                        {concertData[currentIndex].collaborators ? (
                            concertData[currentIndex].collaborators?.map((collaborator, index, array) => (
                                    <React.Fragment key={collaborator}>
                                        <motion.h2 style={{fontWeight:900}} className={'h2-cities-slider'} custom={2} variants={textAnimation}>
                                            {collaborator}
                                        </motion.h2>
                                        <motion.h2 custom={2} variants={textAnimation}>
                                            {index !== array.length - 1 && ' x '}
                                        </motion.h2>
                                    </React.Fragment>
                                )))
                        : (
                            concertData[currentIndex]?.concerts?.slice(0,3).map((data, index, array) => (
                                    <React.Fragment key={data.place}>
                                        <motion.h2 className={'h2-cities-slider'} custom={2} variants={textAnimation}>
                                            {data.place}
                                        </motion.h2>
                                        <motion.h2 custom={2} variants={textAnimation}>
                                            {index !== array.length - 1 && ' | '}
                                        </motion.h2>
                                    </React.Fragment>
                                ))
                        )}
                    </div>
                        <div className={'date-info'}>
                                <div className={'dates'} style={(
                                    concertData[currentIndex].concerts.length > cityAnimationLimit
                                        ? {animation: `dates-Animation ${concertData[currentIndex]?.concerts.length * 6}s linear infinite`}
                                        : {animation: 'none'}
                                )}>
                                    <motion.h3 custom={3} variants={textAnimation} style={{fontWeight:600}}>{concertData[currentIndex].concertName} //</motion.h3>
                                    {concertData[currentIndex].concerts.map((data, index, array) => (
                                        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'nowrap', marginLeft:'0.2rem'}}
                                             key={data.date + data.city}>
                                            <motion.h3 className={'h3-dates-slider'} custom={3} variants={textAnimation}>
                                                {data.city.toUpperCase()} - <b>{data.date}</b>
                                            </motion.h3>
                                            <motion.h3 custom={3} variants={textAnimation}>
                                                {index !== array.length - 1 && ' | '}
                                            </motion.h3>
                                        </div>
                                    ))}
                                </div>
                        </div>
                    <BuyTicketButtonSlider textAnimation={textAnimation} handleShow={handleShow} />
                    <SliderArrows nextSlide={nextSlide} prevSlide={prevSlide} textAnimation={textAnimation}  />
                </div>
            </motion.section>
            <ModalWindow show={show} onClose={handleShow}>
                Content of the modal goes here.
            </ModalWindow>
        </>
    );
};

export default Slider;