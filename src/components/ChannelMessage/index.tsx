import React from 'react'
import { Container, Avatar, Message, Header, Content } from './styles'

export interface Props {
    author?: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

export const ChannelMessage: React.FC<Props> = ({
    author,
    date,
    content,
    hasMention,
    isBot
}): JSX.Element => {

    const getDate = (input: string) : string => {
        const date = new Date(parseInt(input)).toLocaleDateString("pt-PT").toString()
        const time = new Date(parseInt(input)).toLocaleTimeString("pt-PT").toString()
        const dateTime = `${date}  ${time}`
        return dateTime
    }
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'mention' : ''} />
            <Message>
                <Header>
                    <strong>{author}</strong>
                    {isBot && <span>Bot</span>}
                    <strong>{getDate(date)}</strong>
                </Header>
                <Content>{content}</Content>
            </Message>
        </Container>
    )
};