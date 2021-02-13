import React, { ReactNode, useState } from 'react';
import { Container, FormContainer, Label, Input, Button, DropContainer, SubmitContainer, SubmitBtn } from './styles';
import { useHistory } from 'react-router-dom';
import { LOGIN } from '../../routes/pages'
import "react-datepicker/dist/react-datepicker.css";
import 'react-day-picker/lib/style.css';
import { useSignup } from '../../hooks/use-signup';
import { ME } from '../../routes/pages'
import { HOME } from '../../routes/pages'

import DatePicker from "react-datepicker";
import Dropzone from 'react-dropzone';
import { useDropzone, FileWithPath } from "react-dropzone";

export const SignupForm = (): JSX.Element => {
    const history = useHistory()

    const [signup, loading] = useSignup()

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const goLogin = (): void => {
        history.push(LOGIN)
    }


    const fileList = (files: FileWithPath[]): ReactNode => (
        files.map(file => (
            <li key={file.path}>
                {file.path} - {file.size} bytes
            </li>

        ))
    );
    const handleDate = (date: any): void => {

        var datestring = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
        setBirthDate(datestring);
        setStartDate(date)
        // console.log(birthDate)



    }

    const getDateString = (date: any): string => {
        var datestring = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
        return datestring
    }

    const onSubmit = async (event: any) => {
        event.preventDefault()

        try {
            const isSucess = await signup({ email, userName, password, birthDate })
            if (isSucess) history.push(HOME)
        } catch (err) {
            // setErrors(err.graphQLErrors)
        }
    }
    // const allFieldsFilled = !email || !userName || !password || !birthDate
    // const handleDate = (date): void {
    //     if (date) setStartDate(date)
    // }

    const onDrop = (files: any) => {
        // POST to a test endpoint for demo purposes
        // console.log(files)

    }


    return (

        <Container >
            {loading && <div>Loading...</div>}
            <strong>Create an account</strong>


            <FormContainer>
                <form onSubmit={e => e.preventDefault()}>
                    <div className="field">
                        <Label>Email</Label>
                        <Input type="text" id="email" onChange={(e) => setEmail(e.target.value)} autoComplete="off"></Input>
                    </div>
                    <div className="field">
                        <Label>Username</Label>
                        <Input type="text" onChange={(e) => setUserName(e.target.value)} ></Input>
                    </div>
                    <div className="field">
                        <Label>Password</Label>
                        <Input type="password" onChange={(e) => setPassword(e.target.value)} ></Input>
                    </div>

                    <div className="field">
                        <Label>Birth date</Label>

                        <DatePicker selected={startDate}
                            onChange={date => date && handleDate(date)}
                            customInput={<Button>{getDateString(startDate)}</Button>}
                        />
                    </div>

                    <div className="field">
                        <Label>Profile image </Label>
                        <DropContainer

                            {...getRootProps({ className: "dropzone" })}
                        >
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </DropContainer>



                    </div>
                    <SubmitContainer>
                        <SubmitBtn onClick={(e) => onSubmit(e)}>Continue</SubmitBtn>

                    </SubmitContainer>




                </form>
            </FormContainer>
        </Container>
    )

}