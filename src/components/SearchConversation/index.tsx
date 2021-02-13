import React from 'react';
import { Container, DirectContainer, MessageIcon, Input } from './styles'
export const SearchConversation: React.FC = (): JSX.Element => {
    return (
        <Container className="searchConversation">

            {/* mobible use */}
            {/* <strong className="mobile">Direct Messages</strong> */}
            <DirectContainer className="mobile">
                <strong className="mobile">Direct Messages</strong>
                <MessageIcon className="mobile" />
            </DirectContainer>
            <Input type='text' placeholder='Find or start a conversation' />


        </Container>
    )
}