import React, {useState} from 'react';

interface CurrentCityProps{
    cities:string[]
}
const CurrentCity = ({cities} : CurrentCityProps) => {

    const [selectedCity, setSelectedCity] = useState(0)

    return (
        <div className={'current-city'}>
            {cities[selectedCity]}
        </div>
    );
};

export default CurrentCity;