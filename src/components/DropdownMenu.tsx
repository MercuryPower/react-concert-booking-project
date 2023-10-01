import React, {useState} from 'react';
import Arrow from "../assets/arrow1.svg";
import clsx from "clsx";

interface DropdownProps{
    list:string[];
}
const DropdownMenu = ({list}:DropdownProps) => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0)

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive)
    }
    const chooseItem = (index :number) => {
        setSelectedItem(index);
    }


    return (
        <div className={'dropdown-menu'}>
            <div className={'choose-item-dropdown'}>
                <h1 onClick={toggleMenu}>{list[selectedItem]}</h1>
                {/*<Arrow*/}
                {/*    // className={clsx(*/}
                {/*    //     {*/}
                {/*    //         'rotate-arrow-dropdown-active': isMenuActive,*/}
                {/*    //         'rotate-arrow-dropdown-inactive': !isMenuActive*/}
                {/*    //     })}*/}
                {/*    // width={70}*/}
                {/*    // height={70}*/}
                {/*/>*/}
            </div>
            {isMenuActive && (
                <div className="dropdown-menu-items">
                    {list.map((item, index) => (
                        <ul key={item}>
                            <li
                                key={index}
                                onClick={() => chooseItem(index)}
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