import React, {forwardRef, Ref, useState} from 'react';
import ModalWindow from "./ModalWindow";
import {motion} from "framer-motion";

export interface TicketProps{
    id:number;
    concertPerformer:string;
    currentCity:string;
    concertPlace:string;
    concertName:string;
    concertTime:string;
    concertDate:string;
}
const Ticket = forwardRef<HTMLDivElement, TicketProps>(({id, concertPerformer, currentCity, concertPlace, concertName, concertTime, concertDate }:TicketProps, ref) => {
    const [show, setShow] = useState(false);

    const textAnimation = {
        hidden:{
            opacity:0,
        },
        visible: (custom: number) => ({
            opacity:1,
            transition: {delay: custom * 0.3}
        })
    }
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
    return (
        <>
            <motion.div
                key={id}
                variants={textAnimation}
                initial={'hidden'}
                custom={1}
                transition={{duration:0.5}}
                viewport={{amount:0.1,once:true}}
                whileInView={'visible'}
                ref={ref}
                className={'tickets-buy-block'}
            >
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
                            <button className={'buy-ticket-button'} onClick={handleShow}>
                                Купить
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
            <ModalWindow
                show={show}
                onClose={handleClose}
            >
                <div>
                    <h1 style={{margin:0}}>{concertPerformer}</h1>
                    <h2 style={{margin:0}}>{concertDate}</h2>
                    <h2 style={{margin:0}}>{concertTime}</h2>
                </div>

            </ModalWindow>
    </>
    );
});


export default Ticket;

export const MTicket = motion(Ticket);