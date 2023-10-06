import React, {useState} from 'react';
import {ReactComponent as Arrow} from "../assets/arrow1.svg";
import clsx from "clsx";
import currentCity from "./CurrentCity";

interface DropdownProps{
    list:string[];
    fontSize?:string;
    svgSize?:number;
    isAnotherVersion?:boolean;
    isCloseable?:boolean;
    width?:string;
    height?:string;
    onSelect?:(...items:string[]) => void;
}
const DropdownMenu = ({list, fontSize, svgSize,isAnotherVersion = false, width, isCloseable, onSelect}:DropdownProps) => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0)

    const toggleMenu = () => {
        if(list.length > 1){
            setIsMenuActive(!isMenuActive)
        }
    }
    const chooseItem = (index :number) => {
        setSelectedItem(index);
        if(isCloseable) {
            setIsMenuActive(false);
        }

    }


    return (
        <div className={'dropdown-menu'} style={{width:width ? width : '75%'}}>
            <div className={'choose-item-dropdown'}>
                <h1 style={{fontSize:fontSize ? fontSize : '11vh'}} onClick={toggleMenu}>{list[selectedItem]}</h1>
                <Arrow
                    className={clsx(
                        {
                            'rotate-arrow-dropdown-active': isMenuActive,
                            'rotate-arrow-dropdown-inactive': !isMenuActive
                        })}
                    width={svgSize ? svgSize : 70}
                    height={svgSize ? svgSize : 70}
                />
            </div>
            {isMenuActive && (
                <div className={isAnotherVersion ? "dropdown-menu-items2" : "dropdown-menu-items"}>
                    {list.map((item, index) => (
                        <ul key={item}>
                            <li
                                key={index}
                                onClick={() => {
                                    chooseItem(index);
                                    onSelect && onSelect(item);
                                }}
                                className={selectedItem === index ? 'selected' : ''}
                            >
                                <h3>{item}</h3>
                            </li>
                        </ul>
                    ))}
                </div>
            )}

        </div>
    );
};

export default DropdownMenu;