import React, { useState } from 'react';
import './Style.css'
import ImageCard from '../ImageCard/ImageCard';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [verifyEmail, setVerifyEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform validation on the input fields
        const errors = {};
        if (!username) {
            errors.username = 'Please enter a username';
        }
        if (!email) {
            errors.email = 'Please enter an email';
        } else if (!isValidEmail(email)) {
            errors.email = 'Please enter a valid email';
        } else if (email !== verifyEmail) {
            errors.verifyEmail = 'Emails do not match';
        }
        if (!password) {
            errors.password = 'Please enter a password';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        } else if (password !== verifyPassword) {
            errors.verifyPassword = 'Passwords do not match';
        }
        if (!mobile) {
            errors.mobile = 'Please enter a mobile number';
        } else if (!isValidMobile(mobile)) {
            errors.mobile = 'Please enter a valid mobile number';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        // If all fields are valid, submit the form
        console.log('Submitting registration form:', {
            username,
            email,
            password,
            mobile,
        });
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    };

    const isValidMobile = (mobile) => {
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{display:"flex"}}>
                <h1>Image Cards</h1>
                <ImageCard
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CtaDk3U49ukzwQTk5h6n1mwtWT9HULw-piOF2eF4&s"
                    title="Image 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <ImageCard
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CtaDk3U49ukzwQTk5h6n1mwtWT9HULw-piOF2eF4&s"
                    title="Image 2"
                    description="Nulla eu lacus efficitur, tincidunt dolor non, cursus metus."
                />
            </div>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <div className="error">{errors.username}</div>}
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="error">{errors.email}</div>}
            </label>
            <label>
                Verify Email:
                <input
                    type="email"
                    value={verifyEmail}
                    onChange={(e) => setVerifyEmail(e.target.value)}
                />
                {errors.verifyEmail && <div className="error">{errors.verifyEmail}</div>}
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div className="error">{errors.password}</div>}
            </label>
            <label>
                Verify Password:
                <input
                    type="password"
                    value={verifyPassword}
                    onChange={(e) => setVerifyPassword(e.target.value)}
                />
                {errors.verifyPassword && <div className="error">{errors.verifyPassword}</div>}
            </label>
            <label>
                Mobile Number:
                <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                {errors.mobile && <div className="error">{errors.mobile}</div>}
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationPage;
