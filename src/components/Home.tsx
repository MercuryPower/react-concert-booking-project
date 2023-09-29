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
import DropdownMenu from "./DropdownMenu";
import ModalWindow from "./ModalWindow";

const Home = () => {

    const ticketsData = [];

    for (let i = 0; i < concertPerformers.length; i++) {
        ticketsData.push({
            id: i + 1,
            concertName: concertNames[i],
            concertPerformer: concertPerformers[i],
            concertDate: concertDates[i],
            concertPlace: concertPlaces[i],
            concertTime: concertTimes[i],
            currentCity: concertCities[i],
            concertImage: concertImages[i]
        });
    }
    const [tickets, setTickets] = useState<TicketProps[]>(ticketsData);


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
                <DropdownMenu
                    list={concertPerformers}
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