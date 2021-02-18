import React, { useEffect, useState } from 'react'


import { Grid } from './styles'
import { ServerName } from '../../components/ServerName';
import { ChannelInfo } from '../../components/ChannelInfo'
import { ChannelList } from '../../components/ChannelList'
import { UserInfo } from '../../components/UserInfo';
import { UserList } from '../../components/UserList';
import { ChannelData } from '../../components/ChannelData';
import { userName } from '../../graphql/reactive-vars'
import { ServerList } from '../../components/ServerList';
import { currentChannelId } from '../../graphql/reactive-vars'
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_GET_SERVER_TEXT_CHANNELS } from '../../graphql/queries';
import { useLazyQuery } from '@apollo/client';
import { NewTextChannel } from '../../components/PopUps/NewTextChannel';
import { useHistory } from 'react-router-dom';
import { ERROR } from '../../routes/pages'
export const Server = (): JSX.Element => {

    const token = sessionStorage.getItem('token');
    const history = useHistory();
    const [serverId, setServerId] = useState('')
    const [channelId, setChannelId] = useState('')
    const [channelName, setChannelName] = useState('')
    const [newTextChannel, setNewTextChannel] = useState(false)
    const [newVoiceChannel, setNewVoiceChannel] = useState(false)

    const { id } = useParams()

    const [getInfo, { data, loading }] = useLazyQuery(QUERY_GET_SERVER_TEXT_CHANNELS)

    useEffect(() => {
        setServerId(id)
        getInfo({
            variables: {
                serverId: id,
                token
            }
        })
    }, [id])

    useEffect(() => {

        if (data && loading === false) {
            setChannelId(data.ServerData.textChannels[0].id)
            setChannelName(data.ServerData.textChannels[0].name)
        }

    }, [data])


    const handleChange = (channelId: string, channelName: string): void => {
        setChannelId(channelId)
        setChannelName(channelName)
    }
    const toggleTextPopUp = (): void => {
        setNewTextChannel(oldState => !oldState)
    }

    const goError = (): void => {
        
        history.push({
            pathname: ERROR,
            state: {
                errorNum: 500,
                errorMessage: 'Something went wrong!'
            }
        })
    }

    return (
        <>
            {(serverId && channelId) ?
                <Grid>
                    <ServerList />
                    <ServerName />
                    <ChannelInfo channelName={channelName} />
                    <ChannelList handleChange={(channelId, channelName) => handleChange(channelId, channelName)} toggleTextPopUp={toggleTextPopUp} />
                    <UserInfo userName={userName()} />
                    <ChannelData serverId={serverId} channelId={channelId} />
                    <UserList />
                    {newTextChannel && <NewTextChannel toggleTextPopUp={toggleTextPopUp} />}
                </Grid>
                : null
            }


        </>
    )
}