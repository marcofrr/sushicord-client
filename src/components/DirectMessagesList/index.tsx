import React from 'react'
import { DirectMessageButton } from '../DirectMessageButton'
import { Container, FriendsWrapper, FriendsIcon, NitroWrapper, NitroIcon, Separator, AddIcon, DMContainer } from '../DirectMessagesList/styles'

export const DirectMessagesList: React.FC = (): JSX.Element => {
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
                <DirectMessageButton status="online" user="Marco Ferreira" notifications="5" ></DirectMessageButton>

            </DMContainer>


        </Container>
    )
}