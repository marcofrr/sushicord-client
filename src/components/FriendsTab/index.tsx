import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { Container, LeftIconsWrapper, FriendsIcon, Separator, Button, AddFriendBtn, RightIconsWrapper, MessageAddIcon, InboxIcon, HelpIcon } from './styles'

interface Props {
    toggleDesktop: (screen: string) => void;

}

export const FriendsTab: React.FC<Props> = ({
    toggleDesktop

}): JSX.Element => {

    const handleActive = (e: any): void => {
        var allButtons = document.querySelectorAll('.btn');
        allButtons.forEach(function (button) {
            button.classList.remove('btnActive');
            button.classList.remove('btnActiveAdd')

        })
        if(e.target.classList.contains('addFriend')) {
            e.target.classList.add('btnActiveAdd')
        }else{
            e.target.classList.add('btnActive')

        }
    }

    return (
        <Container className="friendsTab">
            <LeftIconsWrapper>
                <FriendsIcon />
                <strong>Friends</strong>
                <Separator />
                <Button className="btn btnActive" onClick={(e) => { toggleDesktop('online'); handleActive(e) }}>Online</Button>
                <Button className="btn" onClick={(e) => { toggleDesktop('all'); handleActive(e) }}>All</Button>
                <Button className="btn" onClick={(e) => { toggleDesktop('pending'); handleActive(e) }}> Pending</Button>
                <Button className="btn" >Blocked</Button>
                <AddFriendBtn className="btn addFriend" onClick={(e) => { toggleDesktop('handleFriend'); handleActive(e) }}>Add Friend</AddFriendBtn>
            </LeftIconsWrapper>
            <RightIconsWrapper className="rightIcons">

                <Tooltip title='New Group DM'>
                    <MessageAddIcon />
                </Tooltip>
                <Separator />
                <Tooltip title='Inbox'>
                    <InboxIcon />
                </Tooltip>
                <Tooltip title='Help'>
                    <HelpIcon />
                </Tooltip>

            </RightIconsWrapper>
        </Container>
    )
}