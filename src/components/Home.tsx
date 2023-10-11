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
import Dates from "./Dates";
import AllTicketsWithFilter from "./AllTicketsWithFilter";


const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
            <Header isScrolled={isScrolled} cities={concertCitiesWithAll.slice(1)} />
            <Slider
                concertDates={concertDates}
                concertCities={concertCities}
                concertImages={concertImages}
                concertPerformers={concertPerformers}
                concertNames={concertNames}
            />
            <AllTicketsWithFilter ref={ref} />
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