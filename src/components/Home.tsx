import React, {useState} from 'react';
import '../SCSS/styles.scss';
import Slider from "./Slider";
import Header from "./Header";
import {
    concertCities,
    concertDates,
    concertImages,
    concertNames,
    concertPerformers,
    concertPlaces,
    concertTimes
} from '../consts';
import {TicketProps} from "./Ticket";
import TicketList from "./TicketList";
import {ReactComponent as Arrow} from "../SCSS/arrow1.svg";

const Home = () => {
    let index = 0;
    const [tickets, setTickets] = useState<TicketProps[]>([
        {
            id:index + 1,
            concertName:concertNames[0],
            concertPerformer:concertPerformers[0],
            concertDate:concertDates[0],
            concertPlace:concertPlaces[0],
            concertTime:concertTimes[0],
            currentCity:concertCities[0]
        },
        {
            id:index + 1,
            concertName:concertNames[0],
            concertPerformer:concertPerformers[0],
            concertDate:concertDates[0],
            concertPlace:concertPlaces[0],
            concertTime:concertTimes[0],
            currentCity:concertCities[0],
        },
        {
            id:index + 1,
            concertName:concertNames[0],
            concertPerformer:concertPerformers[0],
            concertDate:concertDates[0],
            concertPlace:concertPlaces[0],
            concertTime:concertTimes[0],
            currentCity:concertCities[0],
        },
        {
            id:index + 1,
            concertName:concertNames[0],
            concertPerformer:concertPerformers[0],
            concertDate:concertDates[0],
            concertPlace:concertPlaces[0],
            concertTime:concertTimes[0],
            currentCity:concertCities[0],
        },
        {
            id:index + 1,
            concertName:concertNames[0],
            concertPerformer:concertPerformers[0],
            concertDate:concertDates[0],
            concertPlace:concertPlaces[0],
            concertTime:concertTimes[0],
            currentCity:concertCities[0],
        },
        {
            id:index + 1,
            concertName:concertNames[0],
            concertPerformer:concertPerformers[0],
            concertDate:concertDates[0],
            concertPlace:concertPlaces[0],
            concertTime:concertTimes[0],
            currentCity:concertCities[0],
        },
    ]);

    const [city, setCity] = useState('Moscow')





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

            <section className={'tickets-place-block'}>
            <div className={'choose-performer-button'}>
                <h1>{concertPerformers}</h1>
                <Arrow
                    className={''}
                    width={70}
                    height={70}
                />
            </div>
            <div className={'tickets-title-block'}>
                <h2>Билеты</h2>
            </div>
                <TicketList tickets={tickets} />
            </section>
        </>
    );
};

export default Home;