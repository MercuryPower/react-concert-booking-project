import React, {useState} from 'react';
import {ReactComponent as Arrow} from "../assets/svg/arrow1.svg";
import clsx from "clsx";
import {AnimatePresence, motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesUp, faAngleUp} from "@fortawesome/free-solid-svg-icons";

interface DropdownProps{
    list:string[];
    fontSize?:string;
    isAnotherVersion?:boolean;
    isCloseable?:boolean;
    width?:string;
    height?:string;
    onSelect?:(item:string) => void;
}
const DropdownMenu = ({list, fontSize,isAnotherVersion = false, width, isCloseable, onSelect}:DropdownProps) => {
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
                <FontAwesomeIcon
                    style={{fontSize:fontSize ? fontSize : '8vh' }}
                    className={clsx({'rotate-arrow-dropdown-active': isMenuActive, 'rotate-arrow-dropdown-inactive': !isMenuActive})}
                    icon={faAngleUp} />
            </div>


            <AnimatePresence>
            {isMenuActive && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className={isAnotherVersion ? "dropdown-menu-items2" : "dropdown-menu-items"}>
                    {list.map((item, index) => (
                        <ul key={item}>
                            <motion.li
                                transition={{ duration: 0.5 }}
                                whileHover={{ opacity: 0.9}}
                                key={index}
                                onClick={() => {
                                    chooseItem(index);
                                    onSelect && onSelect(item);
                                }}
                                className={selectedItem === index ? 'selected' : ''}
                            >
                                <h3>{item}</h3>
                            </motion.li>
                        </ul>
                    ))}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );

};

export default DropdownMenu;