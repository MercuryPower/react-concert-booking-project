import React, {useEffect, useRef, useState} from 'react';
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
import {useInView} from "react-intersection-observer";


const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState<null | string>(null);
    const [selectedCity,setSelectedCity] = useState<null | string>(null);

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
            concertImage: concertImages[i]
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
                    list={concertPerformers}
                    onSelect={(artist:string) => {setSelectedArtist(artist)}}
                />
                <DropdownMenu
                    onSelect={(city:string) => {setSelectedCity(city)}}
                    isCloseable={true}
                    isAnotherVersion={true}
                    width={'70vh'}                  /* нужно сделать чтобы у каждого испольнителя был закреплен свой город, время и дата */
                    fontSize={'5vh'}                /* наверно через объект это сделать можно пока-что тестово */
                    list={concertCities}
                    svgSize={45}
                />
                {/*<DropdownMenu*/}
                {/*    isAnotherVersion={true}*/}
                {/*    fontSize={'5vh'}*/}
                {/*    list={concertDates}*/}
                {/*    svgSize={45}*/}
                {/*/>*/}
                <div className={'tickets-title-block'}>
                    <div style={{display:'flex', justifyContent:'space-evenly', gap:'1rem'}}>
                        <h2>Билеты</h2>
                        {selectedArtist && selectedCity !== null ? <button onClick={()=>setSelectedArtist(null)} className={'button-choose-all'}>All</button> : ''}
                    </div>

                </div>
                <TicketList
                    currentArtist={selectedArtist}
                    filterCity={selectedCity}
                    tickets={tickets}
                />
            </section>
        </>
    );
};

export default Home;