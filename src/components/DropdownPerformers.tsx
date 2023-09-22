import React, {useState} from 'react';
import {ReactComponent as Arrow} from "../assets/arrow1.svg";

interface DropDownPerformersProps{
    performers:string[]
}
const DropdownPerformers = ({performers}:DropDownPerformersProps) => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [selectedPerformer, setSelectedPerformer] = useState(0)

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive)
    }
    const choosePerformer = (index :number) => {
        setSelectedPerformer(index);
    }


    return (
        <div className={'choose-performer-button'}>
            <div className={'choose-performer-dropdown'}>
                <h1 onClick={toggleMenu}>{performers[selectedPerformer]}</h1>
                <Arrow
                    className={isMenuActive ? 'rotate-arrow-dropdown-active' : 'rotate-arrow-dropdown-inActive'}
                    width={70}
                    height={70}
                />
            </div>
            {isMenuActive && (
                <div className="dropdown-menu-performers">
                    {performers.map((performer, index) => (
                        <ul>
                            <li
                                key={index}
                                onClick={() => choosePerformer(index)}
                                className={selectedPerformer === index ? 'selected' : ''}
                            >
                                <h3>{performer}</h3>
                            </li>
                        </ul>
                    ))}
                </div>
            )}

        </div>
    );
};

export default DropdownPerformers;