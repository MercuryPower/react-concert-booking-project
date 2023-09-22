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
                <img style={{width:'59px', height:'59px'}} src={'/profilePictureDefault.png'} alt={'ProfilePicture'} />
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