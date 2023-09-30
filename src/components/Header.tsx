import React from 'react';
import Logo from "./Logo";
import CurrentCity from "./CurrentCity";
import OrderNowButton from "./OrderNowButton";
import UserProfile from "./UserProfile";
import clsx from "clsx";

interface HeaderProps {
    cities: string[];
    isScrolled:boolean;
}
const Header = ({...props}:HeaderProps) => {
    return (
        <header className={clsx({'scrolled':props.isScrolled})}>
            <div className={'header-container'}>
                <div style={{display:'flex', alignItems:'center', flex:'0 0 33.3%'}}>
                    <Logo />
                    <CurrentCity cities={props.cities} />
                </div>
                <OrderNowButton />
                <UserProfile />
            </div>
        </header>
    );
};

export default Header;