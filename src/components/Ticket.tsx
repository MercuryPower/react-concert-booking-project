import React from 'react';
import {SliderProps} from "./Slider";

interface TicketProps extends SliderProps{
    id:number,

}
const Ticket = ({...props}:TicketProps) => {
    return (
        <div>
            
        </div>
    );
};

export default Ticket;