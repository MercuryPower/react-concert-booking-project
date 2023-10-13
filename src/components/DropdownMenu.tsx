import React, {useEffect, useState} from 'react';
import {ReactComponent as Arrow} from "../assets/svg/arrow1.svg";
import clsx from "clsx";
import {AnimatePresence, motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesUp, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers";

interface DropdownProps{
    list:string[];
    isCityList?:boolean;
    fontSize?:string;
    isAnotherVersion?:boolean;
    isCloseable?:boolean;
    width?:string;
    height?:string;
    onSelect?:(item:string) => void;
}
const DropdownMenu = ({list, fontSize,isAnotherVersion = false, width, isCloseable, onSelect, isCityList}:DropdownProps) => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0)
    const selectedCity = useSelector((state: RootState) => state.city.selectedCity);
    const toggleMenu = () => {
        if(list.length > 1){
            setIsMenuActive(!isMenuActive)
        }
    }

    useEffect(() => {
        if (isCityList) {
            const selectedIndex = list.indexOf(selectedCity);
            setSelectedItem(selectedIndex !== -1 ? selectedIndex : 0);
        }
    }, [isCityList, selectedCity, list]);
    const chooseItem = (index :number) => {
        setSelectedItem(index);

        if(isCloseable) {
            setIsMenuActive(false);
        }
    }


    return (
        <div className={'dropdown-menu'} style={{width:width ? width : '75%'}}>
            <div className={'choose-item-dropdown'}>
                <h1 style={{fontSize:fontSize ? fontSize : '11vh'}} onClick={toggleMenu}>
                    {list[selectedItem]}
                </h1>
                <FontAwesomeIcon
                    style={{fontSize:fontSize ? fontSize : '8vh'}}
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