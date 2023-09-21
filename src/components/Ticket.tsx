import React from 'react';
import {TicketsInformationProps} from "./TicketsInformation";

interface TicketProps extends TicketsInformationProps{

}
const Ticket = ({...props}:TicketProps) => {
    return (
        <div className={'tickets-buy-block'}>
            <div className={'tickets-buy-button'}>
                <div className={'ticket-info-column'}>
                    <div className={'currentYear-tickets-block'}>
                        {new Date().getFullYear()}
                    </div>
                    <div className={'concertCity-tickets-block'}>
                        {props.currentCity}
                    </div>
                    <div className={'concertPlace-tickets-block'}>
                        {props.concertPlace}
                    </div>
                </div>
                <div className={'ticket-info-column'}>
                    <div className={'concertPerformer-tickets-block'}>
                        {props.concertPerformer}
                    </div>
                    <div className={'concertName-tickets-block'}>
                        {props.concertName}
                    </div>
                    <div className={'concertTime-tickets-block'}>
                        {props.concertTime}
                    </div>
                </div>
                <div className={'ticket-info-column'}>
                    <div className={'concertDate-tickets-block'}>
                        <div className={'date-circle'}>
                            {props.concertDate}
                        </div>

                    </div>
                </div>
                <div className={'ticket-info-column'}>
                    <button className={'buy-ticket-button'}>Купить</button>
                </div>
            </div>
        </div>
    );
};

export default Ticket;