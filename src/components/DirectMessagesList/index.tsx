import React, { useState, useEffect } from 'react'
import { DirectMessageButton } from '../DirectMessageButton'
import { Container, FriendsWrapper, FriendsIcon, NitroWrapper, NitroIcon, Separator, AddIcon, DMContainer } from '../DirectMessagesList/styles'
import { QUERY_GET_DIRECT_MESSAGES } from '../../graphql/queries'
import { useMutation, useQuery } from '@apollo/client'
import { MUTATION_UPDATE_UNSEEN_MESSAGES } from '../../graphql/mutations'
import { client } from '../../app'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'
import { ERROR, PRIVATEMESSAGE } from '../../routes/pages'

interface User {
    userId: string | null;
    userName: string | null;
}

interface DirectMessage {
    userId : string;
    userName: string;
    status: string; 
    unreadMessages: number;
    isOpen: boolean;
}

export const DirectMessagesList: React.FC = (): JSX.Element => {

    const token = sessionStorage.getItem('token');
    const history = useHistory();
    // const cache = client.cache;
    const currentUser : User = {
        userId: sessionStorage.getItem('currentUserId'),
        userName: sessionStorage.getItem('currentUserName')
    }
    const [directMessages, setDirectMessages] = useState<DirectMessage[]>([]);
    const { data, loading } = useQuery(QUERY_GET_DIRECT_MESSAGES, {variables: { token }, fetchPolicy:"no-cache"})
    const [isMounted, setIsMounted] = useState(false)


    
    // const handleOnCompleted = (data : any) :void => {
    //     const users : User[] =[];
    //     const sender: User = {
    //         userId:  data.toggleUnseenMessages.id,
    //         userName:  data.toggleUnseenMessages.userName
    //     }
    //     if(!currentUser.userId || !currentUser.userName || !sender.userId || !sender.userName){
    //                 history.push({
    //                     pathname: ERROR,
    //                     state: {
    //                         errorNum: 500,
    //                         errorMessage: 'Something went wrong'
    //                     }
    //                 })
    //     }
    //     users.push(currentUser);
    //     users.push(sender);


    //         history.push({
    //             pathname: PRIVATEMESSAGE,
    //             state: {
    //                 userId: data.toggleUnseenMessages.id,
    //                 userName: data.toggleUnseenMessages.userName,
    //                 users: users
    //             }
    //         })


    // };
    
    const [handleUnseen] = useMutation(MUTATION_UPDATE_UNSEEN_MESSAGES)

    useEffect(() => {
        if(isMounted){
            const newState: DirectMessage[] =[];
            if(data && loading === false){
                data.ChatList.forEach((element : any) => {
                    const ele: DirectMessage = {
                        userId: element.user.id,
                        userName: element.user.userName,
                        status: "online",
                        unreadMessages: element.unreadMessages,
                        isOpen: false
                    }
                    newState.push(ele)
                });
                setDirectMessages(newState)
            }
        }
    }, [data]);

    useEffect(() => {
        setIsMounted(true)


        return () => {
            setIsMounted(false)
        }

    }, [])

    const handleOnClick = (item: any):void =>{
        handleUnseen({
            context: {
                headers: {
                    Authorization: token,
                }
            },
            variables: {
                senderId: item.userId
            },

        })

        const users : User[] =[];
        const sender: User = {
            userId:  item.userId,
            userName:  item.userName
        }
        if(!currentUser.userId || !currentUser.userName || !sender.userId || !sender.userName){
                    history.push({
                        pathname: ERROR,
                        state: {
                            errorNum: 500,
                            errorMessage: 'Something went wrong'
                        }
                    })
        }
        users.push(currentUser);
        users.push(sender);
        history.push({
            pathname: PRIVATEMESSAGE,
            state: {
                userId: item.userId,
                userName: item.userName,
                users: users
            }
        })


    }

    return (
        <Container className="directMessagesList">
            <FriendsWrapper>
                <FriendsIcon />
                <span>Friends</span>
            </FriendsWrapper>
            <NitroWrapper>
                <NitroIcon />
                <span>Nitro</span>
            </NitroWrapper>
            <Separator>
                <span>Direct Messages</span>
                <AddIcon />
            </Separator>

            <DMContainer>
            {directMessages && directMessages?.map((item: any,i: number) =>
                <div key={i} onClick={() => handleOnClick(item)}>
                    <DirectMessageButton
                        status="online" 
                        userName={item.userName} 
                        userId={item.userId} 
                        notifications={item.unreadMessages}
                    ></DirectMessageButton>
                </div>

            )}                
            </DMContainer>


        </Container>
    )
}