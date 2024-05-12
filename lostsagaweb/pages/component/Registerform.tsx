import React from 'react'
import style from '../../styles/RegisterForm.module.css'
import { useState } from 'react'

function RegisterForm() {
    const [data, setData] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    })

    const handleChange = (e:any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e:any) => {
        e.preventDefault();

        // Check name and username
        if (data.name.includes('[GM]') || data.username.includes('[GM]')) {
            alert('Name and username cannot contain [GM]');
            return;
        }

        // Check password
        if (data.password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Check confirmPassword
        if (data.password !== data.confirmPassword) {
            alert('Confirm password does not match');
            return;
        }

        // Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Invalid email format');
                return;
            }

            try {
                const response = await fetch('/api/chackemail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: data.email })
                });
                console.log(response);
                
                if (response.ok) {
                    alert('Email is available');
                } else {
                    alert('Email นี้เคยถูกสมัครไปแล้ว');
                }
            } catch (error) {
                console.error('Error checking email:', error);
                alert('An error occurred while checking email');
            }
        
    }


    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Aldrich' rel='stylesheet'></link>
            <div className={style.main}>
                <div className={style.boxfrom}>
                    <h1 className={style.title}>Register</h1>
                    <form className={style.formmain}>
                        <div className={style.form}>
                            <label htmlFor="name">In Game Name :</label>
                            <input onChange={handleChange} type="text" id="name" name="name" required />
                        </div>
                        <div className={style.form}>
                            <label htmlFor="name">Username :</label>
                            <input onChange={handleChange} type="text" id="username" name="username" required />
                        </div>

                        <div className={style.form}>
                            <label htmlFor="password">Password :</label>
                            <input onChange={handleChange} type="password" id="password" name="password" required />
                        </div>
                        <div className={style.form}>
                            <label htmlFor="confirmPassword">Confirm Password :</label>
                            <input onChange={handleChange} type="password" id="confirmPassword" name="confirmPassword" required />
                        </div>
                        <div className={style.form}>
                            <label htmlFor="email">Email :</label>
                            <input onChange={handleChange} type="email" id="email" name="email" required />
                        </div>
                        <button onClick={handleSubmit} type="submit">REGISTER</button>
                    </form>
                </div>
                <pre>{JSON.stringify(data,null,2)}</pre>
            </div>
        </>
    )
}

export default RegisterForm