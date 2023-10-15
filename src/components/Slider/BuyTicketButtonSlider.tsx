import React from 'react';
import {motion, Variants} from "framer-motion";

interface BuyTicketButtonSlider{
    textAnimation:Variants;
    handleShow:() => void;
}
const BuyTicketButtonSlider = ({textAnimation, handleShow}:BuyTicketButtonSlider) => {
    return (
        <div className={'buy-ticket-slider-block'}>
            <motion.button custom={4} variants={textAnimation} className={'buy-ticket-slider-button'} onClick={handleShow}>
                BUY TICKETS
            </motion.button>
        </div>
    );
};

export default BuyTicketButtonSlider;