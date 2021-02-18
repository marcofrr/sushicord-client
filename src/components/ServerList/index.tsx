import React, { useEffect } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { Separator, Container } from './styles'
import ServerButton from '../ServerButton'
import { useQuery } from '@apollo/client';
import { QUERY_GET_SERVER_LIST } from '../../graphql/queries';

// interface Server {
//     id: string;
//     name: string;
// }

export const ServerList: React.FC = (): JSX.Element => {
    const token = sessionStorage.getItem('token');

    const { data } = useQuery(QUERY_GET_SERVER_LIST, { variables: { token } })
    // const [servers, setServers] = useState<Server[]>([]);

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    return (
        <Container className="serverList">

            <Tooltip title='Home' placement="right">
                <div>
                    <ServerButton isHome />
                </div>
            </Tooltip>
            <Separator />

            {data && data.servers.map((server: any) =>
                <Tooltip key={server.id} title={server.name} placement="right">
                    <div>
                        <ServerButton serverId={server.id} serverName={server.name} />
                    </div>
                </Tooltip>)}
        </Container>
    )
}
