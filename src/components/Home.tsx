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
import {ReactComponent as Arrow} from "../assets/arrow1.svg";
import DropdownPerformers from "./DropdownPerformers";

const Home = () => {
    let index = 0;
    const [city, setCity] = useState('Moscow')
    const [tickets, setTickets] = useState<TicketProps[]>([
        {
            id:index += 1,
            concertName:concertNames[0],
            concertPerformer:concertPerformers[0],
            concertDate:concertDates[0],
            concertPlace:concertPlaces[0],
            concertTime:concertTimes[0],
            currentCity:concertCities[0]
        },
        {
            id:index += 1,
            concertName:concertNames[1],
            concertPerformer:concertPerformers[1],
            concertDate:concertDates[1],
            concertPlace:concertPlaces[1],
            concertTime:concertTimes[1],
            currentCity:concertCities[1],
        },
        {
            id:index += 1,
            concertName:concertNames[2],
            concertPerformer:concertPerformers[2],
            concertDate:concertDates[2],
            concertPlace:concertPlaces[2],
            concertTime:concertTimes[2],
            currentCity:concertCities[2],
        },
        {
            id:index += 1,
            concertName:concertNames[3],
            concertPerformer:concertPerformers[3],
            concertDate:concertDates[3],
            concertPlace:concertPlaces[3],
            concertTime:concertTimes[3],
            currentCity:concertCities[3],
        },
        {
            id:index += 1,
            concertName:concertNames[2],
            concertPerformer:concertPerformers[2],
            concertDate:concertDates[2],
            concertPlace:concertPlaces[2],
            concertTime:concertTimes[2],
            currentCity:concertCities[2],
        },
        {
            id:index += 1,
            concertName:concertNames[3],
            concertPerformer:concertPerformers[3],
            concertDate:concertDates[3],
            concertPlace:concertPlaces[3],
            concertTime:concertTimes[3],
            currentCity:concertCities[3],
        },
        {
            id:index += 1,
            concertName:concertNames[2],
            concertPerformer:concertPerformers[2],
            concertDate:concertDates[2],
            concertPlace:concertPlaces[2],
            concertTime:concertTimes[2],
            currentCity:concertCities[2],
        },
        ]);

    return (
        <>
            <Header cities={concertCities} />
            <Slider
                concertDates={concertDates}
                concertCities={concertCities}
                concertImages={concertImages}
                concertPerformers={concertPerformers}
                concertNames={concertNames}
            />
            <section className={'tickets-place-block'}>
                <DropdownPerformers
                    performers={concertPerformers}
                />
                <div className={'tickets-title-block'}>
                    <h2>Билеты</h2>
                </div>
                <TicketList
                    tickets={tickets}
                />
            </section>
        </>
    );
};

export default Home;