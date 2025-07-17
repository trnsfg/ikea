import { LeftSide } from './LeftSide'
import './Login.css'
import { LoginForm } from './LoginForm'


export function LoginPage(){
    return(
        <div className='login-page'>
            <LeftSide/>
            <LoginForm/>
        </div>
    )
}