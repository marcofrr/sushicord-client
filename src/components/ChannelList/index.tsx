import React, { useEffect, useState } from 'react'

import { Container, Category, AddCategoryIcon, ChannelContainer, NameWrapper, HashtagIcon, InviteIcon, SettingsIcon } from './styles';
import { QUERY_GET_SERVER_CHANNELS } from '../../graphql/queries'

import { useQuery } from '@apollo/client';
import { NewTextChannel } from '../PopUps/NewTextChannel';
export interface Props {
    handleChange: (channelId: string, channelName: string) => void;
    toggleTextPopUp: () => void;
}


export const ChannelList: React.FC<Props> = (
    { handleChange, toggleTextPopUp }
): JSX.Element => {
    const token = localStorage.getItem('token');
    const serverId = localStorage.getItem('currentServerId');



    const { data } = useQuery(QUERY_GET_SERVER_CHANNELS, { variables: { serverId, token } })

    const refText = React.useRef<HTMLDivElement>(null)
    const handleFocus = (channelId: string, channelName: string): void => {
        handleChange(channelId, channelName)
    }



    useEffect(() => {


        if (data) {
            const ele = document.querySelector("#channel0") as HTMLDivElement;
            if (ele) {
                ele.focus();
                // localStorage.removeItem("currentChannelName");
                // // handleChange(data.serverData.textChannels[0].name, data.serverData.textChannels[0].id)
                // localStorage.setItem("currentChannelId", data.serverData.textChannels[0].id);
                // currentChannelId(data.serverData.textChannels[0].id)
            }
        }

        // eslint-disable-next-line
    }, [data]);
    return (
        <>
            <Container id="channels">
                <Category>
                    <span>Text Channels</span>

                    <AddCategoryIcon onClick={() => toggleTextPopUp()} />


                </Category>
                {data && data.serverData.textChannels.map((channel: any, index: number) =>

                    <ChannelContainer
                        key={channel.id}
                        ref={refText}
                        onClick={() => { handleFocus(channel.id, channel.name) }}
                        tabIndex={0}
                        id={'channel' + index.toString()}
                    >
                        <NameWrapper>
                            <HashtagIcon />
                            <span>{channel.name}</span>
                        </NameWrapper>
                        <div>
                            <InviteIcon />
                            <SettingsIcon />
                        </div>
                    </ChannelContainer>
                )}

                <Category>
                    <span>Voice Channels</span>
                    <AddCategoryIcon />
                </Category>

                {data && data.serverData.voiceChannels.map((channel: any) =>
                    <ChannelContainer
                        key={channel.id}
                    >
                        <NameWrapper>
                            <HashtagIcon />
                            <span>{channel.name}</span>
                        </NameWrapper>
                        <div>
                            <InviteIcon />
                            <SettingsIcon />
                        </div>
                    </ChannelContainer>
                )}
            </Container>
        </>
    )
};