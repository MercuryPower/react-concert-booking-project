import React from 'react';
import OrderNowSVG from "../assets/ticketsNow.svg";

const OrderNowButton = () => {
    return (
        <div className='order-now-ticket-container'>
            <div className={'order-now-ticket-button'}>
                {/*<OrderNowSVG*/}
                {/*    // width={60}*/}
                {/*    // height={60}*/}
                {/*/>*/}
            </div>
            <h4 style={{cursor:"pointer"}}>Order Now</h4>
        </div>
    );
};

export default OrderNowButton;