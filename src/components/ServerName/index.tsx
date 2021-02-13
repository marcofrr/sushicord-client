import { useQuery } from '@apollo/client';
import React from 'react'
import { Container, Title, ExpandIcon } from './styles'
import { QUERY_GET_SERVER_NAME } from '../../graphql/queries'

export const ServerName: React.FC = (): JSX.Element => {
    const token = localStorage.getItem('token');
    const serverId = localStorage.getItem('currentServerId');
    const serverName = localStorage.getItem('currentServerName');
    // const { data } = useQuery(QUERY_GET_SERVER_NAME, { variables: { serverId, token } })


    return (
        <>
            <Container>
                <Title>{serverName}</Title>

                <ExpandIcon />
            </Container>
        </>
    )
}