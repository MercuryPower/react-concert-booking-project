import React from 'react';
import {ReactComponent as Arrow} from "../assets/arrow1.svg";
import Ticket from "./Ticket";
import {concertDates} from "../consts";


export interface TicketsInformationProps{
    concertPerformer:string[];
    currentCity:string;
    concertPlace:string[];
    concertName:string[];
    concertTime:string[];
    concertDate:string[];
}
const TicketsInformation = ({...props}:TicketsInformationProps) => {
    return (
        <section className={'tickets-place-block'}>
            <div className={'choose-performer-button'}>
                <h1>{props.concertPerformer}</h1>
                <Arrow
                    className={''}
                    width={70}
                    height={70}
                />
            </div>
            <div className={'tickets-title-block'}>
                <h2>Билеты</h2>
            </div>
            <div className={'tickets-list-block'}>
                <Ticket
                    currentCity={props.currentCity}
                    concertPerformer={props.concertPerformer}
                    concertPlace={props.concertPlace}
                    concertName={props.concertName}
                    concertTime={props.concertTime}
                    concertDate={props.concertDate}
                />
                <Ticket
                    currentCity={props.currentCity}
                    concertPerformer={props.concertPerformer}
                    concertPlace={props.concertPlace}
                    concertName={props.concertName}
                    concertTime={props.concertTime}
                    concertDate={props.concertDate}
                />
                <Ticket
                    currentCity={props.currentCity}
                    concertPerformer={props.concertPerformer}
                    concertPlace={props.concertPlace}
                    concertName={props.concertName}
                    concertTime={props.concertTime}
                    concertDate={props.concertDate}
                />

            </div>

        </section>
    );
};

export default TicketsInformation;