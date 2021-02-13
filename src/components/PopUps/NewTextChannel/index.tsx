import React from 'react'
import { Background, Window, Container, FormContainer, Input, Button } from './styles'

export interface Props {
    toggleTextPopUp: () => void;
}
export const NewTextChannel: React.FC<Props> = ({ toggleTextPopUp }): JSX.Element => {
    return (

        <>
            <Background>
                <Window>
                    <Container>
                        <strong>NEW TEXT CHANNEL</strong>
                        <p>You can create a text channel.</p>
                        <FormContainer>
                            <Input type='text' placeholder='Enter the channel name' />
                            <Button onClick={() => toggleTextPopUp()}>Create</Button>
                        </FormContainer>
                    </Container>

                </Window>
            </Background>



        </>
    )
}