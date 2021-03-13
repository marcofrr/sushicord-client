import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Container, Request, Avatar, UserContainer, Wrapper, AcceptIcon, DeclineIcon } from './styles'
import { MUTATION_HANDLE_FRIEND_REQUEST } from '../../graphql/mutations'
import { QUERY_GET_FRIEND_REQUESTS } from '../../graphql/queries'
import { SUBS_FRIEND_REQUESTS } from '../../graphql/subscriptions'

import { client } from '../../app/'

interface Sender {
    userName: string;
    _id: string;
}
interface FriendRequest {
    _id: string | null;
    sender: Sender | null;
}
interface Props {
    showPending: boolean;
}

export const FriendRequest: React.FC<Props> = ({
    showPending,
}) => {

    const token = sessionStorage.getItem('token');
    const receiverId = sessionStorage.getItem('currentUserId')
    const cache = client.cache;
    const ACCEPT = 'accept'
    const DECLINE = 'decline'
    const [friendRequests, setFriendRequests] = useState([])
    const { subscribeToMore, data, loading } = useQuery(QUERY_GET_FRIEND_REQUESTS, { variables: { token } ,fetchPolicy:"network-only"})
    const [mounted,setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => {
            setMounted(false)
        }
    }, [])

    useEffect(() => {
        if(data && loading === false) setFriendRequests(data.FriendRequests)
    }, [data])
    useEffect(() => {

        let unsub: any;
        unsub = subscribeToMore({
            document: SUBS_FRIEND_REQUESTS,
            variables: { receiverId: receiverId, token: token },
            updateQuery: (current, { subscriptionData }) => {
                if (!subscriptionData.data) return current;
                const newRequest = subscriptionData.data.newFriendRequest;
                const updatedRequests = current.FriendRequests.concat(newRequest)
                cache.writeQuery({
                    query: QUERY_GET_FRIEND_REQUESTS,
                    data: { FriendRequests: updatedRequests },
                    variables: { token }
                });
            }
        })

        if (showPending && data) {
            setFriendRequests(data);
        }
        return () => {
            unsub();
        }
    }, [mounted])




    const [handleRequest] = useMutation(MUTATION_HANDLE_FRIEND_REQUEST)

    const handleAction = (_id: string, action: string): void => {
        handleRequest({
            context: {
                headers: {
                    Authorization: token,
                }
            },
            variables: {
                action: action,
                requestId: _id
            },
            optimisticResponse: true,
            update: () => {
                const existingRequests: any = cache.readQuery({
                    query: QUERY_GET_FRIEND_REQUESTS,
                    variables: { token }
                });
                const updatedRequests = existingRequests.FriendRequests.filter((t: FriendRequest) => (t._id !== _id));
                cache.writeQuery({
                    query: QUERY_GET_FRIEND_REQUESTS,
                    data: { FriendRequests: updatedRequests },
                    variables: { token }
                });
            }

        })
    }

    return (
        <Container>
            {loading && <div>Loading...</div>}
            {friendRequests && friendRequests.map((request: any) =>
                <Request key={request._id}>
                    <Wrapper>
                        <Avatar />
                        <UserContainer >
                            <strong>{request.sender.userName}</strong>
                        </UserContainer>
                    </Wrapper>
                    <div>
                        <AcceptIcon onClick={() => handleAction(request._id, ACCEPT)} />
                        <DeclineIcon onClick={() => handleAction(request._id, DECLINE)} />
                    </div>

                </Request>
            )}
        </Container>

    )
}

