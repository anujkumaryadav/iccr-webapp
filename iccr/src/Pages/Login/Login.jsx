import React from 'react'
import { useState } from 'react';
import axios from 'axios'

export default function Login() {

    // React States
    // const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "iccr",
            password: "1234"
        },
        {
            username: "ro",
            password: "1234"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        let uname = document.getElementById('username').value
        let password = document.getElementById('password').value

        var config = {
            method: 'post',
            url: 'http://localhost:8001/auth/login',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
                username : uname,
                password : password
            }
          };
      
          axios(config)
            .then(function (response) {
                console.log(response)
                if( response.status === 200 ){
                    alert(response.data)
                }

            })
            .catch(function (error) {
              alert(error.response.data)
            //   renderErrorMessage("uname")
            });

    };

    // // Generate JSX code for error message
    // const renderErrorMessage = (name) =>
    //     name === errorMessages.name && (
    //         <div className="error">{errorMessages.message}</div>
    //     );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" id='username' required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" id='password' required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );


    return (
        <>
            <div className="app">
                <div className="login-form">
                    <div className="title">Indian Council for Cultural Relations</div>
                    {isSubmitted ? <div>You Logged In Succesfully </div> : renderForm}
                </div>
            </div>
        </>
    )
}
