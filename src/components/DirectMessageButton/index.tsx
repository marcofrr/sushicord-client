import React from 'react'
import { Container, Avatar, Status, CloseIcon } from './styles'
import { useHistory } from 'react-router-dom'
import { PRIVATEMESSAGE } from '../../routes/pages'
export interface Props {
    user?: string;
    avatar?: string;
    status: string;
}
export const DirectMessageButton: React.FC<Props> = ({
    user,
    avatar,
    status
}): JSX.Element => {
    const history = useHistory()

    const goMessage = (): void => {
        history.push(PRIVATEMESSAGE)
    }

    return (
        <Container onClick={() => { goMessage() }} >
            <Container>
                <Avatar>
                    <Status status={status}></Status>
                </Avatar>
                <Container className="text">
                    <strong>{user}</strong>

                </Container>
            </Container>


            <CloseIcon className="close" />
        </Container>
    )
}