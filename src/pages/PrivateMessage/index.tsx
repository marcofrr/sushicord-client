import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DirectMessagesList } from '../../components/DirectMessagesList'
import { PrivateChat } from '../../components/PrivateChat'
import { SearchConversation } from '../../components/SearchConversation'
import { ServerList } from '../../components/ServerList'
import { UserInfo } from '../../components/UserInfo'
import { Grid } from './styles'

interface ILocation {
    userId: string;
    userName: string;
    status: string;
    users: User[];
}

interface User {
    userId: string;
    userName: string;
}

export const PrivateMessage: React.FC = (): JSX.Element => {
    const location = useLocation<ILocation>();
    useEffect(() => {
        console.log(location.state)
    }, [location])
    return (
        <Grid>
            <ServerList />
            <SearchConversation />
            <DirectMessagesList />
            <UserInfo userName={'FAZER'} />
            <PrivateChat status={'online'} userName={location.state.userName} senderId={location.state.userId} users={location.state.users} />
        </Grid>
    )
}