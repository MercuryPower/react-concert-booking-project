import React from 'react';

interface CurrentCityProps{
    city:string
}
const CurrentCity = ({city} : CurrentCityProps) => {
    return (
        <div className={'current_city'}>
            {city}
        </div>
    );
};

export default CurrentCity;