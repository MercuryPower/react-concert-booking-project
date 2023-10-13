import React, {useEffect, useState} from 'react';
import '../SCSS/styles.scss';
import Slider from "../components/Slider";
import Header from "../components/Header";
import {
    concertCitiesWithAll, concertInfo,
} from '../data';
import {useInView} from "react-intersection-observer";
import AllTicketsWithFilter from "../components/AllTicketsWithFilter";


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
                concertData={concertInfo}
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