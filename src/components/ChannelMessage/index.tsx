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
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'mention' : ''} />
            <Message>
                <Header>
                    <strong>{author}</strong>
                    {isBot && <span>Bot</span>}
                    <time>{date}</time>
                </Header>
                <Content>{content}</Content>
            </Message>
        </Container>
    )
};