import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
// import { Profile, Headphone } from 'styled-icons/remix-fill'
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles'
interface Props {
    userName: string;
}

export const UserInfo: React.FC<Props> = ({ userName }): JSX.Element => {
    return (
        <Container className="userInfo">
            <Profile>
                <Avatar />
                <UserData>
                    <strong>{userName}</strong>
                    <span>#9394</span>
                </UserData>
            </Profile>
            <Icons>
                <Tooltip title='Mute'>
                    <MicIcon />
                </Tooltip>
                <Tooltip title='Deafen'>
                    <HeadphoneIcon />
                </Tooltip>
                <Tooltip title='User Settings'>
                    <SettingsIcon />
                </Tooltip>

            </Icons>
        </Container>
    )
}
