/**
* 
* profilePage.jsx
* @author - Lameen
* @date - 13/04/2023
**/
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './style.css'
import { SAVE_MY_PROFILE_API } from '../../../utils/constants';
import TextField from '../../component/textField/textField';
import Button from '../../component/button/button';
import Textarea from '../../component/textarea/textarea';
import Select from '../../component/selectField/selectField';
import Alert from '../../component/alert/alert';
import Calendar from '../../component/calendar/calendar';

function ProfilePage() {
     const navigate = useNavigate();
     const goToLoginPage = () => {
        navigate("/");
    }

   const [emailError, setEmailError] = useState("");
   const [nameError, setNameError] = useState("");
   const [mobileNoError, setMobileNoError] = useState("");
   const [dateOfBirthError, setDateOfBirthError] = useState("");
   const [aboutUsError, setAboutUsError] = useState("");
   const [genderError, setGenderError] = useState("");
   const [ageError, setAgeError] = useState("");
   const [alertCode, setAlertCode] = useState();
   const [alertMessage, setAlertMessage] = useState("");
   const [data, setData] = useState({
    name: '',
    email:  '',
    mobileNo: '',
    dateOfBirth: '',
    gender: '',
    age: '',
    about: ''
});

const myProfileFormSubmit = () => {
    var nameLength = data.name.trim().length;
    var emailLength = data.email.trim().length;
    var name = data.name;
    var email = data.email;
    var mobileNoLength = data.mobileNo.trim().length;
    var dateOfBirth = data.dateOfBirth;
    var genderLength = data.gender.trim().length;
    var ageLength = data.age.trim().length;
    var aboutUsLength = data.about.trim().length;
    
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
    if(mobileNoLength === 0) {
        setMobileNoError("Mobile number is a required field.");
    }
    else {
        setMobileNoError("");
    }
    if(dateOfBirth === "") {
        setDateOfBirthError("Date of birth is a required field.");
    }
    else {
        setDateOfBirthError("");
    }
    if(genderLength === 0) {
        setGenderError("Gender is a required field.");
    }
    else {
        setGenderError("");
    }
    if(ageLength === 0) {
        setAgeError("Age is a required field.");
    }
    else {
        setAgeError("");
    }
    if(aboutUsLength === 0) {
        setAboutUsError("About us is a required field.");
    }
    else {
        setAboutUsError("");
    }
    if(nameLength !== 0 && emailLength !== 0 && mobileNoLength !== 0 && dateOfBirth !== null && aboutUsLength !== 0 && 
    genderLength !== 0 && ageLength !== 0  && emailError === "" && nameError === "") {
        fetch(SAVE_MY_PROFILE_API, {method : "POST",
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
            setAlertCode(parsedData.code);
            setAlertMessage(parsedData.message);
        }
        else {
            setAlertCode(parsedData.code);
            setAlertMessage(parsedData.message);
        } 
    })
    .catch((err) => {
        console.log(err + " Oops something went wrong..!");
    })
    }
}

   return ( 
        <div className='profile-box'>
            <div className='logo'><i class="fa-solid fa-user"></i></div>
            <h1 className='title'>My Profile</h1>
            <Alert message={alertMessage} code={alertCode} />
            <div className='row'>
                <div className='cell-1 mr-15'>
                    <TextField placeholder='Name' type='text'  handleChange={event => setData({...data, name: event.target.value})} error={nameError}/>
                </div>
                <div className='cell-1'>
                    <TextField placeholder='Email' type='text'  handleChange={event => setData({...data, email: event.target.value})} error={emailError}/>
                </div>
            </div>
            <div className='row'>
                <div className='cell-1 mr-15'>
                    <TextField placeholder='Mobile no' type='text'  handleChange={event => setData({...data, mobileNo: event.target.value})} error={mobileNoError}/>
                </div>
                <div className='cell-1'>
                    <Calendar placeholder="Please select your D.O.B" handleChange={date => setData({...data, dateOfBirth: date.toLocaleDateString()})} value={data.dateOfBirth} error={dateOfBirthError}/>
                </div>
            </div>
            <div className='row'>
                <div className='cell-1 mr-15'>
                    <Select handleChange={event => setData({...data, gender: event.target.value})} options={['Male', 'Female']} defaultValue='Select gender' error={genderError}/>
                </div>
                <div className='cell-1'>
                    <Select handleChange={event => setData({...data, age: event.target.value})} 
                    options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
                        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 
                        40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 67,
                        68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
                        95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
                        118, 119, 120]} 
                    defaultValue='Select age' error={ageError}/>
                </div>
            </div>
            <div className='cell-1'>
                <Textarea rows={5} placeholder='About us' handleChange={event => setData({...data, about: event.target.value})} error={aboutUsError} />
            </div>
            <div className='row'>
                <div className='cell-1 button-container'>
                    <Button label='Save' isPrimary={true} handleClick={() => myProfileFormSubmit()}/>
                </div>
                <div className='cell-1'>
                    <Button label='Log Out' handleClick={() => goToLoginPage()}/>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;