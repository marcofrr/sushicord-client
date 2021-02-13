import React from 'react'
import { Container, DirectContainer, MessageIcon, Input, DMContainer, DirectMessage, Avatar } from '../DMessagesMobile/styles'
export const DMessagesMobile: React.FC = (): JSX.Element => {
    return (
        <>
            <Container className="dMessagesMobile">
                <DirectContainer>
                    <strong>Direct Messages</strong>
                    <MessageIcon />
                </DirectContainer>
                <Input type='text' placeholder='Find or start a conversation' />
            </Container>
            <DMContainer className="dMessagesMobile">
                <DirectMessage>
                    <Avatar></Avatar>
                    <h1>Marco Ferreira</h1>
                </DirectMessage>
                <DirectMessage>
                    <Avatar></Avatar>
                    <h1>Marco</h1>
                </DirectMessage>
            </DMContainer>
        </>
    )
}