import React from 'react';

export interface TicketProps{
    id:number;
    concertPerformer:string;
    currentCity:string;
    concertPlace:string;
    concertName:string;
    concertTime:string;
    concertDate:string;
}
const Ticket = ({id, concertPerformer, currentCity, concertPlace, concertName, concertTime, concertDate }:TicketProps) => {
    return (
        <div className={'tickets-buy-block'}>
            <div className={'tickets-buy-button'}>
                <div className={'ticket-info-column'}>
                    <div className={'currentYear-tickets-block'}>
                        {new Date().getFullYear()}
                    </div>
                    <div  className={'concertCity-tickets-block'}>
                        {currentCity}
                    </div>
                    <div className={'concertPlace-tickets-block'}>
                        {concertPlace}
                    </div>
                </div>
                <div className={'ticket-info-column'}>
                    <div className={'concertPerformer-tickets-block'}>
                        {concertPerformer}
                    </div>
                    <div className={'concertName-tickets-block'}>
                        {concertName}
                    </div>
                    <div className={'concertTime-tickets-block'}>
                        {concertTime}
                    </div>
                </div>
                <div className={'ticket-info-column'}>
                    <div className={'concertDate-tickets-block'}>
                        <div className={'date-circle '}>
                            {concertDate}
                        </div>
                        <div className={'ticket-info-column'}>
                            <button className={'buy-ticket-button'}>Купить</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ticket;