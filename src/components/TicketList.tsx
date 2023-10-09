import React, {useMemo} from 'react';
import Ticket  from "./Ticket";
import {ConcertInfo} from "../data";
import {useFilterItems} from "./hooks/useFilterItems";



export interface TicketListProps{
    concertInfo :ConcertInfo[];
    currentArtist?:string | null;
    filterCity?:string | null;
}
    const TicketList = ({concertInfo, currentArtist, filterCity}:TicketListProps) => {
    const filteredConcertInfo = useFilterItems({ currentArtist, filterCity, concertInfo });


    return (
        <div className={'tickets-list-block'}>
            {filteredConcertInfo.length > 0
                ?
                filteredConcertInfo.map((concert)=>
                    <Ticket
                        concertData={concert}
                        key={concert.id}
                    />)
                :
                <h1>There are no concerts of the artist in {filterCity}.</h1>
            }

        </div>
    );
};

export default TicketList;