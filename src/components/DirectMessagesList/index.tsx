import React, { useState, useEffect } from 'react'
import { DirectMessageButton } from '../DirectMessageButton'
import { Container, FriendsWrapper, FriendsIcon, NitroWrapper, NitroIcon, Separator, AddIcon, DMContainer } from '../DirectMessagesList/styles'
import { QUERY_GET_DIRECT_MESSAGES } from '../../graphql/queries'
import { useMutation, useQuery } from '@apollo/client'
import { MUTATION_UPDATE_UNSEEN_MESSAGES } from '../../graphql/mutations'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'
import { ERROR, PRIVATEMESSAGE } from '../../routes/pages'
import { SUBS_PRIVATE_MESSAGES_NOTIFICATION } from '../../graphql/subscriptions'

interface User {
    userId: string | null;
    userName: string | null;
}

interface DirectMessage {
    userId : string;
    userName: string;
    status: string; 
    unreadMessages: number;
}

export const DirectMessagesList: React.FC = (): JSX.Element => {

    const token = sessionStorage.getItem('token');
    const history = useHistory();
    const currentUser : User = {
        userId: sessionStorage.getItem('currentUserId'),
        userName: sessionStorage.getItem('currentUserName')
    }
    const [directMessages, setDirectMessages] = useState<DirectMessage[]>([]);
    const { data, loading,subscribeToMore } = useQuery(QUERY_GET_DIRECT_MESSAGES, {variables: { token }, fetchPolicy:"no-cache"})
    const [handleUnseen] = useMutation(MUTATION_UPDATE_UNSEEN_MESSAGES)


    useEffect(() => {
        let unsub: any;
        console.log('xpto')
        unsub = subscribeToMore({
            document: SUBS_PRIVATE_MESSAGES_NOTIFICATION,
            variables: { receiverId: currentUser.userId, token: token },
            updateQuery: (current, { subscriptionData }) => {
                if (!subscriptionData.data) return current;
                const newRequest = subscriptionData.data.newMessageNotification;
                console.log(newRequest)
                const state = _.clone(data.ChatList);
                const isPresent = state.findIndex((x : any) => x.userId === newRequest.sender._id)
                if(isPresent < 0){
                    const newState : DirectMessage[] = [];
                    const newEntry : DirectMessage ={
                        userId: newRequest.sender._id,
                        userName: newRequest.sender.userName,
                        status: newRequest.sender.status,
                        unreadMessages: 1,
                    }
                    newState.concat(newEntry)
                    setDirectMessages(newState.concat(state))
                }else{
                    state[isPresent].unreadMessages++;
                    setDirectMessages(state)
                }
            }
        })

        return () => {
            unsub();
        }
    }, [data])
    

    useEffect(() => {
            if(data && loading === false){
                setDirectMessages(data.ChatList)
            }
        
    }, [data]);


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

