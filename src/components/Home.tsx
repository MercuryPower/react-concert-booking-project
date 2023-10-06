import React, {useEffect, useRef, useState} from 'react';
import '../SCSS/styles.scss';
import Slider from "./Slider";
import Header from "./Header";
import {
    concertCities, concertCitiesWithAll,
    concertDates,
    concertImages,
    concertNames,
    concertPerformers, concertPerformersWithAll,
    concertPlaces,
    concertTimes
} from '../consts';
import {TicketProps} from "./Ticket";
import TicketList from "./TicketList";
import DropdownMenu from "./DropdownMenu";
import {useInView} from "react-intersection-observer";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../store/hooks/useTypedSelector";
import {SET_SELECTED_CITY} from "../store/reducers/currentCityReducer";


const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
    const [selectedCity,setSelectedCity] = useState<string | null>(null);
    // const {selectedCity} = useTypedSelector((state) => state.city);
    // const dispatch = useDispatch();

    const {ref, inView} = useInView({
        threshold:0.5
    })

    useEffect(() => {
        if(inView){
            setIsScrolled(true);
        } else{
            setIsScrolled(false);
        }
    }, [inView])
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
            concertImage: concertImages[i + 1]
        });
    }
    const [tickets, setTickets] = useState<TicketProps[]>(ticketsData);


    return (
        <>
            <Header isScrolled={isScrolled} cities={concertCities} />
            <Slider
                concertDates={concertDates}
                concertCities={concertCities}
                concertImages={concertImages}
                concertPerformers={concertPerformers}
                concertNames={concertNames}
            />
            <section ref={ref} className={'tickets-place-block'}>
                <DropdownMenu
                    list={concertPerformersWithAll}
                    onSelect={(artist:string) => {setSelectedArtist(artist)}}
                />
                <DropdownMenu
                    onSelect={(city) => setSelectedCity(city)}
                    isCloseable={true}
                    isAnotherVersion={true}
                    width={'70vh'}                  /* нужно сделать чтобы у каждого испольнителя был закреплен свой город, время и дата */
                    fontSize={'5vh'}                /* наверно через объект это сделать можно пока-что тестово */
                    list={concertCitiesWithAll}
                    svgSize={45}
                />
                {/*<DropdownMenu*/}
                {/*    isAnotherVersion={true}*/}
                {/*    fontSize={'5vh'}*/}
                {/*    list={concertDates}*/}
                {/*    svgSize={45}*/}
                {/*/>*/}
                <div className={'tickets-title-block'}>
                    <h2>Билеты</h2>
                </div>
                <TicketList
                    currentArtist={selectedArtist === 'All Artists' ? null : selectedArtist}
                    filterCity={selectedCity  === 'All Cities' ? null : selectedCity}
                    tickets={tickets}
                />
            </section>
            <section className={'tickets-place-block'}>

            </section>
            <footer>
                <br />
                <br />
                <br />
                <br />
            </footer>
        </>
    );
};

export default Home;