import React from 'react';
import Ticket, {TicketProps} from "./Ticket";

export interface TicketListProps{
    tickets:TicketProps[];
}
const TicketList = ({tickets}:TicketListProps) => {
    return (
            <div className={'tickets-list-block'}>
                    {tickets.map((ticket)=>
                        <Ticket key={ticket.id} {...ticket}/>
                    )}
            </div>
    );
};

export default TicketList;