import React from 'react'
import { Footer } from '../../components/Footer'

import { Header } from '../../components/Header'
import { LoginForm } from '../../components/LoginForm'
import { Grid } from './styles'
export const Login = (): JSX.Element => {

    return (
        <Grid>
            <Header />
            <LoginForm />
            <Footer />
        </Grid>
    )
}