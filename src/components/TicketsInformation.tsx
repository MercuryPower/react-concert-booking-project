import React from 'react';
import {ReactComponent as Arrow} from "../assets/arrow1.svg";
import Ticket from "./Ticket";

export interface TicketsInformationProps{
    concertPerformers:string[];
    currentCity:string;
    concertPlace:string[];
}
const TicketsInformation = ({concertPerformers,currentCity, concertPlace}:TicketsInformationProps) => {
    return (
        <section className={'tickets-place-block'}>
            <div className={'choose-performer-button'}>
                <h1>{concertPerformers}</h1>
                <Arrow
                    className={''}
                    width={70}
                    height={70}
                />
            </div>
            <div className={'tickets-title-block'}>
                <h2>Билеты</h2>
            </div>
            <Ticket currentCity={currentCity}  concertPerformers={concertPerformers} concertPlace={concertPlace}/>
        </section>
    );
};

export default TicketsInformation;