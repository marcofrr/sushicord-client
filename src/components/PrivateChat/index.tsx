import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { ChannelMessage } from '../ChannelMessage';
import {
    TopBar,
    RightContainer,
    AtIcon,
    Container,
    Status,
    Separator,
    AkaBadge,
    LeftContainer,
    IconWrapper,
    CallIcon,
    VideoIcon,
    PushpinIcon,
    PersonAddIcon,
    SearchChat,
    SearchInput,
    SearchIcon,
    CrossIcon,
    InboxIcon,
    HelpIcon,
    InputWrapper,
    Input,
    InputIcon,
    Content,
    MessageContainer,
} from './styles'
import { QUERY_GET_PRIVATE_MESSAGES } from '../../graphql/queries';
import { Waypoint } from 'react-waypoint';
import { MUTATION_SEND_PRIVATE_MESSAGE } from '../../graphql/mutations';
import { useHistory } from 'react-router-dom';
import { ERROR } from '../../routes/pages'
import { SUBS_PRIVATE_MESSAGES } from '../../graphql/subscriptions';
import { client } from '../../app/'
import * as _ from 'lodash';

interface User {
    userId: string;
    userName: string;
}

export interface Props {
    userName: string;
    avatar?: string;
    status: string;
    senderId: string;
    users: User[];
}
interface Message {
    _id: string;
    receiderId: string;
    senderId: string;
    content: string;
    createdAt: string;
}

export const PrivateChat: React.FC<Props> = ({
    status,
    userName,
    senderId,
    users
}): JSX.Element => {

    const history = useHistory();
    const token = sessionStorage.getItem('token');
    const receiverId = sessionStorage.getItem('currentUserId')
    const [user, setUser] = useState('');
    const submitBtn = document.querySelector('.submitBtn');
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputVal, setInputVal] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [onEnter, setOnEnter] = useState(false)
    const [usersState, setUsers] = useState<User[]>([]);
    const [hasText, setHasText] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [offset, setOffset] = useState(0)
    const cache = client.cache;

    const limit = 25;
    const { data, fetchMore, subscribeToMore, refetch, loading } = useQuery(QUERY_GET_PRIVATE_MESSAGES, {
        fetchPolicy: "cache-and-network",
        variables: {
            token,
            senderId,
            offset,
            limit
        }
    })
    useEffect(() => {
        if(data && loading === false){
            if(data.PrivMessages.length < limit) setHasMore(false);
            const newData = data.PrivMessages.concat(messages.filter((item : any) => data.PrivMessages.indexOf(item) < 0))
            var sortedData = _.sortBy( newData, 'createdAt').reverse();
            setMessages(sortedData)

        } 
    }, [data]);



    useEffect(() => {
        let mounted = true;
        let unsub: any;
        unsub = subscribeToMore({
            document: SUBS_PRIVATE_MESSAGES,
            variables: { receiverId: receiverId, token: token },
            updateQuery: (current, { subscriptionData }) => {
                if (!subscriptionData.data) return current; 
                const newRequest = subscriptionData.data.newPrivMessage;
                setMessages(oldState => oldState.concat(newRequest))           
                setMessages(oldState => _.sortBy( oldState, 'createdAt').reverse())
            }
        })
        return () => {
            mounted = false;
            cache.writeQuery({
                query: QUERY_GET_PRIVATE_MESSAGES,
                data: { PrivMessages: [] },
                variables: {
                    token,
                    senderId,
                    offset,
                    limit
                }
            });
            unsub();
        }
        // eslint-disable-next-line
    }, [])


    const getUserName = (id: string): string | undefined => {
        const user = users.find(u => u.userId == id);
        if (user) { return user.userName } else {
            history.push({
                pathname: ERROR,
                state: {
                    errorNum: 500,
                    errorMessage: 'Something went wrong'
                }
            })
        }


    }

    useEffect(() => {
        setUsers(users)
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
    const [handleMessage] = useMutation(MUTATION_SEND_PRIVATE_MESSAGE)



    useEffect(() => {
        if (newMessage.length > 0) {
            handleMessage({
                context: {
                    headers: {
                        Authorization: token,
                    }
                },
                variables: {
                    receiverId: senderId,
                    content: newMessage
                },
                // optimisticResponse: true,
            })
            setNewMessage('')
        }
    }, [onEnter])


    useEffect(() => {
        inputVal.length == 0 ? setHasText(false) : setHasText(true)

    }, [inputVal])

    const deleteValInput = (): void => {
        let inputValue = (document.getElementById('searchInput') as HTMLInputElement).value = '';
        setInputVal('')
    }



    return (
        <>
            {/* //Top bar with info */}
            <TopBar>
                <RightContainer>
                    <AtIcon />
                    <h3>{userName}</h3>
                    <Status status={status} senderId={senderId} userName={userName} users={users} />
                    <Separator />
                    <AkaBadge>AKA</AkaBadge>
                    <h4>{userName}</h4>

                </RightContainer>
                <LeftContainer>
                    <IconWrapper> <CallIcon /> </IconWrapper>
                    <IconWrapper> <VideoIcon /> </IconWrapper>
                    <IconWrapper> <PushpinIcon /> </IconWrapper>
                    <IconWrapper> <PersonAddIcon /> </IconWrapper>
                    <SearchChat>
                        <SearchInput type='text' placeholder='Search' onChange={(e) => { setInputVal(e.target.value) }} id="searchInput" />
                        {hasText && <CrossIcon onClick={() => { deleteValInput() }} />}
                        {!hasText && <SearchIcon />}

                    </SearchChat>
                    <IconWrapper> <InboxIcon /> </IconWrapper>
                    <IconWrapper> <HelpIcon /> </IconWrapper>
                </LeftContainer>
            </TopBar>
            <MessageContainer>

                {messages && messages.map((message: any, i: number) =>
                    <div key={i}>
                        <ChannelMessage author={getUserName(message.senderId)} content={message.content} date={message.createdAt} ></ChannelMessage>
                        {
                            (i === messages.length - 3) && hasMore && (
                                <Waypoint onEnter={() => { setOffset(limit + offset) }} />
                            )
                        }

                    </div>

                )}
            </MessageContainer>
            <InputWrapper>
                <Input type='text' placeholder='Enter Message' onChange={(e) => setNewMessage(e.target.value)} value={newMessage} />
                <InputIcon />
            </InputWrapper>
        </>
    )
}