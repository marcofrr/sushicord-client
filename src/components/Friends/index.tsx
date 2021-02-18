import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { Wrapper, FriendContainer, Container, Avatar, IconContainer, MessageIcon, MoreIcon, Wumpus, Status, WumpusContainer } from './styles'
import { QUERY_GET_FRIEND_LIST } from '../../graphql/queries'

import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from 'react-router-dom';
import { PRIVATEMESSAGE } from '../../routes/pages';
import { ERROR } from '../../routes/pages';

export interface Props {
    isOnline?: boolean;
    isOffline?: boolean;
    status: string;
    userName: string;
    userId: string;
}
interface User {
    userId: string;
    userName: string;
}
const SingleFriend: React.FC<Props> = ({
    isOnline,
    isOffline,
    status,
    userName,
    userId,
}): JSX.Element => {
    const history = useHistory()
    const [users, setUsers] = useState<User[]>([]);
    // useEffect(() => {

    //     async function anyFunction() {
    //         await loadUsers();
    //     }
    //     anyFunction();

    // }, [])

    useEffect(() => {
        if (users.length > 0) {
            history.push({
                pathname: PRIVATEMESSAGE,
                state: {
                    userId: userId,
                    userName: userName,
                    users: users
                }
            })
        }

    }, [users])

    const goPrivate = (): void => {
        loadUsers();
    }


    const loadUsers = (): void => {
        const users: User[] = [];
        const currentUserId = sessionStorage.getItem('currentUserId');
        const currentUserName = sessionStorage.getItem('currentUserName');

        if (!currentUserId || !currentUserName) {
            history.push({
                pathname: ERROR,
                state: {
                    errorNum: 500,
                    errorMessage: 'Something went wrong'
                }
            })
        } else {
            const currentUser: User = {
                userId: currentUserId,
                userName: currentUserName
            }

            const userFromProps: User = {
                userId: userId,
                userName: userName
            }
            users.push(currentUser)
            users.push(userFromProps)
            setUsers(users)
        }
    }

    return (
        <FriendContainer>
            <div>
                <Avatar>
                    <Status userId={userId} status={status} userName={userName}></Status>
                </Avatar>
                <strong>{userName}</strong>
            </div>

            <IconContainer>
                <Tooltip title='Message' placement="top">
                    <MessageIcon onClick={() => { goPrivate() }} />
                </Tooltip>
                <Tooltip title='More' placement="top">
                    <MoreIcon />
                </Tooltip>
            </IconContainer>
        </FriendContainer>


    )

}

export const Friends: React.FC = (): JSX.Element => {

    const token = sessionStorage.getItem('token');
    const [isMounted, setIsMounted] = useState(false)

    const { loading, data, refetch } = useQuery(QUERY_GET_FRIEND_LIST, { variables: { token } })
    useEffect(() => {
        setIsMounted(true)


        return () => {
            setIsMounted(false)
        }

    }, [])


    useEffect(() => {
        if (isMounted) refetch()
    }, [isMounted])

    return (

        <Wrapper>
            {data ?
                <Container className="friends">
                    {data && data.friends.map((friend: any) =>
                        <SingleFriend key={friend.id} status="online" userName={friend.userName} userId={friend.id} />
                    )}
                </Container>
                :
                <WumpusContainer>
                    <Wumpus></Wumpus>
                    <p>No one's around to play with Wumpus.</p>
                </WumpusContainer>}
        </Wrapper>
    )

}