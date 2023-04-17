/**
* 
* signUpPage.jsx
* @author - Lameen
* @date - 13/04/2023
**/
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import './style.css'
import { CREATE_ACCOUNT_API } from '../../../utils/constants';
import TextField from '../../component/textField/textField';
import Button from '../../component/button/button';
import Alert from '../../component/alert/alert';

function SignUpPage() {
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [alertCode, setAlertCode] = useState();
    const [alertMessage, setAlertMessage] = useState("");
    const [data, setData] = useState({
        name: '',
        email:  '',
        password: '',
        confirmPassword: '' 
    });

    const registerFormSubmit = () => {
        var nameLength = data.name.trim().length;
        var emailLength = data.email.trim().length;
        var passwordLength = data.password.trim().length;
        var confirmPasswordLength = data.confirmPassword.trim().length;
        var name = data.name;
        var email = data.email;
        var password = data.password;
        var confirmPassword = data.confirmPassword;
        if(nameLength === 0 ) {
            setNameError("Name is a required field.");
        }
        else if(!name.match(/^[a-zA-Z ]*$/)) {
            setNameError("Enter valid name");
        }
        else {
            setNameError("");
        }
        if(emailLength === 0) {
            setEmailError("Email address is a required field.");
        }
        else if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g)) {
            setEmailError("Enter valid email address.");
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
        if(confirmPasswordLength === 0) {
            setConfirmPasswordError("Confirm password is a required field.");
        }
        else if(password !== confirmPassword) {
            setConfirmPasswordError("Password does not match");
        }
        else {
            setConfirmPasswordError("");
        }
        if(nameLength !== 0 && emailLength !== 0 &&  passwordLength !== 0 && confirmPasswordLength !== 0 && emailError === "" &&  confirmPasswordError === "") {
            fetch(CREATE_ACCOUNT_API, {method : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)})
            .then((response) => { 
                if (!response.ok) {
                    throw Error(response.status)
                }
                 return response.json();
            })
            .then ((parsedData) => {
                if(parsedData.code === 0) {
                    setAlertCode(parsedData.code);
                    setAlertMessage(parsedData.message);
                }
                else {
                    setAlertCode(parsedData.code);
                    setAlertMessage(parsedData.message);
                } 
            })
            .catch((err) => {
                console.log(err + " Oops something went wrong...!");
            }) 
        }
    }

    return ( 
            <div className='signup-box'>
                <div className='logo'><i class="fa-solid fa-feather"></i></div>
                <h1 className='signup-title'>Create account</h1>
                <Alert message={alertMessage} code={alertCode} />
                <TextField placeholder='Name' type='text' handleChange={event => setData({...data, name: event.target.value})} error={nameError}/>
                <TextField placeholder='Email' type='text'  handleChange={event => setData({...data, email: event.target.value})} error={emailError}/>
                <TextField placeholder='Password' type='password'  handleChange={event => setData({...data, password: event.target.value})} error={passwordError}/>
                <TextField placeholder='Confirm Password' type='password' 
                handleChange={event => setData({...data, confirmPassword: event.target.value})} error={confirmPasswordError} />
                <Button label='Create account' isPrimary={true} handleClick={() => registerFormSubmit()} />
                <p className='label-account'>Already have an account?</p>
                <Link className='create-link' to="/">Sign in</Link>
            </div>
    );
}

export default SignUpPage;