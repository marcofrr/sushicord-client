import React, { useEffect, useState } from 'react'
import { Container, Grid } from './styles'
import { ServerList } from '../../components/ServerList';
import { SearchConversation } from '../../components/SearchConversation';
import { DirectMessagesList } from '../../components/DirectMessagesList';
import { FriendsTab } from '../../components/FriendsTab';
import { UserInfo } from '../../components/UserInfo';
import { ExtraSection } from '../../components/ExtraSection';
import { userName } from '../../graphql/reactive-vars'
import { NavBar } from '../../components/NavBar';
import { DMessagesMobile } from '../../components/DMessagesMobile';
import { Friends } from '../../components/Friends';
import { FriendRequest } from '../../components/FriendRequest';
import { ActiveNow } from '../../components/ActiveNow'
import { PrivateChat } from '../../components/PrivateChat';
import { useHistory } from 'react-router-dom';



export const Me = (): any => {

    const [showOnline, setShowOnline] = useState(true)
    const [showAll, setShowAll] = useState(false)
    const [showPending, setShowPending] = useState(false)
    const [toggleFriend, setToggleFriend] = useState(false)

    //states for mobile screens
    const [mobileDm, setMobileDm] = useState(true)
    const [mobileUserSettings, setMobileUserSettings] = useState(false)
    const [mobileFriends, setMobileFriends] = useState(false)


    const toggleMobile = (screen: string): void => {
        const grid = document.querySelector('.grid')
        setMobileDm(false)
        setMobileUserSettings(false)
        setMobileFriends(false)
        switch (screen) {
            case 'dm':
                setMobileDm(true)
                break;
            case 'friendRequests':
                setMobileFriends(true)
                break;
            case 'userSettings':
                setMobileUserSettings(true)
                break;


        }
    }

    const toggleDesktop = (screen: string): void => {
        setShowOnline(false)
        setShowAll(false)
        setShowPending(false)
        setToggleFriend(false)
        switch (screen) {
            case 'online':
                setShowOnline(true)
                break;
            case 'all':
                setShowAll(true)
                break;
            case 'pending':
                setShowPending(true)
                break;
            case 'handleFriend':
                setToggleFriend(true)
                break;

        }
    }
    useEffect(() => {
        console.log(mobileFriends)
    }, [mobileFriends])    // const { data, loading, error } = useQuery(QUERY_GET_ME_PAGE, { variables: { token } })





    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;
    // userName(data.username.userName)

    //classes que com grid de cada ecra
    //ao clicar no butoes do friendstab, verificar as dimensoes da janela e alterar a classe

    const tooglePrivateLayout = (): void => {
        const grid = document.querySelector('.grid');
        grid?.classList.remove('layoutMain')
        grid?.classList.add('layoutPrivate')
    }


    return (
        <Container className="me">
            <Grid className="grid layoutMain">
                <ServerList />
                <SearchConversation />
                <DirectMessagesList />

                <UserInfo userName={userName()}>

                </UserInfo>
                <FriendsTab
                    toggleDesktop={(screen) => toggleDesktop(screen)}
                />
                {showOnline && <Friends />}
                {showPending && <FriendRequest showPending={showPending} />}
                {/* <ExtraSection
                    showAll={showAll}
                    showFriendForm={toggleFriend}
                /> */}

                {/* <PrivateChat status={'online'}></PrivateChat> */}

                <ActiveNow />

                {/* //mobile layout */}
                {mobileDm && <DMessagesMobile></DMessagesMobile>}
                {mobileDm && <SearchConversation />}
                {/* {mobileFriends && <Friends />} */}
                {/* {mobileFriends && <FriendRequest showPending={showPending} />} */}
                {/* {showFriendForm && <AddFriendForm />}} */}
                <NavBar toggleMobile={(screen) => toggleMobile(screen)}></NavBar>
            </Grid>

        </Container >

    )
}   