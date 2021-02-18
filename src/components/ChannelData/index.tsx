import React, { useEffect, useState } from 'react'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import { ChannelMessage } from '../ChannelMessage';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_GET_CHANNEL_MESSAGES } from '../../graphql/queries';
import { Waypoint } from 'react-waypoint'
import { MUTATION_SEND_SERVER_MESSAGE } from '../../graphql/mutations';
import { SUBS_SERVERMESSAGES } from '../../graphql/subscriptions';
import { client } from '../../app/'
import * as _ from 'lodash';

interface Props {
    serverId: string;
    channelId: string;
}

export const ChannelData: React.FC<Props> = ({ serverId, channelId }): JSX.Element => {
    const token = sessionStorage.getItem('token');
    const [messages, setMessages] = useState<any[]>([]);
    const [offset, setOffset] = useState(0)
    const [newMessage, setNewMessage] = useState('')
    const [onEnter, setOnEnter] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    const cache = client.cache;

    var limit = 25

    const { data, fetchMore, subscribeToMore, refetch } = useQuery(QUERY_GET_CHANNEL_MESSAGES, {
        fetchPolicy: "cache-and-network",
        variables: {
            serverId,
            token,
            channelId,
            offset,
            limit
        }
    })



    const [handleMessage] = useMutation(MUTATION_SEND_SERVER_MESSAGE)


    useEffect(() => {
        if (data) {
            if(data.ChannelMessages.length < limit) setHasMore(false);
            const newData = data.ChannelMessages.concat(messages.filter((item : any) => data.ChannelMessages.indexOf(item) < 0))
            var sortedData = _.sortBy( newData, 'createdAt').reverse();
            setMessages(sortedData)
        }
    }, [data])

    useEffect(() => {
        console.log('messages',messages)
    }, [messages])

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
    useEffect(() => {
        let mounted = true;

        let unsub: any;
        unsub = subscribeToMore({
            document: SUBS_SERVERMESSAGES,
            variables: { channelId: channelId, token: token },
            updateQuery: (current, { subscriptionData }) => {
                if (!subscriptionData.data) return current;
                console.log(subscriptionData.data)               

                const newRequest = subscriptionData.data.newChannelMessage;
                setMessages(oldState => oldState.concat(newRequest))           
                setMessages(oldState => _.sortBy( oldState, 'createdAt').reverse())
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
    }, [channelId])

    return (
        <Container>

            <Messages>
                {messages && messages?.map((message: any, i: number) =>
                    <div key={message._id}>
                        <ChannelMessage

                            author={message.user.userName}
                            date={message.createdAt}
                            content={message.content}

                        />
                        {i === messages.length - 3 && hasMore && (
                            <Waypoint onEnter={() => setOffset(offset + limit)} />
                        )}</div>

                )}
            </Messages>

            <InputWrapper>
                <Input type='text' placeholder='Enter Message' onChange={(e) => setNewMessage(e.target.value)} value={newMessage} />
                <InputIcon />
            </InputWrapper>
        </Container>
    )

}