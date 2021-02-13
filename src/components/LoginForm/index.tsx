import React, { useState } from 'react'
import { Footer } from '../../components/Footer';
import { SIGNUP, ME, ERROR } from '../../routes/pages';
import { useHistory } from 'react-router-dom';
import { useLogin } from '../../hooks/use-login';
import { Container, FormContainer, Input, Label, SubmitBtn, SubmitContainer } from './styles'
export const LoginForm = (): JSX.Element => {

    const history = useHistory()
    const [login, loading] = useLogin()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const goSignup = (): void => {
        history.push(SIGNUP)
    }
    const goMe = (): void => {
        history.push(ME)
    }

    const onSubmit = async (event: any) => {
        event.preventDefault()

        try {
            const isSucess = await login({ email, password })
            if (isSucess) history.push(ME)
        } catch (err) {
            if (err.graphQLErrors) {
                if (err.graphQLErrors[0].message.extensions.code == 'UNAUTHENTICATED') {
                    history.push({
                        pathname: ERROR,
                        state: {
                            errorNum: 401,
                            errorMessage: 'Authentication has failed'
                        }
                    })
                }
            } {

                history.push({
                    pathname: ERROR,
                    state: {
                        errorNum: 503,
                        errorMessage: 'There was a problem conecting to the server'
                    }
                })
            }


        }
    }
    //

    return (
        <>
            {loading && <div>Loading...</div>}
            <Container>
                <strong>Login</strong>


                <FormContainer>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="field">
                            <Label>Email</Label>
                            <Input type="text" id="email" onChange={(e) => setEmail(e.target.value)}></Input>
                        </div>

                        <div className="field">
                            <Label>Password</Label>
                            <Input type="password" onChange={(e) => setPassword(e.target.value)} ></Input>
                        </div>


                        <SubmitContainer>
                            <SubmitBtn onClick={(e) => onSubmit(e)}>Continue</SubmitBtn>

                        </SubmitContainer>




                    </form>
                </FormContainer>
            </Container>

        </>
    )
}