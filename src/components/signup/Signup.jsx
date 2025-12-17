import React from 'react'
import { useState } from 'react';
import './signup.css'

function Signup() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const handleOnEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!value.includes('@') || !value.includes('.')) {
            setEmailError("Please enter a valid email.");
        } else {
            setEmailError('');
        }
    }

    const handleSubmit = () => {
        if (email === '' || emailError !== '') {
            setEmailError("Please enter a valid email.");
            return;
        }
        window.location.href = "https://tradefox.live/";
    }
    return (
        <div className='signup'>
            <div className='signup_head'>Sign up for exclusive access.</div>
            <div className="email_section">
                <input value={email} onChange={handleOnEmailChange} className='email_input' type="email" placeholder='Your email address' />
                {emailError && <div className='error_msg'>{emailError}</div>}
            </div>
            <button onClick={handleSubmit} className='getStarted_btn'>Get Started</button>
            <div className='email_text'>You'll receive an email with an invite link to join.</div>
        </div>
    )
}

export default Signup