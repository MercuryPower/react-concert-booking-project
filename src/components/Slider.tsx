import React, {useState} from 'react';
import {ReactComponent as Arrow} from "../assets/arrow1.svg";

export interface SliderProps{
    concertPerformers:string[];
    concertNames:string[];
    concertImages: string[];
    city:string;
    concertDates:string[];
}
const Slider = ({concertImages, concertPerformers,concertNames, city, concertDates}:SliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentName, setCurrentName] = useState(concertNames[0])



    return (
        <section className={'slider-section'}>
            <div className={'section-container'}>
                <div className={'concert-info'}>
                    <div className={'concert-performer-block'}>
                        <h1 className={'concert-performer concert-double-name'}>{concertPerformers}</h1>
                        <h1 className={'concert-performer'}>{concertPerformers}</h1>
                    </div>
                    <div className={'concert-name-block'}>
                        <h1 className={'concert-name concert-double-name2'}>{concertNames}</h1>
                        <h1 className={'concert-name'}>{concertNames}</h1>
                    </div>
                </div>
                <div className={'city-info'}>
                    <h2>{city}</h2>
                </div>
                <div className={'date-info'}>
                    <h3>{concertDates}</h3>
                </div>
                <div className={'buy-ticket-slider-block'}>
                    <button className={'buy-ticket-slider-button'}>BUY TICKETS</button>
                </div>
                <div>
                    <Arrow
                        className={'slider-arrow-prev'}
                        width={50}
                        height={50}
                    />
                </div>
                <div>
                    <Arrow
                        className={'slider-arrow-next'}
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </section>
    );
};

export default Slider;