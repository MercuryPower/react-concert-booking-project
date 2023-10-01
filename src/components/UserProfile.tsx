import React from 'react';
import {ReactComponent as Bell} from "../assets/bell.svg";

interface UserProfileProps {
    username?: string,
    userImg?: string
}
const UserProfile = (props: UserProfileProps) => {
    return (
        <div className='user-information'>
            <h4 className='user-information-text'>
                {props.username ?` ${props.username} `: `Log in`}
            </h4>
            <div className={'user-information-button'}>
                <img style={{width:'59px', height:'59px'}} src={'/vite.svg'} alt={'ProfilePicture'} />
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