import React, {useState} from 'react';
import ModalWindow from "./ModalWindow";

interface DatesProps {
    startDate:string,
    endDate:string,
}
const Dates = ({startDate = '01.01', endDate = '01.02'}:DatesProps) => {
    return (
        <>
            <div className={'dates-parent-block'}>
                <div className={'date-container'}>
                    <h1>{startDate}</h1>
                    <h1> - </h1>
                    <h1>{endDate}</h1>
                </div>
            </div>
        </>
    );
};

export default Dates;