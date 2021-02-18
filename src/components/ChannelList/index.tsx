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
    const token = sessionStorage.getItem('token');
    const serverId = sessionStorage.getItem('currentServerId');



    const { data, loading } = useQuery(QUERY_GET_SERVER_CHANNELS, { variables: { serverId, token } })

    // const refText = React.useRef<HTMLDivElement>(null)
    const handleFocus = (channelId: string, channelName: string): void => {
        handleChange(channelId, channelName)
    }



    useEffect(() => {


        if (data && loading === false) {
            const channel = document.querySelector("#channel0") as HTMLDivElement;
            channel.classList.add('active')
        }

    }, [data]);

    const handleActive = (e: any,channelId: string, channelName: string): void => {
        var textChannels = document.querySelectorAll('.textChannel');
        textChannels.forEach(function (channel) {
            channel.classList.remove('active');

        })
        console.log(e.target)
        if(!e.target.classList.contains('icon')) e.target.classList.add('active')

        handleChange(channelId, channelName)

        
    }

    return (
        <>
            <Container id="channels">
                <Category>
                    <span>Text Channels</span>

                    <AddCategoryIcon onClick={() => toggleTextPopUp()} />


                </Category>
                {data && data.ServerData.textChannels.map((channel: any, index: number) =>

                    <ChannelContainer
                        key={channel.id}
                        onClick={(e) => { handleActive(e,channel.id, channel.name) }}
                        tabIndex={0}
                        id={'channel' + index.toString()}
                        className={'textChannel'}
                    >
                        <NameWrapper>
                            <HashtagIcon />
                            <span>{channel.name}</span>
                        </NameWrapper>
                        <div>
                            <InviteIcon className={'icon'} />
                            <SettingsIcon className={'icon'} />
                        </div>
                    </ChannelContainer>
                )}

                <Category>
                    <span>Voice Channels</span>
                    <AddCategoryIcon />
                </Category>

                {data && data.ServerData.voiceChannels.map((channel: any) =>
                    <ChannelContainer
                        key={channel.id}
                    
                    >
                        <NameWrapper>
                            <HashtagIcon />
                            <span>{channel.name}</span>
                        </NameWrapper>
                        <div>
                            <InviteIcon className={'icon'} />
                            <SettingsIcon className={'icon'} />
                        </div>
                    </ChannelContainer>
                )}
            </Container>
        </>
    )
};