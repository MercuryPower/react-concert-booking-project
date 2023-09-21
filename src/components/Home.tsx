import React, {useState} from 'react';
import '../SCSS/styles.scss';
import Slider from "./Slider";
import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.png";
import poster3 from "../assets/poster3.png";
import Header from "./Header";
import TicketsInformation from "./TicketsInformation";

const Home = () => {
    const [city, setCity] = useState('Moscow');
    const concertImages = [
        poster1,
        poster2,
        poster3,
    ];
    const concertPerformers = [
        'Kai Angel & 9mice',
    ];
    const concertNames = [
        'SECRET SHOW',
    ];
    const concertDates = [
        '28.05',
    ];
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
        <TicketsInformation concertPerformers={concertPerformers} currentCity={city} />
        <TicketsInformation concertPerformers={concertPerformers} currentCity={city} />
        <TicketsInformation concertPerformers={concertPerformers} currentCity={city} />
        </>


    );
};

export default Home;