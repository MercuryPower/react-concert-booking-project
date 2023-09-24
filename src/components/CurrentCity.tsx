import React, {useState} from 'react';
import ModalWindow from "./ModalWindow";

interface CurrentCityProps{
    cities:string[]
}
const CurrentCity = ({cities} : CurrentCityProps) => {
    const [show, setShow] = useState(false);


    const [selectedCity, setSelectedCity] = useState(cities[0]);

    const handleChooseCity = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <div>
            <div className={'current-city'} onClick={handleChooseCity}>
                {selectedCity}
            </div>
            <ModalWindow show={show} onClose={handleClose}>
                <h1>Choose current city:</h1>
                <input></input>
                <div className={'city-choose-block-container'}>
                    {cities.map((city, index) =>(
                        <div className={'city-choose-block'} onClick={() => {
                            setSelectedCity(city)
                            setShow(false);
                        }}>
                            <h2>{city}</h2>
                        </div>
                    ))}
                </div>
            </ModalWindow>
        </div>

    );
};

export default CurrentCity;