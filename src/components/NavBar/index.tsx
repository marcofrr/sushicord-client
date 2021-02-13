import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, DiscordIcon, PeopleIcon, SearchIcon, AtIcon, BtnContainer, Button } from './styles'
import { LOGIN, HOME, SIGNUP } from '../../routes/pages';
interface Props {
    toggleMobile: (screen: string) => void;
}
export const NavBar: React.FC<Props> = ({
    toggleMobile
}): JSX.Element => {

    const history = useHistory()

    const goHome = (): void => {
        history.push(HOME)
    }
    const goSignup = (): void => {
        history.push(SIGNUP)
    }
    const goLogin = (): void => {
        history.push(LOGIN)
    }

    const handleClick = (e: any): void => {

        var icons = document.querySelectorAll('.icon');
        icons.forEach(function (icon) {
            icon.classList.remove('active');
        })
        e.target.classList.add("active");

    }

    return (
        <Container className="navBar">
            <a onClick={(e: any) => { handleClick(e); toggleMobile('dm'); }} className="icon active">
                <DiscordIcon />

            </a>
            <a onClick={(e: any) => { handleClick(e); toggleMobile('friendRequests'); }} className="icon">
                <PeopleIcon />

            </a>
            <a onClick={(e: any) => { handleClick(e) }} className="icon">
                <SearchIcon />

            </a>
            <a onClick={(e: any) => { handleClick(e) }} className="icon">
                <AtIcon className="icon" />

            </a>

        </Container >
    )
}