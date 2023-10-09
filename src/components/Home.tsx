import React, {useEffect, useState} from 'react';
import '../SCSS/styles.scss';
import Slider from "./Slider";
import Header from "./Header";
import {
    concertCities, concertCitiesWithAll,
    concertDates,
    concertImages, concertInfo,
    concertNames,
    concertPerformers, concertPerformersWithAll,
} from '../data';
import TicketList from "./TicketList";
import DropdownMenu from "./DropdownMenu";
import {useInView} from "react-intersection-observer";


const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
    const [selectedCity,setSelectedCity] = useState<string | null>(null);

    const {ref, inView} = useInView({
        triggerOnce:true,
        threshold: 0.2
    })

    useEffect(()=> {
        if(inView){
            setIsScrolled(true);
        } else{
            setIsScrolled(false);
        }
    }, [inView])


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
                    width={'70vh'}
                    fontSize={'5vh'}
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
                    concertInfo={concertInfo}
                />
            </section>
            <section className={'tickets-place-block'}>

            </section>
            <section className={'tickets-place-block'}>

            </section>
            <section className={'tickets-place-block'}>

            </section>
            <section className={'tickets-place-block'}>

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