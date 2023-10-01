import React from 'react';
import Logo from "./Logo";
import CurrentCity from "./CurrentCity";
import OrderNowButton from "./OrderNowButton";
import UserProfile from "./UserProfile";
import clsx from "clsx";
import { motion } from 'framer-motion';

interface HeaderProps {
    cities: string[];
    isScrolled:boolean;
}
const Header = ({...props}:HeaderProps) => {
    const textAnimation = {
        hidden:{
            opacity:0,
        },
        visible: (custom: number) => ({
            opacity:1,
            transition: {delay: custom * 0.3}
        })
    }
    return (
        <motion.header
            variants={textAnimation}
            initial={'hidden'}
            custom={1}
            transition={{duration:0.5}}
            viewport={{amount:0.1,once:true}}
            whileInView={'visible'}
            className={clsx({
                'scrolled':props.isScrolled
            })}>
            <div className={'header-container'}>
                <div style={{display:'flex', alignItems:'center', flex:'0 0 33.3%'}}>
                    <Logo />
                    <CurrentCity cities={props.cities} />
                </div>
                <OrderNowButton />
                <UserProfile />
            </div>
        </motion.header>
    );
};

export default Header;