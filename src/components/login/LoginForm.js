import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';

const LoginForm = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
      const history = useHistory()
    useEffect(() => {
    },[username])

    const onSubmit = (e) => {
        e.preventDefault();
        if(username.length < 3 ) {
            alert('Please enter big username')
            return;
        }
        axios({
            method: 'POST',
            url: 'https://easy-login-api.herokuapp.com/users/login',
            data:{
                username: username,
                password: password
            }
        }).then((response) => {
            console.log(response.headers['x-access-token']);
            localStorage.setItem('token',response.headers['x-access-token'])
            history.push('/characters')
        })
     
    }

    return (
        <FormContainer>
            <StyledForm onSubmit={onSubmit}>
                <StyledInput value={username} onChange={(e) => setUsername(e.target.value)} name="username" type="text"></StyledInput>
                <StyledInput value={password} name="password" type="password" onChange={(e) => setPassword(e.target.value)}></StyledInput>
                <StyledInput type="submit"></StyledInput>
            </StyledForm>   
        </FormContainer>
    );
};

const FormContainer = styled.div`
    padding: 12px;
`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
`

const StyledInput = styled.input`
    height: 30px;
    margin-bottom: 12px;
    border-radius: 4px;
    outline: none;
`

export default LoginForm