    import React, {forwardRef, useState} from 'react';
    import ModalWindow from "./ModalWindow";
    import {motion} from "framer-motion";
    import Schema from "./Schema";
    import {concertDates, ConcertInfo} from "../data";

    const Ticket = forwardRef<HTMLDivElement,{ concertData: ConcertInfo }>(({ concertData }, ref) => {
        const [showArray, setShowArray] = useState(new Array(concertData.concerts.length).fill(false));

        const textAnimation = {
            hidden:{
                opacity:0,
            },
            visible: (custom: number) => ({
                opacity:1,
                transition: {delay: custom * 0.3}
            })
        }
        const handleClose = (index: number) => {
            const newShowArray = [...showArray];
            newShowArray[index] = false;
            setShowArray(newShowArray);
        }
        const handleShow = (index: number) => {
            const newShowArray = [...showArray];
            newShowArray[index] = true;
            setShowArray(newShowArray);
        }
        return (
            <>
            {concertData.concerts.map((concert, index) =>(
                <div key={index}>
                <motion.div
                    key={concertData.id}
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
                            {'2023'}
                        </div>
                        <div  className={'concertCity-tickets-block'}>
                            {concert.city}
                        </div>
                        <div className={'concertPlace-tickets-block'}>
                            {concert.place}
                        </div>
                    </div>
                    <div className={'ticket-info-column center'}>
                        <div className={'concertName-tickets-block'}>
                            {concertData.concertName}
                        </div>
                        <div className={'concertPerformer-tickets-block'} >
                            {concertData.artist}
                        </div>
                        <div className={'concertTime-tickets-block'}>
                            {concert.time ?
                                concert.time : 'XX:XX'
                            }
                        </div>
                    </div>
                    <div className={'ticket-info-column last'}>
                        <div className={'concertDate-tickets-block'}>
                            <div className={'date-circle '}>
                                {concert.date ?
                                    concert.date : `SOON`
                                }
                            </div>
                            <div className={'ticket-info-column'}>
                                <button className={'buy-ticket-button'} onClick={() =>handleShow(index)}>
                                    Купить
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <ModalWindow
                    show={showArray[index]}
                    onClose={() => handleClose(index)}
                    width={'150vh'}
                    height={'70vh'}
                    additionalClassName={'seat-choosing-modal'}
                >
                    <h1 style={{margin:0}}>{concert.place}</h1>
                    <div className={'sector-choosing-block'}>
                        <Schema />
                        <div className={'information-about-concert'}>
                            <h2>{concertData.artist}</h2>
                            <h2>{concert.date}</h2>
                            <h2>{concert.time}</h2>
                        </div>
                    </div>
                </ModalWindow>
                </div>
            ))}
        </>
        );
    });


    export default Ticket;

    export const MTicket = motion(Ticket);