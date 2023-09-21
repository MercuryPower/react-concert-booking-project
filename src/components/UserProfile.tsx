import React from 'react';
import {HandySvg} from "handy-svg";

interface UserProfileProps {
    username?: string,
    userImg?: string
}
const UserProfile = (props: UserProfileProps) => {
    return (
        <div className='user-information'>
            <h4 className='user-information-text'>
                {props.username ?` ${props.username} `: `User`}
            </h4>
            <div className={'user_information_button'}>
                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="29.5" cy="29.5" r="29.5" fill="#D9D9D9"/>
                </svg>
            </div>
            <div className={'user-information-bell'}>
                <HandySvg
                    src={'/bell.svg'}
                    width={32}
                    height={32}
                />
            </div>
        </div>
    );
};

export default UserProfile;