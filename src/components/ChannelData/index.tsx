import React, { useEffect, useState } from 'react'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import { ChannelMessage } from '../ChannelMessage';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_GET_CHANNEL_MESSAGES } from '../../graphql/queries';
import { Waypoint } from 'react-waypoint'
import { MUTATION_SEND_SERVER_MESSAGE } from '../../graphql/mutations';
import { SUBS_SERVERMESSAGES } from '../../graphql/subscriptions';
import { client } from '../../app/'

interface Props {
    serverId: string;
    channelId: string;
}

export const ChannelData: React.FC<Props> = ({ serverId, channelId }): JSX.Element => {
    const token = localStorage.getItem('token');
    const [messages, setMessages] = useState<any[]>([]);
    const [offset, setOffset] = useState(0)
    const [newMessage, setNewMessage] = useState('')
    const [onEnter, setOnEnter] = useState(false)

    const cache = client.cache;

    var limit = 25

    const { data, fetchMore, subscribeToMore, refetch } = useQuery(QUERY_GET_CHANNEL_MESSAGES, {
        // fetchPolicy: "no-cache",
        variables: {
            serverId,
            token,
            channelId,
            offset,
            limit
        },
        notifyOnNetworkStatusChange: true
    })



    const [handleMessage] = useMutation(MUTATION_SEND_SERVER_MESSAGE)

    // useEffect(() => {
    //     // refetch()
    //     //setMessages([])
    //     // setMessages(data)
    //     console.log(messages.length)
    // }, [channelId])


    useEffect(() => {
        getMore()
        if (data) {
            setMessages(data.ChannelMessages)
        }
    }, [data])

    useEffect(() => {
        if (newMessage.length > 0) {
            handleMessage({
                context: {
                    headers: {
                        Authorization: token,
                    }
                },
                variables: {
                    serverId: serverId,
                    channelId: channelId,
                    content: newMessage
                },
                optimisticResponse: true,
            })
            setNewMessage('')
        }
    }, [onEnter])

    useEffect(() => {
        const listener = (e: any) => {
            if (e.code === "Enter" || e.code === "NumpadEnter") {
                e.stopPropagation();
                setOnEnter(oldState => !oldState)
            }
        };
        document.addEventListener("keydown", listener);
        return () => {

            document.removeEventListener("keydown", listener);
        };
    }, []);

    const getMore = (): void => {
        fetchMore({
            variables: {
                serverId,
                token,
                channelId,
                offset,
                limit
            }
        })

    }
    useEffect(() => {
        let mounted = true;
        if (mounted) refetch()

        let unsub: any;
        unsub = subscribeToMore({
            document: SUBS_SERVERMESSAGES,
            variables: { channelId: channelId, token: token },
            updateQuery: (current, { subscriptionData }) => {
                if (!subscriptionData.data) return current;
                const newRequest = subscriptionData.data.newServerMessage;
                const updatedRequests = [...current.ChannelMessages]
                updatedRequests.unshift(newRequest)
                cache.writeQuery({
                    query: QUERY_GET_CHANNEL_MESSAGES,
                    data: { ChannelMessages: updatedRequests },
                    variables: {
                        serverId,
                        token,
                        channelId,
                        offset,
                        limit
                    }
                });
            }
        })
        return () => {
            mounted = false;
            cache.writeQuery({
                query: QUERY_GET_CHANNEL_MESSAGES,
                data: { ChannelMessages: [] },
                variables: {
                    serverId,
                    token,
                    channelId,
                    offset,
                    limit
                }
            });
            unsub();
        }
        // eslint-disable-next-line
    }, [channelId])



    return (
        <Container>

            <Messages>
                {messages ? messages?.map((message: any, i: number) =>
                    <div key={message.id}>
                        <ChannelMessage

                            author={message.user.userName}
                            date='04/09/2020'
                            content={message.content}
                        />
                        {i === messages.length - 3 && (
                            <Waypoint onEnter={() => setOffset(offset + limit)} />
                        )}</div>



                ) : null}
            </Messages>

            <InputWrapper>
                <Input type='text' placeholder='Enter Message' onChange={(e) => setNewMessage(e.target.value)} value={newMessage} />
                <InputIcon />
            </InputWrapper>
        </Container>
    )

}