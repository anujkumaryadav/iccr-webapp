import React from 'react'
import { useState } from 'react';
import axios from 'axios'
// import { Dropdown } from "react-bootstrap/Dropdown";

export default function StudentLogin() {

    // React States
    // const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "student1",
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

        let Stuuname = document.getElementById('username').value
        let Stupassword = document.getElementById('password').value

        var config = {
            method: 'post',
            url: 'http://localhost:8001/auth/login',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
                username : Stuuname,
                password : Stupassword
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
                    <input type="text" name="Stuuname" id='username' required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="Stupass" id='password' required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id='dropdownMenuButton' data-toggle="dropdown" aria-haspop="true" aria-expanded="false"  >
                        Country
                     </button>

        
                    </div>
                   {/*<label>Country</label>
                    <input type="country" name="cont" id='country' required />
                     {renderErrorMessage("pass")} */}
                
                <div className="input-container">
                    <label>Email id</label>
                    <input type="email id" name="email" id='email-id' required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="input-container">
                    <label>Hostel Accomodity</label>
                    <input type="text" name="host" id='hostel ' required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="input-container">
                    <label>Gender</label>
                    <input type="gender" name="gender" id='gender' required />
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
                    <div className="title">STUDENT SIGN UP PAGE</div>
                    {isSubmitted ? <div>You Logged In Succesfully </div> : renderForm}
                </div>
            </div>
        </>
    )
}
