import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import { Dropdown } from "react-bootstrap/Dropdown";

export default function StudentLogin() {


    const navigate = useNavigate()

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

        let fullName = document.getElementById('studentName').value
        let email =  document.getElementById('emailId').value
        let countryOfOrigin =  "USA"
        let gender =  document.getElementById('gender').value
        let hospitalAccomodity =  document.getElementById('hostel').value
        let certificate =  document.getElementById('certificate').value

        console.log(
            fullName ,
            email ,
            countryOfOrigin,
            gender ,
            hospitalAccomodity,
        )

        var config = {
            method: 'post',
            url: 'http://localhost:8001/studentAuth/register',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
                fullName,
                email,
                countryOfOrigin,
                gender,
                hospitalAccomodity 
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
                    <label>Full Name </label>
                    <input type="text" name="Stuuname" id='studentName' required />
                    {/* {renderErrorMessage("uname")} */}
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
                    <input type="email id" name="email" id='emailId' required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="input-container">
                    <label>Hostel Accomodity</label>
                    <input type="text" name="host" id='hostel' required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="input-container">
                    <label>Gender</label>
                    <input type="gender" name="gender" id='gender' required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="input-container">
                    <label>Certificate</label>
                    <input type="file" name="certificate" id='certificate' required />
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
                    {isSubmitted ? navigate('/studentdashboard') : renderForm}
                </div>
            </div>
        </>
    )
}
