import React, {useEffect, useState} from 'react';
import DropdownMenu from "./DropdownMenu";
import {concertCitiesWithAll, concertInfo, concertPerformersWithAll} from "../data";
import Dates from "./Dates";
import TicketList from "./TicketList";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";

const AllTicketsWithFilter = React.forwardRef<HTMLElement>((props, ref) => {
    const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
    const [selectedCity,setSelectedCity] = useState<string | null>(null);
    const cityFromHeader = useSelector((state: RootState) => state.city.selectedCity);
    useEffect(()=> {
        setSelectedCity(cityFromHeader)
    }, [cityFromHeader])
    return (
        <section ref={ref} className={'tickets-place-block'}>
            <DropdownMenu
                list={concertPerformersWithAll}
                onSelect={(artist:string) => {setSelectedArtist(artist)}}
            />
            <DropdownMenu
                onSelect={(city) => setSelectedCity(city)}
                isCloseable={true}
                isCityList={true}
                isAnotherVersion={true}
                width={'70vh'}
                fontSize={'5vh'}
                list={concertCitiesWithAll}
            />
            <Dates startDate={'01.09'}  endDate={'01.10'}/>

            <div className={'tickets-title-block'}>
                <h2>Билеты</h2>
            </div>
            <TicketList
                currentArtist={selectedArtist === 'All Artists' ? null : selectedArtist}
                filterCity={selectedCity  === 'All Cities' ? null : selectedCity}
                concertInfo={concertInfo}
            />
        </section>
    );
});

export default AllTicketsWithFilter;