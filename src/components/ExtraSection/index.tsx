import React from 'react'
import { AddFriendForm } from '../AddFriendForm';
import { Container } from './styles';
import { FriendRequest } from '../FriendRequest'
import { Friends } from '../../components/Friends'
interface Sender {
    _id: string;
    userName: string;
}
interface FriendRequest {
    _id: string;
    sender: Sender;
}

interface Props {
    showAll: boolean;
    showFriendForm: boolean;
}
export const ExtraSection: React.FC<Props> = ({

    showAll,
    showFriendForm,
}): JSX.Element => {

    // const [state, setState] = useState(false);

    // useEffect(() => {
    //     setState(!state)
    //     console.log('state' + state)
    // }, [showOnline, showAll, showPending])
    return (
        <Container>
            {/* {showOnline && <Friends />} */}
            {/* {showPending && <FriendRequest showPending={showPending} />} */}
            {showFriendForm && <AddFriendForm />}

        </Container>
    )
}