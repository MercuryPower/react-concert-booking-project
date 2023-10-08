import React from 'react';
import {ReactComponent as Bell} from "../assets/bell.svg";
import {ReactComponent as UserLogo} from "../assets/defaultUserLogo.svg";
import {ReactComponent as EnterLogo} from "../assets/enter.svg";

interface UserProfileProps {
    username?: string,
    userImg?: string
}
const UserProfile = (props: UserProfileProps) => {
    return (
        <div className='user-information'>
            <EnterLogo
                style={{cursor:'pointer', marginRight:'0.5rem'}}
                width={24}
                height={24}
            />
            <h4 className='user-information-text'>
                 {props.username ?` ${props.username} `: `Sign in`}
            </h4>
            <div className={'user-information-button'}>
                <UserLogo
                    width={60} height={60}
                />
            </div>
            <div className={'user-information-bell'}>
                <Bell
                    width={32}
                    height={32}
                />
            </div>
        </div>
    );
};

export default UserProfile;