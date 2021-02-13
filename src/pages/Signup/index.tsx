import React from 'react'

import { LoginForm } from '../../components/LoginForm'
import { Grid } from './styles'
import anime from 'animejs'
import { Header } from '../../components/Header'
import { SignupForm } from '../../components/SignupForm'
import { Footer } from '../../components/Footer'

export const Signup = (): JSX.Element => {
    return (
        <Grid>
            <Header></Header>
            <SignupForm></SignupForm>
            {/* <Header authenticated={false}> </Header> */}
            {/* <h1>SIGN UP PAGE</h1> */}
            <Footer></Footer>
        </Grid>





    )
}


// email: "teste1@teste.pt"
// userName: "teste1"
// password: "teste123"
// birthDate: "21-03-1997"