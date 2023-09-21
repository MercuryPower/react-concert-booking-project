import React, {useState} from 'react';
import '../SCSS/styles.scss';
import Slider from "./Slider";
import Header from "./Header";
import TicketsInformation from "./TicketsInformation";
import {concertDates, concertImages, concertNames, concertPerformers, concertPlaces, concertTimes} from '../consts';

const Home = () => {
    const [city, setCity] = useState('Moscow');

    return (
        <>
        <Header city={city} />
        <Slider
            concertDates={concertDates}
            city={city}
            concertImages={concertImages}
            concertPerformers={concertPerformers}
            concertNames={concertNames}
        />
        <TicketsInformation
            concertPerformer={concertPerformers}
            currentCity={city}
            concertPlace={concertPlaces}
            concertName={concertNames}
            concertTime={concertTimes}
            concertDate={concertDates}
        />
        <TicketsInformation
            concertPerformer={concertPerformers}
            currentCity={city}
            concertPlace={concertPlaces}
            concertName={concertNames}
            concertTime={concertTimes}
            concertDate={concertDates}
        />
        <TicketsInformation
            concertPerformer={concertPerformers}
            currentCity={city}
            concertPlace={concertPlaces}
            concertName={concertNames}
            concertTime={concertTimes}
            concertDate={concertDates}
        />
        </>
    );
};

export default Home;