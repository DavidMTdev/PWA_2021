import styled  from 'styled-components'

// import Logo from '../components/login/Logo'
import LoginForm from '../components/login/LoginForm'

const Login = () => {
    return(
        <div>
            <LogoMarvel src="./Marvel-Comics-Logo.png" alt="Marvel-Comics-Logo.png" />
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

const LogoMarvel = styled.img`
    width: 200px;
    height: auto;
`

export default Login