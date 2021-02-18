import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { QUERY_GET_USER_NAME } from '../../graphql/queries'
// import { Profile, Headphone } from 'styled-icons/remix-fill'
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles'
import { useQuery } from '@apollo/client';
interface Props {
    userName: string;
}

export const UserInfo: React.FC<Props> = ({ userName }): JSX.Element => {
    const token = localStorage.getItem("token");

    const { data } = useQuery(QUERY_GET_USER_NAME, { variables: { token } })


    return (
        <>
        {data &&
            <Container className="userInfo">
            <Profile>
                <Avatar />
                <UserData>
                    <strong>{data.User.userName}</strong>
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
        }

        </>

    )
}
