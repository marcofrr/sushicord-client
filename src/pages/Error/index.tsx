import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Button } from './styles'
import { HOME } from '../../routes/pages'


interface ILocation {
    errorNum: number;
    errorMessage: string;

}
export const Error: React.FC = (): JSX.Element => {
    const history = useHistory();
    const location = useLocation<ILocation>();

    const goHome = (): void => {
        history.push(HOME)
    }

    return (
        <Container>
            <strong>{location.state.errorNum}</strong>
            <h1>{location.state.errorMessage}</h1>
            <Button onClick={() => { goHome() }}>Home</Button>
        </Container>
    )
}