import React, {useState} from 'react';
import {ReactComponent as Arrow} from "../assets/arrow1.svg";
import clsx from "clsx";

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
                    className={clsx(
                        {
                            'rotate-arrow-dropdown-active': isMenuActive,
                            'rotate-arrow-dropdown-inactive': !isMenuActive
                        })}
                    width={70}
                    height={70}
                />
            </div>
            {isMenuActive && (
                <div className="dropdown-menu-performers">
                    {performers.map((performer, index) => (
                        <ul key={performer}>
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