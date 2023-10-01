import React, {useCallback, useMemo, useState} from 'react';
import ModalWindow from "./ModalWindow";
// import {ReactComponent as MapPin} from "../assets/location-pin-icon.svg";

interface CurrentCityProps{
    cities:string[];
    onSearchQueryChange?:(newSearchQuery:string) => void;
}
const CurrentCity = ({cities, onSearchQueryChange} : CurrentCityProps) => {
    const [show, setShow] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const sortedCities = useMemo(() => {
        return [...cities].filter((city) => city.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [cities, searchQuery])


    // const sortedCities = [...cities].sort((a,b) => a[sort].localeCompare(b[sort]))
    const handleChooseCity = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false)
    }

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);

        if (onSearchQueryChange) {
            onSearchQueryChange(e.target.value);
        }
    }, [onSearchQueryChange])

    return (
        <div>
            <div className={'current-city'} onClick={handleChooseCity}>
                {selectedCity}
            </div>
            <ModalWindow  show={show} onClose={handleClose}>
                <h1>Choose current city:</h1>
                <div className={'input-city-search'}>
                    {/*<MapPin*/}
                    {/*    width={50}*/}
                    {/*    height={50}*/}
                    {/*/>*/}
                    <input
                        type={'text'}
                        onChange={handleInputChange}
                        value={searchQuery}
                        placeholder={'Search'}
                        className={'input-city-search-properties'}
                    >
                    </input>
                </div>
                <div className={'city-choose-block-container'}>
                    {sortedCities.map((city, index) =>(
                        <div key={index} className={'city-choose-block'}
                             onClick={() => {
                                setSelectedCity(city)
                                setShow(false);
                        }}>
                            <h2 className={'glitch-text'}>{city}</h2>
                        </div>
                    ))}
                </div>
            </ModalWindow>
        </div>

    );
};

export default CurrentCity;