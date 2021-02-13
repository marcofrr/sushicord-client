import React, { useState } from 'react'
import { Grid } from './styles'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'



export const Home = (): JSX.Element => {
    const [newUserForm, setNewUserForm] = useState(false)
    const toggleNewUser = (): void => {
        setNewUserForm(oldState => !oldState)
    }

    return (

        <Grid>
            <Header></Header>
            <Footer />
        </Grid>


    )
}