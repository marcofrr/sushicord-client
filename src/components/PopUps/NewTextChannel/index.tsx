import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { Background, Window, Container, FormContainer, Input, Button, CrossContainer, CrossIcon } from './styles'
import { MUTATION_CREATE_TEXT_CHANNEL } from '../../../graphql/mutations'
export interface Props {
    toggleTextPopUp: () => void;
}
export const NewTextChannel: React.FC<Props> = ({ toggleTextPopUp }): JSX.Element => {
    const token = localStorage.getItem("token");
    const serverId = localStorage.getItem('currentServerId');

    const [channelName, setChannelName] = useState('');
    const [handleChannel] = useMutation(MUTATION_CREATE_TEXT_CHANNEL)

    const clearInput = (): void => {
        let inputValue = (document.getElementById('channelInput') as HTMLInputElement).value = '';
        setChannelName('')
    }

    const onSubmit = (): void => {

        handleChannel({
            context: {
                headers: {
                    Authorization: token,
                }
            },
            variables: {
                serverId: serverId,
                channelName: channelName
            },
        })
        clearInput();
    }
    return (
            <Background>
                <Window>
                    <Container>
                        <strong>NEW TEXT CHANNEL</strong>
                        <p>You can create a text channel.</p>
                        <FormContainer>
                            <Input type='text' id='channelInput' placeholder='Enter the channel name' onChange={(e) => setChannelName(e.target.value)} />
                            <Button onClick={() => {toggleTextPopUp(); onSubmit()}}>Create</Button>
                        </FormContainer>
                        <CrossContainer>
                            <CrossIcon onClick={() => {toggleTextPopUp(); clearInput()}} />
                        </CrossContainer>
                    </Container>

                </Window>
            </Background>
    )
}