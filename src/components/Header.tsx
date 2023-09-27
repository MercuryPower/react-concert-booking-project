import React from 'react';
import Logo from "./Logo";
import CurrentCity from "./CurrentCity";
import OrderNowButton from "./OrderNowButton";
import UserProfile from "./UserProfile";

interface HeaderProps {
    cities: string[];
}
const Header = ({...props}:HeaderProps) => {
    return (
        <header>
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