/**
* 
* logInPage.jsx
* @author - Lameen
* @date - 13/04/2023
**/
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css'
import { LOGIN_API } from '../../../utils/constants';
import TextField from '../../component/textField/textField';
import Button from '../../component/button/button';
import Alert from '../../component/alert/alert';

function LogInPage() {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [alertCode, setAlertCode] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const loginFormSubmit = () => {
        var emailLength = data.email.trim().length;
        var passwordLength = data.password.trim().length;
        if(emailLength === 0) {
            setEmailError("Email address is a required field.");
        }
        else {
            setEmailError("");
        }
        if(passwordLength === 0) {
            setPasswordError("Password is a required field.");
        }
        else {
            setPasswordError("");
        }
        if(emailLength !== 0 && passwordLength  !== 0 ) {
            fetch(LOGIN_API, {method : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then((response) => { 
            if (!response.ok) {
                throw Error(response.status)
            }
             return response.json();
        })
        .then ((parsedData) => {
            if(parsedData.code === 0) {
                navigate("/profilePage");
                console.log(parsedData);
            }
            else {
                setAlertCode(parsedData.code);
                setAlertMessage(parsedData.message);
                
            } 
        })
        .catch((err) => {
            console.log(err + " Oops something went wrong...!");
        }); 
        }
    }

    return ( 
        <div className='box'>
            <div className='logo'><i class="fa-solid fa-feather"></i></div>
            <h1 className='title'>Log In</h1> 
            <Alert message={alertMessage} code={alertCode} />
            <TextField placeholder='Email address' type='text'  handleChange={event => setData({...data, email: event.target.value})} error={emailError}/>
            <TextField placeholder='Password' type='password' handleChange={event => setData({...data, password: event.target.value})} error={passwordError}/>
            <Button label='Login' isPrimary={true} handleClick={() => loginFormSubmit()}   />
            <p className='label-account'>Don't have an account?</p>
            <Link className='create-link' to="/signUpPage">Create account</Link>
        </div>
    );
}

export default LogInPage;