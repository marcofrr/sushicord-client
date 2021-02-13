import React, { useEffect, useState } from 'react'
import { Container, FormContainer, Input, Button } from './styles'
export const AddFriendForm: React.FC = (): JSX.Element => {
    
    const [user, setUser] = useState('');
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

    return (
            <Container>
                <strong>ADD FRIEND</strong>
                <p>You can add a friend with their Discord ID.</p>
                <FormContainer>
                <Input type='text' placeholder='Enter a ID' onChange= {(e) => setUser(e.target.value)} />
                <Button className="submitBtn btnDisabled">Send Friend Request</Button>
            </FormContainer>
            </Container>
    )
}