import React, { useEffect, useState } from 'react'
import { Container, Avatar, Status, Notications, CloseIcon } from './styles'
import { useHistory } from 'react-router-dom'
import { ERROR, PRIVATEMESSAGE } from '../../routes/pages'
import { MUTATION_UPDATE_UNSEEN_MESSAGES } from '../../graphql/mutations'
import { useMutation } from '@apollo/client'

interface User {
    userId: string;
    userName: string;
}

export interface Props {
    userName: string;
    userId: string;
    avatar?: string;
    status: string;
    notifications: string;
}

export const DirectMessageButton: React.FC<Props> = ({
    userName,
    userId,
    avatar,
    status,
    notifications,
}): JSX.Element => {
    
    const history = useHistory()
    const token = sessionStorage.getItem('token');

    const [notificationsState, setNotifications] = useState('');
    

    // useEffect(() => {
    //     setNotifications(notifications)
    // }, [notifications])


    const renderNotifications = () : JSX.Element | undefined  =>{
        if(notifications){
            if(parseInt(notifications) > 0){
                if(parseInt(notifications) > 99) {
                   return (
                    <Notications className="notifications">+99</Notications> 
                   ) 
                }
                return (
                    <Notications className="notifications">{notifications}</Notications> 
                   ) 
            }
        }
    }


    return (
        <Container>
            <Container>
                <Avatar>
                    <Status status={status} userName={userName} userId={userId} notifications={notifications}></Status>
                </Avatar>
                <Container className="text">
                    <strong>{userName}</strong>
                    {renderNotifications()}
                </Container>
            </Container>


            <CloseIcon className="close" />
        </Container>
    )
}