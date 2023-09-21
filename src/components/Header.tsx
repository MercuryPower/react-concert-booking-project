import React from 'react';
import Logo from "./Logo";
import CurrentCity from "./CurrentCity";
import OrderNowButton from "./OrderNowButton";
import UserProfile from "./UserProfile";

interface HeaderProps {
    city: string;
}
const Header = ({...props}:HeaderProps) => {
    return (
        <header>
            <div className='header-container'>
                <Logo />
                <CurrentCity city={props.city} />
                <OrderNowButton />
                <UserProfile />
            </div>
        </header>
    );
};

export default Header;