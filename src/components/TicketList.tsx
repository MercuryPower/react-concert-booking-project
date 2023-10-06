import React, {useMemo} from 'react';
import Ticket, {TicketProps} from "./Ticket";



export interface TicketListProps{
    tickets:TicketProps[];
    currentArtist?:string | null;
    filterCity?:string | null;
}
    const TicketList = ({tickets, currentArtist, filterCity}:TicketListProps) => {
        const filteredTickets = useMemo(() =>{
            if(currentArtist) {
                if(filterCity){
                    return tickets.filter((ticket) => ticket.concertPerformer === currentArtist && ticket.currentCity === filterCity );
                }
                return tickets.filter((ticket) => ticket.concertPerformer === currentArtist );
            }
            return tickets
        }, [currentArtist, filterCity, tickets])
        
    return (
        <div className={'tickets-list-block'}>
            {filteredTickets.length > 0
                ?
                filteredTickets.map((ticket)=>
                    <Ticket key={ticket.id} {...ticket}/>)
                :
                <h1>No City</h1>
            }

        </div>
    );
};

export default TicketList;