import React from 'react';
import {SliderProps} from "./Slider";
import {TicketsInformationProps} from "./TicketsInformation";

interface TicketProps extends TicketsInformationProps{

}
const Ticket = ({...props}:TicketProps) => {
    return (
        <div className={'tickets-buy-block'}>
            <div className={'tickets-buy-button'}>
                <div className={'city-club-year-info'}>
                    <div>
                        {new Date().getFullYear()}
                    </div>
                    <div>
                        {props.currentCity}
                    </div>
                    <div>
                        {props.}
                    </div>
                </div>
                <button>Buy</button>
            </div>
        </div>
    );
};

export default Ticket;