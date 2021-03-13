import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { MUTATION_CREATE_FRIEND_REQUEST } from '../../graphql/mutations'
import { ERROR } from '../../routes/pages';

import { Container, FormContainer, Input, Button } from './styles'
import { useHistory } from 'react-router'
export const AddFriendForm: React.FC = (): JSX.Element => {
    const token = sessionStorage.getItem('token');
    const history = useHistory()
    const [user, setUser] = useState('');
    const [handleRequest] = useMutation(MUTATION_CREATE_FRIEND_REQUEST,{
        onCompleted() {
            clearInput()
        },onError(){
            history.push({
                pathname: ERROR,
                state: {
                    errorNum: 401,
                    errorMessage: 'Something went wrong'
                }
            })
        }
    })

    const submitBtn = document.querySelector('.submitBtn');


    useEffect(() => {
        if(user.length > 0){
            submitBtn?.classList.remove('btnDisabled')
            submitBtn?.classList.add('btnEnabled')
            
        }else{
            submitBtn?.classList.remove('btnEnabled')

            submitBtn?.classList.add('btnDisabled')            
        }

    }, [user])
    const handleChange = (e: any) : void => {
        setUser(e.target.value)

    }
    
    const handleClick = () : void => {
        handleRequest({
            context: {
                headers: {
                    Authorization: token,
                }
            },
            variables: {
                receiverId: user
            },

        })
    }
    const clearInput = (): void => {
        let inputValue = (document.getElementById('formInput') as HTMLInputElement).value = '';
        setUser('')
    }
    return (
            <Container>
                <strong>ADD FRIEND</strong>
                <p>You can add a friend with their Discord ID.</p>
                <FormContainer>
                <Input type='text' placeholder='Enter a ID' id='formInput' onChange= {(e) => setUser(e.target.value)} />
                <Button className="submitBtn btnDisabled" onClick={() => handleClick()}>Send Friend Request</Button>
            </FormContainer>
            </Container>
    )
}