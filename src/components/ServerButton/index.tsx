import React from 'react'
import { Button } from './styles'
import Logo from '../../assets/logo.png'
import { SERVER, ME } from '../../routes/pages';
import { useHistory } from 'react-router-dom';
import { currentChannelId, currentServerId } from '../../graphql/reactive-vars'
export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
    serverId?: string;
    serverName?: string;
}
const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
    serverId,
    serverName
}): JSX.Element => {

    const history = useHistory();
    const gotoServer = (serverId?: string): void => {

        if (serverId === undefined || serverName === undefined) {
            history.push(ME)
            sessionStorage.removeItem("currentServerId");
            currentChannelId('')
            currentServerId('')
        } else {
            sessionStorage.setItem("currentServerId", serverId);
            sessionStorage.setItem("currentServerName", serverName)
            currentServerId(serverId)
            history.push(SERVER + '/' + serverId);
        }

    }

    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
            onClick={() => gotoServer(serverId)}
        >
            {isHome ? <img src={Logo} alt="SushiCord"></img> : null}
        </Button>
    )
}
export default ServerButton;