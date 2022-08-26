import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function ROLogin() {

    const navigate = useNavigate()

    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "ropune",
            password: "1234",
            
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        let officeName = document.getElementById('ROname').value
        let password =  document.getElementById('ROpassword').value

        console.log(
            officeName,
            password
        )

        var config = {
            method: 'post',
            url: 'http://localhost:8001/ROAuth/login',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
                officeName,
                password
            }
          };
      
          axios(config)
            .then(function (response) {
                console.log(response)
                if( response.status === 200 ){
                    alert(response.data)
                    setIsSubmitted(true)
                }

            })
            .catch(function (error) {
              alert(error.response.data)
            
            });

    };

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Regional Office Name </label>
                    <input type="text" name="ROname" id='ROname' required />
                </div>
                <div className="input-container">
                    <label>Regional Office Password </label>
                    <input type="password" name="ROpassword" id='ROpassword' required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );


    return (
        
            <div className="app">
                <div className="login-form">
                    <div className="title">Regional Office Log In</div>
                    {isSubmitted ? navigate('/RODashboard') : renderForm}
                </div>
            </div>
        
    )
}