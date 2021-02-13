import React, { useEffect } from 'react'
import { Container, HashtagIcon, Title, Separator, Description, BellIcon, PinIcon, MembersIcon, InboxIcon, HelpIcon } from './styles'
import { currentChannelName } from '../../graphql/reactive-vars'

interface Props {
    channelName: string;
}

export const ChannelInfo: React.FC<Props> = ({
    channelName
}): JSX.Element => {

    return (
        <Container>
            <HashtagIcon />
            <Title>{channelName}</Title>
            <Separator />
            <Description>{channelName}</Description>
            <BellIcon />
            <PinIcon />
            <MembersIcon />
            <InboxIcon />
            <HelpIcon />
        </Container>
    )
}