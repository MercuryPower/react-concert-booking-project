import React, {useState} from 'react';
import ModalWindow from "./ModalWindow";

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
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className={'tickets-buy-block'}>
                <div className={'ticket-info-column first'}>
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
                <div className={'ticket-info-column center'}>
                    <div className={'concertName-tickets-block'}>
                        {concertName}
                    </div>
                    <div className={'concertPerformer-tickets-block'}>
                        {concertPerformer}
                    </div>
                    <div className={'concertTime-tickets-block'}>
                        {concertTime}
                    </div>
                </div>
                <div className={'ticket-info-column last'}>
                    <div className={'concertDate-tickets-block'}>
                        <div className={'date-circle '}>
                            {concertDate ?
                                concertDate : `SOON`
                            }
                        </div>
                        <div className={'ticket-info-column'}>
                            <button className={'buy-ticket-button'} onClick={handleShow}>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalWindow
                show={show}
                onClose={handleClose}
            >
                Content of the modal goes here.
            </ModalWindow>
    </>
    );
};

export default Ticket;