import React from 'react';
import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string;
    isBot?: boolean;
}
const UserRow: React.FC<UserProps> = (
    { nickname,
        isBot }
) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
}

export const UserList: React.FC = (): JSX.Element => {
    return (
        <Container>
            <Role>Disponivel -1</Role>
            <UserRow nickname="Marco" />
            <Role>Offline - 18</Role>
            <UserRow nickname="Teste" isBot />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />
            <UserRow nickname="John Doe" />



        </Container>
    )
}