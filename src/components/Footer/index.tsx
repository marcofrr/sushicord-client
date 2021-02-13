import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import { Container } from './styles'

export const Footer = (): JSX.Element => {
    return (
        <Container>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Your Website
            </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Container>


    )
}