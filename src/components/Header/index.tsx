import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, LogoContainer, BtnContainer, Button } from './styles'
import { LOGIN, HOME, SIGNUP } from '../../routes/pages';

export const Header: React.FC = (): JSX.Element => {

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

    return (
        <Container>
            <LogoContainer>
                <span role='img' aria-label="sushi" onClick={() => goHome()}>🍣</span>
                <strong onClick={() => goHome()}> SUSHICORD</strong>
            </LogoContainer>
            <BtnContainer>
                <Button onClick={() => goLogin()}>Log In</Button>
                <Button>Log Out</Button>
                <Button onClick={() => goSignup()}>Create User</Button>
            </BtnContainer>




        </Container>
    )
}